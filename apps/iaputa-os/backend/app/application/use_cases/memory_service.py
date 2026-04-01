import sqlite3
import os
import logging
import asyncio
from datetime import datetime, timedelta

logger = logging.getLogger(__name__)

DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))), "iaputa_os_memory.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS context_memory (
            key TEXT PRIMARY KEY,
            value TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS chat_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

def save_message(role: str, content: str):
    if not content:
        return
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO chat_history (role, content) VALUES (?, ?)",
        (role, content)
    )
    conn.commit()
    conn.close()

def get_recent_history(limit: int = 8) -> list:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT role, content FROM chat_history ORDER BY timestamp DESC LIMIT ?",
        (limit,)
    )
    rows = cursor.fetchall()
    conn.close()
    history = []
    for row in reversed(rows):
        history.append({"role": row[0], "content": row[1]})
    return history

def clear_history():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM chat_history")
    conn.commit()
    conn.close()

async def cleanup_task(idle_minutes: int = 10):
    while True:
        try:
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            cursor.execute(
                "DELETE FROM chat_history WHERE timestamp < datetime('now', ?)",
                (f'-{idle_minutes} minutes',)
            )
            deleted = cursor.rowcount
            conn.commit()
            conn.close()
            if deleted > 0:
                logger.info(f"Memory cleanup: {deleted} old messages purged.")
        except Exception as e:
            logger.error(f"Memory cleanup error: {e}")
        await asyncio.sleep(60)

init_db()
