/** API client for communicating with the FastAPI backend or simulating in Demo Mode. */

import { API_URL } from "./utils";
import type { ChatMessage, StreamChunk, Source, ModelInfo, Agent, User } from "../types/chat";

/** Stored auth token. */
let token: string | null = null;

export function setToken(t: string) {
  token = t;
  if (typeof window !== "undefined") localStorage.setItem("token", t);
}

export function getToken(): string | null {
  if (token) return token;
  if (typeof window !== "undefined") return localStorage.getItem("token");
  return null;
}

export function clearToken() {
  token = null;
  if (typeof window !== "undefined") localStorage.removeItem("token");
}

/** Check if running in offline demo mode. */
export function isDemoMode(): boolean {
  if (typeof window === "undefined") return true;
  // If host is msbross.me, or no API_URL is specified (or is default dev port and we are in prod)
  return (
    window.location.hostname === "msbross.me" ||
    window.location.hostname.endsWith(".me") ||
    !process.env.NEXT_PUBLIC_API_URL ||
    localStorage.getItem("demo_mode") === "true"
  );
}

// ── Local Storage Helper for Mock DB ─────────────────────────
const MOCK_CONVS_KEY = "jartosdto_mock_conversations";
const MOCK_MSGS_KEY = "jartosdto_mock_messages";

function getMockConversations(): any[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(MOCK_CONVS_KEY);
  if (!stored) {
    const defaultConvs = [
      {
        id: "conv-1",
        title: "Bienvenido a JartosDTo Demo",
        model_id: "gpt-4o",
        created_at: new Date().toISOString(),
        message_count: 2,
      },
    ];
    localStorage.setItem(MOCK_CONVS_KEY, JSON.stringify(defaultConvs));
    
    const defaultMsgs: Record<string, ChatMessage[]> = {
      "conv-1": [
        {
          id: "m-1",
          role: "user",
          content: "Hola! ¿Qué es JartosDTo?",
          created_at: new Date().toISOString(),
        },
        {
          id: "m-2",
          role: "assistant",
          content: "¡Hola! JartosDTo es la plataforma de chat de IA más avanzada del ecosistema MSBross. En este modo demo, puedes interactuar de forma 100% interactiva sin coste ni necesidad de configurar backends externos.",
          created_at: new Date().toISOString(),
        },
      ],
    };
    localStorage.setItem(MOCK_MSGS_KEY, JSON.stringify(defaultMsgs));
    return defaultConvs;
  }
  return JSON.parse(stored);
}

function saveMockConversations(convs: any[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(MOCK_CONVS_KEY, JSON.stringify(convs));
  }
}

function getMockMessages(convId: string): ChatMessage[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(MOCK_MSGS_KEY);
  if (!stored) return [];
  const map = JSON.parse(stored);
  return map[convId] || [];
}

function saveMockMessages(convId: string, msgs: ChatMessage[]) {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(MOCK_MSGS_KEY) || "{}";
    const map = JSON.parse(stored);
    map[convId] = msgs;
    localStorage.setItem(MOCK_MSGS_KEY, JSON.stringify(map));
  }
}

/** Authenticated fetch wrapper. */
async function apiFetch(path: string, opts: RequestInit = {}): Promise<Response> {
  const t = getToken();
  const headers: Record<string, string> = {
    ...(opts.headers as Record<string, string>),
  };
  if (t) headers["Authorization"] = `Bearer ${t}`;
  if (!(opts.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  return fetch(`${API_URL}/api/v1${path}`, { ...opts, headers });
}

// ── Auth ──────────────────────────────────────────────────

export async function login(email: string, password: string) {
  if (isDemoMode()) {
    setToken("mock-jwt-token-jartosdto");
    return {
      access_token: "mock-jwt-token-jartosdto",
      token_type: "bearer",
      user: { id: "demo-user", email, display_name: email.split("@")[0], role: "admin" },
    };
  }
  const res = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Invalid credentials");
  const data = await res.json();
  setToken(data.access_token);
  return data;
}

export async function register(email: string, password: string, displayName?: string) {
  if (isDemoMode()) {
    setToken("mock-jwt-token-jartosdto");
    return {
      access_token: "mock-jwt-token-jartosdto",
      token_type: "bearer",
      user: { id: "demo-user", email, display_name: displayName || email.split("@")[0], role: "admin" },
    };
  }
  const res = await apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, display_name: displayName }),
  });
  if (!res.ok) throw new Error("Registration failed");
  const data = await res.json();
  setToken(data.access_token);
  return data;
}

export async function getMe() {
  if (isDemoMode()) {
    return {
      id: "demo-user",
      email: "demo@msbross.me",
      display_name: "Orquestador MSBross",
      role: "admin",
    };
  }
  const res = await apiFetch("/auth/me");
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}

// ── Conversations ─────────────────────────────────────────

export async function getConversations() {
  if (isDemoMode()) {
    return getMockConversations();
  }
  const res = await apiFetch("/conversations/");
  return res.json();
}

export async function getMessages(convId: string) {
  if (isDemoMode()) {
    return getMockMessages(convId);
  }
  const res = await apiFetch(`/conversations/${convId}/messages`);
  return res.json();
}

export async function deleteConversation(convId: string) {
  if (isDemoMode()) {
    const convs = getMockConversations().filter(c => c.id !== convId);
    saveMockConversations(convs);
    
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(MOCK_MSGS_KEY) || "{}";
      const map = JSON.parse(stored);
      delete map[convId];
      localStorage.setItem(MOCK_MSGS_KEY, JSON.stringify(map));
    }
    return;
  }
  await apiFetch(`/conversations/${convId}`, { method: "DELETE" });
}

// ── Models ────────────────────────────────────────────────

export async function getModels(): Promise<ModelInfo[]> {
  if (isDemoMode()) {
    return [
      { id: "gpt-4o", provider: "OpenAI", display_name: "GPT-4o (Acceso Rápido)", is_vision: true, is_thinking: false },
      { id: "claude-3-5-sonnet", provider: "Anthropic", display_name: "Claude 3.5 Sonnet", is_vision: true, is_thinking: false },
      { id: "deepseek-reasoner", provider: "DeepSeek", display_name: "DeepSeek R1 (Razonamiento)", is_vision: false, is_thinking: true },
    ];
  }
  const res = await apiFetch("/models/");
  return res.json();
}

// ── Agents ────────────────────────────────────────────────

export async function getAgents(): Promise<Agent[]> {
  if (isDemoMode()) {
    return [
      {
        id: "orchestrator",
        name: "Inteligencia Central",
        description: "Cerebro supremo y orquestador del ecosistema.",
        system_prompt: "Eres la Inteligencia Central Orquestadora (Godmode).",
        tools: ["webSearch", "executeCode"],
        is_public: true,
      },
    ];
  }
  const res = await apiFetch("/agents/");
  return res.json();
}

// ── Documents ─────────────────────────────────────────────

export async function uploadDocument(file: File) {
  if (isDemoMode()) {
    return {
      name: file.name,
      type: file.type,
      url: "#",
      size: file.size,
    };
  }
  const form = new FormData();
  form.append("file", file);
  const res = await apiFetch("/documents/upload", { method: "POST", body: form });
  return res.json();
}

// ── Search ────────────────────────────────────────────────

export async function webSearch(query: string) {
  if (isDemoMode()) {
    return [
      { title: "MSBross Ecosistema", url: "https://msbross.me", snippet: "Plataforma unificada que hospeda y ejecuta las 20 aplicaciones y herramientas inteligentes de MSBross.", relevance_score: 0.98 },
      { title: "JartosDTo Docs", url: "https://msbross.me/jartosdto/", snippet: "Guía oficial de integración RAG y APIs conversacionales en iOS nativo.", relevance_score: 0.91 }
    ];
  }
  const res = await apiFetch("/search/web", {
    method: "POST",
    body: JSON.stringify({ query }),
  });
  return res.json();
}

// ── Sandbox ───────────────────────────────────────────────

export async function executeCode(code: string, language = "python") {
  if (isDemoMode()) {
    return {
      success: true,
      output: `Python Local Sandbox [MSBross Kernel v2026]:\n---------------------------------------\n>> Compiling standard execution pipeline...\n>> Run complete. Return Code: 0\n>> Output:\n   Ejecutando de forma simulada en entorno de pruebas local.\n   Resultado analítico: Éxito total. Código compilado correctamente.`,
    };
  }
  const res = await apiFetch("/sandbox/execute", {
    method: "POST",
    body: JSON.stringify({ code, language }),
  });
  return res.json();
}

// ── Admin ─────────────────────────────────────────────────

export async function getAdminStats() {
  if (isDemoMode()) {
    return {
      active_users: 20,
      total_messages: 5800,
      api_calls_count: 14200,
      tokens_used: 12080000,
    };
  }
  const res = await apiFetch("/admin/stats");
  return res.json();
}

// ── Streaming Chat ────────────────────────────────────────

export function streamChat(body: {
  model: string;
  messages: { role: string; content: string }[];
  conversation_id?: string;
  web_search?: boolean;
  temperature?: number;
  max_tokens?: number;
}) {
  if (isDemoMode()) {
    const encoder = new TextEncoder();
    const targetConvId = body.conversation_id || `conv-${Date.now()}`;
    const userQuery = body.messages[body.messages.length - 1]?.content || "";

    // If new conversation, create it
    if (!body.conversation_id) {
      const convs = getMockConversations();
      convs.unshift({
        id: targetConvId,
        title: userQuery.length > 25 ? userQuery.slice(0, 25) + "..." : userQuery || "Nueva conversación",
        model_id: body.model,
        created_at: new Date().toISOString(),
        message_count: 2,
      });
      saveMockConversations(convs);
    }

    // Save user query
    const existingMsgs = getMockMessages(targetConvId);
    existingMsgs.push({
      id: `m-user-${Date.now()}`,
      role: "user",
      content: userQuery,
      created_at: new Date().toISOString(),
    });
    saveMockMessages(targetConvId, existingMsgs);

    const stream = new ReadableStream({
      async start(controller) {
        // Step 1: Send Meta chunk to map conversation ID
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "meta", conversation_id: targetConvId })}\n\n`)
        );
        await new Promise(r => setTimeout(r, 100));

        // Step 2: Send simulated deep thinking phase
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "thinking", content: "Analizando la intención conversacional del usuario...\n" })}\n\n`)
        );
        await new Promise(r => setTimeout(r, 600));

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "thinking", content: "Extrayendo contextos del almacén local y preparando la síntesis...\n" })}\n\n`)
        );
        await new Promise(r => setTimeout(r, 600));

        // Step 3: Stream main response text
        const responseText = `¡Saludos, colega! Esta respuesta es generada de forma 100% dinámica en modo demo client-side. JartosDTo está perfectamente optimizado para un rendimiento de latencia ultrabaja en static exports.\n\nHe recibido tu mensaje:\n> "${userQuery}"\n\nToda la funcionalidad del ecosistema MSBrossAI está simulada localmente y lista para su despliegue definitivo.`;
        
        const words = responseText.split(" ");
        let fullGeneratedText = "";
        
        for (const word of words) {
          const textChunk = word + " ";
          fullGeneratedText += textChunk;
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: "text", content: textChunk })}\n\n`)
          );
          await new Promise(r => setTimeout(r, 35));
        }

        // Step 4: Stream mock sources if web search enabled
        if (body.web_search) {
          const sources: Source[] = [
            {
              title: "MSBross Portal Central",
              url: "https://msbross.me",
              snippet: "Directorio global del ecosistema digital unificado de MSBross.",
              relevance_score: 0.99,
            },
          ];
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: "sources", sources })}\n\n`)
          );
        }

        // Save assistant message to mock DB
        const finalMsgs = getMockMessages(targetConvId);
        finalMsgs.push({
          id: `m-assistant-${Date.now()}`,
          role: "assistant",
          content: fullGeneratedText,
          created_at: new Date().toISOString(),
          model_id: body.model,
        });
        saveMockMessages(targetConvId, finalMsgs);

        // Close stream
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/event-stream" },
    });
  }

  const t = getToken();
  return fetch(`${API_URL}/api/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(t ? { Authorization: `Bearer ${t}` } : {}),
    },
    body: JSON.stringify({ ...body, stream: true }),
  });
}
