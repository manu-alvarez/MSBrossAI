#!/bin/bash
export PATH="/Users/manu/.nvm/versions/node/v24.12.0/bin:$PATH"

echo "🔨 Construyendo todas las aplicaciones para msbross.me..."
BASE_DIR="/Users/manu/Desktop/MSBrossAI"
WWW_DIR="$BASE_DIR/www"

build_app() {
  local app_dir=$1
  local target_dir=$2
  echo "=> Construyendo $app_dir..."
  cd "$BASE_DIR/$app_dir" || return
  npm run build || return
  rm -rf "$WWW_DIR/app/$target_dir"/*
  mkdir -p "$WWW_DIR/app/$target_dir"
  cp -r dist/* "$WWW_DIR/app/$target_dir/"
  
  # Inject Service Worker Kill Switch to unblock user's cached browsers
  if [ -f "$WWW_DIR/app/$target_dir/index.html" ]; then
    sed -i '' -e 's|<head>|<head><script>if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(r=>r.forEach(reg=>reg.unregister()));}</script>|' "$WWW_DIR/app/$target_dir/index.html"
  fi
  
  echo "✅ $app_dir construido y movido a www/app/$target_dir"
}

build_app "apps/iaputa-os/frontend" "iaputa"
build_app "apps/livekit-nikolina/frontend" "nikolina"
build_app "apps/arantxa-translate/client" "traductor"
build_app "apps/dohler" "dohler"
build_app "apps/combipro" "combipro"
build_app "apps/edelweiss" "edelweiss"
build_app "apps/moko-tools" "moko"
build_app "apps/taskflow-pro" "taskflow"
build_app "apps/logisearch" "logisearch"
build_app "apps/app-generator" "app-generator"
# build_app "dashboard" "dashboard" # if dashboard is root or separate

echo "🚀 Todas las builds completadas estáticamente en $WWW_DIR."
