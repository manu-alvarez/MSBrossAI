import React from 'react';

interface VisionPanelProps {
  imageUrl?: string;
  onCapture: (type: 'screen' | 'webcam') => void;
  loading: boolean;
}

const VisionPanel: React.FC<VisionPanelProps> = ({ imageUrl, onCapture, loading }) => {
  return (
    <div style={{
      padding: '1rem',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '12px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
      }}>
        <h3 style={{ fontSize: '0.9rem', fontWeight: 700 }}>👁️ Visión</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => onCapture('screen')} disabled={loading} style={{
            padding: '0.4rem 0.8rem',
            background: 'rgba(139,92,246,0.2)',
            border: '1px solid rgba(139,92,246,0.3)',
            borderRadius: '6px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.8rem',
          }}>
            📷 Pantalla
          </button>
          <button onClick={() => onCapture('webcam')} disabled={loading} style={{
            padding: '0.4rem 0.8rem',
            background: 'rgba(6,182,212,0.2)',
            border: '1px solid rgba(6,182,212,0.3)',
            borderRadius: '6px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.8rem',
          }}>
            📹 Cámara
          </button>
        </div>
      </div>
      {imageUrl && (
        <img src={imageUrl} alt="Visión" style={{
          width: '100%',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.1)',
        }} />
      )}
      {!imageUrl && (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.85rem',
        }}>
          Captura una imagen para análisis con IA
        </div>
      )}
    </div>
  );
};

export default VisionPanel;
