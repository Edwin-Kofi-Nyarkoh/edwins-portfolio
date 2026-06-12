"use client";

import { Card, CardContent } from "@/component/ui/card";
import { Skeleton } from "@/component/ui/skeleton";
import { fetchProjects, queryKeys } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface ProjectSectionProps {
  limit?: number;
}

function ProjectGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <Card key={item}>
          <CardContent>
            <Skeleton className="mb-4 aspect-[4/3] w-full" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-4 h-4 w-5/6" />
            <Skeleton className="h-4 w-24" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ProjectSection({ limit }: ProjectSectionProps) {
  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: queryKeys.projects,
    queryFn: fetchProjects,
  });

  const slicedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="mx-auto max-w-5xl px-6 py-8 text-black dark:text-white">
      {isLoading ? (
        <ProjectGridSkeleton />
      ) : isError ? (
        <p className="text-sm text-red-600">Projects could not be loaded.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slicedProjects.map((project) => (
            <Card
              key={project._id}
              className="bg-yellow-50 transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900"
            >
              <CardContent>
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={project.image}
                    alt="Project preview"
                    fill
                    className="object-cover object-top transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mb-4 line-clamp-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-yellow-700 hover:underline dark:text-yellow-400"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
