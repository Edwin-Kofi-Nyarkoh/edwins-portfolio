import ProjectSection from "@/component/projectSection";

export default function Project() {
  return (
    <main className="bg-white px-4 py-24 text-black dark:bg-neutral-950 dark:text-white">
      <h1 className="mb-4 text-center text-3xl font-bold">My Projects</h1>
      <p className="mx-auto mb-4 max-w-3xl text-center text-lg leading-8 text-neutral-700 dark:text-neutral-300">
        I turn ideas into interactive, scalable, and modern web experiences.
        Here are a few examples of the work I build with React, Next.js,
        PostgreSQL, Prisma, and API-driven features.
      </p>
      <ProjectSection />
    </main>
  );
}
