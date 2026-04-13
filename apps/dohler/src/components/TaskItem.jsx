import React, { useState } from 'react';
import { FaTrash, FaCheckCircle, FaRegCircle, FaClock, FaPlus, FaTimes } from 'react-icons/fa';

function formatTimeLeft(ms) {
  if (ms <= 0) return '00:00';
  const totalSecs = Math.floor(ms / 1000);
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function TaskItem({ task, onToggle, onDelete, onAddTimer, onRemoveTimer }) {
  const [mins, setMins] = useState(5);

  const activeTimers = (task.timers || []).filter(t => t.running || t.alerted).map(timer => {
    const timeLeft = Math.max(0, timer.endTime - Date.now());
    return { ...timer, timeLeft };
  });

  return (
    <div className={`group relative transition-all duration-300 ${task.completed ? 'opacity-60' : 'opacity-100'}`}>
      <div className={`absolute -inset-px rounded-xl bg-gradient-to-r transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
        task.completed ? 'from-slate-700 to-slate-600' : 'from-blue-500/20 to-cyan-500/20'
      }`}></div>
      
      <div className="relative flex flex-col gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl hover:border-slate-500/50 transition-all">
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggle}
            className={`flex-shrink-0 text-xl transition-all duration-300 transform active:scale-95 ${
              task.completed ? 'text-blue-500' : 'text-slate-600 hover:text-blue-400'
            }`}
          >
            {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[9px] font-black px-2 py-0.5 rounded border tracking-[0.1em] text-cyan-400 bg-cyan-400/10 border-cyan-400/20`}>
                {task.category?.toUpperCase() || 'PROCESO'}
              </span>
            </div>
            
            <h3 className={`text-sm font-bold tracking-tight truncate transition-all ${
              task.completed ? 'text-slate-500 line-through' : 'text-slate-200'
            }`}>
              {task.title}
            </h3>
          </div>

          <button 
            onClick={onDelete}
            className="p-2 text-slate-600 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
          >
            <FaTrash className="text-xs" />
          </button>
        </div>

        {/* Timers Area */}
        {!task.completed && (
          <div className="mt-2 pl-10 border-t border-slate-700/50 pt-3">
            <div className="flex flex-wrap gap-2 mb-3">
              {activeTimers.map(t => (
                <div key={t.id} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold ${
                  t.alerted ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse' : 'bg-slate-800 border-slate-600 text-slate-300'
                }`}>
                  <FaClock />
                  <span>{formatTimeLeft(t.timeLeft)}</span>
                  <button onClick={() => onRemoveTimer(t.id)} className="ml-1 text-slate-500 hover:text-rose-400">
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="number" 
                min="1" max="120"
                value={mins} 
                onChange={(e) => setMins(parseInt(e.target.value) || 1)}
                className="w-16 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-center text-white outline-none focus:border-blue-500"
              />
              <span className="text-[10px] text-slate-500 font-bold uppercase">minutos</span>
              <button 
                onClick={() => onAddTimer(mins)}
                className="ml-2 px-3 py-1 bg-slate-700 hover:bg-blue-600 text-white rounded text-[10px] font-bold uppercase flex items-center gap-1 transition-colors"
              >
                <FaPlus /> Timer
              </button>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}