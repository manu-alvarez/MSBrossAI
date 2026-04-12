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
  rm -rf "$WWW_DIR/$target_dir"/*
  mkdir -p "$WWW_DIR/$target_dir"
  cp -r dist/* "$WWW_DIR/$target_dir/"
  echo "✅ $app_dir construido y movido a www/$target_dir"
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
# build_app "dashboard" "dashboard" # if dashboard is root or separate

echo "🚀 Todas las builds completadas estáticamente en $WWW_DIR."
