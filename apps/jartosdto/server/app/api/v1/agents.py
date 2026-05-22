"""
JartosDTo — Agent Endpoints.

CRUD for custom AI agents with specific personas and tools.
"""

from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.dependencies import get_current_user, require_admin
from app.models import Agent, User
from app.schemas import AgentCreate, AgentResponse

router = APIRouter()


@router.get("/", response_model=list[AgentResponse])
async def list_agents(
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """List all public agents and user's private agents."""
    result = await db.execute(
        select(Agent).where(
            (Agent.is_public == True) | (Agent.created_by == user.id)
        ).order_by(Agent.name)
    )
    return [AgentResponse.model_validate(a) for a in result.scalars().all()]


@router.post("/", response_model=AgentResponse, status_code=201)
async def create_agent(
    data: AgentCreate,
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Create a custom AI agent (admin only)."""
    agent = Agent(**data.model_dump(), created_by=user.id)
    db.add(agent)
    await db.flush()
    return AgentResponse.model_validate(agent)


@router.put("/{agent_id}", response_model=AgentResponse)
async def update_agent(
    agent_id: UUID,
    data: AgentCreate,
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Update an existing agent."""
    agent = await db.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")

    for key, value in data.model_dump().items():
        setattr(agent, key, value)
    await db.flush()
    return AgentResponse.model_validate(agent)


@router.delete("/{agent_id}", status_code=204)
async def delete_agent(
    agent_id: UUID,
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Delete an agent."""
    agent = await db.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    await db.delete(agent)
