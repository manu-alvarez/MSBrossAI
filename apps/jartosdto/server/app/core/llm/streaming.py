"""
JartosDTo — SSE Streaming Handler.

Converts LLM token streams into Server-Sent Events for real-time UI updates.
"""

import json
from typing import AsyncGenerator

from sse_starlette.sse import EventSourceResponse
from starlette.requests import Request


async def create_sse_response(
    token_stream: AsyncGenerator[str, None],
    request: Request | None = None,
) -> EventSourceResponse:
    """
    Wrap a token stream into an SSE response.

    Args:
        token_stream: Async generator yielding JSON-encoded token chunks
        request: Optional Starlette request for client disconnect detection

    Returns:
        EventSourceResponse for streaming to the client
    """

    async def event_generator():
        try:
            async for chunk in token_stream:
                if request and await request.is_disconnected():
                    break
                yield {"event": "message", "data": chunk}
        except Exception as e:
            yield {
                "event": "error",
                "data": json.dumps({"type": "error", "content": str(e)}),
            }
        finally:
            yield {"event": "done", "data": json.dumps({"type": "done"})}

    return EventSourceResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )
