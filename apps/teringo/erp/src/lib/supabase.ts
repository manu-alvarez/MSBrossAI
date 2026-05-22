import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper to fetch with error handling
 */
export async function dbFetch<T>(query: Promise<{ data: T | null; error: any }>) {
  const { data, error } = await query;
  if (error) {
    console.error('Supabase Error:', error);
    throw error;
  }
  return data;
}
