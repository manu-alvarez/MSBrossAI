import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: "V67391281", description: "Fuga de agua en tubería del baño - Reparación urgente", notes: "Piso 3° · Humedad en pared medianera", status: "Completado", locality: "Lardero", time: "12 min", codes: ["YYDDDYT", "XADDD2T"], displacement: "4.5 km", material: "45.00 €", cost: "117.50 €" },
    { id: "V67391291", description: "Rotura de tubería en cocina - Sustitución tramo", notes: "Bajo comercial · Acceso limitado", status: "Completado", locality: "Logroño", time: "35 min", codes: ["YYDDDYT", "XADDD1T"], displacement: "0 km", material: "120.00 €", cost: "85.00 €" },
    { id: "V67391301", description: "Cambio de grifo monomando lavabo", notes: "Cliente mayor · Revisión general", status: "Pendiente", locality: "Navarrete", time: "1h", codes: ["JEDDD1T"], displacement: "12 km", material: "35.00 €", cost: "70.00 €" },
    { id: "V67391311", description: "Reparación de cisterna - Sustitución mecanismo", notes: "Avería recurrente", status: "En Proceso", locality: "Logroño", time: "2h", codes: ["VBDDD1T"], displacement: "0 km", material: "25.00 €", cost: "50.00 €" },
    { id: "V67391321", description: "Desatasco fregadero cocina", notes: "Acumulación de grasa", status: "Pendiente", locality: "Alberite", time: "3h", codes: ["XADDD1T"], displacement: "8.5 km", material: "0.00 €", cost: "42.50 €" },
  ]);
}
