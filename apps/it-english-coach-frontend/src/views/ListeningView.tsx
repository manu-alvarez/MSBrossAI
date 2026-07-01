import React, { useState } from 'react';
import { PRUEBAS } from '../lib/data';
import { motion } from 'framer-motion';
import { Headphones, Play, CheckCircle2, XCircle } from 'lucide-react';

export default function ListeningView() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [playing, setPlaying] = useState<string | null>(null);

  const handleSelect = (qId: string, opt: string) => {
    setAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  const playTTS = (text: string, id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.9;
      u.onend = () => setPlaying(null);
      setPlaying(id);
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-sm font-mono text-neon-cyan tracking-wider uppercase mb-1">Listening & Grammar</h2>
          <p className="text-muted text-sm">Entrena tu oído y vocabulario IT.</p>
        </div>
        <Headphones size={28} className="text-neon-cyan opacity-80" />
      </div>

      <div className="space-y-5">
        {PRUEBAS.map((q, i) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.answer;
          const isAnswered = userAnswer !== undefined;

          return (
            <motion.div 
              key={q.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel rounded-2xl p-5 border-l-4 ${isAnswered ? (isCorrect ? 'border-l-matrix-green' : 'border-l-red-500') : 'border-l-transparent'}`}
            >
              <div className="flex gap-4">
                <button 
                  onClick={() => playTTS(q.text.replace('___', q.answer), q.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${playing === q.id ? 'bg-neon-cyan text-deep-void animate-pulse' : 'bg-surface border border-border text-neon-cyan hover:bg-neon-cyan/20'}`}
                >
                  <Play size={16} className="ml-1" />
                </button>
                <div className="flex-1">
                  <p className="text-base text-gray-200 mb-4 leading-relaxed font-medium">
                    {q.text.split('___').map((part, idx, arr) => (
                      <React.Fragment key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <span className={`inline-block px-3 py-0.5 mx-1 rounded border-b-2 font-mono text-sm ${isAnswered ? (isCorrect ? 'text-matrix-green border-matrix-green' : 'text-red-400 border-red-400') : 'text-muted border-border'}`}>
                            {userAnswer || "___"}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {q.options.map(opt => {
                      const isSelected = userAnswer === opt;
                      const isWinningOpt = isAnswered && opt === q.answer;
                      const isLosingOpt = isSelected && !isCorrect;
                      
                      let btnClass = "bg-surface border-border/50 text-muted hover:border-neon-cyan/50 hover:text-white";
                      if (isWinningOpt) btnClass = "bg-matrix-green/20 border-matrix-green text-matrix-green";
                      else if (isLosingOpt) btnClass = "bg-red-500/20 border-red-500 text-red-400";
                      
                      return (
                        <button 
                          key={opt}
                          disabled={isAnswered}
                          onClick={() => handleSelect(q.id, opt)}
                          className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm transition-all ${btnClass}`}
                        >
                          {opt}
                          {isWinningOpt && <CheckCircle2 size={16} />}
                          {isLosingOpt && <XCircle size={16} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
