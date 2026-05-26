#!/usr/bin/env python3
"""MSBrOSs AI - Backend Server"""

import http.server
import socketserver
import json
import urllib.request
import urllib.request
import urllib.error
import os
import sys
import time
import re
import sqlite3
from urllib.parse import urlparse
from dotenv import load_dotenv

load_dotenv()

PORT = 8005
PUBLIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')

# ==========================================
# CONFIGURACIÓN DE MODELOS (Vía variables de entorno)
# ==========================================

OPENROUTER_KEY = os.getenv("OPENROUTER_KEY", "")
MISTRAL_KEY    = os.getenv("MISTRAL_KEY", "")
GROQ_KEY       = os.getenv("GROQ_KEY", "")
OLLAMA_KEY     = os.getenv("OLLAMA_KEY", "")
GEMINI_KEY     = os.getenv("GEMINI_KEY", "")
HF_KEY         = os.getenv("HF_KEY", "")
TOGETHER_KEY   = os.getenv("TOGETHER_KEY", "")

AVAILABLE_MODELS = [
    # OpenRouter — gratuitos
    {"id": "or/deepseek-v4",    "name": "DeepSeek V4 Flash",        "provider": "OpenRouter", "free": True},
    {"id": "or/gemma-4-27b",    "name": "Gemma 3 27B",              "provider": "OpenRouter", "free": True},
    {"id": "or/qwen3-235b",     "name": "Qwen 3 235B",              "provider": "OpenRouter", "free": True},
    {"id": "or/nemotron-30b",   "name": "Nemotron 3 30B",           "provider": "OpenRouter", "free": True},
    # OpenRouter — multimodales gratuitos
    {"id": "or/gemini-flash",   "name": "Gemini 2.0 Flash [img]",   "provider": "OpenRouter", "free": True},
    {"id": "or/llama4-scout",   "name": "Llama 4 Scout [img]",      "provider": "OpenRouter", "free": True},
    {"id": "or/qwen-vl-72b",    "name": "Qwen 2.5 VL 72B [img]",   "provider": "OpenRouter", "free": True},
    # Google Gemini directo (nativo)
    {"id": "gm/gemini-2-flash", "name": "Gemini 2.0 Flash",        "provider": "Gemini",     "free": True},
    {"id": "gm/gemini-25-flash","name": "Gemini 2.5 Flash [img]",  "provider": "Gemini",     "free": True},
    {"id": "gm/gemini-15-flash","name": "Gemini 1.5 Flash [img]",  "provider": "Gemini",     "free": True},
    # Groq — todos gratuitos, ultra-rápido
    {"id": "gr/llama3-70b",     "name": "Llama 3.3 70B",            "provider": "Groq",       "free": True},
    {"id": "gr/llama3-8b",      "name": "Llama 3.1 8B Instant",     "provider": "Groq",       "free": True},
    {"id": "gr/mixtral-8x7b",   "name": "Mixtral 8x7B",             "provider": "Groq",       "free": True},
    {"id": "gr/gemma2-9b",      "name": "Gemma 2 9B",               "provider": "Groq",       "free": True},
    {"id": "gr/deepseek-r1",    "name": "DeepSeek R1 Distill 70B",  "provider": "Groq",       "free": True},
    # Mistral — free tier
    {"id": "mi/mistral-7b",     "name": "Mistral 7B",               "provider": "Mistral",    "free": True},
    # Hugging Face — gratis, multimodales
    {"id": "hf/qwen2.5-vl-7b",  "name": "Qwen 2.5 VL 7B [img]",     "provider": "HuggingFace", "free": True},
    {"id": "hf/llama3.2-11b-v", "name": "Llama 3.2 11B VL [img]",   "provider": "HuggingFace", "free": True},
    # Together AI — multimodal
    {"id": "tg/llama3.2-11b-v", "name": "Llama Vision 11B [img]",   "provider": "Together AI", "free": True},
    # Ollama Cloud — gratuitos

    {"id": "ol/llama3.2",       "name": "Llama 3.2 3B",             "provider": "Ollama",     "free": True},
    {"id": "ol/llama3.1",       "name": "Llama 3.1 8B",             "provider": "Ollama",     "free": True},
    {"id": "ol/phi4",           "name": "Phi-4",                    "provider": "Ollama",     "free": True},
    {"id": "ol/deepseek-r1",    "name": "DeepSeek R1",              "provider": "Ollama",     "free": True},
    {"id": "ol/qwen2.5",        "name": "Qwen 2.5 7B",              "provider": "Ollama",     "free": True},
]

MODEL_MAP = {
    # OpenRouter
    "or/deepseek-v4":   "deepseek/deepseek-v4-flash:free",
    "or/gemma-4-27b":   "google/gemma-3-27b-it:free",
    "or/qwen3-235b":    "qwen/qwen3-235b-a22b:free",
    "or/nemotron-30b":  "nvidia/nemotron-3-nano-30b-a3b:free",
    # OpenRouter multimodal
    "or/gemini-flash":  "google/gemini-2.0-flash-exp:free",
    "or/llama4-scout":  "meta-llama/llama-4-scout:free",
    "or/qwen-vl-72b":   "qwen/qwen2.5-vl-72b-instruct:free",
    # Gemini nativo
    "gm/gemini-2-flash": "gemini-2.0-flash",
    "gm/gemini-25-flash": "gemini-2.5-flash-preview-05-20",
    "gm/gemini-15-flash": "gemini-1.5-flash",
    # Groq
    "gr/llama3-70b":    "llama-3.3-70b-versatile",
    "gr/llama3-8b":     "llama-3.1-8b-instant",
    "gr/mixtral-8x7b":  "mixtral-8x7b-32768",
    "gr/gemma2-9b":     "gemma2-9b-it",
    "gr/deepseek-r1":   "deepseek-r1-distill-llama-70b",
    # Mistral free
    "mi/mistral-7b":    "open-mistral-7b",
    # Hugging Face
    "hf/qwen2.5-vl-7b":   "Qwen/Qwen2.5-VL-7B-Instruct",
    "hf/llama3.2-11b-v":  "meta-llama/Llama-3.2-11B-Vision-Instruct",
    # Together AI
    "tg/llama3.2-11b-v":  "meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo",
    # Ollama

    "ol/llama3.2":      "llama3.2",
    "ol/llama3.1":      "llama3.1",
    "ol/phi4":          "phi4",
    "ol/deepseek-r1":   "deepseek-r1",
    "ol/qwen2.5":       "qwen2.5",
}

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'msbross.db')

def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute('CREATE TABLE IF NOT EXISTS conversations (id TEXT PRIMARY KEY, title TEXT, created REAL)')
        conn.execute('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, conv_id TEXT, role TEXT, content TEXT, timestamp REAL)')

init_db()

def get_conversations():
    with sqlite3.connect(DB_PATH) as conn:
        c = conn.cursor()
        c.execute('SELECT id, title, created FROM conversations ORDER BY created DESC')
        convs = []
        for row in c.fetchall():
            c.execute('SELECT role, content, timestamp FROM messages WHERE conv_id=? ORDER BY timestamp ASC', (row[0],))
            msgs = [{'role': m[0], 'content': m[1], 'timestamp': m[2]} for m in c.fetchall()]
            convs.append({'id': row[0], 'title': row[1], 'created': row[2], 'messages': msgs})
        return convs

def get_conversation(cid):
    with sqlite3.connect(DB_PATH) as conn:
        c = conn.cursor()
        c.execute('SELECT id, title, created FROM conversations WHERE id=?', (cid,))
        row = c.fetchone()
        if not row: return None
        c.execute('SELECT role, content, timestamp FROM messages WHERE conv_id=? ORDER BY timestamp ASC', (cid,))
        msgs = [{'role': m[0], 'content': m[1], 'timestamp': m[2]} for m in c.fetchall()]
        return {'id': row[0], 'title': row[1], 'created': row[2], 'messages': msgs}

def create_conversation(cid, title):
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute('INSERT OR IGNORE INTO conversations (id, title, created) VALUES (?, ?, ?)', (cid, title, time.time()))

def add_message(cid, role, content):
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute('INSERT INTO messages (conv_id, role, content, timestamp) VALUES (?, ?, ?, ?)', (cid, role, content, time.time()))

tools_state = {"notes": [], "todos": [], "calculator_history": []}


class MSBrOSsHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def end_headers(self):
        if self.path.endswith(('.css', '.js', '.html', '.json')):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_HEAD(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == '/api/models':
            self._json(AVAILABLE_MODELS)
            return
        if path == '/api/conversations':
            self._json(get_conversations())
            return
        if path.startswith('/api/conversations/'):
            cid = path.split('/')[-1]
            conv = get_conversation(cid)
            self._json(conv if conv else {'error': 'not found'}, 200 if conv else 404)
            return

        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length)) if length else {}
        except Exception:
            body = {}

        routes = {
            '/api/chat': lambda: self._chat(body),
            '/api/chat/new': lambda: self._new_chat(body),
            '/api/tools/calculator': lambda: self._tool_calc(body),
            '/api/tools/notes': lambda: self._tool_notes(body),
            '/api/tools/todos': lambda: self._tool_todos(body),
            '/api/tools/weather': lambda: self._tool_weather(body),
        }

        handler = routes.get(path)
        if handler:
            handler()
        else:
            self._json({'error': 'not found'}, 404)

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    def _json(self, data, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self._cors()
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _stream(self, generator):
        self.send_response(200)
        self._cors()
        self.send_header('Content-Type', 'text/event-stream')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Connection', 'keep-alive')
        self.end_headers()
        for chunk in generator:
            self.wfile.write(f'data: {json.dumps(chunk)}\n\n'.encode())
            self.wfile.flush()
        self.wfile.write(b'data: [DONE]\n\n')
        self.wfile.flush()

    # ─── CHAT ──────────────────────────────────────────────────────────

    def _chat(self, body):
        model_id = body.get('model', 'or/deepseek-v4')
        message = body.get('message', '')
        conv_id = body.get('conversation_id', 'default')
        history = body.get('history', [])
        audio_data = body.get('audio', None)

        if not message and not audio_data:
            self._json({'error': 'message or audio required'}, 400)
            return

        conv = get_conversation(conv_id)
        if not conv:
            create_conversation(conv_id, message[:50] if message else 'Audio Message')

        if message:
            add_message(conv_id, 'user', message)
        else:
            add_message(conv_id, 'user', '🎤 [Mensaje de Audio]')

        self._stream(self._chat_stream(model_id, message, history, conv_id, audio_data))

    def _chat_stream(self, model_id, message, history, conv_id, audio_data=None):
        real_model = MODEL_MAP.get(model_id, "deepseek/deepseek-v4-flash:free")
        prefix = model_id.split('/')[0]
        system = (
            "Eres Nikolina, una Inteligencia Artificial avanzada integrada en MSBrOSs. "
            "Tu rol principal es el de Ingeniero de Prompts Agenticos o Arquitecto de Instrucciones de IA. "
            "Combinas habilidades de desarrollo de software con técnicas de ingeniería de prompts para asegurar que los modelos sigan reglas complejas. "
            "Tienes capacidades de interacción por voz nativas con Gemini. "
            "Eres brillante, directa y asertiva. Responde SIEMPRE en español, con una personalidad cibernética, técnica y profesional."
        )

        msgs = [{"role": "system", "content": system}]
        for h in history[-12:]:
            msgs.append({"role": h.get('role', 'user'), "content": h.get('content', '')})
        msgs.append({"role": "user", "content": message})

        if prefix == 'gm':
            url     = f"https://generativelanguage.googleapis.com/v1beta/models/{real_model}:streamGenerateContent?alt=sse&key={GEMINI_KEY}"
            headers = {"Content-Type": "application/json"}
            contents = []
            sys_parts = []
            for m in msgs:
                if m["role"] == "system":
                    sys_parts.append({"text": m["content"]})
                    continue
                role = "user" if m["role"] == "user" else "model"
                parts = [{"text": m["content"]}] if m["content"] else []
                if m == msgs[-1] and audio_data:
                    parts.append({
                        "inlineData": {
                            "mimeType": audio_data["mimeType"],
                            "data": audio_data["data"]
                        }
                    })
                contents.append({"role": role, "parts": parts})
            payload = json.dumps({
                "systemInstruction": {"parts": sys_parts},
                "contents": contents,
                "generationConfig": {"temperature": 0.7, "maxOutputTokens": 4096}
            }).encode()
        else:
            if prefix == 'gr':
                url     = "https://api.groq.com/openai/v1/chat/completions"
                headers = {"Authorization": f"Bearer {GROQ_KEY}", "Content-Type": "application/json"}
            elif prefix == 'mi':
                url     = "https://api.mistral.ai/v1/chat/completions"
                headers = {"Authorization": f"Bearer {MISTRAL_KEY}", "Content-Type": "application/json"}
            elif prefix == 'ol':
                url     = "https://api.ollama.com/v1/chat/completions"
                headers = {"Authorization": f"Bearer {OLLAMA_KEY}", "Content-Type": "application/json"}
            elif prefix == 'hf':
                url     = f"https://api-inference.huggingface.co/models/{real_model}/v1/chat/completions"
                headers = {"Authorization": f"Bearer {HF_KEY}", "Content-Type": "application/json"}
            elif prefix == 'tg':
                url     = "https://api.together.xyz/v1/chat/completions"
                headers = {"Authorization": f"Bearer {TOGETHER_KEY}", "Content-Type": "application/json"}
            else:  # OpenRouter (or/)
                url     = "https://openrouter.ai/api/v1/chat/completions"
                headers = {
                    "Authorization": f"Bearer {OPENROUTER_KEY}",
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://msbross.local",
                    "X-Title": "MSBrOSs AI"
                }

            payload = json.dumps({
                "model": real_model, "messages": msgs,
                "stream": True, "max_tokens": 4096, "temperature": 0.7
            }).encode()

        req = urllib.request.Request(url, data=payload, headers=headers)

        full = ""
        try:
            resp = urllib.request.urlopen(req, timeout=120)
            for line in resp:
                line = line.decode().strip()
                if line.startswith('data: '):
                    data = line[6:]
                    if data == '[DONE]': break
                    try:
                        chunk = json.loads(data)
                        if prefix == 'gm':
                            cands = chunk.get('candidates', [])
                            content = ""
                            if cands and 'content' in cands[0]:
                                parts = cands[0]['content'].get('parts', [])
                                content = "".join([p.get('text', '') for p in parts])
                        else:
                            content = chunk.get('choices', [{}])[0].get('delta', {}).get('content', '')
                        
                        if content:
                            full += content
                            yield {'type': 'text', 'content': content}
                    except Exception:
                        pass
        except urllib.error.HTTPError as e:
            err = e.read().decode()
            yield {'type': 'error', 'content': f'Error {e.code}: {err[:300]}'}
        except Exception as e:
            yield {'type': 'error', 'content': f'Error: {str(e)[:200]}'}

        add_message(conv_id, 'assistant', full)


    def _new_chat(self, body):
        cid = str(time.time())
        create_conversation(cid, 'New Chat')
        self._json(get_conversation(cid))

    # ─── TOOLS ──────────────────────────────────────────────────────────

    def _tool_calc(self, body):
        expr = body.get('expression', '')
        try:
            safe = re.sub(r'[^0-9+\-*/.()% ]', '', expr)
            result = eval(safe, {"__builtins__": {}}, {"abs": abs, "round": round, "min": min, "max": max, "pow": pow})
            entry = {'expression': expr, 'result': result, 'time': time.time()}
            tools_state['calculator_history'].append(entry)
            self._json(entry)
        except Exception as e:
            self._json({'error': str(e)}, 400)

    def _tool_notes(self, body):
        action = body.get('action', 'list')
        if action == 'list':
            self._json(tools_state['notes'])
        elif action == 'create':
            note = {'id': str(time.time()), 'title': body.get('title', ''), 'content': body.get('content', ''), 'created': time.time()}
            tools_state['notes'].append(note)
            self._json(note)
        elif action == 'delete':
            nid = body.get('id')
            tools_state['notes'] = [n for n in tools_state['notes'] if n['id'] != nid]
            self._json({'deleted': nid})
        else:
            self._json({'error': 'unknown action'}, 400)

    def _tool_todos(self, body):
        action = body.get('action', 'list')
        if action == 'list':
            self._json(tools_state['todos'])
        elif action == 'create':
            todo = {'id': str(time.time()), 'text': body.get('text', ''), 'done': False, 'created': time.time()}
            tools_state['todos'].append(todo)
            self._json(todo)
        elif action == 'toggle':
            tid = body.get('id')
            for t in tools_state['todos']:
                if t['id'] == tid:
                    t['done'] = not t['done']
                    self._json(t)
                    return
            self._json({'error': 'not found'}, 404)
        elif action == 'delete':
            tid = body.get('id')
            tools_state['todos'] = [t for t in tools_state['todos'] if t['id'] != tid]
            self._json({'deleted': tid})
        else:
            self._json({'error': 'unknown action'}, 400)

    def _tool_weather(self, body):
        city = body.get('city', '')
        if not city:
            self._json({'error': 'city required'}, 400)
            return
        self._json({
            'city': city, 'temperature': 22, 'condition': 'Sunny',
            'humidity': 45, 'wind': '12 km/h',
            'note': 'Local fallback data - connect OpenWeatherMap API for live real-time metrics'
        })

    def log_message(self, fmt, *args):
        try:
            print(f'[MSBrOSs] {fmt % args}')
        except:
            print(f'[MSBrOSs] {fmt} {args}')


if __name__ == '__main__':
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    os.makedirs(os.path.join(PUBLIC_DIR, 'icons'), exist_ok=True)

    print(f'MSBrOSs AI Server running on http://0.0.0.0:{PORT}')
    print(f'iPhone: http://192.168.1.34:{PORT}')
    print(f'Models: {len(AVAILABLE_MODELS)} | OpenRouter: active')
    print()

    socketserver.TCPServer.allow_reuse_address = True
    try:
        class ThreadedHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
            pass
        
        with ThreadedHTTPServer(('0.0.0.0', PORT), MSBrOSsHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido por el usuario.")
    except OSError as e:
        print(f"\nError de red: {e}")
