import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables. Check your .env file.')
}

// Supabase client for normal operations - with safe fallback
export const supabase: SupabaseClient | any = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }) }) }),
        select: () => ({ order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }) })
      })
    };

// Database types
export interface SearchQuery {
  id?: number
  origin: string
  destination: string
  transport_mode: 'mar' | 'aire' | 'tierra'
  results?: Record<string, unknown>
  created_at?: string
}

export interface RFQ {
  id?: number
  search_query_id: number
  origin: string
  destination: string
  transport_mode: string
  cargo_details: string
  status: 'pending' | 'sent' | 'replied'
  created_at?: string
}

// Save search to Supabase
export async function saveSearch(query: SearchQuery): Promise<SearchQuery | null> {
  try {
    const { data, error } = await supabase
      .from('searches')
      .insert([{
        origin: query.origin,
        destination: query.destination,
        transport_mode: query.transport_mode,
        results: query.results,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return null
    }
    return data
  } catch (err) {
    console.error('Error saving search:', err)
    return null
  }
}

// Get search history
export async function getSearchHistory(): Promise<SearchQuery[]> {
  try {
    const { data, error } = await supabase
      .from('searches')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Error fetching search history:', err)
    return []
  }
}

// Save RFQ
export async function saveRFQ(rfq: Omit<RFQ, 'id' | 'created_at'>): Promise<RFQ | null> {
  try {
    const { data, error } = await supabase
      .from('rfqs')
      .insert([{
        search_query_id: rfq.search_query_id,
        origin: rfq.origin,
        destination: rfq.destination,
        transport_mode: rfq.transport_mode,
        cargo_details: rfq.cargo_details,
        status: rfq.status,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single()

    if (error) {
      console.error('Error saving RFQ:', error)
      return null
    }
    return data
  } catch (err) {
    console.error('Error in saveRFQ:', err)
    return null
  }
}

// API keys from environment variables
// Note: Gemini keys are managed by aiProvider.ts (rotation + fallback)
export const TAVILY_API_KEY = import.meta.env.VITE_TAVILY_API_KEY || ''
