"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Sparkles, Key, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAssessmentStore } from "@/store/assessment-store";
import { APP_NAME } from "@/utils/constants";

export default function AINutritionPage() {
  const router = useRouter();
  const report = useAssessmentStore((s) => s.report);
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [aiPlan, setAiPlan] = useState("");

  useEffect(() => {
    // Load saved API key from localStorage if it exists
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSaveKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setApiKey(val);
    localStorage.setItem("gemini_api_key", val);
  };

  const generatePlan = async () => {
    if (!report) {
      setError("No hay diagnóstico previo. Por favor vuelve al inicio y realiza la evaluación.");
      return;
    }

    if (!apiKey.trim()) {
      setError("Necesitas introducir tu API Key privada de Gemini para continuar.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          diagnosticReport: report,
          apiKey: apiKey.trim() 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al contactar con la Inteligencia Artificial.");
      }

      setAiPlan(data.aiPlan);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-surface-50 pb-24">
      <header className="bg-white/80 backdrop-blur-xl border-b border-surface-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-surface-500 hover:text-surface-700 p-2 -ml-2 rounded-full hover:bg-surface-100 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-surface-900 tracking-tight">Nutrición IA ✨</span>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-8">
        {!aiPlan ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-surface-900 tracking-tight mb-3">
                Tu Nutricionista y Entrenador de Bolsillo
              </h1>
              <p className="text-surface-600">
                Usa el poder de Google Gemini para cruzar tus métricas biométricas y debilidades identificadas, generando el plan de nutrición y ejercicio perfecto en segundos.
              </p>
            </div>

            <Card className="p-6 mb-8 border-brand-200 bg-white/50 backdrop-blur-sm shadow-xl shadow-brand-500/5">
              <div className="flex items-center gap-3 mb-4 text-brand-700 font-bold">
                <Key className="w-5 h-5" />
                <h3>Integra tu clave privada (Gemini API)</h3>
              </div>
              <p className="text-sm text-surface-500 mb-6">
                Por seguridad y privacidad extrema, tu API Key de Google AI Studio solo se guarda localmente en tu dispositivo. Nunca se subirá a ninguna base de datos.
              </p>
              
              <div className="space-y-4">
                <div>
                  <input 
                    type="password" 
                    value={apiKey}
                    onChange={handleSaveKey}
                    placeholder="Pega aquí tu GEMINI_API_KEY..."
                    className="w-full px-4 py-3 rounded-xl border border-surface-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all font-mono text-sm"
                  />
                  <div className="mt-2 text-xs text-surface-400">
                    ¿No tienes una? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">Consíguela gratis aquí.</a>
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                <Button 
                  className="w-full h-12 rounded-xl text-base shadow-lg shadow-brand-500/25 relative overflow-hidden group"
                  onClick={generatePlan}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Generando Magia...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Generar Plan Personalizado
                    </span>
                  )}
                  {/* Glossy hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-surface-900 tracking-tight">Tu Plan Generado</h2>
                <Button variant="outline" size="sm" onClick={() => setAiPlan("")} className="rounded-full">
                    <RefreshCw className="w-4 h-4 mr-2" /> Nuevo
                </Button>
             </div>
             <Card className="p-6 md:p-8 bg-white border-surface-200 shadow-xl shadow-surface-900/5 prose prose-brand prose-headings:font-extrabold prose-h1:text-2xl prose-h2:text-xl prose-p:text-surface-600 max-w-none">
                <ReactMarkdown>{aiPlan}</ReactMarkdown>
             </Card>
          </div>
        )}
      </div>
    </main>
  );
}
