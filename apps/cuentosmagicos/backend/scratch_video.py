import asyncio
import logging
import os
import tempfile
import subprocess
from pathlib import Path
import httpx
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import get_settings
from app.models.orm import Story, Chapter
from app.services.storage import upload_to_storage

logger = logging.getLogger(__name__)
settings = get_settings()

async def _download_asset(url: str, suffix: str) -> str | None:
    """Download an asset to a temporary file."""
    if not url: return None
    try:
        if url.startswith("/storage/"):
            local_path = Path(__file__).parent.parent.parent.parent / "storage" / url.replace("/storage/", "")
            if local_path.exists():
                return str(local_path)
        
        full_url = url
        if not url.startswith("http"):
            full_url = f"http://localhost:{settings.APP_PORT}{url}"
            
        async with httpx.AsyncClient(follow_redirects=True) as client:
            resp = await client.get(full_url, timeout=60.0)
            resp.raise_for_status()
            
        with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as tmp:
            tmp.write(resp.content)
            return tmp.name
    except Exception as e:
        logger.error(f"Failed to download asset {url}: {e}")
        return None

async def _mux_video_and_audio(video_path: str, audio_path: str, output_path: str) -> bool:
    try:
        # Get audio duration
        probe_cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", audio_path
        ]
        probe_result = subprocess.run(probe_cmd, capture_output=True, text=True, check=True)
        duration = float(probe_result.stdout.strip())
        
        # Mux with looping
        cmd = [
            "ffmpeg", "-y",
            "-stream_loop", "-1", "-i", video_path,
            "-i", audio_path,
            "-vf", "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black",
            "-c:v", "libx264",
            "-preset", "fast",
            "-crf", "28",
            "-c:a", "aac",
            "-b:a", "128k",
            "-shortest",
            "-t", str(duration),
            output_path
        ]
        logger.info(f"Muxing AI video with audio: {' '.join(cmd)}")
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        if res.returncode != 0:
            logger.error(f"FFmpeg muxing failed: {res.stderr}")
            return False
        return True
    except Exception as e:
        logger.error(f"Failed to mux video and audio: {e}")
        return False
