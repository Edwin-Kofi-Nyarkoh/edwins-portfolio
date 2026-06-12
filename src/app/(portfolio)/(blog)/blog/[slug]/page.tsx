import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({ where: { slug } });

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-24 text-black dark:text-white">
      <h1 className="mb-4 text-3xl font-bold">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={480}
        className="mb-6 h-80 w-full rounded-lg object-cover object-top"
      />
      <p className="leading-8 text-neutral-700 dark:text-neutral-300">
        {blog.content}
      </p>
    </main>
  );
}
