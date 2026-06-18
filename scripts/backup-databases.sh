#!/bin/bash
# ─────────────────────────────────────────────────────────────
# MSBrossAI — Automated Database Backup Script
# Run daily via PM2 cron or manually: bash scripts/backup-databases.sh
# Retention: 7 days (auto-purge)
# ─────────────────────────────────────────────────────────────
set -eo pipefail

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DATE=$(date +%Y-%m-%d)
BACKUP_DIR="$BASE_DIR/backups/$DATE"
RETENTION_DAYS=7

mkdir -p "$BACKUP_DIR"
echo "[Backup] Starting — $DATE"

# ── SQLite Databases ──
backup_sqlite() {
  local name="$1" db_path="$2"
  if [ -f "$db_path" ]; then
    sqlite3 "$db_path" ".backup '$BACKUP_DIR/${name}.db'"
    echo "  ✅ $name (SQLite)"
  else
    echo "  ⚠️  $name — DB not found at $db_path"
  fi
}

backup_sqlite "gas_station"    "$BASE_DIR/apps/gas-station/backend/newton.db"
backup_sqlite "iaputa_os"      "$BASE_DIR/apps/iaputa-os/backend/iaputa_os_memory.db"
backup_sqlite "perfume_trading" "$BASE_DIR/apps/perfume-trading/erp/prisma/erp.db"
backup_sqlite "txa_fitness"    "$BASE_DIR/apps/txa-fitness-pro/prisma/txafitness.db"

# ── PostgreSQL Databases ──
PG_DUMP="/usr/local/opt/postgresql@16/bin/pg_dump"
for db_name in cuentos_magicos jartosdto; do
  if "$PG_DUMP" -h localhost -U manu "$db_name" > "$BACKUP_DIR/${db_name}.sql" 2>/dev/null; then
    gzip -f "$BACKUP_DIR/${db_name}.sql"
    echo "  ✅ $db_name (PostgreSQL)"
  else
    echo "  ⚠️  $db_name — pg_dump failed"
  fi
done

# ── Purge old backups ──
find "$BASE_DIR/backups" -maxdepth 1 -type d -mtime +$RETENTION_DAYS -exec rm -rf {} \; 2>/dev/null

echo "[Backup] Complete — $BACKUP_DIR"
ls -lh "$BACKUP_DIR"
