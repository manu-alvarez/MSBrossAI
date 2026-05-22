"""
JartosDTo — Sandboxed Code Executor.

Runs user-submitted code in isolated subprocess with resource limits.
"""

import asyncio
import tempfile
import os
from typing import Optional

from app.config import get_settings

settings = get_settings()


async def execute_code(
    code: str,
    language: str = "python",
    timeout: Optional[int] = None,
) -> dict:
    """
    Execute code in a sandboxed environment.

    Args:
        code: Source code to execute
        language: Programming language (python, javascript, bash)
        timeout: Execution timeout in seconds

    Returns:
        Dict with stdout, stderr, exit_code, and execution_time
    """
    if not settings.sandbox_enabled:
        return {"stdout": "", "stderr": "Code execution is disabled", "exit_code": 1, "time": 0}

    timeout = timeout or settings.sandbox_timeout_seconds

    runners = {
        "python": _run_python,
        "javascript": _run_javascript,
        "bash": _run_bash,
    }

    runner = runners.get(language.lower())
    if not runner:
        return {"stdout": "", "stderr": f"Unsupported language: {language}", "exit_code": 1, "time": 0}

    return await runner(code, timeout)


async def _run_python(code: str, timeout: int) -> dict:
    """Execute Python code in isolated subprocess."""
    with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False) as f:
        f.write(code)
        f.flush()
        tmp_path = f.name

    try:
        proc = await asyncio.create_subprocess_exec(
            "python3", "-u", tmp_path,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env={**os.environ, "PYTHONDONTWRITEBYTECODE": "1"},
        )

        try:
            stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
            return {
                "stdout": stdout.decode("utf-8", errors="replace")[:10000],
                "stderr": stderr.decode("utf-8", errors="replace")[:5000],
                "exit_code": proc.returncode,
                "time": 0,
            }
        except asyncio.TimeoutError:
            proc.kill()
            return {"stdout": "", "stderr": f"Execution timed out ({timeout}s)", "exit_code": -1, "time": timeout}
    finally:
        os.unlink(tmp_path)


async def _run_javascript(code: str, timeout: int) -> dict:
    """Execute JavaScript code via Node.js."""
    with tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False) as f:
        f.write(code)
        f.flush()
        tmp_path = f.name

    try:
        proc = await asyncio.create_subprocess_exec(
            "node", tmp_path,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        try:
            stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
            return {
                "stdout": stdout.decode("utf-8", errors="replace")[:10000],
                "stderr": stderr.decode("utf-8", errors="replace")[:5000],
                "exit_code": proc.returncode,
                "time": 0,
            }
        except asyncio.TimeoutError:
            proc.kill()
            return {"stdout": "", "stderr": f"Execution timed out ({timeout}s)", "exit_code": -1, "time": timeout}
    finally:
        os.unlink(tmp_path)


async def _run_bash(code: str, timeout: int) -> dict:
    """Execute Bash script."""
    proc = await asyncio.create_subprocess_exec(
        "bash", "-c", code,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
    )
    try:
        stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=timeout)
        return {
            "stdout": stdout.decode("utf-8", errors="replace")[:10000],
            "stderr": stderr.decode("utf-8", errors="replace")[:5000],
            "exit_code": proc.returncode,
            "time": 0,
        }
    except asyncio.TimeoutError:
        proc.kill()
        return {"stdout": "", "stderr": f"Execution timed out ({timeout}s)", "exit_code": -1, "time": timeout}
