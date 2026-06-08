import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const sessionToken = await getServerSession();
    if (!sessionToken?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const userId = sessionToken.user.id as string;
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { appState: true }
    });

    if (!profile || !profile.appState) {
      return NextResponse.json({ state: null });
    }

    return NextResponse.json({ state: JSON.parse(profile.appState) });
  } catch (err) {
    console.error("GET Sync Error:", err);
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const sessionToken = await getServerSession();
    if (!sessionToken?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const userId = sessionToken.user.id as string;
    const body = await request.json();

    const profile = await prisma.profile.findUnique({ where: { userId } });
    if (!profile) {
      return NextResponse.json({ error: "Perfil no encontrado" }, { status: 404 });
    }

    await prisma.profile.update({
      where: { userId },
      data: {
        appState: JSON.stringify(body.state)
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("POST Sync Error:", err);
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}
