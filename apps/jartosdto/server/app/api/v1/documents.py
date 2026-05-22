"""
JartosDTo — Document Upload & RAG Endpoints.

Upload, process, and query documents for RAG.
"""

import os
import tempfile
from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.multimodal.documents import parse_document
from app.core.rag.pipeline import chunk_and_embed_document, retrieve_relevant_chunks
from app.db.session import get_db
from app.dependencies import get_current_user
from app.models import Document, User
from app.schemas import DocumentResponse

router = APIRouter()

ALLOWED_TYPES = {"pdf", "txt", "csv", "docx", "md"}


@router.post("/upload", response_model=DocumentResponse, status_code=201)
async def upload_document(
    file: UploadFile = File(...),
    user: Annotated[User, Depends(get_current_user)] = None,
    db: Annotated[AsyncSession, Depends(get_db)] = None,
):
    """Upload a document for RAG ingestion."""
    ext = file.filename.rsplit(".", 1)[-1].lower() if file.filename else ""
    if ext not in ALLOWED_TYPES:
        raise HTTPException(status_code=400, detail=f"Unsupported file type: {ext}")

    content = await file.read()

    # Save to temp file for processing
    with tempfile.NamedTemporaryFile(delete=False, suffix=f".{ext}") as tmp:
        tmp.write(content)
        tmp_path = tmp.name

    try:
        # Create document record
        doc = Document(
            user_id=user.id,
            filename=file.filename,
            file_type=ext,
            file_size=len(content),
            storage_path=tmp_path,
            status="processing",
        )
        db.add(doc)
        await db.flush()

        # Parse and embed
        text_content = await parse_document(tmp_path, ext)
        await chunk_and_embed_document(db, doc, text_content)

        return DocumentResponse.model_validate(doc)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Processing failed: {str(e)}")
    finally:
        os.unlink(tmp_path)


@router.get("/", response_model=list[DocumentResponse])
async def list_documents(
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """List all uploaded documents."""
    result = await db.execute(
        select(Document).where(Document.user_id == user.id).order_by(Document.created_at.desc())
    )
    return [DocumentResponse.model_validate(d) for d in result.scalars().all()]


@router.post("/query")
async def query_documents(
    query: str,
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
    top_k: int = 5,
):
    """Query uploaded documents using vector similarity search."""
    chunks = await retrieve_relevant_chunks(db, query, top_k=top_k)
    return {"results": chunks}


@router.delete("/{doc_id}", status_code=204)
async def delete_document(
    doc_id: UUID,
    user: Annotated[User, Depends(get_current_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Delete a document and its embeddings."""
    doc = await db.get(Document, doc_id)
    if not doc or doc.user_id != user.id:
        raise HTTPException(status_code=404, detail="Document not found")
    await db.delete(doc)
