import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

const API_BASE = (import.meta as any).env.VITE_API_BASE_URL || '/api';
const API_KEY = (import.meta as any).env.VITE_API_KEY || '';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  audioUrl?: string;
  imageUrl?: string;
}

const DEMO_RESPONSES: Record<string, string> = {
  hola: '¡Hola! Soy IAPuta OS, tu asistente IA personal. Estoy en modo demo. Puedo ayudarte con información, búsquedas y análisis.',
  hello: 'Hello! I am IAPuta OS, your personal AI assistant. Demo mode active.',
  ayuda: 'Puedo ayudarte con:\n• Análisis de imágenes y pantalla\n• Gestión de correos y calendario\n• Código Python\n• Búsquedas web\n• Control del sistema',
  default: 'Entiendo. En modo demo mis respuestas son limitadas. Para funcionalidad completa necesitas el backend (FastAPI en puerto 8000).',
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [visionImage, setVisionImage] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);

  // Check backend
  useEffect(() => {
    fetch(`${API_BASE}/status`, { signal: AbortSignal.timeout(3000) })
      .then(r => { if (!r.ok) setDemoMode(true); })
      .catch(() => setDemoMode(true));
  }, []);

  const sendText = useCallback(async (text: string) => {
    if (!text.trim()) return;
    setLoading(true);
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);

    if (demoMode) {
      const lower = text.toLowerCase();
      let response = DEMO_RESPONSES.default;
      for (const [key, value] of Object.entries(DEMO_RESPONSES)) {
        if (lower.includes(key)) { response = value; break; }
      }
      setTimeout(() => {
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'assistant', content: response, timestamp: new Date() }]);
        setLoading(false);
      }, 1000);
    } else {
      try {
        const res = await fetch(`${API_BASE}/text-command`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
          body: JSON.stringify({ text }),
        });
        const data = await res.json();
        setMessages(prev => [...prev, {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: data.response || data.error || 'Sin respuesta',
          timestamp: new Date(),
          audioUrl: data.audio_url,
        }]);
        if (data.audio_url) new Audio(data.audio_url).play().catch(() => {});
      } catch (err) {
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: `Error: ${String(err)}`, timestamp: new Date() }]);
      }
      setLoading(false);
    }
  }, [demoMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !loading) { sendText(input); setInput(''); }
  };

  const captureWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')!.drawImage(video, 0, 0);
      stream.getTracks().forEach(t => t.stop());
      setVisionImage(canvas.toDataURL('image/jpeg'));
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: '📷 Cámara capturada correctamente.', timestamp: new Date() }]);
    } catch (err) {
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: `❌ Error cámara: ${String(err)}`, timestamp: new Date() }]);
    }
  };

  const captureScreen = async () => {
    try {
      const stream = await (navigator.mediaDevices as any).getDisplayMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')!.drawImage(video, 0, 0);
      stream.getTracks().forEach(t => t.stop());
      setVisionImage(canvas.toDataURL('image/jpeg'));
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: '🖥️ Pantalla capturada correctamente.', timestamp: new Date() }]);
    } catch (err) {
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: `❌ Error captura: ${String(err)}`, timestamp: new Date() }]);
    }
  };

  const clearMemory = () => {
    setMessages([]);
    setVisionImage(null);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.2rem' }}>🤖</span>
          </div>
          <div>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>IAPuta OS</h1>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>{demoMode ? 'Demo Mode' : 'Connected'}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={captureWebcam} title="Capturar cámara" style={{ padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer' }}>📷</button>
          <button onClick={captureScreen} title="Capturar pantalla" style={{ padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer' }}>🖥️</button>
          <button onClick={clearMemory} title="Limpiar chat" style={{ padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer' }}>🗑️</button>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem 2rem', overflow: 'hidden' }}>
        {/* Vision Panel */}
        {visionImage && (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>👁️ Visión</span>
              <button onClick={() => setVisionImage(null)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>✕</button>
            </div>
            <img src={visionImage} alt="Visión" style={{ width: '100%', maxHeight: 300, objectFit: 'contain', borderRadius: 8 }} />
          </div>
        )}

        {/* Chat Area */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {messages.length === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>IAPuta OS</h2>
              <p style={{ fontSize: '0.9rem' }}>Tu asistente IA personal. Escribe un mensaje para comenzar.</p>
            </div>
          )}

          {messages.map(msg => (
            <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '80%', padding: '1rem 1.25rem',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.role === 'user' ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' : msg.role === 'system' ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${msg.role === 'user' ? 'transparent' : msg.role === 'system' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.08)'}`,
              }}>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{msg.content}</p>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.5rem' }}>
                  {msg.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', color: 'rgba(255,255,255,0.5)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#8b5cf6', animation: 'pulse 1s infinite' }} />
              <span style={{ fontSize: '0.85rem' }}>Pensando...</span>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={loading}
            style={{
              flex: 1, padding: '0.75rem 1rem',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.75rem', color: '#fff', fontSize: '0.95rem', outline: 'none',
            }}
          />
          <button type="submit" disabled={loading || !input.trim()} style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', border: 'none',
            borderRadius: '0.75rem', color: '#fff', fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer', opacity: loading || !input.trim() ? 0.5 : 1,
          }}>
            Enviar
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer style={{ padding: '0.75rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
        MSBrossAI © 2026 — IAPuta OS
      </footer>
    </div>
  );
}
