import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CorePlugins = ({ plugins }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed right-0 top-0 bottom-0 flex items-center z-50 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0.4 }}
        className="glass-card glow-border p-5 flex flex-col gap-4 min-w-[200px]"
      >
        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-2 border-b border-white/5 pb-2 text-center">
          CORE PLUGINS
        </div>
        
        {plugins.map(p => (
          <div key={p.id} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 last:pb-0">
            <div className="flex justify-between items-center group">
              <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">{p.label}</span>
              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: p.color }}>
                {p.status}
              </span>
            </div>
            
            {/* Health Bar Luxury */}
            <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden mt-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: p.status === 'ACTIVE' ? '100%' : '30%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: p.color, opacity: 0.6 }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Indicador lateral de hover */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-accent-purple/20 rounded-l-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};

export default CorePlugins;
