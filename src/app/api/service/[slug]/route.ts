import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const service = await prisma.service.findUnique({
      where: { slug },
    });

    if (!service) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Success", data: { ...service, _id: service.id } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET /api/service/[slug]:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
