from app.domain.entities import AIResponse
from app.application.interfaces.ai_port import AudioPort
from app.application.use_cases.memory_service import save_message, get_recent_history

class ChatUseCase:
    def __init__(self, audio_adapter: AudioPort = None):
        self.audio = audio_adapter
        
    async def execute_text(self, text: str) -> AIResponse:
        # 1. Recuperar contexto reciente
        history = get_recent_history(limit=8)
        
        # 2. Orquestar respuesta (incluye RAG semántico)
        
        # 3. Guardar en memoria (ahora guarda en Sqlite + VectorDB vía memory_service)
        save_message("user", text)
        save_message("assistant", final_text)
        
        audio_url = None
        if self.audio:
            audio_url = await self.audio.generate_speech(final_text)
            
        save_message("assistant", final_text)
        
        return AIResponse(
            transcript=text,
            response=final_text,
            audio_url=audio_url,
            vision_url=v_url,
            emotion=emotion
        )

    async def execute_voice(self, audio_path: str) -> AIResponse:
        if not self.audio:
            raise ValueError("Audio adapter not provided.")
            
        ts = await self.audio.transcribe(audio_path)
        return await self.execute_text(ts)

    async def execute_voice_bytes(self, audio_bytes: bytes, filename: str) -> AIResponse:
        if not self.audio:
            raise ValueError("Audio adapter not provided.")
            
        ts = await self.audio.transcribe_bytes(audio_bytes, filename)
        return await self.execute_text(ts)
