import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function SingleServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await prisma.service.findUnique({ where: { slug } });

  if (!service) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-24 text-black dark:text-white">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-yellow-700 dark:text-yellow-400">
        {service.category}
      </p>
      <h1 className="mb-4 text-3xl font-bold">{service.title}</h1>
      <Image
        src={service.image}
        alt={service.title}
        width={1200}
        height={480}
        className="mb-6 h-80 w-full rounded-lg object-cover object-top"
      />
      <p className="leading-8 text-neutral-700 dark:text-neutral-300">
        {service.content}
      </p>
    </main>
  );
}
