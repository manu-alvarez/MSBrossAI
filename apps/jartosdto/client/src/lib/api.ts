/** API client for communicating with the FastAPI backend. */

import { API_URL } from "./utils";

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
  const res = await apiFetch("/auth/me");
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}

// ── Conversations ─────────────────────────────────────────

export async function getConversations() {
  const res = await apiFetch("/conversations/");
  return res.json();
}

export async function getMessages(convId: string) {
  const res = await apiFetch(`/conversations/${convId}/messages`);
  return res.json();
}

export async function deleteConversation(convId: string) {
  await apiFetch(`/conversations/${convId}`, { method: "DELETE" });
}

// ── Models ────────────────────────────────────────────────

export async function getModels() {
  const res = await apiFetch("/models/");
  return res.json();
}

// ── Agents ────────────────────────────────────────────────

export async function getAgents() {
  const res = await apiFetch("/agents/");
  return res.json();
}

// ── Documents ─────────────────────────────────────────────

export async function uploadDocument(file: File) {
  const form = new FormData();
  form.append("file", file);
  const res = await apiFetch("/documents/upload", { method: "POST", body: form });
  return res.json();
}

// ── Search ────────────────────────────────────────────────

export async function webSearch(query: string) {
  const res = await apiFetch("/search/web", {
    method: "POST",
    body: JSON.stringify({ query }),
  });
  return res.json();
}

// ── Sandbox ───────────────────────────────────────────────

export async function executeCode(code: string, language = "python") {
  const res = await apiFetch("/sandbox/execute", {
    method: "POST",
    body: JSON.stringify({ code, language }),
  });
  return res.json();
}

// ── Admin ─────────────────────────────────────────────────

export async function getAdminStats() {
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
