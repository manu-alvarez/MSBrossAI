import React from 'react';
import { PRACTICA } from '../lib/data';
import { motion } from 'framer-motion';
import { FileText, BookOpen } from 'lucide-react';

export default function ReadingView() {
  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-sm font-mono text-neon-cyan tracking-wider uppercase mb-1">Reading Practice</h2>
          <p className="text-muted text-sm">Mejora tu comprensión lectora de IT.</p>
        </div>
        <FileText size={28} className="text-matrix-green opacity-80" />
      </div>

      <div className="space-y-5">
        {PRACTICA.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-matrix-green">{item.level}</span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>
            
            <div className="bg-[#02050A]/50 border border-border/30 rounded-xl p-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan to-matrix-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
              {item.text.split('\n').map((line, idx) => {
                const isUser = line.startsWith('User:');
                const isIT = line.startsWith('IT:');
                
                if (isUser || isIT) {
                  return (
                    <p key={idx} className={`mb-2 text-sm leading-relaxed ${isIT ? 'text-neon-cyan' : 'text-gray-300'}`}>
                      <span className="font-bold opacity-70 mr-2">{isUser ? 'User:' : 'IT:'}</span>
                      {line.replace(/^(User|IT):\s*/, '')}
                    </p>
                  );
                }
                
                return <p key={idx} className="mb-2 text-sm leading-relaxed text-gray-300">{line}</p>;
              })}
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="flex items-center gap-2 text-xs font-medium text-neon-cyan hover:text-white transition-colors bg-neon-cyan/10 hover:bg-neon-cyan/20 px-3 py-1.5 rounded-lg border border-neon-cyan/20">
                <BookOpen size={14} /> Traducir
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
