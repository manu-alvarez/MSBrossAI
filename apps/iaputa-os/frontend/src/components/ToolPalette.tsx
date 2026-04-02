import React from 'react';

interface ToolPaletteProps {
  onAction: (action: string) => void;
}

const TOOLS = [
  { id: 'vision', icon: '👁️', label: 'Visión', color: '#8b5cf6' },
  { id: 'screenshot', icon: '📷', label: 'Captura', color: '#06b6d4' },
  { id: 'calendar', icon: '📅', label: 'Calendario', color: '#10b981' },
  { id: 'email', icon: '📧', label: 'Correo', color: '#f59e0b' },
  { id: 'terminal', icon: '💻', label: 'Terminal', color: '#ef4444' },
  { id: 'python', icon: '🐍', label: 'Python', color: '#3b82f6' },
];

const ToolPalette: React.FC<ToolPaletteProps> = ({ onAction }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      padding: '0.5rem',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '12px',
    }}>
      {TOOLS.map(tool => (
        <button key={tool.id} onClick={() => onAction(tool.id)} style={{
          padding: '0.5rem 1rem',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '8px',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.85rem',
          transition: 'all 0.2s',
        }}>
          <span>{tool.icon}</span>
          <span>{tool.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ToolPalette;
