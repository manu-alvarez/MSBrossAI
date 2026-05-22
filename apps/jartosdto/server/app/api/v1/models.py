"""
JartosDTo — Model Management Endpoints.

CRUD for registered LLM models and provider health checks.
"""

from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.llm.gateway import get_available_models
from app.db.session import get_db
from app.dependencies import get_current_user, require_admin
from app.models import ModelConfig, User
from app.schemas import ModelConfigCreate, ModelConfigResponse

router = APIRouter()


@router.get("/")
async def list_models(user: Annotated[User, Depends(get_current_user)]):
    """List all available models (built-in + custom registered)."""
    return {"models": get_available_models()}


@router.get("/registered", response_model=list[ModelConfigResponse])
async def list_registered_models(
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """List custom registered model configurations (admin only)."""
    result = await db.execute(select(ModelConfig).order_by(ModelConfig.provider))
    return [ModelConfigResponse.model_validate(m) for m in result.scalars().all()]


@router.post("/register", response_model=ModelConfigResponse, status_code=201)
async def register_model(
    data: ModelConfigCreate,
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Register a new model configuration (admin only)."""
    model = ModelConfig(**data.model_dump())
    db.add(model)
    await db.flush()
    return ModelConfigResponse.model_validate(model)


@router.delete("/{model_id}", status_code=204)
async def delete_model(
    model_id: UUID,
    user: Annotated[User, Depends(require_admin)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Delete a registered model configuration (admin only)."""
    model = await db.get(ModelConfig, model_id)
    if not model:
        raise HTTPException(status_code=404, detail="Model not found")
    await db.delete(model)
