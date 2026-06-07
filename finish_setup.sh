#!/bin/bash
echo "Waiting for copy tasks to finish..."
sleep 10
cd apps/txa-fitness-pro && npm run build
cd ../mapfre-infocol/frontend && npm run build
cd ../../../
pm2 restart all
pm2 save
echo "DONE"
