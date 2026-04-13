export type Modo =
  | 'traducir_estandar'
  | 'traducir'
  | 'traducir_profesional'
  | 'traducir_coloquial'
  | 'resumir'
  | 'traducir_resumir'
  | 'normal'
  | 'literal'
  | 'profesional'
  | 'coloquial';

export type Nivel = 'breve' | 'normal' | 'detallado';
export type Provider = 'groq' | 'openai' | 'gemini' | 'openrouter';

export interface ProcessPayload {
  texto: string;
  origen: string;
  destino: string;
  modo: Modo;
  nivelResumen: Nivel;
  provider?: Provider;
}

export interface ProcessResult {
  traduccion: string;
  resumen: string;
  provider?: string;
}

export interface ExtrasPayload {
  texto: string;
  herramienta: string;
  provider?: Provider;
}

export interface ExtrasResult {
  resultado: string;
  provider?: string;
}

/**
 * API base URL: point to the IAPuta API
 */
const API_BASE = import.meta.env.VITE_API_BASE_URL || '/app/iaputa/api.php';

/**
 * Translate / Summarise text via the Express backend.
 */
export async function processText(payload: ProcessPayload): Promise<ProcessResult> {
  const res = await fetch(`${API_BASE}?action=process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `Error API: ${res.status}`);
  }
  return res.json();
}

/**
 * Run an "extras" tool (keywords, sentiment, entities, appbuilder).
 */
export async function processExtras(payload: ExtrasPayload): Promise<ExtrasResult> {
  const res = await fetch(`${API_BASE}?action=process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...payload, modo: 'extras'}),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `Error API: ${res.status}`);
  }
  return res.json();
}

/**
 * Extract text from an uploaded document (PDF, DOCX, TXT).
 */
export async function extractText(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${API_BASE}/extract-text`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `Error extrayendo texto: ${res.status}`);
  }
  const data = await res.json();
  return data.texto ?? '';
}
