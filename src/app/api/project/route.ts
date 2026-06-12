import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        message: "All data fetched",
        data: projects.map((item) => ({ ...item, _id: item.id })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
