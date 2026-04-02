import React from 'react';

interface StatusBarProps {
  status: {
    backend: boolean;
    llm: string;
    memory: number;
  };
}

const StatusBar: React.FC<StatusBarProps> = ({ status }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.5rem 1rem',
      background: 'rgba(0,0,0,0.3)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.5)',
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: status.backend ? '#10b981' : '#ef4444',
        }} />
        {status.backend ? 'Backend OK' : 'Sin conexión'}
      </span>
      <span>LLM: {status.llm}</span>
      <span>Memoria: {status.memory} msgs</span>
      <span style={{ marginLeft: 'auto' }}>v3.0</span>
    </div>
  );
};

export default StatusBar;
