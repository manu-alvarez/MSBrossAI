# 📖 MSBrossAI — Manual Maestro de Arquitectura y Operaciones (Nivel 3)
> **Guía oficial de referencia técnica de alta ingeniería.** Arquitectura unificada, administración de microservicios, enrutamiento reverso, DNS, túneles persistentes y flujos de despliegue.

---

## 🏗️ 1. Estructura y Scaffolding del Ecosistema

El repositorio de **MSBrossAI** se gestiona bajo una arquitectura monorepo modular donde los frontends estáticos, los servicios backend y la capa de proxy residen bajo la misma estructura del espacio de trabajo.

```
/Users/manu/Desktop/MSBrossAI
├── apps/                        # Aplicaciones nativas de desarrollo
│   ├── elitescout/              # Next.js Travel & Price Scraper Finder (Puerto 8003)
│   ├── traductor-pro/           # Traductor PRO Client & Server (Puerto 8004)
│   │   ├── client/              # React 19 / Vite (Ventanilla de Traducción)
│   │   └── server/              # Express AI Translation Proxy (Fallback Secuencial)
│   ├── gas-station/       # Gas Station ERP (Puerto 3005)
│   ├── livekit-nikolina/        # Voice AI Nikolina Frontend & Backend (Puerto 8001)
│   └── ... (resto de las 22 aplicaciones integradas)
│
├── www/                         # Repositorio de recursos estáticos servidos por el proxy
│   ├── index.html               # Landing Portal principal de MSBrossAI
│   └── app/                     # Compilaciones de producción listas para servir
│       ├── elitescout/          # Build estático Next.js (SSG/Out)
│       ├── traductor-pro/       # Build estático Vite (React/TypeScript)
│       └── ...
│
├── logs/                        # Logs consolidados de ejecución de servicios
├── deploy/                      # Scripts auxiliares de empaquetado y subida
│   └── build-all.sh             # Compilador maestro de las aplicaciones del ecosistema
│
├── START_SYSTEM.sh              # Orquestador local macOS de inicio y monitorización
├── proxy_server.js              # Servidor Express, Reverse Proxy y SSL
└── ecosystem.config.js          # Configuración maestra PM2 (Orquestador de Resiliencia)
```

---

## 🔌 2. Capa de Enrutamiento Reverso (proxy_server.js)

Toda petición (WAN o LAN local) converge en el proxy central en el puerto **8080** (HTTP) o **8443** (HTTPS con certificados auto-generados efímeros para Secure Context de micrófonos en LAN).

### Funciones del Proxy:
1. **Servicio Estático de SPAs:**
   - La landing page se sirve en la raíz `/` desde `/www/index.html`.
   - Las 22 aplicaciones se montan estáticamente en la ruta `/app/<nombre-app>` mapeando el contenido de `/www/app/<nombre-app>`.
   - Configura enrutamiento SPA automático: cualquier ruta de navegación del cliente (ej. `/app/elitescout/family-travel`) realiza fallback a `/app/elitescout/index.html` en caso de recarga.

2. **Contador Global de Visitas e Integración de Analytics:**
   - Registra de forma consolidada e inmune a fallos las visitas al portal principal, páginas internas del ecosistema y recursos externos (como GitHub o Trello).
   - Endpoints expuestos:
     - `POST /api/track-visit`: Incrementa el contador (admite `referer` y `page` opcionales en el body).
     - `GET /api/visits`: Obtiene estadísticas de hoy y visitas totales en formato JSON (`{ today: N, total: M }`).
     - `GET /api/visits-badge`: Retorna el contador renderizado en formato SVG dinámico como Badge.
   - Persistencia: Archivo local `/Users/manu/Desktop/MSBrossAI/visits.json` con backups atómicos.

3. **Puertos API Dedicados:**

| Contexto URL | Puerto Interno | Servicio Backend |
|:---|:---:|:---|
| `/_nikolina` | **8001** | API Hub Nikolina (FastAPI + JWT) |
| `/_industrialpro` | **8002** | IndustrialPro Backend (FastAPI Task Manager) |
| `/app/elitescout` | **8003** | EliteScout API (Next.js SSR) |
| `/_traductor` | **8004** | Traductor PRO Server (Express AI) |
| `/_msbross` | **8005** | MSBrOSs (Adele Voice Server) |
| `/_iaputa` | **8006** | IAPuta OS (FastAPI AI Assistant) |
| `/_cuentosmagicos` | **8007** | Cuentos Mágicos (FastAPI Story Backend) |
| `/_atenea` | **8009** | Atenea Restaurant (FastAPI + SQLite) |
| `/_jartosdto` | **8010** | JartosDTo (RAG & Multi-LLM FastAPI) |
| `/_gas-station` | **3005** | Gas Station ERP (FastAPI Checklist) |
| `/app/perfume-trading` | **3011** | Perfume Trading ERP (Next.js SSR) |
| `/app/mapfre` | **3333** | Mapfre InfoCol (Next.js SSR) |
| `/app/txafitnesspro` | **3456** | TXA Fitness Pro (Next.js SSR) |

---

## ⚡ 3. Configuración PM2 (ecosystem.config.js)

Los servicios backend no se ejecutan directamente en segundo plano mediante terminales aisladas. Se orquestan de manera robusta y permanente mediante **PM2** con políticas estrictas de auto-recuperación.

### Comando de Control Rápido:
* **Iniciar todo el sistema:** `pm2 start ecosystem.config.js`
* **Guardar configuración para reinicios del OS:** `pm2 save`
* **Ver estado en vivo:** `pm2 status`
* **Monitorear recursos y CPU:** `pm2 monit`
* **Ver logs unificados:** `pm2 logs` o `pm2 logs <service-name>`
* **Reiniciar un servicio específico actualizando variables de entorno:**
  ```bash
  pm2 restart traductor-pro-server --update-env
  ```

### Políticas de Resiliencia implementadas:
* **`max_memory_restart`**: Límites estrictos de memoria por servicio (ej. 300M para Express, 800M para Next.js/FastAPI) para mitigar fugas de memoria.
* **`exp_backoff_delay`**: Retardo exponencial de reinicio (arranca en 1000ms) para evitar bucles infinitos en caso de caídas persistentes.
* **`min_uptime`**: El proceso debe durar al menos 15s levantado para ser considerado estable.

---

## 🛠️ 4. Flujo de Desarrollo y Actualizaciones

Cuando se realiza un cambio en una aplicación, se debe seguir estrictamente este flujo de construcción y distribución local.

### Paso 1: Modificar el código fuente
Los cambios se hacen directamente bajo `apps/<nombre-app>/`.

### Paso 2: Construir el Frontend
* **Para aplicaciones basadas en Vite** (`apps/traductor-pro/client`):
  ```bash
  npm run build
  # Esto genera la carpeta 'dist/'
  ```
* **Para aplicaciones basadas en Next.js** (`apps/elitescout`):
  ```bash
  npm run build
  # Esto genera la carpeta 'out/' mediante SSG (Static Site Generation)
  ```

### Paso 3: Sincronizar el directorio servidor
El contenido compilado se copia a `/www/app/<nombre-app>/`:
```bash
# Limpiar destino anterior
rm -rf www/app/traductor-pro/*
# Copiar nueva compilación
cp -r apps/traductor-pro/client/dist/* www/app/traductor-pro/
```

### Paso 4: Reiniciar Servidores de Backend (si hubo cambios lógicos en API)
```bash
pm2 restart traductor-pro-server --update-env
```

---

## ✈️ 5. Despliegue en Servidor de Producción (FTP Sync)

Para sincronizar de manera automatizada las actualizaciones de los clientes estáticos con el hosting de Nominalia (`msbross.me`), se cuenta con un script automatizado en Python:

`python3 /Users/manu/.gemini/antigravity-ide/brain/d91d13f5-8316-45bc-b248-52bd3715c1ef/scratch/ftp_deploy_fixes.py`

### Qué realiza este script:
1. Conexión pasiva cifrada FTP a `msbros.ftp.tb-hosting.com`.
2. Autenticación con las credenciales maestras.
3. Carga automática de la landing principal `www/index.html`.
4. Sincronización recursiva del build de **EliteScout** (`/www/app/elitescout`).
5. Sincronización recursiva del build de **Traductor PRO** (`/www/app/traductor-pro`).
6. En caso de lentitud por la carga global, los scripts `ftp_fast_<app>.py` bajo demanda permiten actualizar aplicaciones unitarias al vuelo.

> [!NOTE]
> Al modificar cualquier frontend estático, simplemente compila la app localmente, sincroniza la carpeta en `/www/app/<app>` y ejecuta el script FTP para subirla a producción en segundos.

---

## ☁️ 6. Red y DNS en Cloudflare (Túnel msbross-main)

Para permitir que los backends locales en el Mac de Manu respondan peticiones desde el exterior sin necesidad de abrir puertos ni exponer la IP doméstica, se implementa un **Túnel Nombrado Permanente** de Cloudflare.

### Detalles del Túnel Permanente:
* **Nombre del Túnel:** `msbross-main`
* **ID de Túnel:** `e77340ca-e206-4542-8feb-781cb6df27fe`
* **Archivo de Credenciales:** `/Users/manu/.cloudflared/e77340ca-e206-4542-8feb-781cb6df27fe.json`
* **Configuración global (`~/.cloudflared/config.yml`):**
  ```yaml
  tunnel: e77340ca-e206-4542-8feb-781cb6df27fe
  credentials-file: /Users/manu/.cloudflared/e77340ca-e206-4542-8feb-781cb6df27fe.json

  ingress:
    - hostname: msbross.me
      service: http://localhost:8080
    - hostname: "*.msbross.me"
      service: http://localhost:8080
    - service: http_status:404
  ```

### Enrutamiento DNS en Cloudflare:
El dominio principal `msbross.me` tiene un registro **CNAME** activo apuntando directamente al endpoint del túnel nombrado:
```
msbross.me  CNAME  e77340ca-e206-4542-8feb-781cb6df27fe.cfargotunnel.com
```

### Auto-Arranque del Túnel tras Reinicio del Mac:
El túnel se ejecuta de fondo consumiendo la configuración establecida. Se puede añadir a PM2 o mediante un LaunchAgent local para asegurar que se actualice e inicie solo:
```bash
cloudflared tunnel run msbross-main > /Users/manu/Desktop/MSBrossAI/LOGS/tunnel-named.log 2>&1 &
```

---

## 🧠 7. Arquitectura de Alta Disponibilidad de APIs (Estrategia de Fallback)

El sistema operativo neural de **MSBrossAI** se rige por un principio de auto-recuperación y tolerancia a fallos. Si un backend o proveedor de IA no tiene cuota gratuita o disponibilidad, el sistema conmuta automáticamente.

### Patrón de Fallback Secuencial (Implementado en Traductor PRO):
```
[Petición del Cliente]
          │
          ▼
[1. Intentar Groq llama-3.3-70b] ──(Éxito)──→ [Retornar Resultado + 'groq']
          │
      (Error)
          ▼
[2. Intentar Gemini gemini-2.0-flash] ──(Éxito)──→ [Retornar Resultado + 'gemini']
          │
      (Error)
          ▼
[3. Intentar OpenRouter Llama-3.3] ──(Éxito)──→ [Retornar Resultado + 'openrouter']
          │
      (Error)
          ▼
[4. Intentar OpenAI gpt-4o] ──(Éxito)──→ [Retornar Resultado + 'openai']
          │
      (Error)
          ▼
[Error 502: Todos los proveedores fallaron]
```

### Código Maestro de Fallback (Express Backend):
```typescript
const providersToTry = ['groq', 'gemini', 'openrouter', 'openai'];
let lastError: any = null;
let successfulProvider = '';
let parsed: any = null;

for (const providerName of providersToTry) {
  try {
    const aiProvider = ProviderFactory.create(providerName);
    const completion = await aiProvider.chat.completions.create({
      model: aiProvider.getDefaultModel(),
      temperature: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: texto },
      ],
    });
    parsed = JSON.parse(completion.choices[0].message.content);
    successfulProvider = providerName;
    break; // Se detiene en el primer éxito
  } catch (err: any) {
    lastError = err; // Almacena el error y salta al siguiente
  }
}
```

---

## 📝 8. Directivas para Futuros Agentes / Desarrolladores

Para mantener la **Soberanía Neural (Nivel 3)** sin romper compatibilidades:
1. **PROHIBIDOS LOS ENTORNOS DEMO/OFFLINE:** Todo el software del ecosistema debe estar 100% conectado e integrado con los servidores de base de datos reales y backends en producción. No crees fallbacks o mocks locales en frontend que oculten fallos de conexión de red; en su lugar, implementa flujos limpios de reconexión y levanta estados de error explícitos.
2. **Nunca expongas claves en Frontend:** Todo consumo de IA (OpenAI, Claude, Gemini, Groq) se hace **SIEMPRE** a través de llamadas al backend o proxy local. Jamás utilices prefijos `NEXT_PUBLIC_` para tokens sensibles de backend.
3. **Cero-Prose en Terminales:** Toda automatización debe estar estructurada, libre de interacciones humanas (usa banderas `-y`, `--no-interactive` y scripts dedicados).
4. **Persistencia de Puertos:** Respeta el mapa de puertos en `ecosystem.config.js` y `proxy_server.js` para asegurar que el enrutador local no sufra de fallos de conexión (HTTP 502/404).
5. **Resiliencia de SQLite:** Al instanciar bases de datos SQLite en Python, añade siempre `check_same_thread=False` y un timeout elevado (`timeout=20.0`) para evitar bloqueos por transacciones concurrentes de los agentes de voz y la web.
6. **Compilaciones Next.js / SSG:** Al usar `output: export`, asegúrate de mover funciones como `generateStaticParams()` a componentes de servidor o archivos `layout.tsx` si el archivo `page.tsx` utiliza la directiva `'use client'`, garantizando la correcta compilación y exportación de archivos HTML estáticos.


---

## 🛑 9. Lecciones Críticas y Troubleshooting (Auditoría Junio 2026)

1. **Next.js `trailingSlash: true` y API POSTs:**
   Si una app Next.js tiene `trailingSlash: true` en `next.config.ts`, TODAS las peticiones `fetch()` hacia la API interna **deben terminar con `/`** (ej: `/api/search/`). Si no, Next.js emite un HTTP 308 Redirect automático. En peticiones `POST`, esto provoca que el body (payload) se pierda durante la redirección, rompiendo la aplicación silenciosamente en producción con errores JSON parse o de `DOCTYPE`.

2. **Service Workers y `basePath` en Next.js:**
   Al montar aplicaciones estáticas bajo `/app/<nombre>/`, los Service Workers customizados (como en `elitescout` o `perfume-trading`) deben interceptar e inyectar **explícitamente** el prefijo de la ruta. Usar caché en `/catalog` sin inyectar `/app/<nombre>/catalog` causará que el PWA falle en modo offline y bloquee peticiones de red.

3. **Limpieza Rigurosa del Sistema de Archivos:**
   Los procesos de "build" o refactorización masiva dejan rastros (`.DS_Store`, `index 2.html`, tests unitarios de prototipado). Antes de presentar o hacer push a `main`, el repositorio debe estar purgado de `.test.ts`, logs locales y scripts de un solo uso. Un repositorio limpio es síntoma de Ingeniería Nivel 3.

4. **Caché del Proxy y Builds Estáticos (Junio 2026):**
   Los archivos `index.html` y `sw.js` se sirven con `Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0` para garantizar que los cambios se reflejen instantáneamente. Los assets con hash de Vite (ej: `index-DVobJVVn.js`) se sirven con `max-age=31536000, immutable` para aprovechar caché agresiva del navegador sin riesgo de stale content.

5. **Paleta Cromática Unificada — LogiSearch (Junio 2026):**
   LogiSearch opera bajo una paleta premium **Dark + Cyan** (`#00E5FF`, `#00B8D4`, `#06B6D4`, `#0891B2`). Todos los componentes deben respetar exclusivamente estos tonos. No usar rojos, morados ni verdes en la UI principal. El `theme.ts` define `primary`, `secondary` y `success` en tonos cyan.

6. **Enrutamiento WebRTC / LiveKit en Proxy (Junio 2026):**
   No aplicar autonegociación de esquema (`wss://{host}/rtc`) en backends (como Atenea) si el Agente de IA (Worker) reside y escucha en una instancia separada en la nube (`livekit.cloud`). Esto fuerza al frontend a conectarse al proxy local, provocando errores silenciosos o que el cliente espere en una sala vacía. Las aplicaciones web deben consumir **estrictamente** la variable `LIVEKIT_URL` inyectada en el `.env`, sincronizada directamente con `api_keys_vault.json` y el entorno del agente.
