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

cloudflared tunnel --url http://localhost:8080 \
  --no-autoupdate \
  > "$LOG_DIR/tunnel.log" 2>&1 &
TUNNEL_PID=$!

TUNNEL_URL=""
for i in $(seq 1 30); do
  sleep 1
  TUNNEL_URL=$(grep -oE 'https://[a-z0-9.-]+\.trycloudflare\.com' "$LOG_DIR/tunnel.log" | head -1)
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

# ── Upload updated HTML files to nominalia via FTP ──
echo " Subiendo HTMLs actualizados a nominalia..."
python3 << PYEOF
import ftplib, os

ftp = ftplib.FTP('msbros.ftp.tb-hosting.com', 'msbrossme@msbrossme', 'Manik.87')
ftp.encoding = 'utf-8'

base_dir = '/Users/manu/Desktop/MSBrossAI/www'

def cwd_or_create(ftp, path):
    for part in path.strip('/').split('/'):
        try:
            ftp.cwd(part)
        except:
            ftp.mkd(part)
            ftp.cwd(part)

# Navigate to ftp root
ftp.cwd('/')

# Find all HTML files in www/app that have been modified
html_files = []
for root, dirs, files in os.walk(os.path.join(base_dir, 'app')):
    for f in files:
        if f.endswith('.html'):
            rel_path = os.path.relpath(os.path.join(root, f), base_dir)
            html_files.append((rel_path, os.path.join(root, f)))

print(f"   Subiendo {len(html_files)} archivos HTML...")
for rel_path, full_path in html_files:
    remote_dir = os.path.dirname(f'/{rel_path}')
    remote_file = os.path.basename(rel_path)
    if remote_dir:
        ftp.cwd('/')
        cwd_or_create(ftp, remote_dir)
    print(f"     {rel_path}")
    with open(full_path, 'rb') as fh:
        ftp.storbinary(f'STOR {remote_file}', fh)

# Also upload config.js
print("     /config.js")
ftp.cwd('/')
with open(os.path.join(base_dir, 'config.js'), 'rb') as fh:
    try:
        ftp.storbinary('STOR config.js', fh)
    except:
        print("     config.js upload failed (may be blocked by nginx, skipping)")

ftp.quit()
print("   Upload completado.")
PYEOF

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
