#!/bin/bash
# ─────────────────────────────────────────────────────────────
# MSBrossAI — Ecosystem Health Monitor
# Usage: bash scripts/health-monitor.sh
# ─────────────────────────────────────────────────────────────
set -uo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'
BOLD='\033[1m'

echo -e "${BOLD}══════════════════════════════════════════════${NC}"
echo -e "${BOLD}  MSBrossAI — Ecosystem Health Monitor${NC}"
echo -e "${BOLD}  $(date '+%Y-%m-%d %H:%M:%S')${NC}"
echo -e "${BOLD}══════════════════════════════════════════════${NC}"
echo ""

TOTAL=0
OK=0
FAIL=0

check_service() {
  local name="$1"
  local url="$2"
  TOTAL=$((TOTAL + 1))
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$url" 2>/dev/null)
  if [ "$code" -ge 200 ] && [ "$code" -lt 400 ]; then
    printf "  ${GREEN}✅${NC} %-28s → %s\n" "$name" "$code"
    OK=$((OK + 1))
  else
    printf "  ${RED}❌${NC} %-28s → %s\n" "$name" "$code"
    FAIL=$((FAIL + 1))
  fi
}

echo -e "${BOLD}Backend Services (/health)${NC}"
check_service "nikolina-api-hub (8001)"    "http://localhost:8001/health"
check_service "gas-station (3005)"         "http://localhost:3005/health"
check_service "industrialpro (8002)"       "http://localhost:8002/health"
check_service "iaputa-os (8006)"           "http://localhost:8006/health"
check_service "msbross (8005)"             "http://localhost:8005/health"
check_service "traductor-pro (8004)"       "http://localhost:8004/health"
check_service "cuentos-magicos (8007)"     "http://localhost:8007/health"
check_service "atenea (8009)"              "http://localhost:8009/health"
check_service "jartosdto (8010)"           "http://localhost:8010/health"

echo ""
echo -e "${BOLD}Frontend Apps (SSR)${NC}"
check_service "elitescout (8003)"          "http://localhost:8003/app/elitescout/"
check_service "txa-fitness (3456)"         "http://localhost:3456/app/txafitnesspro/"
check_service "mapfre (3333)"              "http://localhost:3333/app/mapfre/"
check_service "perfume-trading (3011)"     "http://localhost:3011/app/perfume-trading/"

echo ""
echo -e "${BOLD}Infrastructure${NC}"
check_service "msbross-proxy (8080)"       "http://localhost:8080/"
check_service "cloudflare (msbross.me)"    "https://msbross.me/"

echo ""
echo -e "${BOLD}Databases${NC}"
# Redis
if redis-cli ping 2>/dev/null | grep -q PONG; then
  printf "  ${GREEN}✅${NC} %-28s → %s\n" "Redis" "PONG"
  OK=$((OK + 1))
else
  printf "  ${RED}❌${NC} %-28s → %s\n" "Redis" "DOWN"
  FAIL=$((FAIL + 1))
fi
TOTAL=$((TOTAL + 1))

# PostgreSQL
if /usr/local/opt/postgresql@16/bin/pg_isready -h localhost -q 2>/dev/null; then
  printf "  ${GREEN}✅${NC} %-28s → %s\n" "PostgreSQL@16" "READY"
  OK=$((OK + 1))
else
  printf "  ${RED}❌${NC} %-28s → %s\n" "PostgreSQL@16" "DOWN"
  FAIL=$((FAIL + 1))
fi
TOTAL=$((TOTAL + 1))

echo ""
echo -e "${BOLD}══════════════════════════════════════════════${NC}"
if [ $FAIL -eq 0 ]; then
  echo -e "  ${GREEN}${BOLD}ALL SYSTEMS OPERATIONAL${NC}  ($OK/$TOTAL)"
else
  echo -e "  ${RED}${BOLD}$FAIL SERVICE(S) DOWN${NC}  ($OK/$TOTAL operational)"
fi
echo -e "${BOLD}══════════════════════════════════════════════${NC}"

exit $FAIL
