import React from 'react';
import { useAppStore } from './store';
import { Settings, BookOpen, MessageSquare, Headphones, FileText, ChevronRight, CheckCircle } from 'lucide-react';
import { TEMARIO } from './lib/data';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { activeTab, setActiveTab } = useAppStore();

  const renderContent = () => {
    switch (activeTab) {
      case 'temario': return <TemarioView />;
      case 'practica': return <div className="p-8 text-center text-muted">Práctica de Reading (En construcción React V3)</div>;
      case 'pruebas': return <div className="p-8 text-center text-muted">Listening / Pruebas (En construcción React V3)</div>;
      case 'tutor': return <div className="p-8 text-center text-muted">Tutor IA Chat (En construcción React V3)</div>;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden pb-24 font-inter">
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
          <p className="text-muted text-sm mt-1">BeastMode Ultra GodMode V3</p>
        </div>
        <button className="h-10 w-10 rounded-xl glass-panel flex items-center justify-center hover:scale-105 transition-transform">
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

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-border/30 rounded-t-3xl pb-safe">
        <div className="max-w-md mx-auto flex justify-between p-2">
          <NavBtn icon={<BookOpen size={22} />} label="Temario" active={activeTab==='temario'} onClick={()=>setActiveTab('temario')} />
          <NavBtn icon={<FileText size={22} />} label="Reading" active={activeTab==='practica'} onClick={()=>setActiveTab('practica')} />
          <NavBtn icon={<Headphones size={22} />} label="Listening" active={activeTab==='pruebas'} onClick={()=>setActiveTab('pruebas')} />
          <NavBtn icon={<MessageSquare size={22} />} label="Tutor" active={activeTab==='tutor'} onClick={()=>setActiveTab('tutor')} />
        </div>
      </nav>
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

function TemarioView() {
  const { progress, toggleModuleProgress } = useAppStore();
  const completedCount = Object.values(progress.status).filter(Boolean).length;
  const pct = Math.round((completedCount / TEMARIO.length) * 100) || 0;

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-5 rounded-2xl">
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-sm font-mono text-neon-cyan tracking-wider uppercase">Progreso Global</h2>
          <span className="text-2xl font-bold font-mono">{completedCount}/{TEMARIO.length}</span>
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
          const isDone = !!progress.status[mod.id];
          return (
            <motion.div 
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel rounded-2xl p-5 flex items-start gap-4 cursor-pointer group"
              onClick={() => toggleModuleProgress(mod.id)}
            >
              <button className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isDone ? 'bg-neon-cyan border-neon-cyan text-deep-void shadow-[0_0_15px_rgba(0,255,204,0.6)]' : 'border-muted text-transparent group-hover:border-neon-cyan/50'}`}>
                <CheckCircle size={16} className={isDone ? 'opacity-100' : 'opacity-0'} />
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-neon-cyan">Módulo {i+1}</span>
                  <span className="text-xs font-mono text-muted">{mod.level}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-matrix-green transition-colors">{mod.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{mod.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {mod.topics.map((t: string) => (
                    <span key={t} className="text-[11px] bg-surface2 px-2.5 py-1 rounded-full border border-white/5 text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
              <ChevronRight className="text-muted group-hover:text-neon-cyan transition-colors mt-2" size={20} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
