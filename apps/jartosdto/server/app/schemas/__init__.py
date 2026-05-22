"""
JartosDTo — Pydantic Schemas.

Request/response schemas for all API endpoints.
"""

from datetime import datetime
from typing import Any, Optional
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field


# ═══════════════════════════════════════════════════════════
# Auth Schemas
# ═══════════════════════════════════════════════════════════


class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)
    display_name: Optional[str] = None


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: UUID
    email: str
    display_name: Optional[str]
    role: str
    created_at: datetime

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


# ═══════════════════════════════════════════════════════════
# Chat Schemas
# ═══════════════════════════════════════════════════════════


class ChatMessage(BaseModel):
    """Single message in a chat request."""

    role: str = Field(pattern="^(user|assistant|system)$")
    content: str
    attachments: Optional[list[dict]] = None


class ChatRequest(BaseModel):
    """Chat completion request."""

    model: str = "gpt-4o"
    messages: list[ChatMessage]
    conversation_id: Optional[UUID] = None
    agent_id: Optional[UUID] = None
    stream: bool = True
    web_search: bool = False
    # Hyperparameters
    temperature: float = Field(default=0.7, ge=0.0, le=2.0)
    top_p: float = Field(default=1.0, ge=0.0, le=1.0)
    max_tokens: int = Field(default=4096, ge=1, le=128000)
    frequency_penalty: float = Field(default=0.0, ge=-2.0, le=2.0)
    presence_penalty: float = Field(default=0.0, ge=-2.0, le=2.0)


class SourceCitation(BaseModel):
    """Web search or RAG source citation."""

    title: str
    url: str
    snippet: str
    relevance_score: Optional[float] = None


class ChatResponse(BaseModel):
    """Non-streaming chat response."""

    id: UUID
    conversation_id: UUID
    model: str
    content: str
    thinking: Optional[str] = None
    sources: Optional[list[SourceCitation]] = None
    tokens_input: int
    tokens_output: int
    created_at: datetime


# ═══════════════════════════════════════════════════════════
# Conversation Schemas
# ═══════════════════════════════════════════════════════════


class ConversationCreate(BaseModel):
    title: Optional[str] = "New Chat"
    model_id: Optional[str] = None
    agent_id: Optional[UUID] = None
    system_prompt: Optional[str] = None


class ConversationResponse(BaseModel):
    id: UUID
    title: str
    model_id: Optional[str]
    agent_id: Optional[UUID]
    created_at: datetime
    updated_at: Optional[datetime]
    message_count: int = 0

    model_config = {"from_attributes": True}


class MessageResponse(BaseModel):
    id: UUID
    role: str
    content: str
    thinking: Optional[str] = None
    model_id: Optional[str] = None
    sources: Optional[list[SourceCitation]] = None
    attachments: Optional[list[dict]] = None
    tokens_input: Optional[int] = None
    tokens_output: Optional[int] = None
    created_at: datetime

    model_config = {"from_attributes": True}


# ═══════════════════════════════════════════════════════════
# Model Config Schemas
# ═══════════════════════════════════════════════════════════


class ModelConfigCreate(BaseModel):
    provider: str
    model_name: str
    display_name: str
    api_base: Optional[str] = None
    api_key_env: Optional[str] = None
    is_vision: bool = False
    is_thinking: bool = False
    max_tokens: int = 4096
    default_parameters: dict[str, Any] = {}


class ModelConfigResponse(BaseModel):
    id: UUID
    provider: str
    model_name: str
    display_name: str
    is_enabled: bool
    is_vision: bool
    is_thinking: bool
    max_tokens: int
    default_parameters: dict[str, Any]

    model_config = {"from_attributes": True}


# ═══════════════════════════════════════════════════════════
# Agent Schemas
# ═══════════════════════════════════════════════════════════


class AgentCreate(BaseModel):
    name: str
    description: Optional[str] = None
    system_prompt: str
    model_id: Optional[str] = None
    parameters: dict[str, Any] = {}
    tools: list[str] = []


class AgentResponse(BaseModel):
    id: UUID
    name: str
    description: Optional[str]
    avatar_url: Optional[str]
    system_prompt: str
    model_id: Optional[str]
    tools: list[str]
    is_public: bool
    created_at: datetime

    model_config = {"from_attributes": True}


# ═══════════════════════════════════════════════════════════
# Document / RAG Schemas
# ═══════════════════════════════════════════════════════════


class DocumentResponse(BaseModel):
    id: UUID
    filename: str
    file_type: str
    file_size: int
    chunk_count: int
    status: str
    created_at: datetime

    model_config = {"from_attributes": True}


class SearchRequest(BaseModel):
    query: str
    max_results: int = 5


class SearchResult(BaseModel):
    title: str
    url: str
    content: str
    score: float


# ═══════════════════════════════════════════════════════════
# Admin Schemas
# ═══════════════════════════════════════════════════════════


class AdminSettings(BaseModel):
    default_model: str = "gpt-4o"
    default_system_prompt: str = "You are a helpful assistant."
    default_temperature: float = 0.7
    default_top_p: float = 1.0
    default_max_tokens: int = 4096
    web_search_enabled: bool = True
    code_sandbox_enabled: bool = True
    rag_enabled: bool = True


class SandboxRequest(BaseModel):
    code: str
    language: str = "python"
    timeout: int = 30
