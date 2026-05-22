"""
JartosDTo — Embedding Model Manager.

Generates vector embeddings using OpenAI or local models.
"""

from typing import Optional

import openai

from app.config import get_settings

settings = get_settings()

_client: Optional[openai.AsyncOpenAI] = None


def _get_client() -> openai.AsyncOpenAI:
    """Get or create the OpenAI async client for embeddings."""
    global _client
    if _client is None:
        _client = openai.AsyncOpenAI(api_key=settings.openai_api_key)
    return _client


async def get_embedding(text: str) -> list[float]:
    """
    Generate a vector embedding for the given text.

    Args:
        text: Input text to embed

    Returns:
        List of floats representing the embedding vector
    """
    client = _get_client()
    response = await client.embeddings.create(
        model=settings.embedding_model,
        input=text,
        dimensions=settings.embedding_dimensions,
    )
    return response.data[0].embedding


async def get_embeddings_batch(texts: list[str]) -> list[list[float]]:
    """
    Generate embeddings for a batch of texts.

    Args:
        texts: List of input texts

    Returns:
        List of embedding vectors
    """
    client = _get_client()
    response = await client.embeddings.create(
        model=settings.embedding_model,
        input=texts,
        dimensions=settings.embedding_dimensions,
    )
    return [item.embedding for item in response.data]
