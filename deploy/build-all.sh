#!/bin/bash
# MSBrossAI — Build ALL apps for self-hosted msbross.me
# Removes Cloudflare tunnel dependency; apps connect via relative paths or wss://msbross.me
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

export NEXT_TELEMETRY_DISABLED=1
export CI=true

BASE_DIR="/Users/manu/Desktop/MSBrossAI"
WWW_DIR="$BASE_DIR/www"

build_app() {
  local app_dir=$1
  local target_dir=$2
  local build_type=$3 # "vite" (dist) or "next" (out)
  local env_vars=$4  # optional env vars for build

  echo "=> Construyendo $app_dir..."
  cd "$BASE_DIR/$app_dir" || return

  echo "=> Instalando dependencias..."
  rm -rf node_modules package-lock.json
  npm install

  if [ -n "$env_vars" ]; then
    eval "$env_vars" npm run build || { echo "❌ Fallo el build de $app_dir"; return; }
  else
    npm run build || { echo "❌ Fallo el build de $app_dir"; return; }
  fi

  rm -rf "$WWW_DIR/app/$target_dir"/*
  mkdir -p "$WWW_DIR/app/$target_dir"

  if [ "$build_type" == "next" ]; then
    cp -r out/* "$WWW_DIR/app/$target_dir/"
  elif [ "$build_type" == "vite-public" ]; then
    cp -r build/* "$WWW_DIR/app/$target_dir/"
  else
    cp -r dist/* "$WWW_DIR/app/$target_dir/"
  fi

  # Clean Turbopack metadata files (not needed in production)
  find "$WWW_DIR/app/$target_dir" -name '__next.*' -delete 2>/dev/null

  # Inject Service Worker Kill Switch
  if [ -f "$WWW_DIR/app/$target_dir/index.html" ]; then
    sed -i '' -e 's|<head>|<head><script>if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(r=>r.forEach(reg=>reg.unregister()));}</script>|' "$WWW_DIR/app/$target_dir/index.html"
  fi

  echo "✓ $app_dir -> www/app/$target_dir"
}

echo "=== Construyendo todas las apps para msbross.me (auto-hosting) ==="

# Vite apps
# Nikolina: use LiveKit Cloud, APIs via relative path (/_nikolina/api through proxy_server.js)
build_app "apps/livekit-nikolina/frontend" "livekit-nikolina" "vite" \
  "VITE_LIVEKIT_URL=wss://nikolina-1jg7t00i.livekit.cloud VITE_API_BASE_URL=/_nikolina/api"
build_app "apps/iaputa-os/frontend" "iaputa-os" "vite"
build_app "apps/traductor-pro/client" "traductor-pro" "vite"
build_app "apps/dohler" "dohler" "vite"
build_app "apps/combipro" "combipro" "vite"
build_app "apps/edelweiss" "edelweiss" "vite"
build_app "apps/moko-tools" "moko-tools" "vite"
build_app "apps/taskflow-pro" "taskflow" "vite"
build_app "apps/logisearch" "logisearch" "vite"
build_app "apps/app-generator" "app-generator" "vite"

# Next.js apps
build_app "apps/cuentos-magicos/frontend" "cuentos-magicos" "next"
build_app "apps/elitescout" "elitescout" "next"
build_app "apps/jartosdto/client" "jartosdto" "next"
build_app "apps/teringo-erp/erp" "teringo-erp" "next"

echo "=== Todas las builds completadas en $WWW_DIR ==="
