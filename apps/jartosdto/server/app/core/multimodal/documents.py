"""
JartosDTo — Document Parser.

Extracts text content from PDF, TXT, CSV, DOCX files for RAG ingestion.
"""

import csv
import io
from pathlib import Path

from pypdf import PdfReader


async def parse_document(file_path: str, file_type: str) -> str:
    """
    Extract text content from a document file.

    Args:
        file_path: Path to the file
        file_type: File extension (pdf, txt, csv, docx)

    Returns:
        Extracted text content
    """
    parsers = {
        "pdf": _parse_pdf,
        "txt": _parse_txt,
        "csv": _parse_csv,
        "docx": _parse_docx,
        "md": _parse_txt,
    }

    parser = parsers.get(file_type.lower())
    if not parser:
        raise ValueError(f"Unsupported file type: {file_type}")

    return await parser(file_path)


async def _parse_pdf(file_path: str) -> str:
    """Extract text from PDF using pypdf."""
    reader = PdfReader(file_path)
    text_parts = []
    for page in reader.pages:
        text = page.extract_text()
        if text:
            text_parts.append(text)
    return "\n\n".join(text_parts)


async def _parse_txt(file_path: str) -> str:
    """Read plain text file."""
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()


async def _parse_csv(file_path: str) -> str:
    """Convert CSV to readable text format."""
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        reader = csv.reader(f)
        rows = list(reader)
    if not rows:
        return ""

    headers = rows[0]
    text_parts = [" | ".join(headers)]
    for row in rows[1:]:
        text_parts.append(" | ".join(row))
    return "\n".join(text_parts)


async def _parse_docx(file_path: str) -> str:
    """Extract text from DOCX using python-docx."""
    from docx import Document

    doc = Document(file_path)
    return "\n\n".join(para.text for para in doc.paragraphs if para.text.strip())
