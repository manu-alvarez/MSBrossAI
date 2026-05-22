"""
JartosDTo — Admin Dashboard Endpoints.

Global configuration, hyperparameters, and system management.
"""

from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.dependencies import require_admin
from app.models import Conversation, Document, Message, User
from app.schemas import AdminSettings

router = APIRouter()


@router.get("/stats")
async def get_stats(
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Get platform usage statistics."""
    users = (await db.execute(select(func.count(User.id)))).scalar()
    convs = (await db.execute(select(func.count(Conversation.id)))).scalar()
    msgs = (await db.execute(select(func.count(Message.id)))).scalar()
    docs = (await db.execute(select(func.count(Document.id)))).scalar()

    return {
        "total_users": users,
        "total_conversations": convs,
        "total_messages": msgs,
        "total_documents": docs,
    }


@router.get("/settings", response_model=AdminSettings)
async def get_settings_endpoint(user: Annotated[User, Depends(require_admin)]):
    """Get current admin settings."""
    return AdminSettings()


@router.put("/settings", response_model=AdminSettings)
async def update_settings(
    data: AdminSettings,
    user: Annotated[User, Depends(require_admin)],
):
    """Update admin settings (persisted in future via DB)."""
    # TODO: Persist to database settings table
    return data
