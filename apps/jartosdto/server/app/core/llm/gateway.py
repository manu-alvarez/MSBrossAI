"""
JartosDTo — LiteLLM Multi-Model Gateway.

Unified interface to 100+ LLM providers through LiteLLM.
Supports OpenAI, Anthropic, Google, Ollama, vLLM, LM Studio, and more.
"""

import json
import os
from typing import AsyncGenerator, Optional

import litellm
from litellm import acompletion

from app.config import get_settings

settings = get_settings()

# Configure LiteLLM
litellm.drop_params = True
litellm.set_verbose = settings.debug


# ── Provider Model Mapping ───────────────────────────────
# Maps display model IDs to LiteLLM-compatible model strings
PROVIDER_MAP = {
    # OpenAI
    "gpt-4o": "gpt-4o",
    "gpt-4o-mini": "gpt-4o-mini",
    "gpt-4-turbo": "gpt-4-turbo",
    "o1": "o1",
    "o1-mini": "o1-mini",
    "o3-mini": "o3-mini",
    # Anthropic
    "claude-4-opus": "anthropic/claude-4-opus-20250514",
    "claude-4-sonnet": "anthropic/claude-4-sonnet-20250514",
    "claude-3.5-sonnet": "anthropic/claude-3-5-sonnet-20241022",
    "claude-3.5-haiku": "anthropic/claude-3-5-haiku-20241022",
    # Google Gemini
    "gemini-2.5-pro": "gemini/gemini-2.5-pro-preview-05-06",
    "gemini-2.5-flash": "gemini/gemini-2.5-flash-preview-04-17",
    "gemini-2.0-flash": "gemini/gemini-2.0-flash",
    # Mistral
    "mistral-large": "mistral/mistral-large-latest",
    "mistral-medium": "mistral/mistral-medium-latest",
    "codestral": "mistral/codestral-latest",
    # Ollama (local)
    "ollama/llama3.3": "ollama/llama3.3",
    "ollama/qwen2.5": "ollama/qwen2.5",
    "ollama/deepseek-r1": "ollama/deepseek-r1",
    "ollama/mistral": "ollama/mistral",
    "ollama/codellama": "ollama/codellama",
    "ollama/gemma2": "ollama/gemma2",
    # vLLM
    "vllm/deepseek-r1": "openai/deepseek-r1",
}

# Models that support Chain-of-Thought / thinking
THINKING_MODELS = {
    "o1", "o1-mini", "o3-mini",
    "claude-4-opus", "claude-4-sonnet",
    "gemini-2.5-pro", "gemini-2.5-flash",
    "ollama/deepseek-r1", "vllm/deepseek-r1",
}

# Models that support vision
VISION_MODELS = {
    "gpt-4o", "gpt-4o-mini", "gpt-4-turbo",
    "claude-4-opus", "claude-4-sonnet", "claude-3.5-sonnet",
    "gemini-2.5-pro", "gemini-2.5-flash", "gemini-2.0-flash",
}


def _resolve_model(model_id: str) -> str:
    """Resolve a display model ID to its LiteLLM-compatible string."""
    return PROVIDER_MAP.get(model_id, model_id)


def _set_provider_keys():
    """Inject API keys from settings into environment for LiteLLM."""
    if settings.openai_api_key:
        os.environ["OPENAI_API_KEY"] = settings.openai_api_key
    if settings.anthropic_api_key:
        os.environ["ANTHROPIC_API_KEY"] = settings.anthropic_api_key
    if settings.google_api_key:
        os.environ["GEMINI_API_KEY"] = settings.google_api_key
    if settings.mistral_api_key:
        os.environ["MISTRAL_API_KEY"] = settings.mistral_api_key


_set_provider_keys()


async def chat_completion(
    model: str,
    messages: list[dict],
    *,
    temperature: float = 0.7,
    top_p: float = 1.0,
    max_tokens: int = 4096,
    frequency_penalty: float = 0.0,
    presence_penalty: float = 0.0,
    stream: bool = True,
) -> AsyncGenerator[dict, None] | dict:
    """
    Execute a chat completion against any supported model.

    Args:
        model: Model identifier (e.g., 'gpt-4o', 'claude-4-sonnet', 'ollama/llama3.3')
        messages: List of message dicts with 'role' and 'content'
        temperature: Sampling temperature
        top_p: Nucleus sampling parameter
        max_tokens: Maximum tokens in response
        frequency_penalty: Frequency penalty
        presence_penalty: Presence penalty
        stream: Whether to stream the response

    Yields:
        Token chunks (streaming) or returns complete response (non-streaming).
    """
    resolved_model = _resolve_model(model)

    # Build kwargs
    kwargs = {
        "model": resolved_model,
        "messages": messages,
        "temperature": temperature,
        "top_p": top_p,
        "max_tokens": max_tokens,
        "stream": stream,
    }

    # Some providers don't support these params
    if frequency_penalty != 0.0:
        kwargs["frequency_penalty"] = frequency_penalty
    if presence_penalty != 0.0:
        kwargs["presence_penalty"] = presence_penalty

    # Set Ollama base URL if needed
    if model.startswith("ollama/"):
        kwargs["api_base"] = settings.ollama_base_url

    # Set vLLM base URL if needed
    if model.startswith("vllm/"):
        kwargs["api_base"] = settings.vllm_base_url

    if stream:
        response = await acompletion(**kwargs)
        return response
    else:
        response = await acompletion(**kwargs)
        return response


async def stream_chat_tokens(
    model: str,
    messages: list[dict],
    **kwargs,
) -> AsyncGenerator[str, None]:
    """
    Stream chat completion tokens as SSE-compatible strings.

    Yields JSON-encoded chunks compatible with OpenAI streaming format.
    """
    resolved_model = _resolve_model(model)

    completion_kwargs = {
        "model": resolved_model,
        "messages": messages,
        "temperature": kwargs.get("temperature", 0.7),
        "top_p": kwargs.get("top_p", 1.0),
        "max_tokens": kwargs.get("max_tokens", 4096),
        "stream": True,
    }

    if model.startswith("ollama/"):
        completion_kwargs["api_base"] = settings.ollama_base_url

    response = await acompletion(**completion_kwargs)

    async for chunk in response:
        delta = chunk.choices[0].delta if chunk.choices else None
        if delta and delta.content:
            yield json.dumps({
                "type": "text",
                "content": delta.content,
            })

        # Handle thinking/reasoning tokens (DeepSeek, o1, Claude)
        if delta and hasattr(delta, "reasoning_content") and delta.reasoning_content:
            yield json.dumps({
                "type": "thinking",
                "content": delta.reasoning_content,
            })

    # Final usage chunk
    if hasattr(chunk, "usage") and chunk.usage:
        yield json.dumps({
            "type": "usage",
            "tokens_input": chunk.usage.prompt_tokens,
            "tokens_output": chunk.usage.completion_tokens,
        })

    yield json.dumps({"type": "done"})


def get_available_models() -> list[dict]:
    """Return list of all configured and available models."""
    models = []
    for model_id, litellm_id in PROVIDER_MAP.items():
        provider = model_id.split("/")[0] if "/" in model_id else _infer_provider(model_id)
        models.append({
            "id": model_id,
            "provider": provider,
            "display_name": model_id.replace("/", " — ").replace("-", " ").title(),
            "is_vision": model_id in VISION_MODELS,
            "is_thinking": model_id in THINKING_MODELS,
        })
    return models


def _infer_provider(model_id: str) -> str:
    """Infer provider from model ID prefix."""
    if model_id.startswith("gpt") or model_id.startswith("o1") or model_id.startswith("o3"):
        return "openai"
    elif model_id.startswith("claude"):
        return "anthropic"
    elif model_id.startswith("gemini"):
        return "google"
    elif model_id.startswith("mistral") or model_id.startswith("codestral"):
        return "mistral"
    return "unknown"
