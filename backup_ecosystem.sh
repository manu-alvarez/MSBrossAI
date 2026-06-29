#!/bin/bash
# MSBrossAI Ecosystem Backup Script

DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/Users/manu/Desktop/MSBrossAI_Backups"
BACKUP_FILE="${BACKUP_DIR}/ecosystem_backup_${DATE}.tar.gz"

echo "Iniciando backup del ecosistema MSBrossAI..."

mkdir -p "$BACKUP_DIR"

tar -czf "$BACKUP_FILE" -C /Users/manu/Desktop/MSBrossAI apps www proxy_server.js package.json ecosystem.config.js 

if [ $? -eq 0 ]; then
    echo "✅ Backup completado exitosamente: $BACKUP_FILE"
    
    # Keep only the last 5 backups
    echo "Limpiando backups antiguos (manteniendo los últimos 5)..."
    ls -tp "$BACKUP_DIR"/ecosystem_backup_*.tar.gz | grep -v '/$' | awk 'NR>5' | xargs -I {} rm -- {}
    echo "Limpieza completada."
else
    echo "❌ Error al crear el backup."
    exit 1
fi
