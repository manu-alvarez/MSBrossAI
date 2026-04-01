# Plan de Actuación y Roadmap Extremo - Ecosistema MSBrossAI

Este documento presenta la estrategia detallada "end-to-end" para fusionar, corregir, elevar a nivel "Premium/Next-Level" y desplegar las 9 aplicaciones del ecosistema MSBrossAI en tres entornos distintos (Local/Desktop, `msbross.me` y VPS en `msbrossai.alvarezconsult.com`).

El análisis exhaustivo combina la información extraída de `PLAN_FUSION.md`, verificaciones de carpetas locales y el estado actual de los despliegues.

## Objetivos Core del Plan

1. **Unificación y Consolidación**: Tomar lo mejor del código distribuido entre el Escritorio, `msbross.me`, el VPS actual y GitHub, encapsulándolo bajo `/Users/manu/Desktop/MSBrossAI`.
2. **Corrección Funcional Exhaustiva**: Arreglar endpoints rotos, dependencias faltantes, errores de UI, componentes huérfanos y falsos positivos (como el de Moko-Tools renderizando Arantxa-Translate).
3. **Elevación UX/UI ("Premium Next-Level")**: Aplicar consistentemente diseño Glassmorphism, animaciones fluidas (Framer Motion 12), temas oscuros de lujo y paletas neón coherentes entre las 9 apps.
4. **Despliegue Triple**: Asegurar que cada aplicación funciona standalone vía `docker-compose` y en conjunto, para desplegarlo eficientemente en VPS, hosting y local.

---

> [!IMPORTANT]
> ## Aprobación Requerida
> Por favor, revisa las propuestas de mejora "Next-Level" por cada aplicación (especialmente las reescrituras como CombiPro). ¿Estás de acuerdo con el orden de prioridad y el nivel técnico planteado antes de que comencemos la ejecución fase por fase?

---

## Fases del Roadmap de Ejecución

El Roadmap se divide en sprints organizados por criticidad arquitectónica: desde fundaciones core (Backend y Agentes IA) hasta Frontends y finalmente el Dashboard unificado.

### Fase 1: Fundaciones IA y Core Backends (Prioridad Alta)

#### 1. IAPuta OS (El Cerebro del Sistema)
- **Análisis**: backend en msbross.me es la versión maestra (Clean Architecture, multi-LLM, agentic loop). Frontend usa React 19.
- **Correcciones**:
  - Extraer todo el estado monolítico de `App.jsx` a un store global de `Zustand`.
  - Integrar Sentry y Mixpanel.
  - Ocultar secret keys y restringir CORS.
- **Next-Level**:
  - Refinar el "Dual Orb System" 3D con Three.js haciendo match con las frecuencias de audio.
  - Implementar streaming puro por WebSocket o SSE para latencia cero.
  - Autenticación real de usuario para protección de logs.

#### 2. LIVEKIT Nikolina (Asistencia de Voz Integral)
- **Análisis**: La versión completa reside en Desktop. Tiene paneles de admin, agent dual architecture y backend sólido.
- **Correcciones**:
  - Arreglar fallback silencioso en `create_stt` config.
  - Corregir variable `LIVEKIT_API_SECRET` con typo.
  - Reconectar el frontend transcript panel al data proxy del agente real y no a los stubs.
- **Next-Level**:
  - Culminar integración SIP para llamados telefónicos reales.
  - Mejorar el tema "Gold luxury" con micro-animaciones en tarjetas interactivas al detectar voz de usuario.

#### 3. Arantxa Translate PRO (IA Lingüística y OCR)
- **Análisis**: La versión local es la más madura con React 18, MUI, 4 modos y Tesseract. El Frontend apunta mal a `/traductor/api.php` en lugar del Node backend.
- **Correcciones**:
  - Redirigir el reverse proxy del frontend a las rutas Express (`/api/process`).
  - Estandarizar `OPENAI_API_KEY` vs `GROQ_API_KEY`.
- **Next-Level**:
  - Modo Streaming real para traducciones de documentos masivos.
  - Barra de progreso precisa para la extracción de PDF.

### Fase 2: Gestión y Productividad (Prioridad Media)

#### 4. TaskFlowPro
- **Análisis**: Desktop tiene la V2 limpia en TypeScript y MUI.
- **Correcciones**:
  - Enlazar la API de WhatsApp Service al ciclo de vida de la tarea (alarmas y due dates).
  - Activar el gestor de categorías en la App.
- **Next-Level**:
  - Habilitar Drag & Drop avanzado, skeleton loading states y offline support PWA 100% robusto.

#### 5. Döhler (Monitor & Task Manager)
- **Análisis**: Desktop tiene el Task manager, msbross.me tiene un entorno de SCADA que pisó el código.
- **Correcciones**:
  - Limpiar el App.jsx eliminando el SCADA y reensamblar el gestor de tareas basado en `Zustand`.
  - Arreglar las URLs de peticiones de frontend hacia el FastAPI backend.
- **Next-Level**:
  - Sincronización de timer Pomodoro cross-device vía WebSockets.

#### 6. LogiSearch (Operativa Logística)
- **Análisis**: GitHub tiene la versión pro 19+TS (Supabase, Tavily). `msbross.me` tiene un HTML plano insalvable.
- **Correcciones**:
  - Eliminar inyección "hardcoded" de la de Supabase key.
  - Gestión rigurosa para fallos al invocar Tavily API.
- **Next-Level**:
  - Comparativas multi-modal real-time. Exportación avanzada Excel (no solo PDF).

### Fase 3: Utilidades Auxiliares (Prioridad Normal)

#### 7. Edelweiss (Estimulación Visual)
- **Análisis**: PWA limpia pero usa Framer Motion y React viejos.
- **Correcciones**:
  - Reparar la API Web `navigator.vibrate` (bug de tipografía).
  - Purgar el código i18n obsoleto y reparar el loop the sonido (audios base64 vacíos).
- **Next-Level**:
  - Panel supervisor de progreso y actualización a Framer Motion 12 para transiciones impecables 120fps.

#### 8. Moko-Tools
- **Análisis**: Se implementó con Next.js 14 que resulta un "overkill" y despliega erróneamente el traductor en el VPS.
- **Correcciones**:
  - Migrar el stack de manera drástica de Next.js a una SPA estándar (Vite + React) importando el `tools.json`.
  - Fix en la regla Nginx que está capturando mal la ruta `/moko/`.
- **Next-Level**:
  - Motor de búsqueda ultra rápido in-memory y sistema de marcadores `localStorage`/`Supabase`.

#### 9. CombiPro (IA Apuestas)
- **Análisis**: HTML puro abandonado.
- **Correcciones**:
  - REESCRITURA TOTAL CERO (React 19, TS, Vite + Express API para odds).
- **Next-Level**:
  - Integración backend real `API-Football`/`Odds API` usando un algoritmo cron local y motor de riesgo avanzado.

### Fase 4: Orquestación Total, Dashboard y Despliegue

#### Dashboard Maestro Unificado
- Interfaz Next-Level PWA, "Vibrant Dark/Cyberpunk" o Neuronal.
- Visualización de latencias en tiempo real de los 9 contenedores.

#### Estrategia de Despliegue
- **Local (`MSBrossAI`)**: Orquestación maestro `docker-compose.yml`. Todos bajo una red `msbrossai-network`.
- **VPS / Producción (`msbrossai.alvarezconsult.com` / `msbross.me`)**: Pipeline Nginx optimizado, scripts automáticos y configuración estricta de variables `.env.local`.

---

## Verificación Planificada

### Nivel Aplicación
1. **Frontend**: Pruebas multi-resolución de UI/UX "Premium" e interacciones (120fps en animaciones).
2. **Backend**: Endpoints `GET /health` de las APIs en Python y Node corriendo OK y conectadas a bases locales.

### Nivel Clúster (Ecosistema)
1. **Docker Composer**: `docker compose up -d` debe levantar los 10+ servicios de corrido sin "Exited(1)".
2. **Reverse Proxy Nginx**: Routing limpio para dominios y subpaths.

---

**Esperando confirmación del usuario para iniciar la FASE 1: IAPUTA OS y LIVEKIT.**
