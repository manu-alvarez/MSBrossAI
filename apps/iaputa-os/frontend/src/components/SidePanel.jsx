import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SidePanel = ({ tools, onAction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed left-0 top-0 bottom-0 flex items-center z-50 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: isHovered ? 0 : -30, opacity: isHovered ? 1 : 0.4 }}
        className="glass-card glow-border p-4 flex flex-col gap-4 min-w-[200px]"
      >
        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-2 border-b border-white/5 pb-2 text-center">
          PROTOCOLOS
        </div>
        
        {tools.map(t => (
          <motion.button
            key={t.id}
            whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAction(t)}
            className="w-full flex items-center gap-4 p-3 rounded-xl transition-colors group cursor-none"
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 group-hover:border-white/10 transition-all"
              style={{ color: t.color }}
            >
              <t.icon className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            </div>
            
            <div className="flex flex-col items-start select-none">
              <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">{t.label}</span>
              <span className="text-[9px] text-white/20 group-hover:text-white/40">{t.sub}</span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Indicador lateral de hover */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-accent-cyan/20 rounded-r-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};

export default SidePanel;
