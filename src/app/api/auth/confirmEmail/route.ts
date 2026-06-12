import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ message: "Invalid token." }, { status: 400 });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        emailToken: token,
        resetTokenExpiration: { gt: new Date() },
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token." },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        emailToken: null,
        resetTokenExpiration: null,
      },
    });

    return NextResponse.json(
      { message: "Email verified successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
