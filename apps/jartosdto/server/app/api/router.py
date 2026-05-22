"""
JartosDTo — Root API Router.

Aggregates all v1 endpoint routers.
"""

from fastapi import APIRouter

from app.api.v1 import auth, chat, models, conversations, agents, documents, search, sandbox, admin

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(chat.router, prefix="/chat", tags=["Chat"])
api_router.include_router(models.router, prefix="/models", tags=["Models"])
api_router.include_router(conversations.router, prefix="/conversations", tags=["Conversations"])
api_router.include_router(agents.router, prefix="/agents", tags=["Agents"])
api_router.include_router(documents.router, prefix="/documents", tags=["Documents"])
api_router.include_router(search.router, prefix="/search", tags=["Search"])
api_router.include_router(sandbox.router, prefix="/sandbox", tags=["Sandbox"])
api_router.include_router(admin.router, prefix="/admin", tags=["Admin"])
