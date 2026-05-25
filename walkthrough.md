# Walkthrough — MSBrossAI Ecosystem Implementation

## Architecture Overview

```
Internet (WAN) ──→ https://msbross.me:443 ──→ Nginx ──→ proxy.js:8080 ──→ Backends (8001-8009)
Mobile LAN       ──→ https://<IP>:8443     ──→ proxy.js (SSL)                   
Desktop LAN      ──→ http://localhost:8080  ──→ proxy.js                         
```

**Unified Reverse Proxy** (`proxy.js`):
- HTTP on `:8080` for desktop/dev
- HTTPS (self-signed) on `:8443` for mobile LAN (WebRTC context)
- Serves static builds at `/app/<name>/` from `www/app/<name>/`
- Proxies APIs at `/_<service>` to backend ports 8001-8009
- WebSocket route `/rtc` → LiveKit `:7880` for mobile voice

**PM2 Ecosystem** (`ecosystem.config.js`):
Manages 10 services with exponential backoff, memory limits, log rotation.

---

## Services Map

| Port | Service | Type | Status |
|------|---------|------|--------|
| 7880 | LiveKit Server | WebRTC Engine | Production |
| 8001 | Nikolina API Hub | FastAPI JWT + Voice Token | Production |
| 8001 | Nikolina Agent | LiveKit Voice Agent | Production |
| 8002 | Döhler Backend | FastAPI Tasks + Pomodoro | Production |
| 8003 | EliteScout API | FastAPI Travel Search | Maintenance |
| 8004 | Arantxa Translate | Express Translation Proxy | Production |
| 8005 | MSBrOSs | Adele Voice Server | Production |
| 8006 | IAPuta OS | FastAPI AI Assistant | Production |
| 8007 | CuentosMágicos | FastAPI Story Teller | Production |
| 8009 | **Atenea Restaurant** | **FastAPI + SQLite Menu** | **NEW** |
| 8080 | MSBross Proxy | Express Reverse Proxy + SSL | Production |

---

## 🛡️ Architecture & Security Hardening (v2.0)

**1. Centralized Process Management (PM2)**
- Deprecated manual background processes in `START_SYSTEM.sh`.
- Migrated entirely to PM2 via `ecosystem.config.js`.
- Enabled automatic restart, exponential backoff, and memory limits across all 10 microservices.

**2. Proxy Security & Rate Limiting**
- Integrated `express-rate-limit` into the global `proxy.js` on port 8080.
- Hardened CORS policy to strictly allow traffic from authorized domains (`msbross.me`, `localhost`).
- Prevents DDoS attacks and unauthenticated cross-origin API abuse.

**3. Database Resilience (SQLite)**
- Replaced the default connection in `Newton` and `Döhler` with `check_same_thread=False` and an elevated `timeout=20.0` seconds.
- Dramatically reduces `database is locked` errors during concurrent asynchronous operations under high traffic.

**4. Frontend Secrets Protection**
- Audited `apps/elitescout/.env.local` and removed `NEXT_PUBLIC_` prefixes from all sensitive LLM/API keys (OpenAI, Gemini, Groq, Tavily, HuggingFace, OpenRouter).
- Averted critical client-side leakage of API tokens in static builds.

---

## Component Deep-Dive

### 1. Nikolina Voice AI (livekit-nikolina/)

**Frontend** (`frontend/src/App.tsx`):
- React 18 + TypeScript + `@livekit/components-react`
- Real API consumption from `/_nikolina/api/` (menu, reservations, calls)
- LiveKitRoom with token-based auth
- Dynamic URL resolution: WSS when served over HTTPS, WS otherwise
- 5-tab dashboard: Assistant (WebRTC), Carta (DB-driven), Reservas, Llamadas, Admin

**Server** (`server/main.py`):
- FastAPI + JWT auth (1-week tokens)
- `/api/token` → LiveKit AccessToken + agent dispatch
- `/api/dev/*` → pipeline management, provider status, system metrics
- 20+ Pydantic models for LLM config, pipeline profiles, menu items

**Database** (`server/src/core/database.py`):
- SQLite with WAL mode, 7 tables
- 4 pipeline profiles (Gemini 2.5 Flash, Gemini 1.5 Flash, Local Modular)
- Atomic reservation creation with EXCLUSIVE transaction lock
- 14 menu items seeded with Gourmet AI image assets
- Migration system for backward-compatible column additions

### 2. Restaurante Atenea (atenea-backend/) — NEW

**Frontend** (`www/app/atenea/index.html`):
- Standalone HTML5 with Tailwind CSS (CDN)
- Dark/light theme toggle with CSS custom properties
- Reservation modal with dual interface:
  - Classic web form → POST to `/_atenea/api/public/reservations`
  - Nikolina AI voice → LiveKit via `/_atenea/api/public/token`
- Ember particle animations, smooth scroll, mobile-responsive

**Backend** (`apps/atenea-backend/main.py`):
- FastAPI on port 8009 (proxied as `/_atenea`)
- Protocol-negotiated LiveKit URL (WSS for HTTPS, WS for HTTP)
- Endpoints: `/api/menu`, `/api/reservations`, `/api/restaurant`, `/api/stats`
- Public token endpoint for LiveKit voice integration

**Database** (`apps/atenea-backend/database.py`):
- SQLite with 4 tables (restaurant_info, menu_items, reservations, call_log)
- 14 authentic menu items from the Atenea carta
- Gourmet AI images (chuleton, ternasco, bacalao, croquetas, etc.)

### 3. Proxy Infrastructure (proxy.js)

- Express + `http-proxy-middleware` + `selfsigned`
- SSL termination on port 8443 (auto-generated cert)
- WebSocket upgrade support for LiveKit at `/rtc`
- 18 static app mounts from `www/app/<name>/`
- SPA fallback routing for client-side navigation

### 4. Database + Image Assets

**Nikolina DB** (`restaurant.db`):
- 15 menu items with image_url pointing to `/assets/*.png`
- 8 tables fully configured for production
- Real reservation data with atomic creation logic

**Image Assets** (18 files in `www/app/nikolina/assets/`):
- Premium/gourmet AI-generated dish photography
- chuleton.png, croquetas.png, lubina.png, paella.png, etc.
- Served by proxy at `/app/nikolina/assets/`

---

## Deployment

### Local (macOS/Linux):
```bash
bash START_SYSTEM.sh
```

### Production (VPS via PM2):
```bash
pm2 start ecosystem.config.js
pm2 save
```

### Mobile Access (LAN):
Connect to `https://<MAC_IP>:8443/app/atenea/`
- Accept self-signed certificate warning
- Full WebRTC voice + HTTPS context for mic access

---

## Key Technical Decisions

1. **Self-signed SSL on 8443**: Bypasses `getUserMedia()` Secure Context
   restriction in mobile browsers for LAN development. The `selfsigned` npm
   package generates ephemeral certs at startup — no cert management needed.

2. **Protocol negotiation**: Backend reads `request.url.scheme` and returns
   appropriate `wss://` vs `ws://` LiveKit URL. Frontend also falls back based
   on `window.location.protocol`.

3. **Atomic DB transactions**: Reservation creation uses `BEGIN EXCLUSIVE
   TRANSACTION` to prevent double-booking under concurrent access (phone +
   web + AI agent).

4. **Unified proxy architecture**: Single Express instance serves all 18 apps
   and proxies 9+ backends. Eliminates CORS issues, simplifies SSL, and
   enables WebSocket tunneling for mobile.

---

## Verification

### Health Check Endpoints
```bash
curl http://localhost:8009/health          # Atenea
curl http://localhost:8001/api/health      # Nikolina
curl http://localhost:8080/_atenea/health  # Via proxy
```

### Menu Data
```bash
sqlite3 apps/livekit-nikolina/server/data/restaurant.db \
  "SELECT name, price, image_url FROM menu_items WHERE is_available=1;"
```

### Proxy Logs
```bash
tail -f logs/proxy.log    # HTTP/HTTPS traffic
tail -f logs/proxy.error.log  # Errors
```
