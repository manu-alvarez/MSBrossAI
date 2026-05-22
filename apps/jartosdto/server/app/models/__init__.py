"""
JartosDTo — ORM Models.

All SQLAlchemy models for the platform.
"""

import uuid
from datetime import datetime
from typing import Optional

from pgvector.sqlalchemy import Vector
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Enum,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
    func,
)
from sqlalchemy.dialects.postgresql import JSONB, UUID
from sqlalchemy.orm import relationship

from app.db.base import Base


class User(Base):
    """User account model."""

    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    display_name = Column(String(100), nullable=True)
    role = Column(String(20), default="user")  # admin | user
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    conversations = relationship("Conversation", back_populates="user", cascade="all, delete")


class Conversation(Base):
    """Chat conversation (thread) model."""

    __tablename__ = "conversations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(500), default="New Chat")
    model_id = Column(String(100), nullable=True)
    agent_id = Column(UUID(as_uuid=True), ForeignKey("agents.id"), nullable=True)
    system_prompt = Column(Text, nullable=True)
    parameters = Column(JSONB, default=dict)  # temperature, top_p, etc.
    is_archived = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="conversations")
    messages = relationship("Message", back_populates="conversation", cascade="all, delete")
    agent = relationship("Agent", back_populates="conversations")


class Message(Base):
    """Individual message within a conversation."""

    __tablename__ = "messages"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    conversation_id = Column(
        UUID(as_uuid=True), ForeignKey("conversations.id", ondelete="CASCADE"), nullable=False
    )
    role = Column(String(20), nullable=False)  # user | assistant | system | tool
    content = Column(Text, nullable=False)
    thinking = Column(Text, nullable=True)  # Chain-of-Thought content
    model_id = Column(String(100), nullable=True)
    tokens_input = Column(Integer, nullable=True)
    tokens_output = Column(Integer, nullable=True)
    sources = Column(JSONB, nullable=True)  # Web search citations
    attachments = Column(JSONB, nullable=True)  # File references
    metadata_ = Column("metadata", JSONB, default=dict)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    conversation = relationship("Conversation", back_populates="messages")


class ModelConfig(Base):
    """Registered LLM model configuration."""

    __tablename__ = "model_configs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    provider = Column(String(50), nullable=False)  # openai | anthropic | google | ollama | ...
    model_name = Column(String(100), nullable=False)  # gpt-4o, claude-3.5-sonnet, etc.
    display_name = Column(String(200), nullable=False)
    api_base = Column(String(500), nullable=True)
    api_key_env = Column(String(100), nullable=True)  # env var name holding the key
    is_enabled = Column(Boolean, default=True)
    is_vision = Column(Boolean, default=False)
    is_thinking = Column(Boolean, default=False)  # Supports chain-of-thought
    max_tokens = Column(Integer, default=4096)
    default_parameters = Column(JSONB, default=dict)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Agent(Base):
    """Custom AI agent with specific persona and tools."""

    __tablename__ = "agents"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(200), nullable=False)
    description = Column(Text, nullable=True)
    avatar_url = Column(String(500), nullable=True)
    system_prompt = Column(Text, nullable=False)
    model_id = Column(String(100), nullable=True)
    parameters = Column(JSONB, default=dict)
    tools = Column(JSONB, default=list)  # ["web_search", "code_execution", "rag"]
    is_public = Column(Boolean, default=True)
    created_by = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    conversations = relationship("Conversation", back_populates="agent")


class Document(Base):
    """Uploaded document for RAG ingestion."""

    __tablename__ = "documents"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    filename = Column(String(500), nullable=False)
    file_type = Column(String(50), nullable=False)  # pdf, txt, csv, docx
    file_size = Column(Integer, nullable=False)
    storage_path = Column(String(500), nullable=False)  # MinIO object key
    chunk_count = Column(Integer, default=0)
    status = Column(String(20), default="pending")  # pending | processing | ready | error
    metadata_ = Column("metadata", JSONB, default=dict)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Embedding(Base):
    """Vector embedding for RAG retrieval."""

    __tablename__ = "embeddings"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    document_id = Column(UUID(as_uuid=True), ForeignKey("documents.id", ondelete="CASCADE"))
    content = Column(Text, nullable=False)  # Original text chunk
    embedding = Column(Vector(1536))  # pgvector column
    chunk_index = Column(Integer, nullable=False)
    metadata_ = Column("metadata", JSONB, default=dict)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
