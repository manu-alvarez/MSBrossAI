# MSBrossAI - Ecosistema Unificado de Aplicaciones

> **9 aplicaciones fusionadas** desde Desktop, msbross.me, VPS y GitHub en un único ecosistema profesional.

[![GitHub](https://img.shields.io/github/stars/manu-alvarez/MSBrossAI?style=for-the-badge)](https://github.com/manu-alvarez/MSBrossAI)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)]()
[![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)]()

---

## 🚀 Aplicaciones

| App | Descripción | Tech Stack | Estado |
|-----|-------------|------------|--------|
| **🤖 IAPuta OS** | Asistente IA con orbe 3D, 12 herramientas, multi-LLM fallback | FastAPI + React 19 + Three.js | ✅ Fusionada |
| **🎙️ LIVEKIT Nikolina** | Asistente de voz para restaurantes con Gemini 2.5 | LiveKit + FastAPI + React 18 | ✅ Fusionada |
| **🌐 Arantxa Translate** | Traductor neural con 4 modos + 4 providers | Express + React 19 + MUI 7 | ✅ Fusionada |
| **✅ TaskFlowPro** | Gestión de tareas con alarmas + WhatsApp | React 18 + MUI 5 + Zustand | ✅ Fusionada |
| **📋 DOHLER** | Task manager + Pomodoro con stats | FastAPI + React + Tailwind | ✅ Fusionada |
| **🔍 LogiSearch** | Buscador logístico con IA + RFQs | React 19 + TS + Supabase + Tavily | ✅ Fusionada |
| **👶 Edelweiss** | Estimulación visual infantil (5 modos) | React 18 + Tailwind + PWA | ✅ Fusionada |
| **🛠️ Moko-Tools** | Directorio de 189 herramientas dev | React 19 + Vite 7 + Tailwind | ✅ Fusionada |
| **⚽ CombiPro** | Generador de combinadas deportivas | React 19 + Vite 7 + MUI 7 | ✅ Fusionada |

---

## 📁 Estructura del Proyecto

```
MSBrossAI/
├── README.md                    # Este archivo
├── PLAN_FUSION.md              # Plan detallado de fusión (27/36 fuentes analizadas)
├── .env.local                  # Variables de entorno (NO versionado)
├── .env.example                # Template de variables de entorno
│
├── dashboard/                   # Dashboard Premium con health checks reales
│   ├── src/
│   │   ├── App.tsx              # UI con status indicators, response times, uptime
│   │   ├── services/healthApi.ts # Health checks reales por app
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── apps/
│   ├── iaputa-os/               # Backend Clean Architecture + Frontend React 19
│   ├── livekit-nikolina/        # Agent + Server + Frontend
│   ├── arantxa-translate/       # Multi-provider backend + Frontend
│   ├── taskflow-pro/            # Store mejorado + WhatsApp wiring
│   ├── dohler/                  # API fix + Frontend
│   ├── logisearch/              # GitHub repo completo
│   ├── edelweiss/               # Desktop completo
│   ├── moko-tools/              # 189 tools + scaffold
│   └── combipro/                # Scaffold React 19
│
├── deploy/
│   ├── local.sh                 # Despliegue local con Docker fallback
│   ├── vps.sh                   # Despliegue VPS vía FTP
│   ├── install_vps.sh           # Script de instalación en VPS (sudo)
│   └── nginx-msbrossai.conf     # Configuración Nginx para producción
│
├── shared/
│   └── security/                # Auth, CORS, rate limiting, input validation
│
└── docs/
    ├── ARCHITECTURE.md          # Diagramas C4 + ADRs
    ├── SECURITY_AUDIT.md        # Auditoría de seguridad completa
    ├── SECURITY_STANDARDS.md    # Estándares de seguridad
    ├── TEST_STRATEGY.md         # Estrategia de testing
    └── ACCEPTANCE_CRITERIA.md   # Criterios de aceptación
```

---

## 🛠️ Despliegue

### Local

```bash
cd /Users/manu/Desktop/MSBrossAI
./deploy/local.sh
```

### VPS (Ubuntu)

```bash
# En el VPS como root:
sudo bash /home/manuel/MSBrossAI/deploy/install_vps.sh

# O manualmente:
cd /home/manuel/MSBrossAI
git pull
cd dashboard && npm install && npm run build
sudo cp -r dist/* /var/www/msbrossai/
sudo cp deploy/nginx-msbrossai.conf /etc/nginx/sites-available/msbrossai
sudo ln -sf /etc/nginx/sites-available/msbrossai /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

---

## 🔧 Tecnologías

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 18/19, TypeScript, Vite 7, MUI 5/7, Tailwind 3, Framer Motion 12 |
| **Backend** | FastAPI, Express, Python 3.11+, Node.js 20+ |
| **AI/ML** | Groq, OpenAI, Gemini, Ollama, LiveKit Agents, Tavily |
| **Database** | SQLite (WAL mode), Supabase (PostgreSQL) |
| **Deployment** | Docker, Docker Compose, Nginx, GitHub Actions |
| **Monitoring** | Sentry, Mixpanel, Health Checks |

---

## 📊 Métricas del Proyecto

- **Líneas de código fusionadas**: ~15,000+
- **Apps unificadas**: 9/9
- **Fuentes analizadas**: 27/36 (75%)
- **Bugs críticos corregidos**: 15+
- **Mejoras implementadas**: 25+
- **Commits**: 15+
- **Archivos creados**: 100+

---

## 🔐 Seguridad

- ✅ CORS restringido a dominios específicos
- ✅ Rate limiting en todas las APIs
- ✅ Helmet.js para headers de seguridad HTTP
- ✅ API keys no expuestas en frontend
- ✅ .env.local no versionado
- ✅ Input validation en todos los endpoints
- ✅ Error handling seguro (sin stack traces en producción)

---

## 📝 Licencia

Propiedad privada de MSBross. Todos los derechos reservados.

---

## 👤 Autor

**Manuel Álvarez** - [GitHub](https://github.com/manu-alvarez)

---

*Última actualización: Marzo 2026*
# CI/CD test trigger
