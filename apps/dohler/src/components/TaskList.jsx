import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { FaPlus, FaCogs } from 'react-icons/fa';

export default function TaskList({ tasks, onToggle, onDelete, onAdd, onAddTimer, onRemoveTimer, emptyMessage }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Válvulas');

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    onAdd(newTaskTitle, newCategory);
    setNewTaskTitle('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddTask();
  };

  const CATEGORIES = ['Válvulas', 'Bombas', 'Motores', 'Zumos', 'Concentrados'];

  return (
    <div className="space-y-6">
      <div className="relative group/input">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover/input:opacity-40 transition duration-500"></div>
        <div className="relative flex flex-col md:flex-row gap-3 bg-slate-900/80 p-2 rounded-2xl border border-slate-700/50">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="CREAR NUEVO ACTIVO/PROCESO..."
            className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder:text-slate-600 font-bold tracking-tight text-sm"
          />
          <div className="flex gap-2">
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl outline-none text-[10px] font-black uppercase tracking-widest border border-slate-700 focus:border-blue-500 transition-all cursor-pointer"
            >
              {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <button
              onClick={handleAddTask}
              disabled={!newTaskTitle.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 hover:bg-blue-500 transition-all disabled:opacity-30 shadow-lg shadow-blue-500/10"
            >
              <FaPlus />
              <span>Ejecutar</span>
            </button>
          </div>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-12 bg-slate-800/20 rounded-2xl border border-dashed border-slate-700/50">
          <FaCogs className="mx-auto text-slate-700 text-3xl mb-4 animate-pulse" />
          <p className="text-slate-500 font-black uppercase tracking-widest text-xs italic">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={() => onToggle(task.id)} 
              onDelete={() => onDelete(task.id)}
              onAddTimer={(mins) => onAddTimer(task.id, mins)}
              onRemoveTimer={(tId) => onRemoveTimer(task.id, tId)}
            />
          ))}
        </div>
      )}
    </div>
  );
}