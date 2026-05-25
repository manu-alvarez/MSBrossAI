#!/bin/bash
# MSBrossAI — Full Deployment Script
# 1. Build all apps
# 2. Start proxy.js + backends
# 3. Start Cloudflare Tunnel
# 4. Upload static files to nominalia via FTP
# 5. Update config.js with tunnel URL on nominalia

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_DIR="$(dirname "$0")"
LOG_DIR="$BASE_DIR/LOGS"
mkdir -p "$LOG_DIR"

echo "=========================================================="
echo "🚀 MSBrossAI — DEPLOYMENT COMPLETO"
echo "=========================================================="

# ── Step 1: Build all apps ──
echo ""
echo "📦 [1/5] Construyendo todas las apps..."
bash "$DEPLOY_DIR/build-all.sh" 2>&1 | tee "$LOG_DIR/build.log"
echo "✅ Build completado."

# ── Step 2: Start local services ──
echo ""
echo "🔧 [2/5] Iniciando proxy.js y backends..."
# Kill existing processes
lsof -ti :8080 | xargs kill -9 2>/dev/null || true
lsof -ti :8001 | xargs kill -9 2>/dev/null || true

# Start proxy
cd "$BASE_DIR"
npm install --silent 2>/dev/null
node proxy.js &
PROXY_PID=$!
sleep 2
echo "✅ proxy.js corriendo (PID: $PROXY_PID) en :8080"

# ── Step 3: Start backends (START_SYSTEM.sh does all) ──
echo ""
echo "🧠 [3/5] Arrancando backends (START_SYSTEM.sh)..."
bash "$BASE_DIR/START_SYSTEM.sh" &
BACKEND_PID=$!
echo "✅ Backends iniciados (PID: $BACKEND_PID)"

# ── Step 4: Start tunnel ──
echo ""
echo "🚇 [4/5] Iniciando túnel Cloudflare..."
bash "$DEPLOY_DIR/tunnel.sh" &
TUNNEL_PID=$!
echo "✅ Túnel iniciado (PID: $TUNNEL_PID)"

# Wait a moment then read the tunnel URL
sleep 5
TUNNEL_URL=$(grep -oE 'https://[a-z0-9.-]+\.trycloudflare\.com' "$LOG_DIR/tunnel.log" 2>/dev/null | head -1)

if [ -z "$TUNNEL_URL" ]; then
  echo "⚠️  No se pudo detectar la URL del túnel automáticamente."
  echo "   Revisa: $LOG_DIR/tunnel.log"
  echo "   Ejecuta FTP upload manualmente:"
  echo "   FTP_PASSWORD=... python3 deploy/ftp-deploy-full.py"
  exit 0
fi

echo "   Túnel público: $TUNNEL_URL"

# ── Step 5: Upload to nominalia via FTP ──
echo ""
echo "📤 [5/5] Subiendo archivos a nominalia..."
cd "$BASE_DIR"

# First update config.js with tunnel URL
sed -i '' "s|__TUNNEL_URL__|$TUNNEL_URL|g" "$BASE_DIR/www/config.js" 2>/dev/null || true

# Upload via FTP
FTP_PASSWORD="${FTP_PASSWORD:-}"
if [ -z "$FTP_PASSWORD" ]; then
  echo "⚠️  FTP_PASSWORD no definida. Subida FTP omitida."
  echo "   Ejecuta manualmente:"
  echo "   FTP_PASSWORD='tu_password' python3 deploy/ftp-deploy-full.py"
else
  python3 "$DEPLOY_DIR/ftp-deploy-full.py" 2>&1 | tee "$LOG_DIR/ftp.log"
  echo "✅ Archivos subidos a nominalia."
fi

echo ""
echo "=========================================================="
echo "🎉 ECOSISTEMA DESPLEGADO"
echo "   Local:       http://localhost:8080"
echo "   Túnel:       $TUNNEL_URL"
echo "   msbross.me:  https://msbross.me/app/atenea/"
echo "   Nikolina:    $TUNNEL_URL/app/nikolina/"
echo "=========================================================="
echo ""
echo "Para detener todo: kill $PROXY_PID $BACKEND_PID $TUNNEL_PID"
