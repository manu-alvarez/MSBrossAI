// Unified AI Provider — Key rotation, retry with backoff, multi-provider fallback
// Fallback chain: Gemini (key rotation) → OpenRouter → Groq

// ─── Types ───

interface AIProviderConfig {
    name: string
    baseUrl: string
    keys: string[]
    model: string
    buildRequest: (prompt: string, model: string) => { url: string; body: string; headers: Record<string, string> }
    parseResponse: (data: unknown) => string
}

interface SendOptions {
    maxRetries?: number
    initialDelayMs?: number
}

// ─── Env vars ───

function getGeminiKeys(): string[] {
    const keys: string[] = []
    // Support VITE_GEMINI_API_KEY and VITE_GEMINI_API_KEY_1, _2, _3, etc.
    const mainKey = import.meta.env.VITE_GEMINI_API_KEY
    if (mainKey) keys.push(mainKey)

    for (let i = 1; i <= 10; i++) {
        const key = import.meta.env[`VITE_GEMINI_API_KEY_${i}`]
        if (key && !keys.includes(key)) keys.push(key)
    }
    return keys
}

function getOpenRouterKey(): string {
    return import.meta.env.VITE_OPENROUTER_API_KEY || ''
}

function getGroqKey(): string {
    return import.meta.env.VITE_GROQ_API_KEY || ''
}

// ─── Provider configs ───

const GEMINI_CONFIG: AIProviderConfig = {
    name: 'Gemini',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
    keys: [], // populated dynamically
    model: 'gemini-2.0-flash',
    buildRequest: (prompt: string, model: string) => {
        // Key is appended in the send function
        return {
            url: `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
            headers: { 'Content-Type': 'application/json' },
        }
    },
    parseResponse: (data: unknown) => {
        const d = data as { candidates?: { content: { parts: { text: string }[] } }[]; error?: { message: string } }
        if (d.error) throw new Error(d.error.message)
        return d.candidates?.[0]?.content?.parts?.[0]?.text || ''
    },
}

const OPENROUTER_CONFIG: AIProviderConfig = {
    name: 'OpenRouter',
    baseUrl: 'https://openrouter.ai/api/v1/chat/completions',
    keys: [],
    model: 'meta-llama/llama-3.3-70b-instruct:free', // Free tier, reliable
    buildRequest: (prompt: string, model: string) => ({
        url: 'https://openrouter.ai/api/v1/chat/completions',
        body: JSON.stringify({
            model,
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 4096,
        }),
        headers: { 'Content-Type': 'application/json' },
    }),
    parseResponse: (data: unknown) => {
        const d = data as { choices?: { message: { content: string } }[]; error?: { message: string } }
        if (d.error) throw new Error(d.error.message)
        return d.choices?.[0]?.message?.content || ''
    },
}

const GROQ_CONFIG: AIProviderConfig = {
    name: 'Groq',
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
    keys: [],
    model: 'llama-3.3-70b-versatile',
    buildRequest: (prompt: string, model: string) => ({
        url: 'https://api.groq.com/openai/v1/chat/completions',
        body: JSON.stringify({
            model,
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 4096,
            temperature: 0.7,
        }),
        headers: { 'Content-Type': 'application/json' },
    }),
    parseResponse: (data: unknown) => {
        const d = data as { choices?: { message: { content: string } }[]; error?: { message: string } }
        if (d.error) throw new Error(d.error.message)
        return d.choices?.[0]?.message?.content || ''
    },
}

// ─── Key rotation state ───

let geminiKeyIndex = 0

// ─── Core: send with retry + backoff ───

async function sendWithRetry(
    provider: AIProviderConfig,
    key: string,
    prompt: string,
    opts: SendOptions = {},
): Promise<string> {
    const { maxRetries = 2, initialDelayMs = 1000 } = opts
    let lastError: Error | null = null

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const { url, body, headers } = provider.buildRequest(prompt, provider.model)

            // Append key based on provider type
            let finalUrl = url
            const finalHeaders = { ...headers }

            if (provider.name === 'Gemini') {
                finalUrl = `${url}?key=${key}`
            } else {
                finalHeaders['Authorization'] = `Bearer ${key}`
            }

            const response = await fetch(finalUrl, {
                method: 'POST',
                headers: finalHeaders,
                body,
            })

            if (response.status === 429) {
                // Rate limited — don't retry, rotate key instead
                throw new RateLimitError(`${provider.name} rate limited (429)`)
            }

            if (!response.ok) {
                throw new Error(`${provider.name} API error: ${response.status}`)
            }

            const data = await response.json()
            const result = provider.parseResponse(data)

            if (!result) {
                throw new Error(`${provider.name} returned empty response`)
            }

            console.log(`✅ ${provider.name} responded successfully`)
            return result
        } catch (error) {
            lastError = error as Error

            if (error instanceof RateLimitError) {
                throw error // Don't retry rate limits, rotate instead
            }

            if (attempt < maxRetries) {
                const delay = initialDelayMs * Math.pow(2, attempt)
                console.warn(`⚠️ ${provider.name} attempt ${attempt + 1} failed, retrying in ${delay}ms...`)
                await sleep(delay)
            }
        }
    }

    throw lastError || new Error(`${provider.name} failed after retries`)
}

// ─── Main export: send to AI with full fallback chain ───

export async function sendToAI(prompt: string): Promise<string> {
    const geminiKeys = getGeminiKeys()
    const openRouterKey = getOpenRouterKey()
    const groqKey = getGroqKey()

    const errors: string[] = []

    // ─── Phase 1: Try all Gemini keys ───
    if (geminiKeys.length > 0) {
        for (let i = 0; i < geminiKeys.length; i++) {
            const keyIdx = (geminiKeyIndex + i) % geminiKeys.length
            const key = geminiKeys[keyIdx]

            try {
                const result = await sendWithRetry(GEMINI_CONFIG, key, prompt)
                geminiKeyIndex = (keyIdx + 1) % geminiKeys.length // Rotate for next call
                return result
            } catch (error) {
                const msg = (error as Error).message
                errors.push(`Gemini key ${keyIdx + 1}: ${msg}`)
                console.warn(`🔄 Gemini key ${keyIdx + 1}/${geminiKeys.length} failed: ${msg}`)
            }
        }
        console.warn('⚠️ All Gemini keys exhausted, trying fallbacks...')
    }

    // ─── Phase 2: Try OpenRouter ───
    if (openRouterKey) {
        try {
            console.log('🔄 Falling back to OpenRouter...')
            const result = await sendWithRetry(OPENROUTER_CONFIG, openRouterKey, prompt)
            return result
        } catch (error) {
            errors.push(`OpenRouter: ${(error as Error).message}`)
            console.warn(`⚠️ OpenRouter failed: ${(error as Error).message}`)
        }
    }

    // ─── Phase 3: Try Groq ───
    if (groqKey) {
        try {
            console.log('🔄 Falling back to Groq...')
            const result = await sendWithRetry(GROQ_CONFIG, groqKey, prompt)
            return result
        } catch (error) {
            errors.push(`Groq: ${(error as Error).message}`)
            console.warn(`⚠️ Groq failed: ${(error as Error).message}`)
        }
    }

    // All providers failed
    throw new Error(`All AI providers failed:\n${errors.join('\n')}`)
}

// ─── Utility classes ───

class RateLimitError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'RateLimitError'
    }
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}
