#!/bin/bash
# MSBrossAI — LANZAMIENTO GLOBAL DEL ECOSISTEMA UNIFICADO (MAC NATIVE SERVER)
# ============================================================================

echo "=========================================================="
echo "🚀 INICIANDO SECUENCIA MASTER MSBROSS NATIVE MAC 🚀"
echo "=========================================================="
BASE_DIR="$(pwd)"

function stop_port {
    PORT=$1
    PID=$(lsof -ti :$PORT)
    if [ ! -z "$PID" ]; then
        echo "🛑 Matando proceso en el puerto $PORT (PID $PID)..."
        kill -9 $PID 2>/dev/null || true
    fi
}

echo "🧹 1. Limpieza de Puertos y Colisiones del Ecosistema..."
stop_port 8001 # Nikolina Hub
stop_port 8002 # Döhler API
# stop_port 8003 # EliteScout API (Mantenimiento)
stop_port 8004 # Arantxa API
stop_port 8005 # MSBrOSs API
stop_port 8006 # IAPuta OS API
stop_port 8007 # CuentosMágicos API
stop_port 8080 # Reverse Proxy
stop_port 3030 # Dev Static Server

echo "----------------------------------------------------------"
echo "🧠 2. Inicializando Backends Core (Rango 8001 - 8007)"

# 2.1 Nikolina LiveKit Server & API Hub (Port 8001)
echo "   ➤ Lanzando Nikolina Voice Hub & LiveKit Worker (8001)..."
cd "$BASE_DIR/apps/livekit-nikolina"
if [ -f ".env.local" ]; then export $(grep -v '^#' .env.local | xargs); fi
cd server
if [ ! -d "../venv" ]; then python3 -m venv ../venv; fi
source ../venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python3 -m uvicorn main:app --host 0.0.0.0 --port 8001 &
NIKOLINA_PID=$!
sleep 1

# Nikolina Voice Agent (LiveKit Worker)
cd "$BASE_DIR/apps/livekit-nikolina/agent"
pip install -r requirements.txt > /dev/null 2>&1
export PYTHONPATH="$BASE_DIR/apps/livekit-nikolina/agent/src:$BASE_DIR/apps/livekit-nikolina/server/src"
python3 src/agent.py dev &
AGENT_PID=$!
sleep 1

# 2.2 Döhler Backend (Port 8002)
echo "   ➤ Lanzando Döhler Industrial Backend (8002)..."
cd "$BASE_DIR/apps/dohler/backend"
if [ ! -d "venv" ]; then python3 -m venv venv; fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python3 -m uvicorn app:app --host 0.0.0.0 --port 8002 &
DOHLER_PID=$!
sleep 1

# 2.3 EliteScout Backend (Port 8003) - BYPASSED (MANTENIMIENTO)
# echo "   ➤ Lanzando EliteScout Family Travel API (8003)..."
# cd "$BASE_DIR/apps/elitescout/backend"
# if [ ! -d "venv" ]; then python3 -m venv venv; fi
# source venv/bin/activate
# pip install -r requirements.txt > /dev/null 2>&1
# python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8003 &
# ELITESCOUT_PID=$!
# sleep 1

# 2.4 Arantxa Translate Backend (Port 8004)
echo "   ➤ Lanzando Arantxa Translate Express Backend (8004)..."
cd "$BASE_DIR/apps/arantxa-translate/server"
npm install > /dev/null 2>&1
npm run build > /dev/null 2>&1
PORT=8004 node dist/index.js &
ARANTXA_PID=$!
sleep 1

# 2.5 MSBrOSs Backend (Port 8005)
echo "   ➤ Lanzando MSBrOSs active Adele Voice Server (8005)..."
cd "$BASE_DIR/apps/msbross"
if [ ! -d "../iaputa-os/backend/venv" ]; then
    python3 -m venv ../iaputa-os/backend/venv
fi
source ../iaputa-os/backend/venv/bin/activate
pip install python-dotenv > /dev/null 2>&1
python3 server.py &
MSBROSS_PID=$!
sleep 1

# 2.6 IAPuta OS Backend (Port 8006)
echo "   ➤ Lanzando IAPuta OS Backend (8006)..."
cd "$BASE_DIR/apps/iaputa-os/backend"
if [ ! -d "venv" ]; then python3 -m venv venv; fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8006 &
IAPUTA_PID=$!
sleep 1

# 2.7 CuentosMágicos AI Backend (Port 8007)
echo "   ➤ Lanzando CuentosMágicos Creative Story API (8007)..."
cd "$BASE_DIR/apps/cuentosmagicos/backend"
if [ ! -d "venv" ]; then python3 -m venv venv; fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8007 &
CUENTOS_PID=$!
sleep 1

echo "----------------------------------------------------------"
echo "🌍 3. Levantando el Reverse Proxy Unificado (Port 8080)"
echo "   ➤ Sirviendo Portal Principal y enrutando APIs en http://localhost:8080..."
cd "$BASE_DIR"
npm install > /dev/null 2>&1
node proxy.js &
PROXY_PID=$!

echo "=========================================================="
echo "✅ MSBROSS ECOSYSTEM ESTÁ TOTALMENTE EN LÍNEA."
echo "▶ Ecosistema Unificado: http://localhost:8080"
echo "▶ Nikolina Hub: http://localhost:8001"
echo "▶ Döhler API: http://localhost:8002"
# echo "▶ EliteScout API: http://localhost:8003" (Mantenimiento)
echo "▶ Arantxa API: http://localhost:8004"
echo "▶ MSBrOSs Active: http://localhost:8005"
echo "▶ IAPuta API: http://localhost:8006"
echo "▶ CuentosMágicos API: http://localhost:8007"
echo ""
echo "🔥 ¡ATENCIÓN! Para probar la integración por voz e IA,"
echo "asegúrate de que los archivos .env tienen las claves de OpenAI, Gemini y Supabase configuradas."
echo ""
echo "Presiona Ctrl+C para destruir todos los servicios."
trap 'echo "💣 Destruyendo Ecosistema..."; kill -9 $NIKOLINA_PID $AGENT_PID $DOHLER_PID $ARANTXA_PID $MSBROSS_PID $IAPUTA_PID $CUENTOS_PID $PROXY_PID; exit 0' SIGINT SIGTERM
wait
