"""
JartosDTo — Tavily Web Search Integration.

Real-time web search for RAG augmentation (Perplexity-style).
"""

from typing import Optional

import httpx

from app.config import get_settings

settings = get_settings()


async def search_web(
    query: str,
    max_results: int = 5,
    search_depth: str = "advanced",
) -> list[dict]:
    """
    Search the web using Tavily API.

    Args:
        query: Search query string
        max_results: Maximum number of results
        search_depth: 'basic' or 'advanced'

    Returns:
        List of search results with title, url, content, score
    """
    if not settings.tavily_api_key:
        return await _fallback_searxng(query, max_results)

    async with httpx.AsyncClient(timeout=15.0) as client:
        try:
            response = await client.post(
                "https://api.tavily.com/search",
                json={
                    "api_key": settings.tavily_api_key,
                    "query": query,
                    "max_results": max_results,
                    "search_depth": search_depth,
                    "include_raw_content": False,
                    "include_answer": True,
                },
            )
            response.raise_for_status()
            data = response.json()

            results = []
            for item in data.get("results", []):
                results.append({
                    "title": item.get("title", ""),
                    "url": item.get("url", ""),
                    "content": item.get("content", ""),
                    "score": item.get("score", 0.0),
                })
            return results

        except Exception as e:
            print(f"Tavily search error: {e}, falling back to SearxNG")
            return await _fallback_searxng(query, max_results)


async def _fallback_searxng(query: str, max_results: int = 5) -> list[dict]:
    """Fallback to self-hosted SearxNG if Tavily is unavailable."""
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(
                f"{settings.searxng_base_url}/search",
                params={
                    "q": query,
                    "format": "json",
                    "pageno": 1,
                    "categories": "general",
                },
            )
            response.raise_for_status()
            data = response.json()

            results = []
            for item in data.get("results", [])[:max_results]:
                results.append({
                    "title": item.get("title", ""),
                    "url": item.get("url", ""),
                    "content": item.get("content", ""),
                    "score": 0.5,
                })
            return results
    except Exception as e:
        print(f"SearxNG search error: {e}")
        return []
