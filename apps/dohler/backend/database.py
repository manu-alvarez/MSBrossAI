import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "dohler.db")

def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_conn()
    conn.execute('''CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT DEFAULT '',
        priority TEXT DEFAULT 'Medium',
        completed BOOLEAN DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )''')
    conn.commit()
    conn.close()

def get_all_tasks():
    conn = get_conn()
    tasks = [dict(r) for r in conn.execute("SELECT * FROM tasks ORDER BY created_at DESC").fetchall()]
    conn.close()
    return tasks

def create_task(title, description, priority):
    conn = get_conn()
    cursor = conn.execute("INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)", (title, description, priority))
    conn.commit()
    task = dict(conn.execute("SELECT * FROM tasks WHERE id = ?", (cursor.lastrowid,)).fetchone())
    conn.close()
    return task

def update_task(task_id, updates):
    conn = get_conn()
    sets = ", ".join(f"{k} = ?" for k in updates.keys())
    values = list(updates.values()) + [task_id]
    conn.execute(f"UPDATE tasks SET {sets}, updated_at = CURRENT_TIMESTAMP WHERE id = ?", values)
    conn.commit()
    task = dict(conn.execute("SELECT * FROM tasks WHERE id = ?", (task_id,)).fetchone())
    conn.close()
    return task

def delete_task(task_id):
    conn = get_conn()
    conn.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    conn.close()

def get_stats():
    conn = get_conn()
    total = conn.execute("SELECT COUNT(*) FROM tasks").fetchone()[0]
    completed = conn.execute("SELECT COUNT(*) FROM tasks WHERE completed = 1").fetchone()[0]
    pending = total - completed
    high = conn.execute("SELECT COUNT(*) FROM tasks WHERE priority = 'High' AND completed = 0").fetchone()[0]
    rate = round((completed / total * 100), 1) if total > 0 else 0
    conn.close()
    return {"total_tasks": total, "completed_tasks": completed, "pending_tasks": pending, "high_priority": high, "completion_rate": rate}

init_db()
