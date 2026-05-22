"use client";

import { Suspense } from "react";
import StoryPlayer from "@/components/StoryPlayer";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function StoryDetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const [storyData, setStoryData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError(true);
      return;
    }
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
    fetch(`${apiBase}/api/stories/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setStoryData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white p-3 md:p-6 flex items-center justify-center">
        <p className="text-purple-300">Cargando cuento...</p>
      </main>
    );
  }

  if (error || !storyData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white p-3 md:p-6 flex flex-col items-center justify-center">
        <p className="text-red-400 mb-4">No se pudo cargar el cuento.</p>
        <button onClick={() => router.push("/")} className="text-purple-300 hover:underline">Volver al inicio</button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white p-3 md:p-6">
      <div className="mb-4">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200 transition"
        >
          ← Volver al inicio
        </a>
      </div>
      <StoryPlayer story={storyData} chapters={storyData.chapters || []} />
    </main>
  );
}

export default function StoryDetailPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white p-3 md:p-6 flex items-center justify-center">
        <p className="text-purple-300">Cargando...</p>
      </main>
    }>
      <StoryDetailContent />
    </Suspense>
  );
}
