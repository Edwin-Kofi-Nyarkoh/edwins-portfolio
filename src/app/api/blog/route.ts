import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blog = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        message: "All data fetched",
        data: blog.map((item) => ({ ...item, _id: item.id })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
