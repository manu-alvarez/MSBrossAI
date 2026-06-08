import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getServerSession } from "next-auth/next";
import { DiagnosticReport } from "@/types/domain";

// The client will be initialized dynamically per request

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { diagnosticReport, apiKey } = body as { diagnosticReport: DiagnosticReport, apiKey?: string };

    // Si el cliente envía apiKey, úsala; si no, usa la de entorno
    const ai = new GoogleGenAI(apiKey ? { apiKey } : {});

    if (!diagnosticReport || !diagnosticReport.weakAreas) {
      return NextResponse.json({ error: "Invalid diagnostic report provided" }, { status: 400 });
    }

    const weakAreasList = diagnosticReport.weakAreas
      .map((w) => `- ${w.areaName} (Severidad: ${w.severity}): ${w.justification}`)
      .join("\n");

    const prompt = `Eres un entrenador personal de élite y nutricionista experto (IA).
Basándote en el siguiente reporte de debilidades de un usuario:
${weakAreasList}

Genera un plan de acción de 7 días enfocado en corregir estas áreas específicas.
El plan debe incluir:
1. Una rutina de ejercicios sugerida (3-4 días a la semana).
2. Un plan de comidas (macros generales y 3 recetas sugeridas ricas en proteínas).
3. 2 hábitos de recuperación obligatorios.

Formato requerido: Markdown limpio y profesional.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return NextResponse.json({ 
        success: true, 
        aiPlan: response.text 
    });

  } catch (error: any) {
    console.error("Error generating AI plan:", error);
    
    // Si la API key no está configurada
    if (error.message?.includes("API key not valid") || error.message?.includes("not found")) {
         return NextResponse.json(
            { error: "GEMINI_API_KEY no está configurada o es inválida en el servidor." },
            { status: 500 }
        );
    }
    
    return NextResponse.json(
      { error: "Failed to generate AI plan", details: error.message },
      { status: 500 }
    );
  }
}
