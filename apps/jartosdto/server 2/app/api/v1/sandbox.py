"""
JartosDTo — Code Sandbox Endpoint.

Execute code in a sandboxed environment.
"""

from typing import Annotated

from fastapi import APIRouter, Depends

from app.core.sandbox.executor import execute_code
from app.dependencies import get_current_user
from app.models import User
from app.schemas import SandboxRequest

router = APIRouter()


@router.post("/execute")
async def run_code(
    body: SandboxRequest,
    user: Annotated[User, Depends(get_current_user)],
):
    """Execute code in a sandboxed environment and return output."""
    result = await execute_code(
        code=body.code,
        language=body.language,
        timeout=body.timeout,
    )
    return result
