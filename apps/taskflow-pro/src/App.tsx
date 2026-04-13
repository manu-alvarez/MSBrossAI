import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useTaskStore } from './store/taskStore';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Categories = lazy(() => import('./pages/Categories'));
const Settings = lazy(() => import('./pages/Settings'));

const App: React.FC = () => {
  const { tasks } = useTaskStore();

  useEffect(() => {
    const checkAlarms = () => {
      useTaskStore.getState().checkReminders();
      const now = new Date();
      tasks.forEach(task => {
        if (task.reminderTime && task.status !== 'completed') {
          const reminderDate = new Date(task.reminderTime);
          const diff = now.getTime() - reminderDate.getTime();
          
          // Disparar si estamos dentro del minuto actual (tolerancia de 60s)
          if (diff >= 0 && diff < 60000) {
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification(`🚀 Alarma TaskFlowPro: ${task.title}`, {
                body: `Es hora de cumplir tu misión. Prioridad: ${task.priority.toUpperCase()}`,
                icon: '/taskflow/pwa-192x192.png'
              });
              
              // Opcional: Sonido de alerta
              const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
              audio.play().catch(() => {});
            }
          }
        }
      });
    };

    const interval = setInterval(checkAlarms, 60000); // Chequear cada minuto
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#00F5FF' }}>⚡</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
