# MSBrossAI — Suite de Aplicaciones de Software

MSBrossAI es un ecosistema consolidado de 22 aplicaciones avanzadas de inteligencia artificial, productividad, gestión empresarial y herramientas interconectadas mediante un proxy centralizado.

El ecosistema opera mediante una arquitectura altamente integrada sobre **macOS** (y compatible con Linux/Bash), estructurada en:
- **Proxy Central Reverso (`proxy_server.js`)**: Gestiona toda la capa de routing inverso y sirve las Single Page Applications desde `/www/app/<nombre-app>`. Mapea endpoints internos de API en puertos dedicados (`/_traductor`, `/_nikolina`, etc.). Admite almacenamiento centralizado de datos y el **Contador Global de Visitas** (`/api/track-visit`) con persistencia directa en disco.
- **Orquestación PM2 (`ecosystem.config.js`)**: Proporciona alta disponibilidad, auto-recovery exponencial y limitación de memoria a todos los microservicios en NodeJS, FastAPI y Express.
- **Túnel Nombrado de Cloudflare (`msbross-main`)**: Habilita acceso WAN cifrado continuo hacia los backends locales de forma segura.
- **Bases de Datos de Producción Integradas**: Todos los clientes (como Teringo ERP, JartosDTo y LogiSearch) operan de forma nativa e incondicional conectados a sus bases de datos reales en la nube (Supabase en la instancia de producción `ujktxhqxhxkbrhczbhcf.supabase.co` y APIs en vivo). Se han erradicado por completo los modos simulados offline/demo locales de la suite de software en favor de entornos 100% interactivos y reales.

## Aplicaciones Incluidas (22)

| Aplicación | Directorio (`apps/` o `www/`) | Descripción | Stack Tecnológico |
| :--- | :--- | :--- | :--- |
| **App Generator** | `/apps/app-generator` | Constructor asimétrico en tiempo real (Split-View) que genera SPAs usando prompts e inferencia native de LLM. | React 19, Vite, Gemini API, Iframe |
| **CombiPro** | `/apps/combipro` | Algoritmo estadístico predictivo y generador de combinadas deportivas con perfiles de riesgo y stake. | React 19, Material-UI, Framer Motion, API-Football |
| **Cuentos Mágicos** | `/apps/cuentos-magicos` | Generador e ilustrador infantil de cuentos interactivos en pergamino o cine con voz y animación por IA (Tema Amarillo/Naranja). | Next.js 15, FastAPI, Gemini API, OpenAI TTS, Luma |
| **DOHLER** | `/apps/dohler` | Gestor de tareas con temporizador Pomodoro de alto rendimiento y estilo visual neón glassmorphism. | React 19, FastAPI, SQLite, Tailwind |
| **Edelweiss** | `/apps/edelweiss` | Plataforma de estimulación visual infantil con modos de alto contraste y parental lock. | React 18, Tailwind, Framer Motion, PWA |
| **EliteScout** | `/apps/elitescout` | Buscador semántico inteligente de viajes y CRM de scouting/precios con integración de scraping logístico. | Next.js 16, FastAPI, SQLite, Tavily API, Groq, Gemini |
| **EXPOSITATOR RTE**| `/apps/expositator-rte-rte` | Simulador e interactivo evaluador en tiempo real de exposiciones y discursos con reconocimiento de voz y visión. | HTML5, Native Speech API, JavaScript, PWA |
| **IAPuta OS** | `/apps/iaputa-os` | Asistente IA centralizado con orbe 3D reactivo, multi-LLM fallback y utilidades integradas. | FastAPI, React 19, Three.js, Groq, Gemini |
| **JartosDTo** | `/apps/jartosdto` | Chat con IA corporativo y base de datos vectorial con túnel seguro de datos para acceso nativo iOS. | React 19, FastAPI, pgvector, LangChain, iOS |
| **LIVEKIT Nikolina**| `/apps/livekit-nikolina`| Asistente telefónico de voz inteligente de restaurante con voz e inferencia nativa en tiempo real. | LiveKit, Gemini 2.5 Flash Audio, FastAPI, React 18 |
| **LogiSearch** | `/apps/logisearch` | Motor logístico inteligente: cotizador de rutas, comparador de tarifas de transportistas y generador de RFQs. | React 19, TypeScript, Supabase, Tavily API |
| **LogiTrack Almacén**| `/www/logitrack` | Tablero Kanban interactivo para el control ágil de inventarios, expedición y operaciones de almacén. | HTML5, Trello API, Tailwind, JavaScript |
| **Mano Eléctrica Azul**| `/www/ManoElectricaAzul`| App multiplataforma (Google Play Store) de exploración, meditación y sincronario maya Tzolkin. | React Native, Expo Go, Android SDK |
| **Manuel Alvarez CV**| `/www/Portfolio` | CV digital y portfolio profesional de Manuel Alvarez (Sistemas, Cloud & IA). | HTML5, CSS3, JS, responsive premium |
| **Moko-Tools** | `/apps/moko-tools` | Suite de 189 herramientas de desarrollo organizadas en 14 categorías con búsqueda bento. | React 19, Vite 7, Tailwind, Client-Side |
| **MSBrOSs** | `/apps/msbross` | Motor de asistente conversacional multimodal de voz y suite de herramientas integradas. | Python, FastAPI, Gemini API, Voice Adele |
| **Newton Mequinenza**| `/apps/newton-mequinenza` | ERP/PWA vertical para estaciones de servicio Repsol (Checklists, Horarios, Incidencias). | React 19, FastAPI, SQLite, PWA, Service Worker |
| **TaskFlowPro** | `/apps/taskflow-pro` | PWA de productividad premium con notificaciones automáticas de alarmas e integración de mensajería. | React 18, MUI, Zustand, PWA LocalStorage |
| **Teringo ERP** | `/apps/teringo-erp-erp` | ERP B2B transaccional de trading de perfumes con catálogo maestro e inventario dinámico. | React 19, Supabase, PostgreSQL |
| **Traductor PRO** | `/apps/traductor-pro`| Traductor neural con 4 modos estilísticos, multi-provider fallback secuencial y OCR de imágenes. | React 19, Express, Tesseract.js, Groq, Gemini, OpenAI |
| **Tu Energía Maya** | `/www/TuEnergiaMaya` | Suite interactiva de cosmología y cálculo de Kin y firma galáctica galáctica diaria. | HTML5, Canvas, CSS3, Tzolkin Algorithm |
| **Web Rest. Atenea**| `/www/atenea` | Frontend estático elegante e interactivo para restauración con motor de reservas y menú premium. | HTML5, CSS3, JavaScript, SQLite |

## Guía de Despliegue Local

Para levantar el entorno completo de desarrollo en un sistema macOS/Linux:

```bash
# 1. Instalar dependencias e iniciar todos los servicios mediante PM2
./START_SYSTEM.sh
```

El script `START_SYSTEM.sh` detendrá procesos huérfanos, leerá el manifiesto `ecosystem.config.js`, lanzará los backends de cada aplicación y expondrá el proxy en el puerto 8080.

- **Panel Principal:** `http://localhost:8080/`
- **Consola de Administración:** `http://localhost:8080/iaputa/`
- **Resto de Aplicaciones:** Accesibles mediante `http://localhost:8080/app/<nombre-app>/`

Comandos útiles de mantenimiento:
```bash
pm2 status    # Comprobar el estado de los servicios
pm2 monit     # Ver telemetría de CPU/Memoria y registros en tiempo real
pm2 stop all  # Apagar todo el entorno de desarrollo
```

## Producción y CI/CD

El ecosistema utiliza scripts propios para la compilación de todos los clientes React y un despliegue vía FTP automatizado.

```bash
# Compilación secuencial de todos los proyectos frontend
bash deploy/build-all.sh

# Despliegue de los binarios al servidor FTP en producción
export FTP_PASSWORD="tu-password"
python3 deploy/ftp-deploy-full.py
```
