/**
 * Timer Component - SOTA Serverless Edition
 */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TimerBar from './TimerBar';
import { FaPlay, FaPause, FaStop, FaClock } from 'react-icons/fa';

const API_BASE = './api.php?action=';

export default function Timer({ tasks }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [progress, setProgress] = useState(0);
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const [duration, setDuration] = useState(25);
  const timerRef = useRef(null);

  // Lógica de temporizador local (Serverless Independence)
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          const next = prev - 1;
          setProgress(((duration * 60 - next) / (duration * 60)) * 100);
          return next;
        });
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      handleComplete();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft, duration]);

  const handleComplete = async () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    try {
      await axios.post(`${API_BASE}save_timer`, {
        task_id: selectedTaskId,
        duration_minutes: duration,
        completed: true
      });
      alert('¡Sesión Pomodoro Completada!');
      setTimeLeft(duration * 60);
      setProgress(0);
    } catch (error) {
      console.error('Error saving timer stats:', error);
    }
  };

  const handleStartTimer = () => {
    if (!selectedTaskId) {
      alert('Seleccione una tarea para iniciar la secuencia.');
      return;
    }
    setIsRunning(true);
  };

  const handleStopTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration * 60);
    setProgress(0);
  };

  const handleDurationChange = (newDuration) => {
    if (!isRunning) {
      setDuration(newDuration);
      setTimeLeft(newDuration * 60);
      setProgress(0);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-black flex items-center gap-3 text-indigo-400">
          <FaClock className="animate-pulse" />
          <span className="tracking-tighter uppercase italic">Control Pomodoro</span>
        </h2>
      </div>

      <div className="mb-6">
        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Asignar Proceso:</label>
        <select
          value={selectedTaskId}
          onChange={(e) => setSelectedTaskId(e.target.value)}
          disabled={isRunning}
          className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 p-3 rounded-xl focus:border-indigo-500 outline-none transition-all text-sm font-medium"
        >
          <option value="">-- SELECCIONAR TAREA --</option>
          {tasks?.filter(t => !t.completed).map(task => (
            <option key={task.id} value={task.id}>
              {task.title.substring(0, 35)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <div className="flex gap-2">
          {[15, 25, 45, 60].map(mins => (
            <button
              key={mins}
              onClick={() => handleDurationChange(mins)}
              disabled={isRunning}
              className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all ${
                duration === mins 
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              } ${isRunning ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              {mins}m
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mb-8 relative">
        <div className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          {formatTime(timeLeft)}
        </div>
        {isRunning && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em] animate-bounce">
            Executing...
          </div>
        )}
      </div>

      <TimerBar progress={progress} isRunning={isRunning} />

      <div className="flex justify-center gap-4 mt-8">
        {!isRunning ? (
          <button
            onClick={handleStartTimer}
            className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-500 transition-all font-black uppercase text-xs tracking-widest shadow-xl hover:shadow-indigo-500/20"
          >
            <FaPlay className="group-hover:scale-125 transition-transform" />
            Iniciar Secuencia
          </button>
        ) : (
          <button
            onClick={handleStopTimer}
            className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-2xl hover:bg-red-600 transition-all font-black uppercase text-xs tracking-widest border border-slate-700 hover:border-red-500"
          >
            <FaStop />
            Abortar
          </button>
        )}
      </div>
    </div>
  );
}