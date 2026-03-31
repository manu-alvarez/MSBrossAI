#!/usr/bin/env bash
set -e

echo "🚀 MSBrossAI - VPS Nginx Installation Script"
echo "=============================================="
echo "This script configures Nginx to serve MSBrossAI at msbrossai.alvarezconsult.com"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Please run as root (sudo bash $0)${NC}"
    exit 1
fi

VPS_USER="${VPS_USER:-manuel}"
VPS_HOME="/home/$VPS_USER"
WEB_ROOT="$VPS_HOME/MSBrossAI/web"
NGINX_CONF="/etc/nginx/sites-available/msbrossai"
NGINX_LINK="/etc/nginx/sites-enabled/msbrossai"

echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

# Check if web root exists
if [ ! -d "$WEB_ROOT" ]; then
    echo -e "${RED}❌ Web root not found: $WEB_ROOT${NC}"
    echo "Please run the build script first."
    exit 1
fi

# Check if Nginx is installed
if ! command -v nginx &> /dev/null; then
    echo -e "${YELLOW}📦 Installing Nginx...${NC}"
    apt-get update && apt-get install -y nginx
fi

echo -e "${YELLOW}🔧 Creating Nginx configuration...${NC}"

cat > "$NGINX_CONF" << 'NGINXEOF'
server {
    listen 80;
    server_name msbrossai.alvarezconsult.com;

    root /home/manuel/MSBrossAI/web;
    index index.html;

    # Main index - MSBrossAI Dashboard
    location / {
        try_files $uri $uri/ /index.html;
    }

    # IAPuta OS
    location /iaputa/ {
        alias /home/manuel/MSBrossAI/web/iaputa/;
        try_files $uri $uri/ /iaputa/index.html;
    }

    # LIVEKIT Nikolina
    location /nikolina/ {
        alias /home/manuel/MSBrossAI/web/nikolina/;
        try_files $uri $uri/ /nikolina/index.html;
    }

    # Arantxa Translate
    location /traductor/ {
        alias /home/manuel/MSBrossAI/web/traductor/;
        try_files $uri $uri/ /traductor/index.html;
    }

    # TaskFlowPro
    location /taskflow/ {
        alias /home/manuel/MSBrossAI/web/taskflow/;
        try_files $uri $uri/ /taskflow/index.html;
    }

    # DOHLER
    location /dohler/ {
        alias /home/manuel/MSBrossAI/web/dohler/;
        try_files $uri $uri/ /dohler/index.html;
    }

    # LogiSearch
    location /logisearch/ {
        alias /home/manuel/MSBrossAI/web/logisearch/;
        try_files $uri $uri/ /logisearch/index.html;
    }

    # Edelweiss
    location /edelweiss/ {
        alias /home/manuel/MSBrossAI/web/edelweiss/;
        try_files $uri $uri/ /edelweiss/index.html;
    }

    # Moko-Tools
    location /moko/ {
        alias /home/manuel/MSBrossAI/web/moko/;
        try_files $uri $uri/ /moko/index.html;
    }

    # CombiPro
    location /combipro/ {
        alias /home/manuel/MSBrossAI/web/combipro/;
        try_files $uri $uri/ /combipro/index.html;
    }

    # Dashboard Premium
    location /dashboard/ {
        alias /home/manuel/MSBrossAI/web/dashboard/;
        try_files $uri $uri/ /dashboard/index.html;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
NGINXEOF

echo -e "${YELLOW}🔗 Enabling site...${NC}"
ln -sf "$NGINX_CONF" "$NGINX_LINK"

echo -e "${YELLOW}🔄 Testing Nginx configuration...${NC}"
nginx -t

echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
systemctl reload nginx

echo -e "${GREEN}==============================================${NC}"
echo -e "${GREEN}🎉 MSBrossAI Nginx configuration installed!${NC}"
echo -e "${GREEN}==============================================${NC}"
echo ""
echo "📍 Main URL: http://msbrossai.alvarezconsult.com/"
echo "📍 Dashboard: http://msbrossai.alvarezconsult.com/dashboard/"
echo ""
echo "📋 Next steps:"
echo "1. Configure DNS: Add A record for msbrossai.alvarezconsult.com → 51.91.108.173"
echo "2. (Optional) Set up SSL with Let's Encrypt:"
echo "   sudo certbot --nginx -d msbrossai.alvarezconsult.com"
echo ""
echo "📊 Apps deployed:"
echo "   ✅ IAPuta OS"
echo "   ✅ LIVEKIT Nikolina"
echo "   ✅ Arantxa Translate PRO"
echo "   ✅ TaskFlowPro"
echo "   ✅ DOHLER"
echo "   ✅ LogiSearch"
echo "   ✅ Edelweiss"
echo "   ✅ Moko-Tools"
echo "   ✅ CombiPro"
echo "   ✅ Dashboard Premium"
