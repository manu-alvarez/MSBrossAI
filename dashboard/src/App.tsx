import React, { useEffect, useState, useCallback } from 'react';
import { checkAllAppsHealth, AppStatus } from './services/healthApi';
import { motion, AnimatePresence } from 'framer-motion';

const APP_ICONS: Record<string, string> = {
  'IAPuta OS': '🤖',
  'LIVEKIT Nikolina': '🎙️',
  'Arantxa Translate': '🌐',
  'TaskFlowPro': '✅',
  'DOHLER': '📋',
  'LogiSearch': '🔍',
  'Edelweiss': '👶',
  'Moko-Tools': '🛠️',
  'CombiPro': '⚽',
};

const APP_COLORS: Record<string, string> = {
  'IAPuta OS': '#8B5CF6',
  'LIVEKIT Nikolina': '#06B6D4',
  'Arantxa Translate': '#10B981',
  'TaskFlowPro': '#F59E0B',
  'DOHLER': '#6366F1',
  'LogiSearch': '#3B82F6',
  'Edelweiss': '#EC4899',
  'Moko-Tools': '#14B8A6',
  'CombiPro': '#EF4444',
};

function App() {
  const [apps, setApps] = useState<AppStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const checkHealth = useCallback(async () => {
    setLoading(true);
    const results = await checkAllAppsHealth();
    setApps(results);
    setLastRefresh(new Date());
    setLoading(false);
  }, []);

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 60000);
    return () => clearInterval(interval);
  }, [checkHealth]);

  const onlineCount = apps.filter(a => a.status === 'online').length;
  const offlineCount = apps.filter(a => a.status === 'offline').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MSBrossAI
              </h1>
              <p className="text-slate-400 text-sm mt-1">Ecosistema Unificado • {apps.length} Aplicaciones</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${onlineCount === apps.length ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
                  <span className="text-sm font-medium">{onlineCount}/{apps.length} Online</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Última verificación: {lastRefresh.toLocaleTimeString()}
                </p>
              </div>
              <button
                onClick={checkHealth}
                disabled={loading}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-all disabled:opacity-50"
              >
                {loading ? 'Verificando...' : '↻ Refresh'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, i) => (
              <motion.a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              >
                {/* Status indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                  app.status === 'online' ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' :
                  app.status === 'offline' ? 'bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]' :
                  'bg-yellow-400 animate-pulse'
                }`} />

                {/* Icon */}
                <div className="text-4xl mb-4">{APP_ICONS[app.name] || '📦'}</div>

                {/* Name */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {app.name}
                </h3>

                {/* Status details */}
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">
                    {app.status === 'online' ? (
                      <span className="text-green-400">● Online</span>
                    ) : app.status === 'offline' ? (
                      <span className="text-red-400">● Offline</span>
                    ) : (
                      <span className="text-yellow-400">● Checking...</span>
                    )}
                  </p>
                  {app.responseTime && (
                    <p className="text-xs text-slate-500">
                      ⚡ {app.responseTime}ms
                    </p>
                  )}
                  {app.error && (
                    <p className="text-xs text-red-400 truncate" title={app.error}>
                      ⚠️ {app.error.slice(0, 50)}...
                    </p>
                  )}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${APP_COLORS[app.name]}20`,
                  }}
                />
              </motion.a>
            ))}
          </div>
        </AnimatePresence>

        {/* Summary */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-green-400">{onlineCount}</div>
            <div className="text-sm text-slate-400 mt-1">Online</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-red-400">{offlineCount}</div>
            <div className="text-sm text-slate-400 mt-1">Offline</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-cyan-400">
              {apps.length > 0 ? Math.round((onlineCount / apps.length) * 100) : 0}%
            </div>
            <div className="text-sm text-slate-400 mt-1">Uptime</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
