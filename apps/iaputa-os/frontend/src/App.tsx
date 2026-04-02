import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import ChatPanel from './components/ChatPanel';
import ToolPalette from './components/ToolPalette';
import StatusBar from './components/StatusBar';
import VisionPanel from './components/VisionPanel';
import SettingsModal from './components/SettingsModal';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';
const API_KEY = import.meta.env.VITE_API_KEY || '';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  audioUrl?: string;
  imageUrl?: string;
}

interface AppSettings {
  apiKey: string;
  autoAudio: boolean;
  language: string;
  provider: 'groq' | 'ollama' | 'openrouter';
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [visionImage, setVisionImage] = useState<string | undefined>();
  const [settings, setSettings] = useState<AppSettings>({
    apiKey: API_KEY,
    autoAudio: true,
    language: 'es',
    provider: 'groq',
  });
  const [status, setStatus] = useState<{ backend: boolean; llm: string; memory: number }>({
    backend: false,
    llm: 'Verificando...',
    memory: 0,
  });

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkStatus = async () => {
    try {
      const res = await fetch(`${API_BASE}/status`, {
        headers: { 'x-api-key': settings.apiKey },
      });
      const data = await res.json();
      setStatus(prev => ({ ...prev, backend: res.ok, llm: data.llm || 'Groq-Llama3' }));
    } catch {
      setStatus(prev => ({ ...prev, backend: false, llm: 'Sin conexión' }));
    }
  };

  const sendText = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    setLoading(true);

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await fetch(`${API_BASE}/text-command`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': settings.apiKey,
        },
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

      if (settings.autoAudio && data.audio_url) {
        const audio = new Audio(data.audio_url);
        audio.play().catch(() => {});
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'system',
        content: `Error: ${err instanceof Error ? err.message : 'Error desconocido'}`,
        timestamp: new Date(),
      }]);
    } finally {
      setLoading(false);
    }
  }, [loading, settings]);

  const clearMemory = async () => {
    try {
      await fetch(`${API_BASE}/clear-memory`, {
        method: 'POST',
        headers: { 'x-api-key': settings.apiKey },
      });
      setMessages([{
        id: crypto.randomUUID(),
        role: 'system',
        content: '✓ Memoria limpiada correctamente.',
        timestamp: new Date(),
      }]);
    } catch (err) {
      console.error('Clear memory error:', err);
    }
  };

  const handleVisionCapture = async (type: 'screen' | 'webcam') => {
    // Vision capture - placeholder for now
    setMessages(prev => [...prev, {
      id: crypto.randomUUID(),
      role: 'system',
      content: `📷 Captura de ${type} iniciada. El backend procesará la imagen.`,
      timestamp: new Date(),
    }]);
  };

  const handleToolAction = (action: string) => {
    const actionMap: Record<string, string> = {
      vision: 'Analiza lo que ves en pantalla',
      screenshot: 'Captura una pantalla',
      calendar: '¿Qué tengo hoy en el calendario?',
      email: 'Léeme mis últimos correos',
      terminal: 'Abre una terminal',
      python: 'Ejecuta código Python',
    };
    sendText(actionMap[action] || `Ejecuta: ${action}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(0,0,0,0.3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '1.2rem' }}>🤖</span>
          </div>
          <div>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>IAPuta OS</h1>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Entorno Cognitivo de IA</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={clearMemory} style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: '#fff',
            cursor: 'pointer',
          }}>
            🗑️ Limpiar
          </button>
          <button onClick={() => setShowSettings(true)} style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: '#fff',
            cursor: 'pointer',
          }}>
            ⚙️ Ajustes
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        padding: '1rem 2rem',
        overflow: 'hidden',
      }}>
        {/* Chat Panel */}
        <ChatPanel
          messages={messages}
          loading={loading}
          onSend={sendText}
        />
      </div>

      {/* Status Bar */}
      <StatusBar status={status} />

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          settings={settings}
          onSettingsChange={setSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}
