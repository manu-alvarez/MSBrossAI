"""
JartosDTo — Chat Completion Endpoint.

Core streaming chat with multi-model support, RAG, and Chain-of-Thought.
"""

import json
import uuid
from typing import Annotated

from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import get_settings
from app.core.llm.gateway import stream_chat_tokens
from app.core.llm.streaming import create_sse_response
from app.core.rag.pipeline import build_rag_messages
from app.db.session import get_db
from app.dependencies import get_current_user
from app.models import Conversation, Message, User
from app.schemas import ChatRequest

router = APIRouter()
settings = get_settings()


@router.post("/completions")
async def chat_completions(
    body: ChatRequest,
    request: Request,
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """
    Stream a chat completion response.

    Supports:
    - Multi-model routing (OpenAI, Anthropic, Google, Ollama, etc.)
    - RAG augmentation with web search and document retrieval
    - Chain-of-Thought visibility for thinking models
    - Token usage tracking
    """
    messages = [{"role": m.role, "content": m.content} for m in body.messages]

    sources = []

    # ── RAG Augmentation ─────────────────────────────────
    if body.web_search:
        messages, sources = await build_rag_messages(
            db,
            user_query=body.messages[-1].content,
            original_messages=messages,
            use_web_search=True,
        )

    # ── Create / Update Conversation ─────────────────────
    if body.conversation_id:
        conv = await db.get(Conversation, body.conversation_id)
    else:
        conv = Conversation(
            user_id=user.id,
            title=body.messages[-1].content[:100],
            model_id=body.model,
        )
        db.add(conv)
        await db.flush()

    # ── Save User Message ────────────────────────────────
    user_msg = Message(
        conversation_id=conv.id,
        role="user",
        content=body.messages[-1].content,
        attachments=body.messages[-1].attachments,
    )
    db.add(user_msg)
    await db.flush()

    # ── Stream Response ──────────────────────────────────
    if body.stream:
        collected_text = []
        collected_thinking = []

        async def augmented_stream():
            """Wrap the token stream with conversation metadata and source citations."""
            # Send conversation ID first
            yield json.dumps({
                "type": "meta",
                "conversation_id": str(conv.id),
                "message_id": str(uuid.uuid4()),
            })

            # Send sources if available
            if sources:
                yield json.dumps({
                    "type": "sources",
                    "sources": sources,
                })

            # Stream LLM tokens
            async for chunk in stream_chat_tokens(
                model=body.model,
                messages=messages,
                temperature=body.temperature,
                top_p=body.top_p,
                max_tokens=body.max_tokens,
            ):
                data = json.loads(chunk)
                if data["type"] == "text":
                    collected_text.append(data["content"])
                elif data["type"] == "thinking":
                    collected_thinking.append(data["content"])
                yield chunk

            # Save assistant message after streaming completes
            assistant_msg = Message(
                conversation_id=conv.id,
                role="assistant",
                content="".join(collected_text),
                thinking="".join(collected_thinking) if collected_thinking else None,
                model_id=body.model,
                sources=sources if sources else None,
            )
            db.add(assistant_msg)
            await db.commit()

        return await create_sse_response(augmented_stream(), request)

    # ── Non-Streaming (fallback) ─────────────────────────
    from app.core.llm.gateway import chat_completion

    response = await chat_completion(
        model=body.model,
        messages=messages,
        temperature=body.temperature,
        top_p=body.top_p,
        max_tokens=body.max_tokens,
        stream=False,
    )

    content = response.choices[0].message.content

    assistant_msg = Message(
        conversation_id=conv.id,
        role="assistant",
        content=content,
        model_id=body.model,
        tokens_input=response.usage.prompt_tokens if response.usage else None,
        tokens_output=response.usage.completion_tokens if response.usage else None,
        sources=sources if sources else None,
    )
    db.add(assistant_msg)
    await db.commit()

    return {
        "conversation_id": str(conv.id),
        "content": content,
        "model": body.model,
        "sources": sources,
    }
