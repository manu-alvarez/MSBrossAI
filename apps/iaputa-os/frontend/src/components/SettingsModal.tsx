import React, { useState } from 'react';

interface AppSettings {
  apiKey: string;
  autoAudio: boolean;
  language: string;
  provider: 'groq' | 'ollama' | 'openrouter';
}

interface SettingsModalProps {
  settings: AppSettings;
  onSettingsChange: (settings: AppSettings) => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ settings, onSettingsChange, onClose }) => {
  const [local, setLocal] = useState({ ...settings });

  const handleSave = () => {
    onSettingsChange(local);
    localStorage.setItem('iaputa-settings', JSON.stringify(local));
    onClose();
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#1a1a2e',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 20,
        padding: '2rem',
        maxWidth: 500,
        width: '90%',
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>⚙️ Ajustes</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>API Key</label>
          <input type="password" value={local.apiKey} onChange={e => setLocal({ ...local, apiKey: e.target.value })} style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: '#fff',
          }} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>Provider</label>
          <select value={local.provider} onChange={e => setLocal({ ...local, provider: e.target.value as any })} style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: '#fff',
          }}>
            <option value="groq">Groq (Llama 3.3)</option>
            <option value="ollama">Ollama (Local)</option>
            <option value="openrouter">OpenRouter</option>
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" checked={local.autoAudio} onChange={e => setLocal({ ...local, autoAudio: e.target.checked })} />
            <span style={{ fontSize: '0.85rem' }}>Auto-play audio responses</span>
          </label>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: '#fff',
            cursor: 'pointer',
          }}>Cancelar</button>
          <button onClick={handleSave} style={{
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
          }}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
