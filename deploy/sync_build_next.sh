#!/bin/bash
set -euo pipefail

export NEXT_TELEMETRY_DISABLED=1
export CI=true
export NODE_OPTIONS="--max-old-space-size=4096"

# Arrays mapeados con los paths relativos exactos para evitar fallos de resolución
declare -a NEXT_APPS=(
    "apps/elitescout:elitescout"
    "apps/cuentosmagicos/frontend:cuentosmagicos"
    "apps/jartosdto/client:jartosdto"
    "apps/teringo/erp:teringo"
)
PROJECT_ROOT="/Users/manu/Desktop/MSBrossAI"
DMZ_PATH="$PROJECT_ROOT/www/app" # Ruta real de la DMZ servida por proxy.js

for ENTRY in "${NEXT_APPS[@]}"; do
    APP_PATH="${ENTRY%%:*}"
    APP_NAME="${ENTRY##*:}"
    TARGET_DIR="$PROJECT_ROOT/$APP_PATH"
    
    if [ -d "$TARGET_DIR" ]; then
        echo "--------------------------------------------------------"
        echo "[>>] Forzando transpilación síncrona TS/SWC para: $APP_NAME"
        echo "--------------------------------------------------------"
        cd "$TARGET_DIR"
        
        # Purga agresiva de caché corrupta OOM
        rm -rf .next out node_modules package-lock.json
        npm install
        
        # Compilación Headless estricta
        npm run build || { 
            echo "[FATAL] Fallo de compilación estática en $APP_NAME. Revisa Type-checking (tsc) o dependencias circulares."
            exit 1
        }
        
        # Resolución de topología: SSG vs SSR
        if [ -d "out" ]; then
            echo "[OK] SSG (Static Site Generation) exitoso para $APP_NAME. Ejecutando swap atómico a DMZ..."
            mkdir -p "$DMZ_PATH/$APP_NAME"
            rsync -avz --delete "out/" "$DMZ_PATH/$APP_NAME/"
            
            # Inyección en caliente del Kill-Switch PWA (sintaxis sed nativa macOS BSD)
            if [ -f "$DMZ_PATH/$APP_NAME/index.html" ]; then
                sed -i '' -e 's|<head>|<head><script>if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(r=>r.forEach(w=>w.unregister()))}</script>|' "$DMZ_PATH/$APP_NAME/index.html" || true
            fi
        else
            echo "[WARN] Ausencia de directorio 'out/'. El monolito $APP_NAME requiere Server-Side Rendering (SSR)."
            echo "[>>] Delegando control de ciclo de vida nativo a PM2..."
            
            PORT=$(shuf -i 3021-3030 -n 1)
            echo "PORT=$PORT" > .env.production.local
            
            pm2 delete "$APP_NAME-front" 2>/dev/null || true
            pm2 start npm --name "$APP_NAME-front" --env production -- start -- -p "$PORT"
        fi
    else
        echo "[ERR] Path inaccesible: $TARGET_DIR"
    fi
done

pm2 save
pm2 restart msbross-proxy
echo "[ORQUESTADOR] Ciclo de recuperación y despliegue Next.js finalizado."
