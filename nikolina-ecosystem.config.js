/**
 * MSBrossAI — Unified PM2 Ecosystem Configuration
 * 
 * Manages all backend services for the ecosystem:
 * - LiveKit Server (WebRTC engine)
 * - Nikolina API Hub (FastAPI token server + dashboard)
 * - Nikolina Agent (LiveKit voice agent)
 * - Dohler Backend (FastAPI task manager)
 * - IAPuta OS Backend (FastAPI AI assistant)
 * - Arantxa Translate Server (Express translation proxy)
 */
module.exports = {
  apps: [
    // ──────────────────────────────────────────────
    // LIVEKIT NIKOLINA (Voice AI)
    // ──────────────────────────────────────────────
    {
      name: 'nikolina-livekit-server',
      script: './apps/livekit-nikolina/server/livekit-server',
      args: '--dev --bind 127.0.0.1 --node-ip 127.0.0.1',
      cwd: __dirname,
      out_file: './apps/livekit-nikolina/logs/livekit.log',
      error_file: './apps/livekit-nikolina/logs/livekit.error.log',
      autorestart: true,
      max_restarts: 10,
    },
    {
      name: 'nikolina-api-hub',
      script: './apps/livekit-nikolina/venv/bin/python3',
      args: 'server/main.py',
      cwd: './apps/livekit-nikolina',
      env: {
        PYTHONPATH: './agent/src:./server/src',
        PORT: '8001'
      },
      out_file: './apps/livekit-nikolina/logs/api.log',
      error_file: './apps/livekit-nikolina/logs/api.error.log',
      autorestart: true,
      max_restarts: 10,
    },
    {
      name: 'nikolina-agent',
      script: './apps/livekit-nikolina/venv/bin/python3',
      args: 'agent/src/agent.py start',
      cwd: './apps/livekit-nikolina',
      env: {
        PYTHONPATH: './agent/src:./server/src'
      },
      out_file: './apps/livekit-nikolina/logs/agent.log',
      error_file: './apps/livekit-nikolina/logs/agent.error.log',
      autorestart: true,
      max_restarts: 10,
    },

    // ──────────────────────────────────────────────
    // DOHLER (Task Manager Backend)
    // ──────────────────────────────────────────────
    {
      name: 'dohler-backend',
      script: 'python3',
      args: '-m uvicorn app:app --host 0.0.0.0 --port 8002',
      cwd: './apps/dohler/backend',
      out_file: './apps/dohler/backend/dohler.log',
      error_file: './apps/dohler/backend/dohler.error.log',
      autorestart: true,
      max_restarts: 10,
    },

    // ──────────────────────────────────────────────
    // IAPUTA OS (AI Assistant Backend)
    // ──────────────────────────────────────────────
    {
      name: 'iaputa-backend',
      script: 'python3',
      args: '-m uvicorn app.main:app --host 0.0.0.0 --port 8006',
      cwd: './apps/iaputa-os/backend',
      out_file: './apps/iaputa-os/backend/iaputa.log',
      error_file: './apps/iaputa-os/backend/iaputa.error.log',
      autorestart: true,
      max_restarts: 10,
    },

    // ──────────────────────────────────────────────
    // ARANTXA TRANSLATE (Translation Server)
    // ──────────────────────────────────────────────
    {
      name: 'arantxa-server',
      script: 'node',
      args: 'dist/index.js',
      cwd: './apps/arantxa-translate/server',
      env: {
        PORT: '3001'
      },
      out_file: './apps/arantxa-translate/server/arantxa.log',
      error_file: './apps/arantxa-translate/server/arantxa.error.log',
      autorestart: true,
      max_restarts: 10,
    },
  ]
};
