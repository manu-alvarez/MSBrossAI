import { getClient } from '@/lib/supabase-client';
import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * Base service that provides the Supabase client instance.
 * All domain services extend this pattern.
 */
export function getDb(): SupabaseClient {
  return getClient();
}

/**
 * Generic error handler for database operations.
 */
export function handleDbError(err: unknown): never {
  const message = err instanceof Error ? err.message : 'Database operation failed';
  console.error('[DB Service Error]', message);
  throw new Error(message);
}
