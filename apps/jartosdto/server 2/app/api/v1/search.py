"""
JartosDTo — Web Search Endpoint.

Exposes Tavily/SearxNG web search for the frontend.
"""

from typing import Annotated

from fastapi import APIRouter, Depends

from app.core.search.tavily import search_web
from app.dependencies import get_current_user
from app.models import User
from app.schemas import SearchRequest

router = APIRouter()


@router.post("/web")
async def web_search(
    body: SearchRequest,
    user: Annotated[User, Depends(get_current_user)],
):
    """Perform a web search and return results."""
    results = await search_web(body.query, max_results=body.max_results)
    return {"query": body.query, "results": results}
