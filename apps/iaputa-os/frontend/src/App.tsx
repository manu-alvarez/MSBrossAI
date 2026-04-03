import React, { useState, useEffect, useCallback, useRef } from 'react';
import NeuralOrb from './components/NeuralOrb';
import './index.css';

const API_BASE = (import.meta as any).env.VITE_API_BASE_URL || '/api';
const API_KEY = (import.meta as any).env.VITE_API_KEY || '';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  audioUrl?: string;
}

const DEMO: Record<string, string> = {
  hola: '¡Hola! Soy IAPuta OS, tu asistente IA personal. ¿En qué puedo ayudarte hoy?',
  hello: 'Hello! I am IAPuta OS, your personal AI assistant. How can I help you?',
  ayuda: 'Puedo ayudarte con:\n• 📷 Análisis de imágenes y pantalla\n• 📧 Gestión de correos y calendario\n• 🐍 Código Python\n• 🔍 Búsquedas web\n• 💻 Control del sistema',
  default: 'Entiendo tu consulta. En modo demo mis respuestas son limitadas. Para funcionalidad completa necesitas el backend.',
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [visionImage, setVisionImage] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [orbState, setOrbState] = useState<'idle' | 'listening' | 'thinking' | 'speaking' | 'error'>('idle');
  const [volume, setVolume] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/status`, { signal: AbortSignal.timeout(3000) })
      .then(r => { if (!r.ok) setDemoMode(true); })
      .catch(() => setDemoMode(true));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.onstart = () => { setSpeaking(true); setOrbState('speaking'); };
      utterance.onend = () => { setSpeaking(false); setOrbState('idle'); };
      utterance.onerror = () => { setSpeaking(false); setOrbState('idle'); };
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      
      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        setRecording(false);
        setOrbState('thinking');
        
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        
        if (demoMode) {
          setMessages(prev => [...prev, {
            id: crypto.randomUUID(),
            role: 'user',
            content: '🎤 [Mensaje de voz]',
            timestamp: new Date(),
          }]);
          setTimeout(() => {
            const response = 'He recibido tu mensaje de voz. En modo demo no puedo transcribirlo, pero en modo completo usaría Whisper para convertir tu voz a texto.';
            setMessages(prev => [...prev, {
              id: crypto.randomUUID(),
              role: 'assistant',
              content: response,
              timestamp: new Date(),
            }]);
            speak(response);
          }, 1000);
        } else {
          const formData = new FormData();
          formData.append('audio_file', blob, 'audio.webm');
          
          setMessages(prev => [...prev, {
            id: crypto.randomUUID(),
            role: 'user',
            content: '🎤 [Procesando voz...]',
            timestamp: new Date(),
          }]);
          
          try {
            const res = await fetch(`${API_BASE}/voice-command`, {
              method: 'POST',
              headers: { 'x-api-key': API_KEY },
              body: formData,
            });
            const data = await res.json();
            const assistantMsg: Message = {
              id: crypto.randomUUID(),
              role: 'assistant',
              content: data.response || data.transcript || 'Sin respuesta',
              timestamp: new Date(),
              audioUrl: data.audio_url,
            };
            setMessages(prev => [...prev, assistantMsg]);
            
            if (data.audio_url) {
              new Audio(data.audio_url).play().catch(() => speak(data.response || data.transcript || ''));
            } else {
              speak(data.response || data.transcript || '');
            }
          } catch (err) {
            setMessages(prev => [...prev, {
              id: crypto.randomUUID(),
              role: 'system',
              content: `❌ Error de voz: ${String(err)}`,
              timestamp: new Date(),
            }]);
            setOrbState('error');
            setTimeout(() => setOrbState('idle'), 3000);
          }
        }
      };
      
      mediaRecorder.start();
      setRecording(true);
      setOrbState('listening');
      
      setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
      }, 15000);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'system',
        content: `❌ Error micrófono: ${String(err)}`,
        timestamp: new Date(),
      }]);
      setOrbState('error');
      setTimeout(() => setOrbState('idle'), 3000);
    }
  }, [demoMode, speak]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const sendText = useCallback(async (text: string) => {
    if (!text.trim()) return;
    setLoading(true);
    setOrbState('thinking');
    setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'user', content: text, timestamp: new Date() }]);

    if (demoMode) {
      const lower = text.toLowerCase();
      let response = DEMO.default;
      for (const [key, value] of Object.entries(DEMO)) {
        if (lower.includes(key)) { response = value; break; }
      }
      setTimeout(() => {
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'assistant', content: response, timestamp: new Date() }]);
        speak(response);
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
        const assistantMsg: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: data.response || data.error || 'Sin respuesta',
          timestamp: new Date(),
          audioUrl: data.audio_url,
        };
        setMessages(prev => [...prev, assistantMsg]);
        
        if (data.audio_url) {
          new Audio(data.audio_url).play().catch(() => speak(data.response || ''));
        } else {
          speak(data.response || '');
        }
      } catch (err) {
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: `❌ Error: ${String(err)}`, timestamp: new Date() }]);
        setOrbState('error');
        setTimeout(() => setOrbState('idle'), 3000);
      }
      setLoading(false);
    }
  }, [demoMode, speak]);

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

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-brand">
          <div className="header-logo">🤖</div>
          <div>
            <h1 className="header-title">IAPuta OS</h1>
            <p className="header-subtitle">{demoMode ? '🟡 Modo Demo' : '🟢 Conectado'}</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="action-btn" onClick={captureWebcam} title="Capturar cámara">📷</button>
          <button className="action-btn" onClick={captureScreen} title="Capturar pantalla">🖥️</button>
          <button className="action-btn" onClick={() => { setMessages([]); setVisionImage(null); window.speechSynthesis.cancel(); setOrbState('idle'); }} title="Limpiar chat">🗑️</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Orb Section */}
        <div className="orb-section">
          <div className="orb-container">
            <NeuralOrb state={orbState} volume={volume} />
            <div className="orb-status">
              <span className={`orb-status-dot orb-status-dot--${orbState}`} />
              <span className="orb-status-text">
                {orbState === 'idle' && 'Listo'}
                {orbState === 'listening' && 'Escuchando...'}
                {orbState === 'thinking' && 'Pensando...'}
                {orbState === 'speaking' && 'Hablando...'}
                {orbState === 'error' && 'Error'}
              </span>
            </div>
          </div>
        </div>

        {/* Vision Panel */}
        {visionImage && (
          <div className="vision-panel">
            <div className="vision-header">
              <span className="vision-title">👁️ Visión</span>
              <button className="vision-close" onClick={() => setVisionImage(null)}>✕</button>
            </div>
            <img src={visionImage} alt="Visión" className="vision-image" />
          </div>
        )}

        {/* Chat */}
        <div className="chat-container">
          {messages.length === 0 && (
            <div className="chat-empty">
              <h2 className="chat-empty-title">IAPuta OS</h2>
              <p className="chat-empty-desc">Tu asistente IA personal con voz. Escribe o habla para comenzar.</p>
            </div>
          )}

          {messages.map(msg => (
            <div key={msg.id} className={`message message--${msg.role}`}>
              <div className="message-bubble">
                {msg.content}
                <div className="message-time">{msg.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</div>
                {msg.role === 'assistant' && (
                  <button className="audio-btn" onClick={() => speak(msg.content)}>
                    🔊 Escuchar
                  </button>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="loading-indicator">
              <div className="loading-dots">
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
              </div>
              <span>Pensando...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form className="input-bar" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={loading}
          />
          <button
            type="button"
            className={`input-btn--mic ${recording ? 'recording' : ''}`}
            onClick={recording ? stopRecording : startRecording}
            title={recording ? 'Detener grabación' : 'Grabar voz'}
          >
            {recording ? '⏹️' : '🎤'}
          </button>
          <button className="input-btn input-btn--primary" type="submit" disabled={loading || !input.trim()}>
            Enviar
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        MSBrossAI © 2026 — IAPuta OS v8.0
      </footer>
    </div>
  );
}
