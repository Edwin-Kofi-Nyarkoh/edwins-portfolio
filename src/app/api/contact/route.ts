import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, subject, message } = await req.json();

    if (!email || !name || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    await prisma.contact.create({
      data: { email, name, subject, message },
    });

    return NextResponse.json(
      { message: "Contact submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
