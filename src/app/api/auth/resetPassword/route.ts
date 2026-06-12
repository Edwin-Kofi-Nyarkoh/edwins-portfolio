import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  if (!token || !password) {
    return NextResponse.json(
      { message: "Token and password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { resetToken: token },
    });

    if (!user || !user.resetTokenExpiration) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    if (user.resetTokenExpiration.getTime() < Date.now()) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiration: null,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { message: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
