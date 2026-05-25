# MSBrossAI — Suite de Aplicaciones de Software

MSBrossAI es un ecosistema consolidado de 18 aplicaciones empresariales y de uso interno, estructuradas sobre una arquitectura de microservicios con un proxy centralizado.

## Arquitectura del Sistema

El ecosistema está construido bajo un entorno Node.js (PM2) y aplicaciones desarrolladas principalmente en **React 19** para el frontend, y **FastAPI/Python** o **Express/Node** para el backend. 

- **Proxy Central (`proxy.js`)**: Enruta todas las peticiones a los respectivos puertos internos de cada microservicio, exponiendo el ecosistema en un único punto de entrada (`localhost:8080`).
- **Gestión de Procesos (PM2)**: El archivo `ecosystem.config.js` orquesta la ejecución paralela y la recuperación automática (Alta Disponibilidad) de todos los backends.
- **Bases de Datos Locales**: Persistencia mediante bases de datos SQLite nativas por microservicio y almacenamiento de estado en cliente (Zustand/LocalStorage).

## Aplicaciones Incluidas (18)

| Directorio (`apps/`) | Aplicación | Descripción | Stack Tecnológico |
|----------------------|------------|-------------|-------------------|
| **`iaputa-os`** | **Panel de Control Central** | Dashboard de administración y monitoreo en tiempo real de todos los servicios. | FastAPI, React 19, Three.js |
| **`livekit-nikolina`** | **Asistente de Voz** | Agente IA de voz conversacional y procesamiento de lenguaje. | LiveKit, Gemini 2.5, Python |
| **`arantxa-translate`**| **Traductor PRO** | Motor de traducción neural y procesamiento OCR de documentos. | Express, React 19, OCR |
| **`taskflow-pro`** | **TaskFlow Pro** | Gestor de productividad, tareas y programación de alarmas (PWA). | React 18, Zustand, PWA |
| **`dohler`** | **Döhler** | Temporizadores y control de procesos industriales ligeros. | React 19, Tailwind |
| **`logisearch`** | **LogiSearch** | Motor de búsqueda e inteligencia de datos aplicado al entorno logístico. | React 19, Supabase |
| **`edelweiss`** | **Edelweiss** | Plataforma interactiva de estimulación visual e infantil. | React 18, Framer Motion |
| **`moko-tools`** | **Moko-Tools** | Toolkit de utilidades para desarrolladores y APIs FreeTier. | React 19, Vite 7 |
| **`combipro`** | **CombiPro** | Algoritmo estadístico para análisis y predicción de resultados deportivos. | React 19, API-Football |
| **`app-generator`** | **App Gen** | Interfaz para la auto-generación de micro-aplicaciones mediante IA. | React 19, Gemini API |
| **`newton-react`** | **Newton Mequinenza** | ERP vertical para gestión de estación de servicio (Checklists, Horarios).| React 19, FastAPI, SQLite |
| **`elitescout`** | **EliteScout** | Aplicación de gestión y scouting de jugadores de fútbol (CRM).| React 19, FastAPI, SQLite |
| **`jartosdto`** | **JartoSDTO** | Gestión integral de flotas de transporte, rutas y cargas. | React 19 |
| **`cuentosmagicos`** | **Cuentos Mágicos** | Generador automático de cuentos infantiles combinando texto y audio. | React 19, FastAPI |
| **`atenea-backend`** | **Atenea Backend** | Sistema backend centralizado para gestión de conocimiento base. | Python, FastAPI |
| **`expositator`** | **Expositator** | Aplicación de cartelería digital y presentaciones interactivas. | React 19 |
| **`teringo`** | **Teringo** | Plataforma educativa tipo trivia y cuestionarios interactivos. | React 19 |
| **`msbross`** | **Adele Voice Server** | Backend alternativo de motor de voz IA. | Python, FastAPI |

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
