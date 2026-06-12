import { Skeleton } from "@/component/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 pt-28 text-black dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <Skeleton className="h-10 w-2/3 max-w-xl" />
        <Skeleton className="h-5 w-full max-w-2xl" />
        <Skeleton className="h-5 w-5/6 max-w-2xl" />
        <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-neutral-900"
            >
              <Skeleton className="mb-4 aspect-[4/3] w-full" />
              <Skeleton className="mb-3 h-5 w-3/4" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
