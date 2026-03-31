# Agent Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    ffmpeg \
    libsm6 \
    libxext6 \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY agent/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy agent code
COPY agent/ ./agent/

# Create required directories
RUN mkdir -p logs

# Environment setup
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Expose no ports (agent connects out)
EXPOSE 

# Healthcheck (agent doesn't have HTTP endpoint, so we check if process is running)
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD pgrep -f "agent.py" > /dev/null || exit 1

# Default command
CMD ["python", "agent/agent.py", "start"]