'use strict';

const path    = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');

const app  = express();
const PORT = 8080;
const WWW  = path.join(__dirname, 'www');

// ── Rate Limiting (100 req / min) ──
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// ── CORS: Restricted in Production ──
app.use((req, res, next) => {
  const origin = req.headers.origin || '';
  const allowedOrigins = ['https://msbross.me', 'https://www.msbross.me', 'http://localhost:8080', 'http://127.0.0.1:8080'];
  if (!origin || allowedOrigins.includes(origin) || origin.startsWith('http://192.168.') || origin.startsWith('http://10.')) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://msbross.me');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// ── Runtime config endpoint (so static HTML can learn the tunnel URL) ──
app.get('/__config', (req, res) => {
  res.json({
    livekitUrl: process.env.LIVEKIT_URL || 'wss://nikolina-1jg7t00i.livekit.cloud',
    nikolinaApi: '/_nikolina/api',
    ateneaApi: '/_atenea',
  });
});

// ── Health check ──
app.get('/__health', (req, res) => {
  res.json({ status: 'ok', service: 'msbross-proxy', uptime: process.uptime() });
});

// ── Static SPAs ──
const NEXT_APPS = [
  'app-generator', 'cuentosmagicos', 'combipro', 'dohler',
  'edelweiss', 'expositator', 'iaputa', 'jartosdto',
  'logisearch', 'moko', 'msbross', 'newton', 'nikolina',
  'taskflow', 'teringo', 'traductor', 'atenea', 'elitescout',
];

for (const name of NEXT_APPS) {
  const appDir  = path.join(WWW, 'app', name);
  const prefix  = `/app/${name}`;
  app.use(prefix, express.static(appDir, { index: false }));
  app.get(new RegExp(`^/app/${name}/(.*)$`), (req, res, next) => {
    const indexFile = path.join(appDir, 'index.html');
    res.sendFile(indexFile, err => { if (err) next(); });
  });
}

// ── Proxy helpers ──
const proxyOpts = (target, stripPrefix, ws = false) => ({
  target,
  changeOrigin: true,
  ws,
  pathRewrite: { [`^${stripPrefix}`]: '' },
  on: {
    error: (err, req, res) => {
      console.error(`[Proxy error] ${req.url} -> ${target}: ${err.message}`);
      if (res && res.writeHead) res.status(502).json({ error: 'Backend unavailable', detail: err.message });
    },
    proxyReqWs: (proxyReq, req, socket) => {
      console.log(`[WebSocket] ${req.url} -> ${target}`);
    },
  },
});

// ── API routes ──
app.use('/_nikolina',      createProxyMiddleware(proxyOpts('http://127.0.0.1:8001', '/_nikolina', true)));
app.use('/_newton',        createProxyMiddleware(proxyOpts('http://127.0.0.1:3005', '/_newton')));
app.use('/_dohler',        createProxyMiddleware(proxyOpts('http://127.0.0.1:8002', '/_dohler')));
app.use('/_elitescout',    createProxyMiddleware(proxyOpts('http://127.0.0.1:8003', '/_elitescout')));
app.use('/_arantxa',       createProxyMiddleware(proxyOpts('http://127.0.0.1:8004', '/_arantxa')));
app.use('/_msbross',       createProxyMiddleware(proxyOpts('http://127.0.0.1:8005', '/_msbross')));
app.use('/_iaputa',        createProxyMiddleware(proxyOpts('http://127.0.0.1:8006', '/_iaputa')));
app.use('/_cuentosmagicos',createProxyMiddleware(proxyOpts('http://127.0.0.1:8007', '/_cuentosmagicos')));
app.use('/_atenea',        createProxyMiddleware(proxyOpts('http://127.0.0.1:8009', '/_atenea')));

// ── LiveKit WebSocket proxy (for self-hosted LiveKit) ──
app.use('/rtc', createProxyMiddleware({
  target: 'http://127.0.0.1:7880',
  changeOrigin: true,
  ws: true,
  on: {
    error: (err, req, res) => {
      console.error(`[LiveKit WS Error] ${req.url}: ${err.message}`);
      if (res && res.writeHead) res.status(502).json({ error: 'LiveKit unavailable' });
    },
    proxyReqWs: (proxyReq, req, socket) => {
      console.log(`[LiveKit WS] ${req.url} -> ws://127.0.0.1:7880`);
    },
  },
}));

// ── Static files & SPA fallback ──
app.use(express.static(WWW));
app.use((req, res) => {
  res.status(404).sendFile(path.join(WWW, 'index.html'));
});

// ── Start HTTP ──
const httpServer = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[MSBrossAI Proxy] Puerto ${PORT} — ${NEXT_APPS.length} apps montadas`);
  console.log(`   Portal: http://localhost:${PORT}/`);
  console.log(`   Apps:   /app/{${NEXT_APPS.join('|')}}/`);
  console.log(`   APIs:   /_nikolina /_atenea /_elitescout /_cuentosmagicos /rtc (LiveKit WS)`);
  console.log(`   Config: /__config   Health: /__health`);
});

// ── Start HTTPS (self-signed for LAN) ──
try {
  const https = require('https');
  const selfsigned = require('selfsigned');
  const attrs = [{ name: 'commonName', value: 'msbross-local' }];
  const pems = selfsigned.generate(attrs, { days: 365, keySize: 2048 });
  const httpsServer = https.createServer({ key: pems.private, cert: pems.cert }, app);
  httpsServer.listen(8443, '0.0.0.0', () => {
    console.log(`   SSL:     https://0.0.0.0:8443/ (self-signed, LAN only)`);
  });
} catch (e) {
  console.log(`[!] SSL en 8443 no disponible: ${e.message}`);
}
