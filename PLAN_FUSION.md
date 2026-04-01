# PLAN DE FUSIÓN DE CÓDIGO - MSBrossAI

> Documento maestro para la unificación de las 9 aplicaciones del ecosistema MSBrossAI.
> Cada app se fusiona comparando: Desktop local, msbross.me, VPS (msbross.me live), GitHub repos.

---

## PRINCIPIOS DE FUSIÓN

1. **Backend primero**: Si existe backend, se prioriza la versión más completa y funcional.
2. **Frontend premium**: Se toma el mejor diseño UI/UX de todas las versiones.
3. **Clean Architecture**: Se mantiene la arquitectura más limpia y mantenible.
4. **Docker-first**: Si hay Docker Compose, se usa como método de despliegue principal.
5. **Sin datos fake**: Todo el código debe funcionar con datos reales de producción.
6. **Un .env.local**: Todas las variables de entorno centralizadas en la raíz de MSBrossAI.

---

## RESUMEN DE ANÁLISIS DE FUENTES

Estado del análisis en profundidad de cada aplicación en las 4 fuentes posibles:

| Aplicación | 🖥️ Carpetas Locales | 🌐 msbross.me | 🖧 VPS Live | 🐙 GitHub |
|------------|---------------------|---------------|-------------|-----------|
| **1. IAPuta OS** | ✅ Analizado | ✅ Analizado | ✅ Verificado | ✅ Analizado |
| **2. LIVEKIT Nikolina** | ✅ Analizado | ✅ Analizado | ✅ Verificado | ✅ Analizado |
| **3. Döhler** | ✅ Analizado | ✅ Analizado | ✅ Verificado | ❌ No existe repo |
| **4. TaskFlowPro** | ✅ Analizado | ✅ Analizado | ✅ Verificado | ✅ Analizado |
| **5. Arantxa Translate PRO** | ✅ Analizado | ✅ Analizado | ✅ Verificado | ✅ Analizado (solo backend) |
| **6. LogiSearch** | ❌ No existe | ✅ Analizado (lite) | ✅ Verificado (lite) | ✅ Analizado (completo) |
| **7. CombiPro** | ❌ No existe | ✅ Analizado (HTML) | ✅ Verificado (HTML) | ✅ Verificado (vacío) |
| **8. Edelweiss** | ✅ Analizado | ❌ No existe | ❌ No desplegado | ❌ No existe repo |
| **9. Moko-Tools** | ❌ No existe | ❌ No existe | ⚠️ Incorrecto | ✅ Analizado |

### Leyenda
- ✅ **Analizado**: Código fuente revisado en profundidad (estructura, dependencias, funcionalidad, bugs)
- ⚠️ **Verificado/Incorrecto**: URL accesible pero con contenido diferente al esperado
- ❌ **No existe/No disponible**: Fuente no encontrada o no aplicable

### Total de fuentes analizadas: 27/36 (75%)
- Fuentes con código real analizado: **20**
- Fuentes verificadas (builds/deploy): **7**
- Fuentes no disponibles: **9**

---

## 1. IAPUTA OS - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | `/Users/manu/Desktop/IAPuta OS/` | ✅ Analizado en profundidad | ✅ Sí |
| 🌐 https://msbross.me | `/Users/manu/Desktop/msbross.me/IAPutaOS/` | ✅ Analizado en profundidad | ✅ Sí |
| 🖧 VPS | `https://msbross.me/iaputa/` | ✅ Verificado (build dist) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/IAPutaOS` | ✅ Analizado en profundidad | ✅ Sí |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | `/Users/manu/Desktop/IAPuta OS/` | Versión antigua (React 18, Vite 5) |
| msbross.me | `/Users/manu/Desktop/msbross.me/IAPutaOS/` | **VERSIÓN PRINCIPAL** (React 19, Vite 8, Clean Architecture) |
| GitHub | `manu-alvarez/IAPutaOS` | Sincronizado con msbross.me |
| VPS | `https://msbross.me/iaputa/` | Build dist desplegado |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **Backend completo** | msbross.me/IAPutaOS | Clean Architecture, 12 tools, multi-LLM fallback, agentic tool loop |
| **Frontend React 19** | msbross.me/IAPutaOS | Dual orb system (CSS + Three.js), audio visualization, responsive |
| **Docker Compose** | msbross.me/IAPutaOS | Backend + Frontend + Nginx con healthchecks |
| **CI/CD** | GitHub | GitHub Actions con pytest + npm build |
| **Sentry/Mixpanel** | msbross.me/IAPutaOS | Instalados pero no integrados → **integrar en fusión** |
| **Zustand** | NO USAR | No existe en IAPuta, todo en useState → **añadir en fusión** |

### Mejoras a implementar en fusión
- [ ] Extraer estado de App.jsx (436 líneas) a Zustand store
- [ ] Integrar Sentry y Mixpanel correctamente
- [ ] Crear tests E2E con Playwright (configurado pero sin tests)
- [ ] WebSocket/SSE para streaming responses
- [ ] Sistema de autenticación (actualmente solo API key)
- [ ] Eliminar código duplicado (`app/tools/` vs `app/infrastructure/tools/`)
- [ ] Restringir CORS en producción
- [ ] Eliminar API key expuesta en `.env.production`
- [ ] Implementar Google Calendar create event (actualmente stub)
- [ ] Connection pooling para SQLite

### Arquitectura final fusionada
```
iaputa-os/
├── docker-compose.yml          # Backend + Frontend + Nginx
├── .env.example                # Todas las variables necesarias
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── app/
│   │   ├── main.py             # FastAPI app con lifespan
│   │   ├── core/               # Config, Groq client, Prompts
│   │   ├── domain/             # Entities (UserMessage, AIResponse)
│   │   ├── application/        # Use cases (Chat, Memory, Tools)
│   │   ├── infrastructure/     # Adapters (LLM, Audio, Tools)
│   │   └── presentation/       # API routes
│   └── tests/                  # Pytest tests
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json            # React 19, Vite 8, Three.js, Zustand
│   ├── src/
│   │   ├── store/              # Zustand store (nuevo)
│   │   ├── components/         # Orb3D, NeuralOrb, SidePanel, etc.
│   │   ├── App.tsx             # Refactorizado con Zustand
│   │   └── main.tsx            # Entry point + ErrorBoundary + Sentry
│   └── vite.config.ts
└── README.md
```

---

## 2. LIVEKIT NIKOLINA - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | `/Users/manu/Desktop/LIVEKIT/` | ✅ Analizado en profundidad | ✅ Sí |
| 🌐 https://msbross.me | `livekit-backend/` + `livekit-frontend/` | ✅ Analizado en profundidad | ✅ Sí |
| 🖧 VPS | `https://msbross.me/nikolina/` | ✅ Verificado (build dist) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/LIVEKIT` | ✅ Analizado en profundidad | ✅ Sí |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | `/Users/manu/Desktop/LIVEKIT/` | **VERSIÓN PRINCIPAL** (completa con dashboards, SIP, Docker) |
| msbross.me | `livekit-backend/` + `livekit-frontend/` | Variante desplegada (split, sin dashboards) |
| GitHub | `manu-alvarez/LIVEKIT` | Sincronizado con Desktop |
| VPS | `https://msbross.me/nikolina/` | Build dist desplegado |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **Backend Server** | Desktop/LIVEKIT | FastAPI completo con 25+ endpoints, admin dashboard, dev dashboard |
| **Agent** | Desktop/LIVEKIT | LiveKit Agent con dual architecture (Realtime + Modular), Provider Factory |
| **Frontend Premium** | Desktop/LIVEKIT/frontend | Gold luxury theme, isometric table map, chat sidebar con bubbles |
| **Docker Compose** | Desktop/LIVEKIT | AI services (Ollama, Faster-Whisper, Kokoro, Coqui TTS) |
| **Deploy scripts** | Desktop/LIVEKIT/scripts | VPS deployment con rsync + remote rebuild |
| **SIP config** | Desktop/LIVEKIT | Foundation for telephony (needs completion) |

### Mejoras a implementar en fusión
- [ ] Consolidar las dos variantes (Desktop vs msbross.me) en una sola
- [ ] Corregir typo `LIVEKIT_API_SECRET` → `LIVEKIT_API_SECRET`
- [ ] Implementar `tools.py` modular (actualmente vacío)
- [ ] Corregir bug en `create_stt` factory (falta return en faster-whisper)
- [ ] Wire transcript panel a datos reales del agent (actualmente estático)
- [ ] Implementar `/api/dev/reset-agent` correctamente
- [ ] Hacer system metrics cross-platform (no solo Linux)
- [ ] Eliminar API keys expuestas en .env files
- [ ] Completar SIP integration
- [ ] Sincronizar menú del frontend con base de datos (actualmente hardcoded)

### Arquitectura final fusionada
```
livekit-nikolina/
├── docker-compose.yml          # Server + Agent + AI Services
├── docker-compose.ai.yml       # Ollama, Whisper, Kokoro, Coqui
├── .env.example
├── server/
│   ├── Dockerfile
│   ├── main.py                 # FastAPI con todos los endpoints
│   ├── requirements.txt
│   └── src/
│       ├── core/database.py    # SQLite completo (971 líneas)
│       ├── api/                # Route handlers (implementar)
│       └── schemas/            # Pydantic schemas (implementar)
├── agent/
│   ├── Dockerfile
│   ├── src/
│   │   ├── agent.py            # Agent lifecycle + tools
│   │   ├── providers.py        # Provider Factory (LLM/STT/TTS)
│   │   └── tools.py            # Tools modulares (implementar)
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json            # React 18, LiveKit Components, MUI 7
│   └── src/
│       ├── App.tsx             # Gold luxury theme + neural orb
│       ├── components/
│       │   ├── LuxMenu.tsx     # Luxury menu cards
│       │   ├── MapIsometric.tsx # SVG table map
│       │   └── SidebarGlass.tsx # Chat sidebar con bubbles
│       └── index.css           # Design system completo
├── dashboards/
│   ├── admin-dashboard/        # Restaurant management
│   └── dev-dashboard/          # System monitoring
├── config/
│   ├── nginx/
│   └── livekit-server/
├── scripts/
│   ├── deploy_vps.sh
│   └── deploy_clean.sh
└── README.md
```

---

## 3. DÖHLER - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | `/Users/manu/Desktop/DOHLER/` | ✅ Analizado en profundidad | ✅ Sí |
| 🌐 https://msbross.me | `dohler_src/` | ✅ Analizado en profundidad | ✅ Sí |
| 🖧 VPS | `https://msbross.me/dohler/` | ✅ Verificado (build dist) | ✅ Sí |
| 🐙 GitHub | No existe repo dedicado | ❌ No existe | ❌ N/A |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | `/Users/manu/Desktop/DOHLER/` | **VERSIÓN FUNCIONAL** (React 18 + CRA, task manager completo) |
| msbross.me | `dohler_src/` | Migración rota (App.jsx = SCADA industrial, no task manager) |
| GitHub | No existe repo dedicado | - |
| VPS | `https://msbross.me/dohler/` | Build dist de la versión SCADA |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **Backend** | Desktop/DOHLER/backend | Idéntico en ambas versiones, funcional y completo |
| **Frontend Task Manager** | Desktop/DOHLER/frontend | Versión funcional completa con polling, timer, stats |
| **Vite config** | msbross.me/dohler_src/frontend | Migración a Vite (pero App.jsx roto) |
| **Componentes TaskList/Timer** | msbross.me/dohler_src/frontend | Componentes bien estructurados con Feather icons, nested checklist |
| **React 19** | msbross.me/dohler_src/frontend | Última versión de React |

### Mejoras a implementar en fusión
- [ ] Corregir API URL: `./api.php` → `/api/tasks/` (FastAPI endpoints)
- [ ] Implementar Zustand store (declarado pero no usado en msbross.me)
- [ ] Conectar componentes TaskList/TaskItem/Timer al backend
- [ ] Eliminar SCADA App.jsx (es otra app completamente diferente)
- [ ] Implementar recurring tasks (flag existe pero no lógica)
- [ ] Implementar deadline enforcement
- [ ] Implementar dependency enforcement entre tasks
- [ ] Añadir autenticación básica
- [ ] Cross-platform timer (evitar threading + asyncio.run conflicts)
- [ ] Añadir tests con Playwright

### Arquitectura final fusionada
```
dohler/
├── docker-compose.yml          # Backend + Frontend
├── .env.example
├── backend/
│   ├── Dockerfile
│   ├── app.py                  # FastAPI con todos los endpoints
│   ├── database.py             # Async SQLite con aiosqlite
│   ├── requirements.txt
│   ├── routes/
│   │   └── tasks.py            # CRUD + stats
│   └── services/
│       └── timer.py            # Timer service (refactorizado)
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json            # React 19, Vite 7, Zustand, Tailwind
│   ├── vite.config.ts
│   └── src/
│       ├── store/
│       │   └── taskStore.ts    # Zustand store (nuevo)
│       ├── components/
│       │   ├── TaskList.tsx    # Con nested checklist + Feather icons
│       │   ├── TaskItem.tsx    # Expandable sub-tasks
│       │   ├── Timer.tsx       # Pomodoro con task assignment
│       │   └── TimerBar.tsx    # Progress bar (dark theme)
│       ├── App.tsx             # Task manager completo (no SCADA)
│       └── main.tsx            # Entry point + ErrorBoundary
└── README.md
```

---

## 4. TASKFLOWPRO - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | `/Users/manu/Desktop/TaskFlowPro/` | ✅ Analizado en profundidad | ✅ Sí |
| 🌐 https://msbross.me | `taskflow_pro_src/` | ✅ Analizado en profundidad | ✅ Sí |
| 🖧 VPS | `https://msbross.me/taskflow/` | ✅ Verificado (build dist) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/TaskFlowPro` | ✅ Analizado en profundidad | ✅ Sí |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | `/Users/manu/Desktop/TaskFlowPro/` | **VERSIÓN PRINCIPAL** (V2, TypeScript, MUI, completa) |
| msbross.me | `taskflow_pro_src/` | Prototipo abandonado (JS, Tailwind, sin routing) |
| GitHub | `manu-alvarez/TaskFlowPro` | Sincronizado con Desktop V2 |
| VPS | `https://msbross.me/taskflow/` | Build dist de V2 |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **App completa V2** | Desktop/TaskFlowPro | TypeScript, MUI, Zustand, React Router, alarm system |
| **Tailwind config** | msbross.me/taskflow_pro_src | Custom color palette (dark, glass, neon) |
| **ESLint config** | msbross.me/taskflow_pro_src | ESLint 9 flat config |
| **Framer Motion 12** | msbross.me/taskflow_pro_src | Última versión (V2 usa v11) |
| **Nginx config** | Desktop/TaskFlowPro | Completo con SSL, SPA fallback, security headers |

### Mejoras a implementar en fusión
- [ ] Wire WhatsApp service a task lifecycle (existe pero no se llama)
- [ ] Implementar category management (actualmente stub con alert())
- [ ] Añadir campo description al UI de tasks
- [ ] Añadir due dates al UI
- [ ] Implementar drag-and-drop reordering
- [ ] Añadir search functionality
- [ ] Añadir data export/import (backup localStorage)
- [ ] Añadir ErrorBoundary (V1 tiene, V2 no)
- [ ] Añadir loading states / skeleton screens
- [ ] Mover types inline a carpeta `types/`
- [ ] Mejorar alarm precision (Service Worker para background sync)
- [ ] Añadir PWA support (service worker + manifest)
- [ ] Actualizar Framer Motion a v12

### Arquitectura final fusionada
```
taskflow-pro/
├── docker-compose.yml          # Frontend only (client-side app)
├── .env.example
├── package.json                # React 18, MUI 5, Zustand 4, Framer Motion 12
├── vite.config.ts
├── tsconfig.json
├── taskflowpro.nginx.conf
├── src/
│   ├── main.tsx                # Entry + ThemeProvider + ErrorBoundary
│   ├── App.tsx                 # Routes + alarm polling (mejorado)
│   ├── index.css               # Glassmorphism + neon glows
│   ├── components/
│   │   └── Layout.tsx          # Sidebar + mobile drawer + animations
│   ├── pages/
│   │   ├── Dashboard.tsx       # Stats cards + upcoming tasks
│   │   ├── Tasks.tsx           # CRUD + filters + search + DnD
│   │   ├── Categories.tsx      # Category management (implementado)
│   │   └── Settings.tsx        # Sound + WhatsApp + export/import
│   ├── store/
│   │   └── taskStore.ts        # Zustand + persist + types
│   ├── services/
│   │   ├── whatsappService.ts  # CallMeBot (wired to lifecycle)
│   │   └── exportService.ts    # Data export/import (nuevo)
│   ├── theme/
│   │   └── theme.ts            # MUI dark theme (neon palette)
│   ├── types/
│   │   └── index.ts            # Task, Category, Priority, etc.
│   └── utils/
│       └── alarmWorker.ts      # Service Worker alarm (mejorado)
├── public/
│   ├── manifest.json           # PWA manifest
│   └── sw.js                   # Service worker
└── README.md
```

---

## 5. ARANTXA TRANSLATE PRO - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | `/Users/manu/Desktop/Arantxa Translate PRO/` | ✅ Analizado en profundidad | ✅ Sí |
| 🌐 https://msbross.me | `Traductor/` | ✅ Analizado en profundidad | ✅ Sí |
| 🖧 VPS | `https://msbross.me/traductor/` | ✅ Verificado (build dist) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/msb-traductor-backend` | ✅ Analizado en profundidad | ✅ Sí (solo backend) |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | `/Users/manu/Desktop/Arantxa Translate PRO/` | **VERSIÓN PRINCIPAL** (client + server completos) |
| msbross.me | `Traductor/` | Client solo tiene dist/, server completo |
| GitHub | `manu-alvarez/msb-traductor-backend` | Solo backend |
| VPS | `https://msbross.me/traductor/` | Build dist desplegado |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **Client completo** | Desktop/Arantxa Translate PRO/client | React 18 PWA, MUI, Tesseract.js, jsPDF, 4 modos traducción |
| **Server completo** | Desktop/Arantxa Translate PRO/server | Express + TypeScript, Groq API, document extraction |
| **PWA config** | Desktop/Arantxa Translate PRO/client | vite-plugin-pwa con service worker |
| **Build dist** | msbross.me/Traductor/client/dist | Versión desplegada funcional |

### Mejoras a implementar en fusión
- [ ] Corregir API mismatch: frontend llama a `/traductor/api.php`, backend sirve `/api/process`
- [ ] Implementar multi-provider real (OpenAI, Gemini, OpenRouter) en backend
- [ ] Corregir variable de entorno: `OPENAI_API_KEY` vs `GROQ_API_KEY`
- [ ] Añadir más idiomas al UI (actualmente solo ES/EN/FR)
- [ ] Implementar streaming responses para textos largos
- [ ] Añadir progress feedback durante traducción
- [ ] Eliminar API keys expuestas en .env files
- [ ] Añadir rate limiting al backend
- [ ] Añadir autenticación básica
- [ ] Unificar configuración de variables de entorno

### Arquitectura final fusionada
```
arantxa-translate/
├── docker-compose.yml          # Client + Server
├── .env.example
├── server/
│   ├── Dockerfile
│   ├── package.json            # Express, OpenAI SDK, multer, pdf-parse, mammoth
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts            # Express app + CORS + routes
│       ├── routes/
│       │   ├── process.ts      # Translation/summarization
│       │   ├── documents.ts    # PDF/DOCX/TXT extraction
│       │   └── extras.ts       # Keywords, sentiment, NER, app builder
│       └── providers/
│           ├── groq.ts         # Groq provider
│           ├── openai.ts       # OpenAI provider (nuevo)
│           ├── gemini.ts       # Gemini provider (nuevo)
│           └── index.ts        # Provider factory (nuevo)
├── client/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json            # React 18, MUI 5, Tesseract.js, jsPDF, PWA
│   ├── vite.config.ts
│   └── src/
│       ├── main.tsx            # Entry + ThemeProvider
│       ├── App.tsx             # 3 tabs + provider selector
│       ├── api.ts              # Corregido a endpoints reales del backend
│       ├── components/
│       │   ├── TraducirTab.tsx
│       │   ├── ResumirTab.tsx
│       │   ├── ExtrasTab.tsx
│       │   ├── UnifiedInput.tsx
│       │   └── ResultPanel.tsx
│       ├── theme/
│       │   └── theme.ts        # Dark holographic theme
│       └── utils/
│           └── export.ts       # PDF/PNG/clipboard export
└── README.md
```

---

## 6. LOGISEARCH - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | No existe carpeta local | ❌ No existe | ❌ N/A |
| 🌐 https://msbross.me | `LogiSearch/` | ✅ Analizado (versión lite) | ✅ Sí |
| 🖧 VPS | `https://msbross.me/logisearch/` | ✅ Verificado (versión lite) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/LogiSearch` | ✅ Analizado en profundidad | ✅ Sí |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | No existe carpeta local | - |
| msbross.me | `LogiSearch/` | Versión lite (HTML/JS estático, sin AI) |
| GitHub | `manu-alvarez/LogiSearch` | **VERSIÓN PRINCIPAL** (React 19 + TS, Supabase, Gemini, Tavily) |
| VPS | `https://msbross.me/logisearch/` | Versión lite desplegada |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **App completa** | GitHub/LogiSearch | React 19 + TS, MUI 7, multi-provider AI, Supabase, Tavily |
| **aiProvider.ts** | GitHub/LogiSearch | Multi-provider fallback con key rotation (excelente) |
| **CostCalculator.tsx** | GitHub/LogiSearch | Calculadora interactiva con tarifas reales |
| **pdfExport.ts** | GitHub/LogiSearch | Generación profesional de RFQs |
| **PWA config** | GitHub/LogiSearch | vite-plugin-pwa con code splitting |
| **Versión lite** | msbross.me/LogiSearch | NO USAR (demasiado simplificada) |

### Mejoras a implementar en fusión
- [ ] Eliminar Supabase service key hardcodeada en init-supabase.ts
- [ ] Manejar errores de Tavily correctamente (actualmente silent failure)
- [ ] Añadir autenticación para Supabase
- [ ] Mejorar manejo de errores de API
- [ ] Añadir más modos de transporte (ferrocarril, multimodal)
- [ ] Implementar comparador de rutas históricas
- [ ] Añadir export a Excel además de PDF

### Arquitectura final fusionada
```
logisearch/
├── docker-compose.yml          # Frontend only (client-side + APIs externas)
├── .env.example
├── package.json                # React 19, MUI 7, Supabase, jsPDF, Tavily
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx                 # Natural language search + results
│   ├── theme.ts                # Material Design 3 theme
│   ├── components/
│   │   ├── ResultsView.tsx     # Full results display
│   │   ├── CostCalculator.tsx  # Interactive cost calculator
│   │   ├── RfqDialog.tsx       # RFQ generation + PDF export
│   │   └── SearchHistory.tsx   # History drawer
│   ├── services/
│   │   ├── aiProvider.ts       # Multi-provider fallback + key rotation
│   │   ├── gemini.ts           # Gemini service (route, carriers, RFQ)
│   │   └── tavily.ts           # Web search service
│   ├── lib/
│   │   └── supabase.ts         # Supabase client + types
│   └── utils/
│       └── pdfExport.ts        # PDF generation
├── scripts/
│   └── init-supabase.ts        # DB initialization (sin keys hardcodeadas)
└── README.md
```

---

## 7. COMBIPRO - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | No existe carpeta local | ❌ No existe | ❌ N/A |
| 🌐 https://msbross.me | `vps_backup/COMBIPRO/` | ✅ Analizado (HTML estático) | ✅ Sí |
| 🖧 VPS | `https://msbross.me/combipro/` | ✅ Verificado (HTML estático) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/CombiPro` | ✅ Verificado (repo vacío) | ✅ Sí |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | No existe carpeta local | - |
| msbross.me | `vps_backup/COMBIPRO/` | HTML estático con UI glassmorphism |
| GitHub | `manu-alvarez/CombiPro` | **REPO VACÍO** |
| VPS | `https://msbross.me/combipro/` | HTML estático con datos fake |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **UI Design** | vps_backup/COMBIPRO | Glassmorphism, league selector, risk profiles |
| **Concepto** | vps_backup/COMBIPRO | Barrido neuronal, ligas europeas, stake management |
| **API Gateway** | msbross.me/api.php | PHP endpoint existente |

### Mejoras a implementar en fusión (REESCRITURA COMPLETA)
- [ ] Crear app React completa desde cero
- [ ] Implementar API real de odds deportivas (API-Football, Odds API)
- [ ] Algoritmo real de generación de combinadas
- [ ] Cálculo de probabilidades reales
- [ ] Historial de combinadas generadas
- [ ] Sistema de seguimiento de resultados
- [ ] Backend Node.js/Express para proxy de API keys
- [ ] Docker Compose para despliegue

### Arquitectura final fusionada (NUEVA)
```
combipro/
├── docker-compose.yml          # Frontend + Backend
├── .env.example
├── backend/
│   ├── Dockerfile
│   ├── package.json            # Express, axios, node-cron
│   └── src/
│       ├── index.ts            # Express server + API proxy
│       ├── routes/
│       │   ├── odds.ts         # Odds fetching
│       │   ├── combos.ts       # Combo generation
│       │   └── history.ts      # Historical tracking
│       ├── services/
│       │   ├── oddsApi.ts      # API-Football integration
│       │   ├── comboEngine.ts  # Algorithm for combo generation
│       │   └── probability.ts  # Probability calculations
│       └── utils/
│           └── scheduler.ts    # Cron for odds updates
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json            # React 19, Vite, MUI 7, Framer Motion
│   └── src/
│       ├── App.tsx             # League selection + risk profiles + combos
│       ├── components/
│       │   ├── LeagueSelector.tsx
│       │   ├── RiskProfile.tsx
│       │   ├── ComboGenerator.tsx
│       │   ├── ComboResults.tsx
│       │   └── HistoryPanel.tsx
│       └── theme/
│           └── theme.ts        # Glassmorphism dark theme
└── README.md
```

---

## 8. EDELWEISS (VisionPlay) - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | `/Users/manu/Desktop/EDELWEISS/` | ✅ Analizado en profundidad | ✅ Sí |
| 🌐 https://msbross.me | No existe carpeta | ❌ No existe | ❌ N/A |
| 🖧 VPS | No desplegado actualmente | ❌ No desplegado | ❌ N/A |
| 🐙 GitHub | No existe repo | ❌ No existe | ❌ N/A |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | `/Users/manu/Desktop/EDELWEISS/` | **VERSIÓN ÚNICA** (React 18, PWA, 5 modos) |
| msbross.me | No existe | - |
| GitHub | No existe repo | - |
| VPS | No desplegado actualmente | - |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **App completa** | Desktop/EDELWEISS | Única versión existente, funcional |
| **5 modos de estimulación** | Desktop/EDELWEISS | Alto Contraste, Seguimiento, Enfoque, Descanso, Formas |
| **Parental Lock** | Desktop/EDELWEISS | Double-tap + hold para salir |
| **i18n** | Desktop/EDELWEISS | Español/Inglés |
| **PWA** | Desktop/EDELWEISS | Service worker custom |

### Mejoras a implementar en fusión
- [ ] Corregir bug en vibration.js (`navigator.navigator` → `navigator`)
- [ ] Eliminar i18n.js dead code (usar hooks/useTranslation.js)
- [ ] Implementar sonidos reales (actualmente base64 vacío)
- [ ] Actualizar Framer Motion v6 → v12
- [ ] Actualizar Vite v4 → v7
- [ ] Añadir ErrorBoundary
- [ ] Añadir más modos de estimulación
- [ ] Mejorar Statistics component (key missing)
- [ ] Añadir modo de progreso/seguimiento para padres
- [ ] Crear repo GitHub

### Arquitectura final fusionada
```
edelweiss/
├── docker-compose.yml          # Frontend only
├── .env.example
├── package.json                # React 18, Vite 7, Framer Motion 12, Tailwind
├── vite.config.ts
├── tailwind.config.js
├── manifest.json
├── src/
│   ├── main.jsx                # Entry + SW registration + ErrorBoundary
│   ├── App.jsx                 # Mode routing
│   ├── index.css
│   ├── modes/
│   │   ├── ModeAltoContraste.jsx
│   │   ├── ModeSeguimiento.jsx
│   │   ├── ModeEnfoque.jsx
│   │   ├── ModeDescanso.jsx
│   │   └── ModeFormasColores.jsx
│   ├── components/
│   │   ├── ParentalLockButton.jsx  # Corregido
│   │   └── Statistics.jsx          # Corregido
│   ├── hooks/
│   │   ├── useConfig.js
│   │   ├── useStats.js
│   │   └── useTranslation.js
│   ├── utils/
│   │   ├── fullscreen.js
│   │   ├── sound.js            # Con audio real
│   │   └── vibration.js        # Bug corregido
│   └── locales/
│       ├── es.json
│       └── en.json
├── public/
│   └── sw.js                   # Service worker
└── README.md
```

---

## 9. MOKO-TOOLS - Plan de Fusión

### Análisis de fuentes
| Fuente | Ubicación | Estado | Código analizado |
|--------|-----------|--------|-----------------|
| 🖥️ Carpetas Locales | No existe carpeta local | ❌ No existe | ❌ N/A |
| 🌐 https://msbross.me | No existe carpeta | ❌ No existe | ❌ N/A |
| 🖧 VPS | `https://msbross.me/moko/` | ⚠️ Desplegado incorrecto (muestra Traductor) | ✅ Sí |
| 🐙 GitHub | `manu-alvarez/MOKO-TOOLS` | ✅ Analizado en profundidad | ✅ Sí |

### Versiones disponibles
| Fuente | Ubicación | Estado |
|--------|-----------|--------|
| Desktop | No existe carpeta local | - |
| msbross.me | No existe carpeta | - |
| GitHub | `manu-alvarez/MOKO-TOOLS` | **VERSIÓN ÚNICA** (Next.js 14, shadcn/ui, 189 tools) |
| VPS | `https://msbross.me/moko/` | Build de Traductor (incorrecto) |

### Qué tomar de cada versión
| Componente | Fuente | Razón |
|------------|--------|-------|
| **App completa** | GitHub/MOKO-TOOLS | Next.js 14, shadcn/ui, 189 tools curados |
| **tools.json** | GitHub/MOKO-TOOLS | Dataset curado de 189 herramientas en 14 categorías |
| **parse_tools.py** | GitHub/MOKO-TOOLS | Parser para actualizar dataset |
| **Nginx config** | GitHub/MOKO-TOOLS | moko-tools.conf para producción |
| **Search con accent normalization** | GitHub/MOKO-TOOLS | Patrón sólido de búsqueda |

### Mejoras a implementar en fusión
- [ ] Eliminar dependencias no usadas (Prisma, NextAuth, AWS SDK, Azure, Chart.js, etc.)
- [ ] Simplificar a Vite + React (Next.js es overkill para app estática)
- [ ] Mantener shadcn/ui components usados
- [ ] Implementar categorías dinámicas
- [ ] Añadir sistema de tags/filtros avanzados
- [ ] Añadir búsqueda semántica
- [ ] Implementar sistema de favoritos con sync
- [ ] Añadir modo oscuro/claro mejorado
- [ ] Crear API para actualizar tools.json
- [ ] Corregir despliegue VPS (actualmente muestra Traductor)

### Arquitectura final fusionada
```
moko-tools/
├── docker-compose.yml          # Frontend only
├── .env.example
├── package.json                # React 19, Vite 7, shadcn/ui, Tailwind
├── vite.config.ts
├── tsconfig.json
├── components.json             # shadcn/ui config
├── src/
│   ├── main.tsx
│   ├── App.tsx                 # Tools directory con búsqueda y favoritos
│   ├── components/
│   │   ├── ToolsApp.tsx        # Main app logic
│   │   ├── ToolCard.tsx        # Individual tool card
│   │   ├── SearchBar.tsx       # Search con accent normalization
│   │   ├── CategoryGrid.tsx    # Bento grid de categorías
│   │   └── FavoritesPanel.tsx  # Favoritos
│   ├── lib/
│   │   ├── types.ts
│   │   └── utils.ts
│   └── data/
│       └── tools.json          # 189 tools curados
├── public/
│   ├── manifest.json
│   └── sw.js
├── scripts/
│   └── parse_tools.py          # Parser para actualizar dataset
├── moko-tools.conf             # Nginx config
└── README.md
```

---

## DASHBOARD MSBrossAI - Plan de Fusión

### Versión actual
- HTML estático básico con 9 tarjetas
- Sin health checks reales
- Sin monitorización de estado
- Diseño simple

### Diseño Premium planificado
- React 19 + Vite + Framer Motion 12
- Neural network background animado
- Cards con glassmorphism y hover effects
- Health checks reales por WebSocket/HTTP
- Estado en tiempo real de cada app
- Métricas de rendimiento (CPU, memoria, uptime)
- Sistema de notificaciones
- Responsive design
- Dark theme premium

### Arquitectura final
```
dashboard/
├── Dockerfile
├── nginx.conf
├── package.json                # React 19, Vite, Framer Motion 12, MUI 7
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx                 # Dashboard principal
    ├── components/
    │   ├── AppCard.tsx         # Card por app con status
    │   ├── HealthMonitor.tsx   # Health checks en tiempo real
    │   ├── MetricsPanel.tsx    # Métricas del sistema
    │   ├── NotificationCenter.tsx
    │   └── NeuralBackground.tsx  # Animated background
    ├── hooks/
    │   └── useHealthCheck.ts   # Custom hook para health checks
    ├── services/
    │   └── healthApi.ts        # API calls a cada app
    └── theme/
        └── theme.ts            # Premium dark theme
```

---

## ORDEN DE IMPLEMENTACIÓN

1. **IAPuta OS** - Backend más complejo, base del ecosistema
2. **LIVEKIT Nikolina** - Segundo más complejo, voice assistant
3. **Arantxa Translate PRO** - Traducción neural, multi-provider
4. **TaskFlowPro** - Task management, más sencillo de fusionar
5. **DOHLER** - Task manager + Pomodoro, backend sólido
6. **LogiSearch** - Client-side, AI provider abstraction
7. **Edelweiss** - PWA infantil, correcciones menores
8. **Moko-Tools** - Simplificar de Next.js a Vite
9. **CombiPro** - Reescritura completa desde cero
10. **Dashboard** - Último, cuando todas las apps estén listas

---

## DEPLOYMENT

### Local
```bash
cd /Users/manu/Desktop/MSBrossAI
./deploy/local.sh
```

### VPS
```bash
# En VPS como usuario manuel
cd /home/manuel/MSBrossAI
./deploy/vps.sh
```

### GitHub
- Repo: `manu-alvarez/MSBrossAI`
- CI/CD: GitHub Actions para tests + build + deploy
- Cada app con su propio README.md

---

*Documento creado: 2026-03-31*
*Última actualización: 2026-03-31*
