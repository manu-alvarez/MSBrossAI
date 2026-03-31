import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import Timer from './components/Timer';
import './index.css';

const API_BASE = './api.php?action=';

function App() {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({
    total_tasks: 0,
    completed_tasks: 0,
    pending_tasks: 0,
    high_priority: 0,
    completion_rate: 0
  });
  const [loading, setLoading] = useState(true);

  // Fetch tasks and stats
  const fetchData = useCallback(async () => {
    try {
      const [tasksRes, statsRes] = await Promise.all([
        axios.get(`${API_BASE}get_tasks`),
        axios.get(`${API_BASE}get_stats`)
      ]);
      
      const fetchedTasks = Array.isArray(tasksRes.data) ? tasksRes.data : [];
      setTasks(fetchedTasks);
      
      // Calculate local stats from tasks
      const total = fetchedTasks.length;
      const completed = fetchedTasks.filter(t => t.completed).length;
      const pending = total - completed;
      const high = fetchedTasks.filter(t => t.priority === 'High' && !t.completed).length;
      const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

      setStats({
        total_tasks: total,
        completed_tasks: completed,
        pending_tasks: pending,
        high_priority: high,
        completion_rate: rate
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  // Task handlers
  const handleTaskToggle = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      await axios.post(`${API_BASE}update_task`, {
        id: taskId,
        completed: !task.completed
      });
      fetchData();
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await axios.delete(`${API_BASE}delete_task&id=${taskId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskAdd = async (title, description, priority) => {
    try {
      await axios.post(`${API_BASE}add_task`, {
        title,
        description,
        priority,
        completed: false,
        created_at: new Date().toISOString()
      });
      fetchData();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="text-xl text-indigo-400 animate-pulse font-bold tracking-widest">
          CARGANDO DOHLER SOTA...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header con Neón */}
        <header className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-2xl shadow-2xl mb-8 group transition-all duration-500 hover:border-indigo-500/50">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center z-10">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                DOHLER <span className="text-indigo-500">SYSTEM</span>
              </h1>
              <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
                Arquitectura Serverless • Gestor de Tareas SOTA
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 inline-block mb-2">
                <span className="text-xs font-bold text-indigo-400 mr-2 uppercase tracking-widest italic">Live Status</span>
                <span className="text-indigo-100 font-bold">{stats.completed_tasks} / {stats.total_tasks} </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Listas de Tareas */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-slate-900/40 backdrop-blur-lg border border-slate-800/50 rounded-2xl p-6 shadow-xl transition-all hover:bg-slate-900/60">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <div className="w-2 h-6 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  Tareas Pendientes
                </h2>
                <span className="bg-indigo-500/10 text-indigo-400 text-xs font-black px-3 py-1 rounded-lg border border-indigo-500/20">
                  {pendingTasks.length} ACTIVE
                </span>
              </div>
              <TaskList 
                tasks={pendingTasks}
                onToggle={handleTaskToggle}
                onDelete={handleTaskDelete}
                onAdd={handleTaskAdd}
                emptyMessage="El sistema está despejado. Inicie una nueva secuencia."
              />
            </section>

            {completedTasks.length > 0 && (
              <section className="bg-slate-900/20 backdrop-blur-sm border border-slate-800/30 rounded-2xl p-6 opacity-60 hover:opacity-100 transition-all">
                <h2 className="text-lg font-bold mb-4 text-slate-500 flex items-center gap-3">
                  <div className="w-2 h-5 bg-slate-600 rounded-full"></div>
                  Historial de Procesos Completados
                </h2>
                <div className="space-y-2">
                  {completedTasks.slice(0, 5).map(task => (
                    <div key={task.id} className="group flex items-center p-3 bg-slate-800/30 rounded-xl border border-slate-700/20 text-slate-500 line-through">
                      <span className="flex-1 text-sm font-medium">{task.title}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-600">Archived</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-indigo-600/5 rounded-2xl border border-indigo-500/20 overflow-hidden">
              <Timer tasks={tasks} />
            </div>

            <section className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl shadow-xl">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="text-indigo-500">⚡</span> Rendimiento
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-black text-slate-400 mb-2 uppercase tracking-tighter">
                    <span>Eficiencia del Sistema</span>
                    <span className="text-indigo-400">{stats.completion_rate}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden p-[2px]">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
                      style={{ width: `${stats.completion_rate}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30 text-center group hover:bg-slate-800 transition-all">
                    <div className="text-3xl font-black text-white group-hover:scale-110 transition-transform">{stats.pending_tasks}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Cola</div>
                  </div>
                  <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30 text-center group hover:bg-slate-800 transition-all">
                    <div className="text-3xl font-black text-indigo-400 group-hover:scale-110 transition-transform">{stats.high_priority}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Crítico</div>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>

        <footer className="mt-16 text-center border-t border-slate-800/50 pt-8 pb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            DOHLER SOTA PERSISTENCE ENGINE v2.0 • {stats.completed_tasks} TASKS LOGGED
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

