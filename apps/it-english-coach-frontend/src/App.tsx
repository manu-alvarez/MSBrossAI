import React, { useState } from 'react';
import { useAppStore } from './store';
import { Settings, BookOpen, MessageSquare, Headphones, FileText, ChevronRight, CheckCircle, ChevronDown, X } from 'lucide-react';
import { TEMARIO } from './lib/data';
import { motion, AnimatePresence } from 'framer-motion';

import ReadingView from './views/ReadingView';
import ListeningView from './views/ListeningView';
import TutorView from './views/TutorView';

function App() {
  const { activeTab, setActiveTab } = useAppStore();
  const [showSettings, setShowSettings] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'temario': return <TemarioView />;
      case 'practica': return <ReadingView />;
      case 'pruebas': return <ListeningView />;
      case 'tutor': return <TutorView />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden pb-24 font-inter bg-[#030712]">
      {/* Background Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>

      {/* Header */}
      <header className="px-6 pt-10 pb-6 flex items-center gap-4 max-w-3xl mx-auto">
        <div className="h-12 w-12 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 glass-panel">
          <span className="text-2xl">🇬🇧</span>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-extrabold tracking-tight text-gradient">IT English Coach</h1>
        </div>
        <button onClick={() => setShowSettings(true)} className="h-10 w-10 rounded-xl glass-panel flex items-center justify-center hover:scale-105 transition-transform">
          <Settings size={20} className="text-neon-cyan" />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Solid Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A101C] border-t border-border/30 rounded-t-3xl pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-md mx-auto flex justify-between p-2">
          <NavBtn icon={<BookOpen size={22} />} label="Temario" active={activeTab==='temario'} onClick={()=>setActiveTab('temario')} />
          <NavBtn icon={<FileText size={22} />} label="Reading" active={activeTab==='practica'} onClick={()=>setActiveTab('practica')} />
          <NavBtn icon={<Headphones size={22} />} label="Listening" active={activeTab==='pruebas'} onClick={()=>setActiveTab('pruebas')} />
          <NavBtn icon={<MessageSquare size={22} />} label="Tutor" active={activeTab==='tutor'} onClick={()=>setActiveTab('tutor')} />
        </div>
      </nav>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <SettingsModal onClose={() => setShowSettings(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function NavBtn({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 rounded-2xl transition-all duration-300 ${active ? 'bg-surface text-neon-cyan shadow-[0_0_15px_rgba(0,255,204,0.15)]' : 'text-muted hover:text-white'}`}>
      {icon}
      <span className="text-[11px] font-medium tracking-wide">{label}</span>
    </button>
  );
}

function SettingsModal({ onClose }: { onClose: () => void }) {
  const { provider, model, setConfig } = useAppStore();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
        className="w-full max-w-md bg-surface border border-border/50 rounded-3xl p-6 shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted hover:text-white p-2">
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-white mb-6">Configuración IA</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Proveedor / URL API</label>
            <input 
              type="text" 
              value={provider} 
              onChange={e => setConfig({ provider: e.target.value })}
              className="w-full bg-[#050A14] border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-cyan"
              placeholder="Ej: https://api.openai.com/v1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Modelo</label>
            <input 
              type="text" 
              value={model} 
              onChange={e => setConfig({ model: e.target.value })}
              className="w-full bg-[#050A14] border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-cyan"
              placeholder="Ej: gpt-4o-mini"
            />
            <p className="text-xs text-muted mt-2">Los datos se guardan localmente en tu navegador. Tus APIs no están expuestas al servidor.</p>
          </div>
        </div>
        <button onClick={onClose} className="w-full mt-8 bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan text-neon-cyan font-bold py-3 rounded-xl transition-colors">
          Guardar
        </button>
      </motion.div>
    </motion.div>
  );
}

function TemarioView() {
  const { progress, toggleModuleProgress } = useAppStore();
  const completedCount = Object.values(progress.status).filter(Boolean).length;
  const pct = Math.round((completedCount / TEMARIO.length) * 100) || 0;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-5 rounded-2xl">
        <p className="text-sm text-muted mb-4 leading-relaxed">Ruta A1 → B2 en 12 módulos, equilibrio 50% inglés general / 50% IT. Pulsa el círculo para marcar cada módulo como completado.</p>
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-sm font-mono text-neon-cyan tracking-wider uppercase">Progreso Global</h2>
          <span className="text-2xl font-bold font-mono text-white">{completedCount}/{TEMARIO.length}</span>
        </div>
        <div className="h-3 bg-surface rounded-full overflow-hidden border border-border/30 relative">
          <div className="absolute inset-0 bg-matrix-green/20 blur-md"></div>
          <motion.div 
            className="h-full bg-gradient-to-r from-neon-cyan to-matrix-green relative z-10"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, type: "spring" }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {TEMARIO.map((mod: any, i: number) => {
          const isDone = !!progress.status[mod.code];
          const isOpen = openId === mod.code;
          return (
            <motion.div 
              key={mod.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel rounded-2xl overflow-hidden group"
            >
              <div 
                className="p-5 flex items-start gap-4 cursor-pointer"
                onClick={() => setOpenId(isOpen ? null : mod.code)}
              >
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleModuleProgress(mod.code); }}
                  className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isDone ? 'bg-neon-cyan border-neon-cyan text-deep-void shadow-[0_0_15px_rgba(0,255,204,0.6)]' : 'border-muted text-transparent group-hover:border-neon-cyan/50'}`}
                >
                  <CheckCircle size={16} className={isDone ? 'opacity-100' : 'opacity-0'} />
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-neon-cyan">{mod.code}</span>
                    <span className="text-xs font-mono text-muted">{mod.from} → {mod.to}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{mod.title}</h3>
                </div>
                <ChevronDown className={`text-muted transition-transform duration-300 mt-2 ${isOpen ? 'rotate-180 text-neon-cyan' : ''}`} size={20} />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-border/30 bg-[#050A14]/50"
                  >
                    <div className="p-5 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-[#f59e0b] mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span> Objetivos · General</h4>
                          <ul className="space-y-1">
                            {mod.og?.map((t:string, j:number) => <li key={j} className="text-xs text-gray-300 flex items-start gap-2"><span className="text-muted">›</span> {t}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#14b8a6] mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#14b8a6]"></span> Objetivos · IT / Sistemas</h4>
                          <ul className="space-y-1">
                            {mod.oi?.map((t:string, j:number) => <li key={j} className="text-xs text-gray-300 flex items-start gap-2"><span className="text-muted">›</span> {t}</li>)}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-[#f59e0b] mb-2">Vocabulario general</h4>
                          <div className="flex flex-wrap gap-2">
                            {mod.vg?.map((v:string[], j:number) => (
                              <div key={j} className="text-xs bg-surface border border-border rounded-lg px-2 py-1 flex gap-2"><span className="text-gray-200">{v[0]}</span><span className="text-muted">{v[1]}</span></div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#14b8a6] mb-2">Vocabulario IT</h4>
                          <div className="flex flex-wrap gap-2">
                            {mod.vi?.map((v:string[], j:number) => (
                              <div key={j} className="text-xs bg-surface border border-border rounded-lg px-2 py-1 flex gap-2"><span className="text-[#14b8a6]">{v[0]}</span><span className="text-muted">{v[1]}</span></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-gray-400 mb-2">Gramática</h4>
                          <ul className="space-y-1">
                            {mod.gr?.map((t:string, j:number) => <li key={j} className="text-xs text-gray-300 flex items-start gap-2"><span className="text-muted">›</span> {t}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-400 mb-2">Frases modelo</h4>
                          <div className="space-y-2">
                            {mod.ph?.map((p:string, j:number) => (
                              <div key={j} className="text-xs font-mono bg-surface2 border border-border/50 rounded-lg p-2 text-gray-300 leading-relaxed">"{p}"</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
