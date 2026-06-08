import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ error: "Ya existe una cuenta con este email" }, { status: 400 });
    }

    // Hash password
    const passwordHash = await hash(password, 12);

    // Create user and empty profile
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        profile: {
          create: {
            displayName: name
          }
        }
      }
    });

    return NextResponse.json(
      { message: "Cuenta creada exitosamente", userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { error: "Ha ocurrido un error al crear la cuenta" },
      { status: 500 }
    );
  }
}
