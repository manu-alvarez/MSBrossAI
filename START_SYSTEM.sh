#!/bin/bash
# MSBrossAI — LANZAMIENTO GLOBAL DEL ECOSISTEMA UNIFICADO (MAC NATIVE SERVER)
# ============================================================================

echo "=========================================================="
echo "🚀 INICIANDO SECUENCIA MASTER MSBROSS NATIVE MAC (PM2) 🚀"
echo "=========================================================="
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🧭 1. Iniciando o actualizando solo las apps de este ecosystem..."

echo "----------------------------------------------------------"
echo "🧠 2. Inicializando Ecosistema Global a través de PM2..."
echo "   ➤ Leyendo ecosystem.config.js..."

pm2 startOrReload "$BASE_DIR/ecosystem.config.js" --update-env
pm2 save

echo "----------------------------------------------------------"
echo "=========================================================="
echo "✅ MSBROSS ECOSYSTEM ESTÁ TOTALMENTE EN LÍNEA."
echo "▶ Ecosistema Unificado (Reverse Proxy): http://localhost:8080"
echo "▶ Monitor de procesos: Ejecuta 'pm2 status' o 'pm2 monit'"
echo ""
echo "🌐 Para apagar el sistema ejecuta: pm2 stop $BASE_DIR/ecosystem.config.js"
echo "=========================================================="
