/**
 * MSBrossAI — Unified Reverse Proxy
 *
 * Architecture:
 *  - /app/<name>/   → serves pre-built Next.js static exports from www/app/<name>/
 *                     Each app gets its own express.static mount so /_next/ assets
 *                     never bleed across app boundaries.
 *  - /_<service>    → proxies to FastAPI/Node backends (ports 8001-8007)
 *  - /*             → falls back to the global portal (www/)
 */

'use strict';

const path    = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app  = express();
const PORT = 8080;
const WWW  = path.join(__dirname, 'www');

// ─────────────────────────────────────────────────────────────────────────────
// 1.  PER-APP NEXT.JS STATIC MOUNTS
//     Each Next.js app compiled with `output: 'export'` lives in www/app/<name>/.
//     We mount it at /app/<name>/ so its /_next/ assets resolve correctly
//     relative to that prefix via a dedicated static middleware.
// ─────────────────────────────────────────────────────────────────────────────

const NEXT_APPS = [
  'app-generator',
  'cuentosmagicos',
  'combipro',
  'dohler',
  'edelweiss',
  'expositator',
  'iaputa',
  'jartosdto',
  'logisearch',
  'moko',
  'msbross',
  'newton',
  'nikolina',
  'taskflow',
  'teringo',
  'traductor',
  'atenea',
  'elitescout',
];

for (const name of NEXT_APPS) {
  const appDir  = path.join(WWW, 'app', name);
  const prefix  = `/app/${name}`;

  // Static assets (JS chunks, CSS, images, etc.)
  app.use(prefix, express.static(appDir, { index: false }));

  // SPA fallback: any path under /app/<name>/* that doesn't match a file
  // returns the app's index.html so client-side routing works correctly.
  app.get(new RegExp(`^/app/${name}/(.*)$`), (req, res, next) => {
    const indexFile = path.join(appDir, 'index.html');
    res.sendFile(indexFile, err => {
      if (err) next(); // directory doesn't exist yet → fall through to portal
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 2.  BACKEND API PROXY (FastAPI / Node services, ports 8001-8007)
// ─────────────────────────────────────────────────────────────────────────────

const proxyOpts = (target, stripPrefix) => ({
  target,
  changeOrigin: true,
  pathRewrite: { [`^${stripPrefix}`]: '' },
  on: {
    error: (err, req, res) => {
      console.error(`[Proxy error] ${req.url} → ${target}:`, err.message);
      res.status(502).json({ error: 'Backend unavailable', detail: err.message });
    },
  },
});

// 8001 - Nikolina Voice AI & Hub
app.use('/_nikolina',      createProxyMiddleware(proxyOpts('http://127.0.0.1:8001', '/_nikolina')));

// 8002 - Döhler Task Manager API
app.use('/_dohler',        createProxyMiddleware(proxyOpts('http://127.0.0.1:8002', '/_dohler')));

// 8003 - EliteScout Semantic Travel Finder API
app.use('/_elitescout',    createProxyMiddleware(proxyOpts('http://127.0.0.1:8003', '/_elitescout')));

// 8004 - Arantxa Translate Server
app.use('/_arantxa',       createProxyMiddleware(proxyOpts('http://127.0.0.1:8004', '/_arantxa')));

// 8005 - MSBrOSs Adele Voice Control Server
app.use('/_msbross',       createProxyMiddleware(proxyOpts('http://127.0.0.1:8005', '/_msbross')));

// 8006 - IAPuta OS AI Assistant API
app.use('/_iaputa',        createProxyMiddleware(proxyOpts('http://127.0.0.1:8006', '/_iaputa')));

// 8007 - CuentosMágicos Creative Story Teller API
app.use('/_cuentosmagicos',createProxyMiddleware(proxyOpts('http://127.0.0.1:8007', '/_cuentosmagicos')));

// ─────────────────────────────────────────────────────────────────────────────
// 3.  GLOBAL PORTAL — static files from www/  (shell pages, landing, assets)
// ─────────────────────────────────────────────────────────────────────────────

app.use(express.static(WWW));

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(WWW, 'index.html'));
});

// ─────────────────────────────────────────────────────────────────────────────
// 4.  START
// ─────────────────────────────────────────────────────────────────────────────

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[🚀 MSBrossAI Proxy] Puerto ${PORT} — ${NEXT_APPS.length} apps montadas`);
  console.log(`   Portal: http://localhost:${PORT}/`);
  console.log(`   Apps:   /app/{${NEXT_APPS.join('|')}}/`);
  console.log(`   APIs:   /_nikolina /_elitescout /_cuentosmagicos ...`);
});
