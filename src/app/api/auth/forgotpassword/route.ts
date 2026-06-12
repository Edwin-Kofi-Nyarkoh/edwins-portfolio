import { prisma } from "@/lib/prisma";
import { setExpirationTime } from "@/utils/tokenUtils";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SERVER_USER!,
    pass: process.env.EMAIL_SERVER_PASSWORD!,
  },
});

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Please provide an email address" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const resetToken = uuidv4();
    const expirationTime = setExpirationTime(1);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpiration: expirationTime,
      },
    });

    const resetUrl = `${process.env.FRONTEND_URL}/resetPassword?token=${resetToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Password Reset",
      text: `Click on the link to reset your password: ${resetUrl}`,
    });

    return NextResponse.json(
      { message: "Password reset link sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error requesting password reset:", error);
    return NextResponse.json(
      { message: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
