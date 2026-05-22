import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

/**
 * Get or initialize the Supabase client (lazy).
 * Ensures env vars are checked at runtime, not build time.
 */
export function getClient(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

    if (!url || !key) {
      throw new Error(
        'Supabase env vars not configured. ' +
        'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
      );
    }

    _supabase = createClient(url, key, {
      auth: { persistSession: true, autoRefreshToken: true },
    });
  }
  return _supabase;
}

/**
 * Generic fetch wrapper with error handling.
 */
export async function supabaseFetch<T>(
  query: Promise<{ data: T | null; error: unknown }>
): Promise<T> {
  const { data, error } = await query;
  if (error) {
    console.error('[Supabase Error]', error);
    throw new Error(
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message: string }).message
        : 'Database query failed'
    );
  }
  if (!data) {
    throw new Error('No data returned from query');
  }
  return data;
}

/**
 * Check if Supabase is configured.
 */
export function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
