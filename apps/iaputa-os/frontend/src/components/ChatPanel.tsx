import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  audioUrl?: string;
  imageUrl?: string;
}

interface ChatPanelProps {
  messages: Message[];
  loading: boolean;
  onSend: (text: string) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ messages, loading, onSend }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play().catch(() => {});
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 20,
      overflow: 'hidden',
    }}>
      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        {messages.length === 0 && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'rgba(255,255,255,0.3)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>IAPuta OS</h2>
            <p style={{ fontSize: '0.9rem' }}>Tu asistente IA personal. Escribe un mensaje para comenzar.</p>
          </div>
        )}

        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div style={{
              maxWidth: '80%',
              padding: '1rem 1.5rem',
              borderRadius: msg.role === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
              background: msg.role === 'user'
                ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)'
                : msg.role === 'system'
                ? 'rgba(245,158,11,0.1)'
                : 'rgba(255,255,255,0.05)',
              border: `1px solid ${msg.role === 'user' ? 'transparent' : msg.role === 'system' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.08)'}`,
            }}>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
              }}>
                {msg.content}
              </p>
              
              {msg.audioUrl && (
                <button onClick={() => playAudio(msg.audioUrl!)} style={{
                  marginTop: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '0.5rem',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                }}>
                  🔊 Escuchar
                </button>
              )}
              
              <div style={{
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.3)',
                marginTop: '0.5rem',
              }}>
                {msg.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#8b5cf6',
              animation: 'pulse 1s infinite',
            }} />
            <span style={{ fontSize: '0.85rem' }}>Pensando...</span>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '0.5rem',
        padding: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(0,0,0,0.2)',
      }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          disabled={loading}
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.75rem',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            border: 'none',
            borderRadius: '0.75rem',
            color: '#fff',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading || !input.trim() ? 0.5 : 1,
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatPanel;
