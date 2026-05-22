"""
JartosDTo — Conversation Endpoints.

CRUD for chat conversations and message history.
"""

from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.dependencies import get_current_user
from app.models import Conversation, Message, User
from app.schemas import ConversationCreate, ConversationResponse, MessageResponse

router = APIRouter()


@router.get("/", response_model=list[ConversationResponse])
async def list_conversations(
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """List all conversations for the current user."""
    result = await db.execute(
        select(Conversation)
        .where(Conversation.user_id == user.id, Conversation.is_archived == False)
        .order_by(Conversation.updated_at.desc().nullslast(), Conversation.created_at.desc())
    )
    return [ConversationResponse.model_validate(c) for c in result.scalars().all()]


@router.get("/{conv_id}/messages", response_model=list[MessageResponse])
async def get_messages(
    conv_id: UUID,
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Get all messages in a conversation."""
    conv = await db.get(Conversation, conv_id)
    if not conv or conv.user_id != user.id:
        raise HTTPException(status_code=404, detail="Conversation not found")

    result = await db.execute(
        select(Message)
        .where(Message.conversation_id == conv_id)
        .order_by(Message.created_at.asc())
    )
    return [MessageResponse.model_validate(m) for m in result.scalars().all()]


@router.post("/", response_model=ConversationResponse, status_code=201)
async def create_conversation(
    data: ConversationCreate,
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Create a new conversation."""
    conv = Conversation(user_id=user.id, **data.model_dump(exclude_none=True))
    db.add(conv)
    await db.flush()
    return ConversationResponse.model_validate(conv)


@router.delete("/{conv_id}", status_code=204)
async def delete_conversation(
    conv_id: UUID,
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Delete a conversation and all its messages."""
    conv = await db.get(Conversation, conv_id)
    if not conv or conv.user_id != user.id:
        raise HTTPException(status_code=404, detail="Conversation not found")
    await db.delete(conv)
