#!/bin/bash
set -euo pipefail

TARGET_PORT=8001
SCRIPT_NAME="INICIAR_NIKOLINA_MAC.sh"
PROJECT_ROOT="/Users/manu/Desktop/MSBrossAI"

echo "[DIAGNÓSTICO] Purgando descriptores de red bloqueados en TCP/$TARGET_PORT..."
lsof -ti:$TARGET_PORT | xargs kill -9 2>/dev/null || true

# Localización estática optimizada para evitar escaneo masivo en node_modules/.venv
NIKOLINA_PATH="/Users/manu/Desktop/MSBrossAI/apps/livekit-nikolina"


echo "[>>] Vector de ejecución localizado en: $NIKOLINA_PATH"
cd "$NIKOLINA_PATH"

# Aplicar permisos de ejecución por si el binario perdió su flag
chmod +x "$SCRIPT_NAME"

# Purga de procesos PM2 fantasmas previos vinculados a este servicio
pm2 delete nikolina-backend-8001 2>/dev/null || true

echo "[>>] Inyectando el motor de Nikolina en el orquestador global (PM2)..."
# Se asume que el script maneja la activación de entornos virtuales (venv) o dependencias binarias.
# Forzamos a PM2 a ejecutar el script bash directamente y monitorear el PID resultante.
pm2 start "./$SCRIPT_NAME" --name "nikolina-backend-8001" \
    --interpreter bash \
    --log-date-format "YYYY-MM-DD HH:mm:ss Z" \
    --exp-backoff-restart-delay=100

echo "[>>] Guardando snapshot de infraestructura..."
pm2 save

echo "[OK] Motor backend daemonizado. Monitoreando stack trace para verificar conexión con LiveKit Server..."
sleep 3
pm2 logs nikolina-backend-8001 --lines 20 --raw --nostream
