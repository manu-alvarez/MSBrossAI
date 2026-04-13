#!/bin/bash
# INICIAR_NIKOLINA_MAC.sh
# Script definitivo para lanzar FastAPI y el Agente Livekit secuencialmente en macOS

echo "============================================="
echo "🚀 INICIANDO NIKOLINA LIVEKIT (NATVE MAC) 🚀"
echo "============================================="

BASE_DIR="$(pwd)"
if [ ! -d "server" ] || [ ! -d "agent" ]; then
    echo "⚠️ Error: Ejecute este script desde dentro del directorio apps/livekit-nikolina/"
    exit 1
fi

echo "[1/2] Levantando el Motor Backend (FastAPI)..."
cd "$BASE_DIR/server"
if [ ! -d "../venv" ]; then
    echo "🔧 Creando entorno virtual..."
    python3 -m venv ../venv
fi
source ../venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
uvicorn main:app --host 0.0.0.0 --port 8000 &
SERVER_PID=$!
echo "✅ Backend lanzado en puerto 8000 (PID: $SERVER_PID)"

sleep 2

echo "[2/2] Conectando el Agente de Voz (LiveKit)..."
cd "$BASE_DIR/agent"
pip install -r requirements.txt > /dev/null 2>&1
python agent.py dev &
AGENT_PID=$!
echo "✅ Agente conectado al ecosistema (PID: $AGENT_PID)"

echo "---------------------------------------------"
echo "🎧 Nikolina Lista e interconectada en tu Mac."
echo "Para denetener todo, pulsa Ctrl+C."
echo "---------------------------------------------"

trap 'echo "Apagando Nikolina..."; kill $SERVER_PID; kill $AGENT_PID; exit 0' SIGINT SIGTERM
wait
