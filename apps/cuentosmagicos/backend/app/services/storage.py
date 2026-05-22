import io
import logging
import os
from typing import Union
from pathlib import Path

from app.core.config import get_settings

logger = logging.getLogger(__name__)
settings = get_settings()

# Local storage directory
STORAGE_DIR = Path(__file__).parent.parent.parent.parent / "storage"
STORAGE_DIR.mkdir(exist_ok=True)


async def upload_to_storage(
    file_data: Union[bytes, io.BytesIO],
    file_path: str,
    content_type: str = "application/octet-stream",
) -> str:
    """
    Upload a file to local storage and return the URL.
    Falls back to local file serving when Supabase is unavailable.
    """
    # Convert BytesIO to bytes if needed
    if isinstance(file_data, io.BytesIO):
        file_bytes = file_data.getvalue()
    else:
        file_bytes = file_data

    # Try Supabase first
    try:
        from supabase import create_client, Client
        supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_KEY)

        result = supabase.storage.from_(settings.STORAGE_BUCKET).upload(
            path=file_path,
            file=file_bytes,
            file_options={"content_type": content_type},
        )

        public_url = supabase.storage.from_(settings.STORAGE_BUCKET).get_public_url(file_path)
        logger.info(f"Uploaded file to Supabase storage: {public_url}")
        return public_url
    except Exception as e:
        logger.warning(f"Supabase upload failed ({e}), using local storage")

    # Fallback to local storage
    full_path = STORAGE_DIR / file_path
    full_path.parent.mkdir(parents=True, exist_ok=True)

    with open(full_path, "wb") as f:
        f.write(file_bytes)

    # Return local URL (served by backend)
    local_url = f"/storage/{file_path}"
    logger.info(f"Saved file to local storage: {local_url}")
    return local_url


async def delete_from_storage(file_path: str) -> None:
    """Delete a file from Supabase Storage."""
    supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_KEY)

    try:
        supabase.storage.from_(settings.STORAGE_BUCKET).remove([file_path])
        logger.info(f"Deleted file from storage: {file_path}")
    except Exception as e:
        logger.error(f"Failed to delete file from storage: {e}")
        raise


async def get_signed_url(file_path: str, expires_in: int = 3600) -> str:
    """
    Generate a time-limited signed URL for private files.

    Args:
        file_path: Path in storage bucket
        expires_in: URL validity in seconds (default 1 hour)

    Returns:
        Signed URL string
    """
    supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_KEY)

    try:
        signed_url = supabase.storage.from_(settings.STORAGE_BUCKET).create_signed_url(
            file_path, expires_in
        )
        return signed_url
    except Exception as e:
        logger.error(f"Failed to generate signed URL: {e}")
        raise
