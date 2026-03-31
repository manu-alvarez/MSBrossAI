# Stage 1: Builder
FROM python:3.11-slim as builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Stage 2: Final Image
FROM python:3.11-slim

WORKDIR /app

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy installed packages from builder
COPY --from=builder /root/.local /root/.local
COPY --from=builder /app/requirements.txt .

# Copy only the application code
COPY server/ ./server/
COPY agent/ ./agent/

# Create required directories
RUN mkdir -p data logs

# Environment setup
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Expose server port
EXPOSE 8000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8000/api/health || exit 1

# Default command - run both server and agent
CMD ["sh", "-c", "python server/main.py & python agent/agent.py start"]
