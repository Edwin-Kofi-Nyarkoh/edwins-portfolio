"use client";

import ServiceCard from "@/component/serviceCard";
import { Skeleton } from "@/component/ui/skeleton";
import { fetchServices, queryKeys } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

interface ServiceSectionProps {
  limit?: number;
}

function ServiceGridSkeleton() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-neutral-900"
        >
          <Skeleton className="mb-4 aspect-[4/3] w-full" />
          <Skeleton className="mb-3 h-5 w-3/4" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-4 h-4 w-5/6" />
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </div>
  );
}

export default function ServiceSection({ limit }: ServiceSectionProps) {
  const { data: service = [], isLoading, isError } = useQuery({
    queryKey: queryKeys.services,
    queryFn: fetchServices,
  });

  const slicedService = limit ? service.slice(0, limit) : service;

  return (
    <section className="px-6 py-8">
      {isLoading ? (
        <ServiceGridSkeleton />
      ) : isError ? (
        <p className="mx-auto max-w-5xl text-sm text-red-600">
          Services could not be loaded.
        </p>
      ) : (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slicedService.map((services) => (
            <ServiceCard key={services._id} service={services} />
          ))}
        </div>
      )}
    </section>
  );
}
