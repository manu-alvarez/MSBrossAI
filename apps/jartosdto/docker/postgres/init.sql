-- ═══════════════════════════════════════════════════════
-- JartosDTo — PostgreSQL Initialization
-- Enables pgvector and creates base schemas
-- ═══════════════════════════════════════════════════════

-- Enable vector extension
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Verify extensions
SELECT extname, extversion FROM pg_extension WHERE extname IN ('vector', 'uuid-ossp');
