import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        message: "All data fetched",
        data: services.map((item) => ({ ...item, _id: item.id })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
