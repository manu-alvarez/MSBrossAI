"""
JartosDTo — RAG Pipeline.

Retrieval-Augmented Generation using LangChain, pgvector, and web search.
Perplexity-style: retrieve → augment prompt → generate with citations.
"""

import json
from typing import Optional
from uuid import UUID

from langchain_text_splitters import RecursiveCharacterTextSplitter
from sqlalchemy import select, text
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import get_settings
from app.core.rag.embeddings import get_embedding
from app.core.search.tavily import search_web
from app.models import Document, Embedding

settings = get_settings()


# ── Document Processing ──────────────────────────────────


async def chunk_and_embed_document(
    db: AsyncSession,
    document: Document,
    content: str,
) -> int:
    """
    Split a document into chunks, generate embeddings, and store in pgvector.

    Args:
        db: Database session
        document: Document ORM object
        content: Raw text content of the document

    Returns:
        Number of chunks created
    """
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        separators=["\n\n", "\n", ". ", " ", ""],
    )

    chunks = splitter.split_text(content)

    for i, chunk_text in enumerate(chunks):
        embedding_vector = await get_embedding(chunk_text)

        embedding = Embedding(
            document_id=document.id,
            content=chunk_text,
            embedding=embedding_vector,
            chunk_index=i,
            metadata_={"source": document.filename, "chunk": i},
        )
        db.add(embedding)

    document.chunk_count = len(chunks)
    document.status = "ready"
    await db.commit()

    return len(chunks)


# ── Vector Retrieval ─────────────────────────────────────


async def retrieve_relevant_chunks(
    db: AsyncSession,
    query: str,
    top_k: int = 5,
    document_ids: Optional[list[UUID]] = None,
) -> list[dict]:
    """
    Retrieve the most relevant document chunks using pgvector similarity search.

    Args:
        db: Database session
        query: User query to match against
        top_k: Number of results to return
        document_ids: Optional filter to specific documents

    Returns:
        List of dicts with content, score, and metadata
    """
    query_embedding = await get_embedding(query)

    # pgvector cosine distance query
    sql = text("""
        SELECT
            e.content,
            e.metadata AS meta,
            d.filename,
            1 - (e.embedding <=> :query_vec::vector) AS similarity
        FROM embeddings e
        JOIN documents d ON d.id = e.document_id
        WHERE d.status = 'ready'
        ORDER BY e.embedding <=> :query_vec::vector
        LIMIT :top_k
    """)

    params = {"query_vec": str(query_embedding), "top_k": top_k}
    result = await db.execute(sql, params)
    rows = result.fetchall()

    return [
        {
            "content": row.content,
            "source": row.filename,
            "score": float(row.similarity),
            "metadata": row.meta or {},
        }
        for row in rows
    ]


# ── RAG-Augmented Prompt Builder ─────────────────────────


async def build_rag_messages(
    db: AsyncSession,
    user_query: str,
    original_messages: list[dict],
    *,
    use_web_search: bool = False,
    document_ids: Optional[list[UUID]] = None,
) -> tuple[list[dict], list[dict]]:
    """
    Build RAG-augmented messages by injecting retrieved context.

    Args:
        db: Database session
        user_query: The user's latest query
        original_messages: Original conversation messages
        use_web_search: Whether to include web search results
        document_ids: Specific documents to search

    Returns:
        Tuple of (augmented_messages, sources)
    """
    sources = []
    context_parts = []

    # 1. Vector DB retrieval (uploaded documents)
    doc_chunks = await retrieve_relevant_chunks(db, user_query, top_k=5, document_ids=document_ids)
    for chunk in doc_chunks:
        context_parts.append(f"[Document: {chunk['source']}]\n{chunk['content']}")
        sources.append({
            "title": chunk["source"],
            "url": "",
            "snippet": chunk["content"][:200],
            "relevance_score": chunk["score"],
        })

    # 2. Web search (Perplexity-style)
    if use_web_search:
        web_results = await search_web(user_query, max_results=5)
        for result in web_results:
            context_parts.append(f"[Web: {result['title']}]\nURL: {result['url']}\n{result['content']}")
            sources.append({
                "title": result["title"],
                "url": result["url"],
                "snippet": result["content"][:200],
                "relevance_score": result.get("score", 0.0),
            })

    # 3. Build augmented system prompt
    if context_parts:
        rag_context = "\n\n---\n\n".join(context_parts)
        rag_system_prompt = (
            "You have access to the following context information. "
            "Use it to answer the user's question accurately. "
            "Always cite your sources using [Source: title] format. "
            "If the context doesn't contain relevant information, say so.\n\n"
            f"## Retrieved Context\n\n{rag_context}"
        )

        # Inject RAG context as a system message
        augmented = list(original_messages)
        # Insert after the first system message, or at the beginning
        insert_idx = 1 if augmented and augmented[0]["role"] == "system" else 0
        augmented.insert(insert_idx, {"role": "system", "content": rag_system_prompt})

        return augmented, sources

    return original_messages, sources
