import { prisma } from "@/lib/prisma";
import { setExpirationTime } from "@/utils/tokenUtils";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json(
      { message: "Please provide email, password, and name." },
      { status: 400 }
    );
  }

  if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    console.error("Email environment variables not set.");
    return NextResponse.json(
      { message: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    const now = new Date();
    const expiredUsers = await prisma.user.deleteMany({
      where: {
        emailVerified: null,
        resetTokenExpiration: { lt: now },
        provider: "credentials",
      },
    });

    if (expiredUsers.count > 0) {
      console.log(`Cleaned up ${expiredUsers.count} expired unverified users.`);
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const emailToken = uuidv4();
    const expirationTime = setExpirationTime(1);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        provider: "credentials",
        emailToken,
        resetTokenExpiration: expirationTime,
      },
    });

    const verifyUrl = `${process.env.FRONTEND_URL}/confirmEmail?token=${emailToken}`;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Confirm your email address",
      text: `Hi ${name},\n\nPlease click the link below to verify your email and complete signup:\n\n${verifyUrl}\n\nIf you didn't request this, you can ignore this email.`,
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Please click the link below to verify your email and complete signup:</p>
        <p><a href="${verifyUrl}">${verifyUrl}</a></p>
        <p>If you didn't request this, you can ignore this email.</p>
      `,
    });

    return NextResponse.json(
      { message: "User created! Please check your email to confirm your account." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup process:", error);
    return NextResponse.json(
      { message: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
