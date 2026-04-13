import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('dohler_industrial_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0, rate: 0 });

  useEffect(() => {
    localStorage.setItem('dohler_industrial_tasks', JSON.stringify(tasks));
    
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    setStats({
      total,
      completed,
      pending: total - completed,
      rate: total > 0 ? Math.round((completed / total) * 100) : 0
    });
  }, [tasks]);

  // Loop para comprobar temporizadores de tareas caducadas a nivel global
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      let alertTriggered = false;
      
      setTasks(currentTasks => {
        let changed = false;
        const updated = currentTasks.map(task => {
          let timersChanged = false;
          const updatedTimers = task.timers?.map(timer => {
            if (timer.running && now >= timer.endTime && !timer.alerted) {
              alertTriggered = true;
              timersChanged = true;
              
              if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(`¡Tiempo Cumplido: ${task.title}!`, {
                  body: `Temporizador finalizado en proceso de ${task.category}`,
                  icon: '/dohler/pwa-192x192.png'
                });
              }
              const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
              audio.play().catch(() => {});
              
              return { ...timer, running: false, alerted: true, timeLeft: 0 };
            }
            if (timer.running) timersChanged = true;
            return timer;
          }) || [];
          
          if (timersChanged) changed = true;
          return { ...task, timers: updatedTimers };
        });
        return changed ? updated : currentTasks;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTaskToggle = (taskId) => {
    setTasks(ts => ts.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const handleTaskDelete = (taskId) => {
    setTasks(ts => ts.filter(t => t.id !== taskId));
  };

  const handleTaskAdd = (title, category) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      category, // Zumos, Concentrados, Válvulas, Bombas, Motores
      completed: false,
      created_at: new Date().toISOString(),
      timers: [] // multi-timer
    };
    setTasks(ts => [newTask, ...ts]);
  };
  
  const handleAddTimer = (taskId, minutes) => {
    setTasks(ts => ts.map(t => {
      if (t.id === taskId) {
        const ms = minutes * 60 * 1000;
        const newTimer = {
          id: crypto.randomUUID(),
          durationMs: ms,
          endTime: Date.now() + ms,
          running: true,
          alerted: false
        };
        return { ...t, timers: [...(t.timers || []), newTimer] };
      }
      return t;
    }));
  };
  
  const handleRemoveTimer = (taskId, timerId) => {
    setTasks(ts => ts.map(t => t.id === taskId ? { ...t, timers: t.timers.filter(tt => tt.id !== timerId) } : t));
  };

  const requestNotif = () => {
    if ('Notification' in window) Notification.requestPermission();
  };

  const pendingTasks = tasks.filter(t => !t.completed);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8 font-sans" onClick={requestNotif}>
      <div className="max-w-6xl mx-auto">
        <header className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-2xl shadow-2xl mb-8 group transition-all duration-500 hover:border-blue-500/50">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center z-10">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                DÖHLER <span className="text-blue-500">INDUSTRIAL</span>
              </h1>
              <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
                Gestión de Plantas • Motores • Válvulas • Zumos
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 inline-block mb-2">
                <span className="text-xs font-bold text-blue-400 mr-2 uppercase tracking-widest italic">Activos</span>
                <span className="text-blue-100 font-bold">{stats.completed} / {stats.total} </span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <section className="bg-slate-900/40 backdrop-blur-lg border border-slate-800/50 rounded-2xl p-6 shadow-xl">
            <TaskList 
              tasks={pendingTasks}
              onToggle={handleTaskToggle}
              onDelete={handleTaskDelete}
              onAdd={handleTaskAdd}
              onAddTimer={handleAddTimer}
              onRemoveTimer={handleRemoveTimer}
              emptyMessage="No hay procesos industriales activos."
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
