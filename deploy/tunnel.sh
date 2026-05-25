#!/bin/bash
# MSBrossAI — Cloudflare Tunnel Launcher
# Exposes Mac localhost:8080 to the internet via Cloudflare Tunnel
# Updates inline __TUNNEL_URL__ in all HTML files on nominalia

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_FILE="$BASE_DIR/www/config.js"
LOG_DIR="$BASE_DIR/LOGS"
mkdir -p "$LOG_DIR"

echo "=========================================================="
echo " MSBrossAI — Cloudflare Tunnel Launcher"
echo "=========================================================="

# ── Check prerequisites ──
if ! command -v cloudflared &>/dev/null; then
  echo " cloudflared no instalado. Instálalo con:"
  echo "   brew install cloudflared"
  exit 1
fi

# ── Ensure proxy.js is running ──
if ! lsof -ti :8080 &>/dev/null; then
  echo "  proxy.js no está corriendo en :8080."
  echo "   Ejecuta primero: node $BASE_DIR/proxy.js &"
  echo "   O usa: bash $(dirname "$0")/deploy.sh"
  exit 1
fi

echo " proxy.js detectado en puerto 8080"

# ── Start tunnel and capture URL ──
echo " Iniciando Cloudflare Tunnel..."
echo "   Log: $LOG_DIR/tunnel.log"

cloudflared tunnel --config /dev/null --url http://localhost:8080 \
  --no-autoupdate \
  > "$LOG_DIR/tunnel.log" 2>&1 &
TUNNEL_PID=$!

TUNNEL_URL=""
for i in $(seq 1 30); do
  sleep 1
  TUNNEL_URL=$(grep -oE 'https://[a-z0-9.-]+\.trycloudflare\.com' "$LOG_DIR/tunnel.log" | head -1 || true)
  if [ -n "$TUNNEL_URL" ]; then
    break
  fi
done

if [ -z "$TUNNEL_URL" ]; then
  echo " No se pudo obtener la URL del túnel. Revisa: $LOG_DIR/tunnel.log"
  kill $TUNNEL_PID 2>/dev/null || true
  exit 1
fi

echo " Tunel activo: $TUNNEL_URL"
echo "   PID: $TUNNEL_PID"

# ── Update runtime config ──
echo " Actualizando config.js con URL del túnel..."
sed -i '' "s|__TUNNEL_URL__|$TUNNEL_URL|g" "$CONFIG_FILE"

# ── Replace __TUNNEL_URL__ in all built HTML files on disk ──
echo " Reemplazando __TUNNEL_URL__ en www HTMLs..."
find "$BASE_DIR/www/app" -name '*.html' -exec sed -i '' "s|__TUNNEL_URL__|$TUNNEL_URL|g" {} +

# ── Upload everything using the robust deploy script ──
echo " Subiendo todos los archivos actualizados a nominalia..."
export FTP_PASSWORD="Manik.87"
python3 "$BASE_DIR/deploy/ftp-deploy-full.py"

echo ""
echo "=========================================================="
echo " ECOSISTEMA WAN ACTIVO"
echo "   Proxy local:  http://localhost:8080"
echo "   Tunel publico: $TUNNEL_URL"
echo "   msbross.me:   https://msbross.me/ (APIs via tunnel)"
echo ""
echo " Vista rapida:"
echo "   $TUNNEL_URL/app/elitescout/"
echo "   $TUNNEL_URL/app/elitescout/family-travel/"
echo "   $TUNNEL_URL/app/atenea/"
echo "   $TUNNEL_URL/app/nikolina/"
echo "=========================================================="
echo ""
echo "Presiona Ctrl+C para detener el túnel."

trap 'echo "Deteniendo túnel..."; kill $TUNNEL_PID 2>/dev/null; exit 0' SIGINT SIGTERM
wait $TUNNEL_PID
