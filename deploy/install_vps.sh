#!/usr/bin/env bash
set -e

echo "🚀 MSBrossAI - VPS Installation Script"
echo "======================================="
echo "Run this script with: sudo bash deploy/install_vps.sh"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Please run as root (sudo)${NC}"
    exit 1
fi

VPS_USER="${VPS_USER:-manuel}"
VPS_HOME="/home/$VPS_USER"
MSBROSSAI_DIR="$VPS_HOME/MSBrossAI"
WEB_ROOT="/var/www/msbrossai"

echo -e "${YELLOW}📦 Setting up web root...${NC}"
mkdir -p "$WEB_ROOT"
cp -r "$MSBROSSAI_DIR/www/dashboard/"* "$WEB_ROOT/"
chown -R www-data:www-data "$WEB_ROOT"

echo -e "${YELLOW}🔧 Installing Nginx configuration...${NC}"
cp "$MSBROSSAI_DIR/deploy/nginx-msbrossai.conf" /etc/nginx/sites-available/msbrossai
ln -sf /etc/nginx/sites-available/msbrossai /etc/nginx/sites-enabled/msbrossai

echo -e "${YELLOW}🔄 Testing and reloading Nginx...${NC}"
nginx -t
systemctl reload nginx

echo -e "${GREEN}=======================================${NC}"
echo -e "${GREEN}🎉 MSBrossAI installed on VPS!${NC}"
echo -e "${GREEN}=======================================${NC}"
echo ""
echo "📍 Dashboard: https://msbross.me/"
echo "📍 IAPuta OS: https://msbross.me/iaputa/"
echo "📍 LIVEKIT: https://msbross.me/nikolina/"
echo "📍 Arantxa: https://msbross.me/traductor/"
echo "📍 TaskFlowPro: https://msbross.me/taskflow/"
echo "📍 DOHLER: https://msbross.me/dohler/"
echo "📍 LogiSearch: https://msbross.me/logisearch/"
echo "📍 Edelweiss: https://msbross.me/edelweiss/"
echo "📍 Moko-Tools: https://msbross.me/moko/"
echo "📍 CombiPro: https://msbross.me/combipro/"
echo ""
echo "Next steps:"
echo "1. Start each app service (see deploy/local.sh)"
echo "2. Configure SSL with Let's Encrypt"
echo "3. Set up systemd services for auto-start"
