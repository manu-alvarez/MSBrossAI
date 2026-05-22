import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function getApiBase(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
}

export interface StoryListItem {
  id: string;
  title: string;
  child_name: string;
  status: string;
  chapter_count: number;
  created_at: string;
}

export interface StoryListResponse {
  stories: StoryListItem[];
  total: number;
  page: number;
  page_size: number;
}

export async function listStories(
  page = 1,
  pageSize = 50
): Promise<StoryListResponse | null> {
  const apiBase = getApiBase();
  try {
    const res = await fetch(
      `${apiBase}/api/stories/?page=${page}&page_size=${pageSize}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchStory(storyId: string) {
  const apiBase = getApiBase();

  const res = await fetch(`${apiBase}/api/stories/${storyId}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export async function fetchStoryProgress(storyId: string) {
  const apiBase = getApiBase();

  const res = await fetch(`${apiBase}/api/stories/${storyId}/progress`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${getApiBase()}${url}`;
}
