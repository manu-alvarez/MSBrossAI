import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getServerSession } from "next-auth/next";
import { DiagnosticReport } from "@/types/domain";

// Helper de telemetría a Nivel de Producción
function logTelemetry(action: string, status: number, error?: string) {
  const timestamp = new Date().toISOString();
  console.log(`[TELEMETRY][${timestamp}] action=${action} status=${status}${error ? ` error="${error}"` : ""}`);
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      logTelemetry("AI_GENERATE", 401, "Unauthorized");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { diagnosticReport } = body as { diagnosticReport: DiagnosticReport };

    // Usar la clave gratuita del servidor (Level 99)
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      logTelemetry("AI_GENERATE", 500, "Missing GEMINI_API_KEY in env");
      return NextResponse.json({ error: "El servidor no tiene configurada su API Key gratuita." }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    if (!diagnosticReport || !diagnosticReport.weakAreas) {
      logTelemetry("AI_GENERATE", 400, "Invalid diagnostic report");
      return NextResponse.json({ error: "Invalid diagnostic report provided" }, { status: 400 });
    }

    const weakAreasList = diagnosticReport.weakAreas
      .map((w) => `- ${w.areaName} (Severidad: ${w.severity}): ${w.justification}`)
      .join("\n");

    const prompt = `Actúa como el Nutricionista Clínico, Médico Deportivo y Preparador Físico de más alto nivel mundial.
Tu objetivo es realizar una "Ingeniería Metabólica" para el siguiente usuario basándote estrictamente en sus debilidades biométricas reales:
DEBILIDADES DETECTADAS:
${weakAreasList}

Genera un MACRO-CICLO de 7 días con un enfoque "Hyper-Deep" y precisión clínica.
Obligatorio incluir las siguientes 4 secciones con títulos Markdown (##):

## 1. Periodización Nutricional y Timing
- Define los Macros específicos (Proteína, CH, Grasas en % o g/kg) adaptados a sus debilidades.
- Timing de Nutrientes Perientrenamiento (Qué ingerir exactamente Pre, Intra y Post-entreno enfocándose en el índice glucémico y síntesis proteica).

## 2. Suplementación Clínica Basada en Evidencia
- Recomienda 3 suplementos exactos para paliar sus debilidades (Ej: Creatina Monohidrato 0.1g/kg, Omega-3 EPA/DHA > 2g, Ashwagandha KSM-66, etc.) con justificación científica.

## 3. Arquitectura del Ciclo de Entrenamiento
- Volumen, Frecuencia y RIR (Repetitions in Reserve) adaptado para no sobrecargar el Sistema Nervioso Central (SNC).
- Ejercicios biomecánicos clave para corregir las debilidades mencionadas.

## 4. Plan de Acción (Día a Día)
- Resumen ejecutivo de 7 días (Qué hacer, comer y entrenar cada día). Incluye 3 recetas élite ricas en leucina/proteína.

REGLA ESTRICTA: Formato Markdown pulido e hiperprofesional. Sin introducciones genéricas ni advertencias redundantes. Directo a la ciencia.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    logTelemetry("AI_GENERATE", 200);

    return NextResponse.json({ 
        success: true, 
        aiPlan: response.text 
    });

  } catch (error: any) {
    logTelemetry("AI_GENERATE", 500, error.message);
    
    if (error.message?.includes("API key not valid") || error.message?.includes("not found")) {
         return NextResponse.json(
            { error: "La GEMINI_API_KEY del servidor es inválida o expiró." },
            { status: 500 }
        );
    }
    
    return NextResponse.json(
      { error: "Failed to generate AI plan", details: error.message },
      { status: 500 }
    );
  }
}
