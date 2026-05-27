/**
 * MSBrossAI — Unified PM2 Ecosystem Configuration (Hardened HA Release)
 * 
 * Manages all backend services for the ecosystem dynamically resolved:
 * - LiveKit Server (WebRTC engine)
 * - Nikolina API Hub (FastAPI token server + dashboard)
 * - Nikolina Agent (LiveKit voice agent)
 * - Dohler Backend (FastAPI task manager)
 * - IAPuta OS Backend (FastAPI AI assistant)
 * - Arantxa Translate Server (Express translation proxy)
 * - MSBrOSs Backend (Adele voice server)
 * - Cuentos Mágicos Backend (Story teller FastAPI)
 * - MSBross Reverse Proxy (Unified portal & port-based routing)
 * 
 * Hardening:
 * - max_memory_restart: Prevents memory leaks from killing the OS (OOM Killer mitigation).
 * - exp_backoff_delay: Exponential backoff delay starting at 1000ms.
 * - min_uptime: Process must be up for 15s to be considered running.
 * - max_restarts: Cap at 15 restarts before triggering operator alert/stable sleep.
 */
const path = require('path');

module.exports = {
  apps: [
    // ──────────────────────────────────────────────
    // LIVEKIT NIKOLINA (Voice AI)
    // ──────────────────────────────────────────────
    {
      name: 'nikolina-livekit-server',
      script: path.join(__dirname, 'apps/livekit-nikolina/server/livekit-server'),
      args: '--dev --bind 127.0.0.1 --node-ip 127.0.0.1',
      cwd: __dirname,
      out_file: path.join(__dirname, 'apps/livekit-nikolina/logs/livekit.log'),
      error_file: path.join(__dirname, 'apps/livekit-nikolina/logs/livekit.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '1G'
    },
    {
      name: 'nikolina-api-hub',
      script: path.join(__dirname, 'apps/livekit-nikolina/venv/bin/python3'),
      args: 'server/main.py',
      cwd: path.join(__dirname, 'apps/livekit-nikolina'),
      env: {
        PYTHONPATH: './agent/src:./server/src',
        PORT: '8001'
      },
      out_file: path.join(__dirname, 'apps/livekit-nikolina/logs/api.log'),
      error_file: path.join(__dirname, 'apps/livekit-nikolina/logs/api.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '500M'
    },
    {
      name: 'nikolina-agent',
      script: path.join(__dirname, 'apps/livekit-nikolina/venv/bin/python3'),
      args: 'src/agent.py dev',
      cwd: path.join(__dirname, 'apps/livekit-nikolina/agent'),
      env: {
        PYTHONPATH: './agent/src:./server/src'
      },
      out_file: path.join(__dirname, 'apps/livekit-nikolina/logs/agent.log'),
      error_file: path.join(__dirname, 'apps/livekit-nikolina/logs/agent.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '1G'
    },

    // ──────────────────────────────────────────────
    // NEWTON MEQUINENZA (Checklist & Inventory Backend)
    // ──────────────────────────────────────────────
    {
      name: 'newton-mequinenza-backend',
      script: path.join(__dirname, 'apps/newton-mequinenza/backend/venv/bin/python3'),
      args: '-m uvicorn main:app --host 0.0.0.0 --port 3005',
      cwd: path.join(__dirname, 'apps/newton-mequinenza/backend'),
      env: {
        PORT: '3005'
      },
      out_file: path.join(__dirname, 'apps/newton-mequinenza/backend/newton.log'),
      error_file: path.join(__dirname, 'apps/newton-mequinenza/backend/newton.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '500M'
    },

    // ──────────────────────────────────────────────
    // DOHLER (Task Manager Backend)
    // ──────────────────────────────────────────────
    {
      name: 'dohler-backend',
      script: path.join(__dirname, 'apps/iaputa-os/backend/venv/bin/python3'),
      args: '-m uvicorn app:app --host 0.0.0.0 --port 8002',
      cwd: path.join(__dirname, 'apps/dohler/backend'),
      out_file: path.join(__dirname, 'apps/dohler/backend/dohler.log'),
      error_file: path.join(__dirname, 'apps/dohler/backend/dohler.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '500M'
    },

    // ──────────────────────────────────────────────
    // IAPUTA OS (AI Assistant Backend)
    // ──────────────────────────────────────────────
    {
      name: 'iaputa-backend',
      script: path.join(__dirname, 'apps/iaputa-os/backend/venv/bin/python3'),
      args: '-m uvicorn main:app --host 0.0.0.0 --port 8006',
      cwd: path.join(__dirname, 'apps/iaputa-os/backend'),
      out_file: path.join(__dirname, 'apps/iaputa-os/backend/iaputa.log'),
      error_file: path.join(__dirname, 'apps/iaputa-os/backend/iaputa.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '800M'
    },

    // ──────────────────────────────────────────────
    // ARANTXA TRANSLATE (Translation Server)
    // ──────────────────────────────────────────────
    {
      name: 'traductor-pro-server',
      script: 'node',
      args: 'dist/index.js',
      cwd: path.join(__dirname, 'apps/traductor-pro/server'),
      env: {
        PORT: '8004'
      },
      out_file: path.join(__dirname, 'apps/traductor-pro/server/arantxa.log'),
      error_file: path.join(__dirname, 'apps/traductor-pro/server/arantxa.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '300M'
    },

    // ──────────────────────────────────────────────
    // MSBROSS ACTIVE ADELE VOICE SERVER
    // ──────────────────────────────────────────────
    {
      name: 'msbross-backend',
      script: path.join(__dirname, 'apps/iaputa-os/backend/venv/bin/python3'),
      args: 'server.py',
      cwd: path.join(__dirname, 'apps/msbross'),
      out_file: path.join(__dirname, 'apps/msbross/msbross.log'),
      error_file: path.join(__dirname, 'apps/msbross/msbross.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '500M'
    },

    // ──────────────────────────────────────────────
    // CUENTOSMÁGICOS AI (Creative Story Teller Backend)
    // ──────────────────────────────────────────────
    {
      name: 'cuentos-magicos-backend',
      script: path.join(__dirname, 'apps/iaputa-os/backend/venv/bin/python3'),
      args: '-m uvicorn app.main:app --host 0.0.0.0 --port 8007',
      cwd: path.join(__dirname, 'apps/cuentos-magicos/backend'),
      out_file: path.join(__dirname, 'apps/cuentos-magicos/backend/cuentosmagicos.log'),
      error_file: path.join(__dirname, 'apps/cuentos-magicos/backend/cuentosmagicos.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '600M'
    },

    // ──────────────────────────────────────────────
    // ELITESCOUT (Semantic Travel Finder & Price Scraper Server, Port 8003)
    // ──────────────────────────────────────────────
    {
      name: 'elitescout-server',
      script: 'start-server.sh',
      cwd: path.join(__dirname, 'apps/elitescout'),
      interpreter: '/bin/bash',
      env: {
        PORT: '8003',
        NEXT_SERVER_MODE: 'true',
        NODE_ENV: 'production'
      },
      out_file: path.join(__dirname, 'apps/elitescout/elitescout.log'),
      error_file: path.join(__dirname, 'apps/elitescout/elitescout.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '800M'
    },

    // ──────────────────────────────────────────────
    // ATENEA RESTAURANT BACKEND (Port 8009)
    // ──────────────────────────────────────────────
    {
      name: 'web-restaurante-atenea-backend',
      script: path.join(__dirname, 'apps/iaputa-os/backend/venv/bin/python3'),
      args: '-m uvicorn main:app --host 0.0.0.0 --port 8009',
      cwd: path.join(__dirname, 'apps/web-restaurante-atenea'),
      env: {
        PYTHONPATH: '.',
        PORT: '8009'
      },
      out_file: path.join(__dirname, 'apps/web-restaurante-atenea/atenea.log'),
      error_file: path.join(__dirname, 'apps/web-restaurante-atenea/atenea.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '300M'
    },

    // ──────────────────────────────────────────────
    // REVERSE PROXY (Unified Portal & Routing, Port 8080)
    // ──────────────────────────────────────────────
    {
      name: 'msbross-proxy',
      script: 'proxy_server.js',
      cwd: __dirname,
      out_file: path.join(__dirname, 'logs/proxy.log'),
      error_file: path.join(__dirname, 'logs/proxy.error.log'),
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '400M'
    },

    // ──────────────────────────────────────────────
    // CLOUDFLARE TUNNEL (Exposes proxy on boot)
    // ──────────────────────────────────────────────
    {
      name: 'cloudflare-tunnel',
      script: 'cloudflared',
      args: 'tunnel run msbross-main',
      cwd: __dirname,
      autorestart: true,
      max_restarts: 15,
      exp_backoff_delay: 1000,
      min_uptime: '15s',
      max_memory_restart: '200M'
    },
  ]
};
