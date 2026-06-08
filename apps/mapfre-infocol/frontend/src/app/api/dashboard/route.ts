import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    stats: [
      { label: "Expedientes Hoy", value: "12", change: "+24%", trend: "up" },
      { label: "Procesados", value: "11", change: "91.7%", trend: "up" },
      { label: "Tiempo Medio", value: "1m 24s", change: "-32%", trend: "down" },
      { label: "Errores IA", value: "0", change: "0%", trend: "neutral" },
    ],
    recentExpedientes: [
      { id: "V67391281", description: "Fuga de agua en tubería del baño", status: "Completado", code: "YYDDDYT + XADDD2T", cost: "117.50 €", duration: "12 min" },
      { id: "V67391291", description: "Rotura de tubería en cocina", status: "Completado", code: "YYDDDYT + XADDD1T", cost: "85.00 €", duration: "8 min" },
      { id: "V67391301", description: "Cambio de grifo monomando", status: "Pendiente", code: "JEDDD1T", cost: "70.00 €", duration: "—" },
    ],
    tarifaDistribution: [
      { code: "YYDDDYT + XADDD2T", name: "Exclusión con cala", count: 4, pct: 36, amount: "170.00 €" },
      { code: "YYDDDYT + XADDD1T", name: "Exclusión sin cala", count: 3, pct: 27, amount: "97.50 €" },
      { code: "JEDDD1T", name: "Sustitución grifería", count: 2, pct: 18, amount: "70.00 €" },
      { code: "FADDD8T", name: "Desplazamiento >20km", count: 2, pct: 18, amount: "15.00 €" },
    ],
    aiConfidence: 97,
    aiTokens: "9.2k",
    aiLatency: "0.4s",
  });
}
