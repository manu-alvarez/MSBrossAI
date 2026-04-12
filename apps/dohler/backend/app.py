"""DOHLER Task Manager - FastAPI backend with SQLite"""
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import database as db

@asynccontextmanager
async def lifespan(app: FastAPI):
    db.init_db()
    yield

app = FastAPI(title="DOHLER Task Manager", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000", "http://localhost:5176", "https://msbross.me", "https://msbrossai.alvarezconsult.com"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# Inline routes to avoid import issues
from fastapi import HTTPException
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TaskCreate(BaseModel):
    title: str
    description: str = ""
    priority: str = "Medium"
    completed: bool = False

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    priority: Optional[str] = None
    completed: Optional[bool] = None

@app.get("/api/tasks/")
async def get_tasks():
    return db.get_all_tasks()

@app.post("/api/tasks/")
async def create_task(task: TaskCreate):
    return db.create_task(task.title, task.description, task.priority)

@app.put("/api/tasks/{task_id}")
async def update_task(task_id: int, task: TaskUpdate):
    updates = {k: v for k, v in task.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(400, "No fields to update")
    return db.update_task(task_id, updates)

@app.delete("/api/tasks/{task_id}")
async def delete_task(task_id: int):
    db.delete_task(task_id)
    return {"status": "deleted"}

@app.get("/api/stats/")
async def get_stats():
    return db.get_stats()

@app.get("/health")
async def health():
    return {"status": "ok"}
