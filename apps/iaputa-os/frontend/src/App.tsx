import React, { useState, useEffect, useCallback, useRef } from 'react';
import NeuralOrb from './components/NeuralOrb';
import './index.css';

/**
 * API base URL: auto-detect production (msbross.me → PHP gateway) vs local (FastAPI)
 */
const isProduction = window.location.hostname === 'msbross.me';
const API_BASE = isProduction
  ? './api.php?action='
  : ((import.meta as any).env.VITE_API_BASE_URL || 'http://localhost:8006/api');
const API_KEY = (import.meta as any).env.VITE_API_KEY || '';
const USE_PHP_GATEWAY = isProduction;

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  audioUrl?: string;
}

const DEMO: Record<string, string> = {
  hola: '¡Hola! Soy IAPuta OS, tu asistente IA personal de élite. ¿En qué puedo ayudarte hoy?',
  hello: 'Hello! I am IAPuta OS, your luxury AI assistant. How can I act for you?',
  ayuda: 'Tengo acceso a:\n• 📷 Análisis de visión y pantalla\n• 🌐 Búsquedas avanzadas\n• 💻 Shell y manipulación local\n• 🧠 Multi-LLM en fallback (Groq → Ollama → OpenRouter)',
  default: 'Entendido. En modo demo puro no conecto con el backend esclavo en local, por favor levanta la API de FastAPI.',
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
    const statusUrl = USE_PHP_GATEWAY ? `${API_BASE}status` : `${API_BASE}/status`;
    fetch(statusUrl, { signal: AbortSignal.timeout(3000) })
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
          setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'user', content: '🎤 [Voz capturada]', timestamp: new Date() }]);
          setTimeout(() => {
            setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'assistant', content: 'Grabación procesada localmente en demo.', timestamp: new Date() }]);
            speak('Procesado localmente.');
            setOrbState('idle');
          }, 1000);
          return;
        }

        const formData = new FormData();
        formData.append('audio_file', blob, 'audio.webm');
        
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'user', content: '🎤 [Procesando comandos de voz...]', timestamp: new Date() }]);
        
        try {
          const res = await fetch(USE_PHP_GATEWAY ? `${API_BASE}voice-command` : `${API_BASE}/voice-command`, {
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
          setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: `❌ Error de backend esclavo: ${String(err)}`, timestamp: new Date() }]);
          setOrbState('error');
          setTimeout(() => setOrbState('idle'), 3000);
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
        const res = await fetch(USE_PHP_GATEWAY ? `${API_BASE}text-command` : `${API_BASE}/text-command`, {
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
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'system', content: `❌ Host: Imposible conectar al backend local: ${String(err)}`, timestamp: new Date() }]);
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

  return (
    <div className="app-container">
      {/* Background Neural Orb fills the viewport contextually */}
      <div className="luxury-orb-background">
        <NeuralOrb state={orbState} volume={volume} />
      </div>

      <div className="luxury-dashboard">
        {/* Left/Main Panel - Glassmorphic Chat */}
        <div className="glass-panel chat-glass-panel">
          <header className="glass-header">
            <div className="brand">
               <span className="brand-logo">🤖</span>
               <div className="brand-text">
                  <h1>IAPuta OS</h1>
                  <span className={`status-badge ${demoMode ? 'demo' : 'online'}`}>{demoMode ? 'Host Only' : 'Host + Local'}</span>
               </div>
            </div>
          </header>

          <div className="chat-area">
            {messages.length === 0 ? (
              <div className="chat-empty-state">
                <h2>Awaiting Directives</h2>
                <p>El núcleo neuronal está conectado. Estoy lista para gestionar tu entorno.</p>
              </div>
            ) : (
              messages.map(msg => (
                <div key={msg.id} className={`chat-message chat-message--${msg.role}`}>
                  <div className="chat-bubble">
                    <p>{msg.content}</p>
                    <span className="chat-time">{msg.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="chat-message chat-message--loading">
                 <div className="chat-bubble"><div className="loader-dots"><span></span><span></span><span></span></div></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="glass-input-dock" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Inyectar comandos al núcleo..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              disabled={loading}
              className="glass-input"
            />
            <button type="button" className={`btn-icon ${recording ? 'pulsing' : ''}`} onClick={recording ? stopRecording : startRecording}>
              {recording ? '⏹️' : '🎤'}
            </button>
            <button type="button" className="btn-icon" onClick={() => setVisionImage('📸')}>
               👁️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
