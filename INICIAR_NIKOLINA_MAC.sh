#!/usr/bin/env bash

# =========================================================================
# MOTOR MAESTRO NIKOLINA AI (VERSIÓN LOCAL - MAC ENGINE)
# Este script inicia todo el backend en tu ordenador para que el frontend 
# live en msbross.me/app/nikolina pueda operar con cero latencia localmente.
# =========================================================================

set -e

# Movernos al directorio base del backend
cd "$(dirname "$0")/apps/livekit-nikolina"

echo "==============================================="
echo "   🟢 RENAISSANCE MOTOR: MSB LiveKit LOCAL "
echo "==============================================="

echo "1. Comprobando credenciales maestras (.env.local)..."
if [ ! -f ".env.local" ]; then
    echo "⚠️ .env.local no encontrado. Generando plantilla..."
    cat <<EOF > .env.local
LIVEKIT_API_KEY=devkey
LIVEKIT_API_SECRET=secret
LIVEKIT_URL=ws://127.0.0.1:7880
GOOGLE_API_KEY=AIzaSyAcxj8QPinDydZ_-sny6AWB-3vSKXI1TKk
PORT=8001
CORS_ORIGINS="https://msbross.me,http://127.0.0.1:5173,http://127.0.0.1:8001"
JWT_SECRET=super-secret-ias-auth-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password
EOF
    echo "✅ .env.local inyectado con tus claves detectadas."
fi

set -a
source .env.local
set +a

echo "2. Encendiendo Motor WebRTC (Vía Binario Nativo macOS)..."
# Bypass Hypervisor issues by running the native binary instead of Docker
LIVEKIT_BIN="$(pwd)/server/livekit-server"

if [ ! -f "$LIVEKIT_BIN" ]; then
    echo "❌ Error: Binario de LiveKit no encontrado en $LIVEKIT_BIN"
    exit 1
fi

# Iniciar servidor LiveKit en segundo plano (Modo Dev)
# El flag --dev habilita las credenciales predeterminadas (devkey/secret)
"$LIVEKIT_BIN" --dev --bind 127.0.0.1 --node-ip 127.0.0.1 > "$(pwd)/server/livekit.log" 2>&1 &
LIVEKIT_PID=$!

echo "✅ LiveKit Engine Nativo arrancado (PID: $LIVEKIT_PID)"
echo "   Puerto: 7880 | Logs: server/livekit.log"

echo "3. Calibrando el Cerebro Python (venv)..."
if [ ! -d "venv" ]; then
    echo "Construyendo entorno local (esto solo ocurre la primera vez)..."
    python3 -m venv venv
    source venv/bin/activate
    pip install --upgrade pip > /dev/null
    pip install -r server/requirements.txt
    pip install -r agent/requirements.txt
else
    source venv/bin/activate
fi
echo "✅ Entorno de dependencias conectado."

echo "4. Lanzando el Hub API (Port 8001)..."
export PYTHONPATH="$(pwd)/agent/src:$(pwd)/server/src:$PYTHONPATH"
python3 server/main.py &
API_PID=$!

echo "⏳ Esperando 5 segundos para telemetría inicial..."
sleep 5

echo ""
echo "🚀 TODO LISTO! Puedes acceder ya a https://msbross.me/app/nikolina/ y pulsar el botón."
echo "==============================================="
echo "   🎙️  DIARIO DE RED DEL AGENTE (NATIVO) "
echo "==============================================="

# Lanzamos el agente de voz en primer plano para ver los logs en directo
python3 agent/src/agent.py start

# Si el usuario cierra el script con Ctrl+C, limpiamos procesos
kill $API_PID
kill $LIVEKIT_PID
echo "🛑 Motor Maestro apagado limpiamente."
