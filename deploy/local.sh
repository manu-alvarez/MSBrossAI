#!/usr/bin/env bash
set -e

echo "🚀 MSBrossAI - Local Deployment Script"
echo "======================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if Docker is available
DOCKER_AVAILABLE=false
if command -v docker &> /dev/null && docker info &> /dev/null; then
    DOCKER_AVAILABLE=true
fi

# Kill any existing processes on our ports
echo -e "${YELLOW}🧹 Cleaning up existing processes...${NC}"
for port in 5173 5174 5175 3000 3001 8000 8002 8006 8887; do
    lsof -ti :$port 2>/dev/null | xargs kill -9 2>/dev/null || true
done

echo ""
echo -e "${GREEN}📦 Starting MSBrossAI Services...${NC}"
echo ""

# Function to start a service
start_service() {
    local name=$1
    local dir=$2
    local cmd=$3
    local port=$4
    
    echo -e "${YELLOW}▶️  Starting $name on port $port...${NC}"
    
    if [ "$DOCKER_AVAILABLE" = true ] && [ -f "$dir/docker-compose.yml" ]; then
        (cd "$dir" && docker-compose up -d --build 2>&1 | tail -5) &
    else
        (cd "$dir" && eval "$cmd") &
    fi
    
    sleep 2
    echo -e "${GREEN}✅ $name started${NC}"
    echo ""
}

# 1. IAPuta OS
start_service "IAPuta OS" "apps/iaputa-os" "npm install && npm run dev" "8080"

# 2. LIVEKIT Nikolina
start_service "LIVEKIT Nikolina" "apps/livekit-nikolina" "npm install && npm run dev" "5174"

# 3. Arantxa Translate
start_service "Arantxa Translate" "apps/arantxa-translate" "npm install && npm run dev" "5173"

# 4. TaskFlowPro
start_service "TaskFlowPro" "apps/taskflow-pro" "npm install && npm run dev" "8887"

# 5. DOHLER
start_service "DOHLER" "apps/dohler" "npm install && npm run dev" "3000"

# 6. LogiSearch
start_service "LogiSearch" "apps/logisearch" "npm install && npm run dev" "5175"

# 7. Edelweiss
start_service "Edelweiss" "apps/edelweiss" "npm install && npm run dev" "5176"

# 8. Moko-Tools
start_service "Moko-Tools" "apps/moko-tools" "npm install && npm run dev" "5177"

# 9. CombiPro
start_service "CombiPro" "apps/combipro" "npm install && npm run dev" "5178"

# 10. Dashboard
start_service "Dashboard" "dashboard" "npm install && npm run dev" "5173"

echo ""
echo -e "${GREEN}=======================================${NC}"
echo -e "${GREEN}🎉 All services started!${NC}"
echo -e "${GREEN}=======================================${NC}"
echo ""
echo "📍 Access points:"
echo "   Dashboard:     http://localhost:5173"
echo "   IAPuta OS:     http://localhost:8080"
echo "   LIVEKIT:       http://localhost:5174"
echo "   Arantxa:       http://localhost:5173"
echo "   TaskFlowPro:   http://localhost:8887"
echo "   DOHLER:        http://localhost:3000"
echo "   LogiSearch:    http://localhost:5175"
echo "   Edelweiss:     http://localhost:5176"
echo "   Moko-Tools:    http://localhost:5177"
echo "   CombiPro:      http://localhost:5178"
echo ""
echo "Press Ctrl+C to stop all services"
wait
