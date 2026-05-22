import logging
from typing import Tuple, Optional
import google.generativeai as genai
from app.core.config import settings
from app.application.interfaces.ai_port import LLMPort

logger = logging.getLogger(__name__)

class GeminiAdapter(LLMPort):
    def __init__(self):
        if not settings.GOOGLE_STUDIO_API_KEY:
            raise ValueError("GOOGLE_STUDIO_API_KEY not configured")
        genai.configure(api_key=settings.GOOGLE_STUDIO_API_KEY)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def process_chat(self, user_text: str, history: list) -> Tuple[str, Optional[str], str]:
        try:
            # Convert history to Gemini format
            contents = []
            for h in history:
                role = "user" if h["role"] == "user" else "model"
                contents.append({"role": role, "parts": [{"text": h["content"]}]})
            
            contents.append({"role": "user", "parts": [{"text": user_text}]})
            
            response = self.model.generate_content(contents)
            text = response.text
            
            # Simple emotion extraction
            emotion = "neutral"
            if "😊" in text or "feliz" in text.lower(): emotion = "happy"
            elif "😔" in text or "triste" in text.lower(): emotion = "sad"
            
            return text, None, emotion
        except Exception as e:
            logger.error(f"Gemini error: {e}")
            return "Error en el motor Gemini: " + str(e), None, "sad"
