#!/usr/bin/env bash
# MSBrossAI — Batch update all app dependencies to latest
set -e

APPS=(
  "apps/iaputa-os/frontend"
  "apps/livekit-nikolina/frontend"
  "apps/arantxa-translate/client"
  "apps/dohler/client"
  "apps/logisearch"
  "apps/edelweiss"
  "apps/moko-tools"
  "apps/combipro"
  "apps/app-generator"
)

for app in "${APPS[@]}"; do
  echo ""
  echo "═══════════════════════════════════════"
  echo "📦 Updating: $app"
  echo "═══════════════════════════════════════"
  
  if [ ! -f "$app/package.json" ]; then
    echo "⚠️ No package.json — skipping"
    continue
  fi
  
  cd "$app"
  
  # Update all deps to latest using npm-check-updates pattern
  # Dev deps
  npm install -D vite@latest @vitejs/plugin-react@latest 2>/dev/null || true
  
  # Check if app uses TypeScript
  if grep -q '"typescript"' package.json 2>/dev/null; then
    npm install -D typescript@latest @types/react@latest @types/react-dom@latest 2>/dev/null || true
  fi
  
  # Update React
  if grep -q '"react"' package.json; then
    npm install react@latest react-dom@latest 2>/dev/null || true
  fi
  
  # Update common deps if present
  grep -q '"framer-motion"' package.json && npm install framer-motion@latest 2>/dev/null || true
  grep -q '"@mui/material"' package.json && npm install @mui/material@latest @emotion/react@latest @emotion/styled@latest 2>/dev/null || true
  grep -q '"@mui/icons-material"' package.json && npm install @mui/icons-material@latest 2>/dev/null || true
  grep -q '"zustand"' package.json && npm install zustand@latest 2>/dev/null || true
  grep -q '"lucide-react"' package.json && npm install lucide-react@latest 2>/dev/null || true
  grep -q '"react-router-dom"' package.json && npm install react-router-dom@latest 2>/dev/null || true
  
  # Test build
  echo "🔨 Building..."
  if npm run build 2>&1 | tail -5; then
    echo "✅ $app — build OK"
  else
    echo "❌ $app — build FAILED"
  fi
  
  cd - > /dev/null
done

echo ""
echo "🚀 All apps updated!"
