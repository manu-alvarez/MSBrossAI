#!/bin/bash
# MSBrossAI — Build ALL apps for self-hosted msbross.me
# Removes Cloudflare tunnel dependency; apps connect via relative paths or wss://msbross.me
set -Eeuo pipefail

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

export NEXT_TELEMETRY_DISABLED=1
export CI=true

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)"
WWW_DIR="$BASE_DIR/www"
BUILD_BACKUP_ROOT="$BASE_DIR/.build-backups/$(date +%Y%m%d-%H%M%S)"

build_app() {
  local app_dir=$1
  local target_dir=$2
  local build_type=$3 # "vite" (dist), "vite-public" (build), or "next" (out)
  local env_vars=${4:-}
  local source_dir
  local destination="$WWW_DIR/app/$target_dir"
  local stage_dir
  local backup_dir="$BUILD_BACKUP_ROOT/$target_dir"

  echo "=> Construyendo $app_dir..."
  cd "$BASE_DIR/$app_dir"

  if [ ! -f package-lock.json ]; then
    echo "❌ Falta package-lock.json en $app_dir" >&2
    return 1
  fi
  echo "=> Instalando dependencias bloqueadas..."
  npm ci

  if [ -n "$env_vars" ]; then
    eval "$env_vars npm run build"
  else
    npm run build
  fi

  case "$build_type" in
    next) source_dir="$BASE_DIR/$app_dir/out" ;;
    vite-public) source_dir="$BASE_DIR/$app_dir/build" ;;
    vite) source_dir="$BASE_DIR/$app_dir/dist" ;;
    *) echo "❌ Tipo de build desconocido: $build_type" >&2; return 1 ;;
  esac
  if [ ! -d "$source_dir" ] || [ -z "$(find "$source_dir" -mindepth 1 -maxdepth 1 -print -quit)" ]; then
    echo "❌ Salida de build vacía o inexistente: $source_dir" >&2
    return 1
  fi

  mkdir -p "$WWW_DIR/app"
  stage_dir="$(mktemp -d "$WWW_DIR/app/.${target_dir}.stage.XXXXXX")"
  cp -R "$source_dir"/. "$stage_dir"/
  find "$stage_dir" -name '__next.*' -delete 2>/dev/null || true

  # Inject Service Worker Kill Switch
  if [ -f "$stage_dir/index.html" ]; then
    sed -i '' -e 's|<head>|<head><script>if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(r=>r.forEach(reg=>reg.unregister()));}</script>|' "$stage_dir/index.html"
  fi

  if [ -e "$destination" ]; then
    mkdir -p "$(dirname "$backup_dir")"
    mv "$destination" "$backup_dir"
  fi
  if ! mv "$stage_dir" "$destination"; then
    if [ -e "$backup_dir" ]; then mv "$backup_dir" "$destination"; fi
    echo "❌ No se pudo publicar $target_dir; restaurado el build anterior si existía" >&2
    return 1
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
build_app "apps/industrialpro" "industrialpro" "vite"
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
build_app "apps/perfume-trading/erp" "perfume-trading" "next"

echo "=== Todas las builds completadas en $WWW_DIR ==="
