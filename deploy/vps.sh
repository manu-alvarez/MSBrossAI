#!/usr/bin/env bash
set -e

echo "🚀 MSBrossAI - VPS Deployment Script"
echo "====================================="

# Configuration
VPS_USER="manuel"
VPS_HOST="51.91.108.173"
VPS_PATH="/home/manuel/MSBrossAI"
FTP_HOST="msbros.ftp.tb-hosting.com"
FTP_USER="msbrossme"
FTP_PASS="${FTP_PASS:-Manik.87}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo ""
echo -e "${YELLOW}📦 Building all apps...${NC}"

# Build all apps
for app in dashboard apps/iaputa-os apps/livekit-nikolina apps/arantxa-translate apps/taskflow-pro apps/dohler apps/logisearch apps/edelweiss apps/moko-tools apps/combipro; do
    if [ -f "$app/package.json" ]; then
        echo -e "${YELLOW}▶️  Building $app...${NC}"
        (cd "$app" && npm install && npm run build 2>&1 | tail -3)
        echo -e "${GREEN}✅ $app built${NC}"
    fi
done

echo ""
echo -e "${YELLOW}📤 Uploading to VPS via FTP...${NC}"

# Create VPS directory structure
python3 -c "
import ftplib
import os

ftp = ftplib.FTP('$FTP_HOST')
ftp.login('$FTP_USER', '$FTP_PASS')
ftp.cwd('/www/')

# Upload dashboard
for root, dirs, files in os.walk('dashboard/dist'):
    for file in files:
        local_path = os.path.join(root, file)
        remote_path = os.path.relpath(local_path, 'dashboard/dist')
        with open(local_path, 'rb') as f:
            ftp.storbinary(f'STOR {remote_path}', f)
        print(f'Uploaded {remote_path}')

ftp.quit()
print('Upload complete!')
"

echo ""
echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}🎉 VPS deployment complete!${NC}"
echo -e "${GREEN}=====================================${NC}"
echo ""
echo "📍 VPS Access: https://msbross.me/"
echo "📍 Dashboard: https://msbross.me/dashboard/"
