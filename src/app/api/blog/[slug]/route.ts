import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!blog) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Success", data: { ...blog, _id: blog.id } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET /api/blog/[slug]:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
