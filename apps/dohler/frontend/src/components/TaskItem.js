/**
 * TaskItem Component - SOTA Edition
 */
import React from 'react';
import { FaTrash, FaCheckCircle, FaRegCircle, FaCalendarAlt, FaFire } from 'react-icons/fa';

export default function TaskItem({ task, onToggle, onDelete }) {
  const getPriorityStyle = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      case 'low': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'CRÍTICO';
      case 'low': return 'MENOR';
      default: return 'ESTÁNDAR';
    }
  };

  return (
    <div className={`group relative transition-all duration-300 ${task.completed ? 'opacity-60' : 'opacity-100'}`}>
      <div className={`absolute -inset-px rounded-xl bg-gradient-to-r transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
        task.completed ? 'from-slate-700 to-slate-600' : 'from-indigo-500/20 to-blue-500/20'
      }`}></div>
      
      <div className="relative flex items-center gap-4 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl hover:border-slate-500/50 transition-all">
        {/* Checkbox SOTA */}
        <button 
          onClick={onToggle}
          className={`flex-shrink-0 text-xl transition-all duration-300 transform active:scale-95 ${
            task.completed ? 'text-indigo-500' : 'text-slate-600 hover:text-indigo-400'
          }`}
        >
          {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[8px] font-black px-2 py-0.5 rounded border tracking-[0.1em] ${getPriorityStyle(task.priority)}`}>
              {getPriorityLabel(task.priority)}
            </span>
            {task.priority?.toLowerCase() === 'high' && !task.completed && (
              <FaFire className="text-rose-500 text-[10px] animate-pulse" />
            )}
          </div>
          
          <h3 className={`text-sm font-bold tracking-tight truncate transition-all ${
            task.completed ? 'text-slate-500 line-through' : 'text-slate-200'
          }`}>
            {task.title}
          </h3>
          
          <div className="flex items-center gap-3 mt-1.5">
            <span className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
              <FaCalendarAlt className="text-[9px]" />
              {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
            </span>
            {task.description && (
              <span className="text-[10px] text-slate-600 truncate max-w-[150px]">
                {task.description}
              </span>
            )}
          </div>
        </div>

        {/* Acciones */}
        <button 
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 p-2 text-slate-600 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
        >
          <FaTrash className="text-xs" />
        </button>
      </div>
    </div>
  );
}