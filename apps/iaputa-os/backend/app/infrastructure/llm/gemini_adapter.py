import logging
from typing import Tuple, Optional
from google import genai
from google.genai import types
from app.core.config import settings
from app.application.interfaces.ai_port import LLMPort

logger = logging.getLogger(__name__)

class GeminiAdapter(LLMPort):
    def __init__(self):
        if not settings.GOOGLE_STUDIO_API_KEY:
            raise ValueError("GOOGLE_STUDIO_API_KEY not configured")
        self.client = genai.Client(api_key=settings.GOOGLE_STUDIO_API_KEY)

    async def process_chat(self, user_text: str, history: list) -> Tuple[str, Optional[str], str]:
        try:
            contents = []
            for h in history:
                role = "user" if h["role"] == "user" else "model"
                contents.append({"role": role, "parts": [{"text": h["content"]}]})
            
            contents.append({"role": "user", "parts": [{"text": user_text}]})
            
            response = self.client.models.generate_content(
                model='gemini-3.1-flash-lite',
                contents=contents
            )
            text = response.text
            
            # Simple emotion extraction
            emotion = "neutral"
            if "😊" in text or "feliz" in text.lower(): emotion = "happy"
            elif "😔" in text or "triste" in text.lower(): emotion = "sad"
            
            return text, None, emotion
        except Exception as e:
            logger.error(f"Gemini error: {e}")
            return "Error en el motor Gemini: " + str(e), None, "sad"
