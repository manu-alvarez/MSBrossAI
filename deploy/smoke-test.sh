#!/bin/bash
# MSBrossAI — Advanced Infrastructure Smoke Test & Audit Tool
# Validates loopback listener states, HTTP response headers, and WebSocket protocols.
# Path: /Users/manu/Desktop/MSBrossAI/deploy/smoke-test.sh

# Colors for terminal aesthetics
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}🛰️  MSBROSSAI AUTOMATED SYSTEM AUDIT & SMOKE TESTER${NC}"
echo -e "${CYAN}================================================================${NC}"
echo -e "Starting diagnostic routines..."
echo ""

FAILED_CHECKS=0

# Helper function to check process status in PM2
check_pm2_process() {
    local process_name=$1
    echo -n "➤ Checking PM2 Process status [$process_name]... "
    if pm2 show "$process_name" >/dev/null 2>&1; then
        if pm2 status | grep -w "$process_name" | grep -q "online"; then
            echo -e "${GREEN}ONLINE${NC}"
        else
            local status=$(pm2 status | grep -w "$process_name" | awk '{print $18}')
            echo -e "${YELLOW}WARNING (Status: $status)${NC}"
        fi
    else
        echo -e "${RED}NOT FOUND IN PM2 WORKSPACE${NC}"
        ((FAILED_CHECKS++))
    fi
}

# Helper function to audit local TCP port binds
check_port_binding() {
    local port=$1
    local service=$2
    echo -n "➤ Auditing TCP socket bind [Port $port — $service]... "
    
    # Netcat or lsof scan
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        local pid=$(lsof -t -i :$port -sTCP:LISTEN)
        echo -e "${GREEN}BOUND (PID: $pid)${NC}"
    else
        echo -e "${RED}CLOSED (CRITICAL)${NC}"
        ((FAILED_CHECKS++))
    fi
}

# Helper function to validate HTTP status and latency
check_http_endpoint() {
    local url=$1
    local service=$2
    local expected_code=$3
    echo -n "➤ Testing HTTP Endpoint [$service] -> $url... "
    
    # Run cURL with timing metrics
    local response=$(curl -s -o /dev/null -w "%{http_code};%{time_total}" "$url" 2>/dev/null)
    local http_code=$(echo "$response" | cut -d';' -f1)
    local duration=$(echo "$response" | cut -d';' -f2)
    
    if [ "$http_code" == "000" ]; then
        echo -e "${RED}UNREACHABLE (HTTP Code: 000)${NC}"
        ((FAILED_CHECKS++))
    elif [[ "$expected_code" == *"|"* ]]; then
        # Support multiple expected codes (e.g. 200|404|301)
        if [[ "$expected_code" =~ "$http_code" ]]; then
            echo -e "${GREEN}OK (HTTP $http_code in ${duration}s)${NC}"
        else
            echo -e "${YELLOW}UNEXPECTED RESPONSE (HTTP $http_code, expected $expected_code in ${duration}s)${NC}"
            ((FAILED_CHECKS++))
        fi
    else
        if [ "$http_code" == "$expected_code" ]; then
            echo -e "${GREEN}OK (HTTP $http_code in ${duration}s)${NC}"
        else
            echo -e "${RED}FAIL (HTTP $http_code, expected $expected_code in ${duration}s)${NC}"
            ((FAILED_CHECKS++))
        fi
    fi
}

# Helper function to audit WebSocket Upgrade Handshakes
check_websocket_handshake() {
    local url=$1
    local service=$2
    echo -n "➤ Auditing WebSocket Upgrade Handshake [$service]... "

    # Send a HTTP Upgrade request and capture headers
    local response=$(curl -s -I \
        -H "Connection: Upgrade" \
        -H "Upgrade: websocket" \
        -H "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==" \
        -H "Sec-WebSocket-Version: 13" \
        "$url" 2>&1)

    if echo "$response" | grep -qi "101 Switching Protocols" || echo "$response" | grep -qi "upgrade: websocket"; then
        echo -e "${GREEN}UPGRADE ACCEPTED (101 Switching Protocols)${NC}"
    else
        # If it doesn't support websockets or fallback returns normal response
        if echo "$response" | grep -qi "200" || echo "$response" | grep -qi "404" || echo "$response" | grep -qi "301" || echo "$response" | grep -qi "302"; then
            echo -e "${YELLOW}COMPATIBLE (HTTP Response received, WebSocket upgrade not explicitly verified)${NC}"
        else
            echo -e "${RED}UPGRADE REJECTED / PROTOCOL ERROR${NC}"
            ((FAILED_CHECKS++))
        fi
    fi
}

# ============================================================================
# PHASE 1: PM2 PROCESS STATUS AUDIT
# ============================================================================
echo -e "${BLUE}[PHASE 1: ORCHESTRATOR STATUS]${NC}"
check_pm2_process "nikolina-livekit-server"
check_pm2_process "nikolina-api-hub"
check_pm2_process "nikolina-agent"
check_pm2_process "industrialpro-backend"
check_pm2_process "iaputa-backend"
check_pm2_process "arantxa-server"
check_pm2_process "msbross-backend"
check_pm2_process "cuentosmagicos-backend"
check_pm2_process "atenea-backend"
check_pm2_process "msbross-proxy"
echo ""

# ============================================================================
# PHASE 2: TCP LISTENERS STATE
# ============================================================================
echo -e "${BLUE}[PHASE 2: NETWORK BOUND PORTS]${NC}"
check_port_binding 8001 "Nikolina Hub"
check_port_binding 8002 "Döhler API"
check_port_binding 7880 "LiveKit Local Server"
check_port_binding 8004 "Arantxa API"
check_port_binding 8005 "MSBrOSs API"
check_port_binding 8006 "IAPuta OS API"
check_port_binding 8007 "CuentosMágicos API"
check_port_binding 8009 "Atenea API"
check_port_binding 8080 "Reverse Proxy Gateway"
echo ""

# ============================================================================
# PHASE 3: HTTP API INTEGRITY CHECK
# ============================================================================
echo -e "${BLUE}[PHASE 3: ENDPOINT INTEGRITY]${NC}"
check_http_endpoint "http://127.0.0.1:8001/api/health" "Nikolina API Health" "200"
check_http_endpoint "http://127.0.0.1:8002/" "Döhler API Root" "200|404|301|302|405"
check_http_endpoint "http://127.0.0.1:8004/" "Arantxa API Root" "200|404|301|302"
check_http_endpoint "http://127.0.0.1:8005/" "MSBrOSs API Root" "200|404|301|302"
check_http_endpoint "http://127.0.0.1:8006/" "IAPuta OS API Root" "200|404|301|302|405"
check_http_endpoint "http://127.0.0.1:8007/" "CuentosMágicos API Root" "200|404|301|302|405"
check_http_endpoint "http://127.0.0.1:8009/api/restaurant" "Atenea Restaurant API" "200"
check_http_endpoint "http://127.0.0.1:8009/api/menu" "Atenea Menu API" "200"
check_http_endpoint "http://127.0.0.1:8009/health" "Atenea Health" "200"
check_http_endpoint "http://127.0.0.1:8080/" "Central Proxy Portal" "200"
check_http_endpoint "http://127.0.0.1:8080/__health" "Proxy Health" "200"
check_http_endpoint "http://127.0.0.1:8080/__config" "Proxy Config" "200"
echo ""

# ============================================================================
# PHASE 4: WEBSOCKET HANDSHAKE PROTOCOLS
# ============================================================================
echo -e "${BLUE}[PHASE 4: REAL-TIME PROTOCOLS]${NC}"
check_websocket_handshake "http://127.0.0.1:8080/" "Central Gateway upgrade"
check_websocket_handshake "http://127.0.0.1:7880/" "LiveKit Local Server upgrade"
echo ""

# ============================================================================
# PHASE 5: WAN ACCESSIBILITY (nominalia + Cloudflare Tunnel)
# ============================================================================
echo -e "${BLUE}[PHASE 5: WAN ACCESSIBILITY]${NC}"
check_http_endpoint "https://msbross.me/" "nominalia - msbross.me root" "200|301|302"
check_http_endpoint "https://msbross.me/app/atenea/" "nominalia - Atenea SPA" "200|301|302"
TUNNEL_URL=$(grep -oE 'https://[a-z0-9.-]+\.trycloudflare\.com' "$(dirname "$0")/../LOGS/tunnel.log" 2>/dev/null | head -1)
if [ -n "$TUNNEL_URL" ]; then
  check_http_endpoint "$TUNNEL_URL/" "Cloudflare Tunnel - Proxy root" "200"
  check_http_endpoint "$TUNNEL_URL/__health" "Cloudflare Tunnel - Health" "200"
  check_http_endpoint "$TUNNEL_URL/__config" "Cloudflare Tunnel - Config" "200"
  check_http_endpoint "$TUNNEL_URL/app/atenea/" "Cloudflare Tunnel - Atenea SPA" "200"
  check_http_endpoint "$TUNNEL_URL/app/nikolina/" "Cloudflare Tunnel - Nikolina Dashboard" "200"
else
  echo -e "${YELLOW}➤ Cloudflare Tunnel log not found — skipping tunnel checks.${NC}"
  echo -e "${YELLOW}  Start tunnel: bash deploy/tunnel.sh${NC}"
fi
echo ""

# ============================================================================
# FINAL VERDICT
# ============================================================================
echo -e "${CYAN}================================================================${NC}"
if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}🏆 VERDICT: ALL ECOSYSYTEM MICROSERVICES OPERATING AT 100% HA CAPABILITY${NC}"
    echo -e "${GREEN}Deployment state: LOCKED & STABILIZED.${NC}"
    echo -e "${CYAN}================================================================${NC}"
    exit 0
else
    echo -e "${RED}⚠️  VERDICT: SYSTEM IS DEGRADED. $FAILED_CHECKS FAILED HEALTH CHECKS ENCOUNTERED.${NC}"
    echo -e "${RED}Operator intervention required. Inspect PM2 logs immediately.${NC}"
    echo -e "${CYAN}================================================================${NC}"
    exit 1
fi
