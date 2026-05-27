import re

with open("app/services/video_generation.py", "r") as f:
    content = f.read()

# Let's insert the helper functions at the top after _retry_with_backoff
helpers = """
async def _download_asset(url: str, suffix: str) -> str | None:
    \"\"\"Download an asset to a temporary file.\"\"\"
    if not url: return None
    try:
        if url.startswith("/storage/"):
            from pathlib import Path
            local_path = Path(__file__).parent.parent.parent.parent / "storage" / url.replace("/storage/", "")
            if local_path.exists():
                return str(local_path)
        
        full_url = url
        if not url.startswith("http"):
            full_url = f"http://localhost:{settings.APP_PORT}{url}"
            
        import httpx
        import tempfile
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
    import subprocess
    try:
        probe_cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", audio_path
        ]
        probe_result = subprocess.run(probe_cmd, capture_output=True, text=True, check=True)
        duration = float(probe_result.stdout.strip())
        
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
"""

# Replace generate_video_for_story
new_generate = """
async def generate_video_for_story(session: AsyncSession, story_id: str) -> None:
    \"\"\"Generate video clips for all chapters, mux with audio, and concat into a final story video.\"\"\"
    logger.info(f"Generating video for story_id={story_id}")

    result = await session.execute(select(Story).where(Story.id == story_id))
    story = result.scalar_one_or_none()
    if not story:
        logger.error(f"Story not found: {story_id}")
        return

    story.video_status = "processing"
    await session.commit()

    chapters_result = await session.execute(
        select(Chapter)
        .where(Chapter.story_id == story_id)
        .order_by(Chapter.chapter_number)
    )
    chapters = chapters_result.scalars().all()

    chapter_video_files = []
    import tempfile
    import os

    for chapter in chapters:
        # Wait for image to be ready
        if not chapter.url_image:
            for _ in range(36):
                await asyncio.sleep(5)
                await session.refresh(chapter)
                if chapter.url_image: break

        if not chapter.url_image:
            logger.warning(f"No image for chapter {chapter.chapter_number}")
            chapter.video_status = "skipped"
            await session.commit()
            continue

        chapter.video_status = "processing"
        await session.commit()

        # Wait for audio to be ready
        audio_url = chapter.url_audio
        if not audio_url:
            for _ in range(24):
                await asyncio.sleep(5)
                await session.refresh(chapter)
                if chapter.url_audio:
                    audio_url = chapter.url_audio
                    break

        if not audio_url:
            logger.warning(f"No audio for chapter {chapter.chapter_number}")
            chapter.video_status = "skipped"
            await session.commit()
            continue
            
        # Download Audio
        local_audio_path = await _download_asset(audio_url, ".mp3")
        if not local_audio_path:
            logger.warning(f"Failed to download audio for chapter {chapter.chapter_number}")
            chapter.video_status = "skipped"
            await session.commit()
            continue

        # Check if already has a valid video clip generated
        local_muxed_path = None
        
        try:
            video_url = None
            last_error = None

            # PRIORITY 1: ffmpeg local (already muxed inside generate_local_video_from_image_and_audio)
            logger.info(f"Using ffmpeg for chapter {chapter.chapter_number}")
            with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as tmp_vid:
                tmp_video_path = tmp_vid.name

            local_video = await generate_local_video_from_image_and_audio(
                chapter.url_image,
                audio_url,
                tmp_video_path
            )

            if local_video and os.path.exists(local_video):
                local_muxed_path = local_video
            else:
                # Iterate through providers to get an AI video url
                if settings.HUGGINGFACE_TOKEN:
                    try:
                        async def generate_with_huggingface():
                            return await _generate_video_huggingface(chapter.url_image, chapter.video_prompt or "Gentle motion")
                        video_url = await _retry_with_backoff(generate_with_huggingface, max_retries=2, base_delay=15.0, operation_name=f"HF chapter {chapter.chapter_number}")
                    except Exception as e: last_error = e

                if not video_url and settings.KLING_ACCESS_KEY:
                    try:
                        async def generate_with_kling():
                            job_id = await _submit_kling_job(chapter.url_image, chapter.video_prompt or "Gentle motion")
                            return await _poll_kling_job(job_id) if job_id else None
                        video_url = await _retry_with_backoff(generate_with_kling, max_retries=2, base_delay=10.0, operation_name=f"Kling chapter {chapter.chapter_number}")
                    except Exception as e: last_error = e

                if not video_url and settings.PIKA_API_KEY:
                    try:
                        async def generate_with_pika():
                            return await _generate_video_pika(chapter.url_image, chapter.video_prompt or "Gentle motion")
                        video_url = await _retry_with_backoff(generate_with_pika, max_retries=2, base_delay=10.0, operation_name=f"Pika chapter {chapter.chapter_number}")
                    except Exception as e: last_error = e

                if not video_url and settings.SILICONFLOW_API_KEY:
                    try:
                        async def generate_with_siliconflow():
                            job_id = await _submit_siliconflow_job(chapter.url_image, chapter.video_prompt or "Gentle motion")
                            return await _poll_siliconflow_job(job_id) if job_id else None
                        video_url = await _retry_with_backoff(generate_with_siliconflow, max_retries=2, base_delay=8.0, operation_name=f"SiliconFlow chapter {chapter.chapter_number}")
                    except Exception as e: last_error = e

                if not video_url and settings.LUMA_API_KEY:
                    try:
                        async def generate_with_luma():
                            job_id = await _submit_luma_job(chapter.url_image, chapter.video_prompt or "Gentle motion")
                            return await _poll_luma_job(job_id) if job_id else None
                        video_url = await _retry_with_backoff(generate_with_luma, max_retries=2, base_delay=10.0, operation_name=f"Luma chapter {chapter.chapter_number}")
                    except Exception as e: last_error = e

                if not video_url and settings.RUNWAY_API_KEY:
                    try:
                        async def generate_with_runway():
                            return await _submit_runway_job(chapter.url_image, chapter.video_prompt or "Gentle motion")
                        video_url = await _retry_with_backoff(generate_with_runway, max_retries=2, base_delay=15.0, operation_name=f"Runway chapter {chapter.chapter_number}")
                    except Exception as e: last_error = e

                if video_url:
                    # Download silent video
                    local_ai_video = await _download_asset(video_url, ".mp4")
                    if local_ai_video:
                        # Mux it with audio
                        with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as tmp_mux:
                            mux_path = tmp_mux.name
                        success = await _mux_video_and_audio(local_ai_video, local_audio_path, mux_path)
                        if success:
                            local_muxed_path = mux_path
                        if not local_ai_video.startswith(str(Path(__file__).parent.parent.parent.parent / "storage")):
                            os.remove(local_ai_video)

            if local_muxed_path:
                chapter_video_files.append(local_muxed_path)
                chapter.video_status = "done"
            else:
                chapter.video_status = "failed"
                logger.error(f"Failed to generate/mux video for chapter {chapter.chapter_number}")

        except Exception as e:
            logger.error(f"Failed to generate video for chapter {chapter.chapter_number}: {e}")
            chapter.video_status = "failed"
            
        finally:
            if local_audio_path and not local_audio_path.startswith(str(Path(__file__).parent.parent.parent.parent / "storage")):
                try: os.remove(local_audio_path)
                except: pass

        await session.commit()

    # Step 4: Concat all chapters
    all_done = all(ch.video_status in ("done", "skipped") for ch in chapters)
    if not chapter_video_files:
        logger.error("No chapter videos generated.")
        story.video_status = "failed"
        await session.commit()
        return

    try:
        import subprocess
        # Create concat file
        with tempfile.NamedTemporaryFile(mode="w", suffix=".txt", delete=False) as f:
            for vid in chapter_video_files:
                f.write(f"file '{vid}'\\n")
            concat_list_path = f.name
            
        with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as f:
            final_story_path = f.name

        cmd = [
            "ffmpeg", "-y", "-f", "concat", "-safe", "0",
            "-i", concat_list_path,
            "-c", "copy",
            final_story_path
        ]
        
        logger.info(f"Concatenating story {story_id}: {' '.join(cmd)}")
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
        if res.returncode != 0:
            logger.error(f"FFmpeg concat failed: {res.stderr}")
            story.video_status = "failed"
        else:
            with open(final_story_path, "rb") as f:
                video_bytes = f.read()
            
            file_path = f"stories/{story_id}/final_story.mp4"
            storage_url = await upload_to_storage(video_bytes, file_path, "video/mp4")
            
            story.url_video = storage_url
            story.video_status = "done"
            story.video_generated = True
            
        os.remove(concat_list_path)
        os.remove(final_story_path)
        
    except Exception as e:
        logger.error(f"Story video concatenation failed: {e}")
        story.video_status = "failed"
    finally:
        for vid in chapter_video_files:
            try: os.remove(vid)
            except: pass
            
    await session.commit()
"""

# Replace in content using regex to find generate_video_for_story
start_idx = content.find("async def generate_video_for_story")
end_idx = content.find("async def _submit_luma_job")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + helpers + "\n" + new_generate + "\n\n" + content[end_idx:]
    with open("app/services/video_generation.py", "w") as f:
        f.write(new_content)
    print("Successfully replaced generate_video_for_story")
else:
    print("Could not find boundaries")
