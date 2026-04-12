module.exports = {
  apps: [
    {
      name: 'nikolina-livekit-server',
      script: './apps/livekit-nikolina/server/livekit-server',
      args: '--dev --bind 127.0.0.1 --node-ip 127.0.0.1',
      cwd: './apps/livekit-nikolina/server',
      out_file: './logs/livekit.log',
      error_file: './logs/livekit.error.log',
      autorestart: true,
    },
    {
      name: 'nikolina-api-hub',
      script: 'venv/bin/python3',
      args: 'server/main.py',
      cwd: './apps/livekit-nikolina',
      env: {
        PYTHONPATH: './agent/src:./server/src',
        PORT: '8001'
      },
      out_file: './logs/api.log',
      error_file: './logs/api.error.log',
      autorestart: true,
    },
    {
      name: 'nikolina-agent',
      script: 'venv/bin/python3',
      args: 'agent/src/agent.py start',
      cwd: './apps/livekit-nikolina',
      env: {
        PYTHONPATH: './agent/src:./server/src'
      },
      out_file: './logs/agent.log',
      error_file: './logs/agent.error.log',
      autorestart: true,
    }
  ]
};
