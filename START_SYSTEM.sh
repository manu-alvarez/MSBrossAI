#!/bin/bash
# MSBrossAI — LANZAMIENTO GLOBAL DEL ECOSISTEMA (Control Absoluto MAC)

echo "=========================================================="
echo "🚀 INICIANDO SECUENCIA MASTER MSBROSS NATIVE MAC 🚀"
echo "=========================================================="
BASE_DIR="$(pwd)"

function stop_port {
    PORT=$1
    PID=$(lsof -ti :$PORT)
    if [ ! -z "$PID" ]; then
        echo "🛑 Matando proceso en el puerto $PORT (PID $PID)..."
        kill -9 $PID
    fi
}

echo "🧹 1. Limpieza de Puertos Fantasma..."
stop_port 8001
stop_port 8002
stop_port 8006
stop_port 3030

echo "----------------------------------------------------------"
echo "🧠 2. Inicializando Backends Core"

# 2.1 IAPuta OS Backend (Port 8006)
echo "   ➤ Lanzando IAPuta OS (8006)..."
cd "$BASE_DIR/apps/iaputa-os/backend"
if [ ! -d "venv" ]; then python3 -m venv venv; fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8006 &
IAPUTA_PID=$!
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

# 2.3 Nikolina LiveKit Server (Port 8001)
echo "   ➤ Lanzando Nikolina Voice Hub (8001)..."
cd "$BASE_DIR/apps/livekit-nikolina"
if [ -f ".env.local" ]; then export $(grep -v '^#' .env.local | xargs); fi
cd server
if [ ! -d "../venv" ]; then python3 -m venv ../venv; fi
source ../venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python3 -m uvicorn main:app --host 0.0.0.0 --port 8001 &
NIKOLINA_PID=$!
sleep 1

# 2.4 Nikolina Voice Agent (LiveKit Worker)
echo "   ➤ Conectando Agente LiveKit (Worker)..."
cd "$BASE_DIR/apps/livekit-nikolina/agent"
pip install -r requirements.txt > /dev/null 2>&1
export PYTHONPATH="$BASE_DIR/apps/livekit-nikolina/agent/src:$BASE_DIR/apps/livekit-nikolina/server/src"
python3 src/agent.py dev &
AGENT_PID=$!
sleep 1

echo "----------------------------------------------------------"
echo "🌍 3. Levantando el Frontend Global Unificado"
echo "   ➤ Sirviendo Portal Principal en puerto 3030..."
cd "$BASE_DIR/www"
python3 -m http.server 3030 &
HTTP_PID=$!

echo "=========================================================="
echo "✅ MSBROSS ECOSYSTEM ESTÁ TOTALMENTE EN LÍNEA."
echo "▶ Frontend: http://localhost:3030"
echo "▶ IAPuta API: http://localhost:8006"
echo "▶ Döhler API: http://localhost:8002"
echo "▶ Nikolina Hub: http://localhost:8001"
echo ""
echo "🔥 ¡ATENCIÓN! Para probar a Nikolina o IA Puta en 'MODO REAL',"
echo "debes asegurarte de que tienes tu OPENAI_API_KEY / GEMINI_API_KEY"
echo "guardada en sus respectivos archivos .env, de lo contrario la API fallará."
echo ""
echo "Presiona Ctrl+C para destruir todos los servicios."
trap 'echo "💣 Destruyendo Ecosistema..."; kill -9 $IAPUTA_PID $DOHLER_PID $NIKOLINA_PID $AGENT_PID $HTTP_PID; exit 0' SIGINT SIGTERM
wait
