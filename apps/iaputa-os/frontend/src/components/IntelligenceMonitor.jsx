import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const IntelligenceMonitor = ({ stats = {} }) => {
  // Datos simulados o reales de telemetría SOTA
  const metrics = useMemo(() => [
    { label: 'LATENCIA NÚCLEO', value: stats.latency || '24ms', color: '#00f2ff' },
    { label: 'MEMORIA VECTORIAL', value: stats.memCount || '1.2k rec', color: '#8a2be2' },
    { label: 'ORQUESTADOR', value: stats.model || 'Groq-Llama3', color: '#ffffff' },
    { label: 'FLUJO DATOS', value: stats.throughput || '8.4 tokens/s', color: '#00f2ff' },
  ], [stats]);

  return (
    <div className="fixed right-0 top-0 bottom-0 flex items-center z-50 px-6 pointer-events-none">
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="glass-card glow-border p-6 flex flex-col gap-6 min-w-[220px] pointer-events-auto"
      >
        <div className="flex flex-col items-center gap-1 mb-2 border-b border-white/5 pb-4">
          <div className="text-[10px] uppercase font-black tracking-[0.5em] text-white/20">
            INTELLIGENCE MATRIX
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#00f2ff]" />
            <span className="text-[9px] font-mono text-accent-cyan tracking-widest uppercase">Sync: Global</span>
          </div>
        </div>
        
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">{m.label}</span>
              <span className="text-[11px] font-black font-mono" style={{ color: m.color }}>{m.value}</span>
            </div>
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                className="h-full bg-current opacity-40"
                style={{ color: m.color }}
              />
            </div>
          </div>
        ))}

        {/* Mini Spectrum Visualizer (Decorative Luxury) */}
        <div className="mt-4 flex items-end gap-[2px] h-8 justify-center opacity-30">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [4, 12, 18, 6, 14] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
              className="w-[2px] bg-white rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IntelligenceMonitor;
