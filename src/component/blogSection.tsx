"use client";

import { Card, CardContent } from "@/component/ui/card";
import { Skeleton } from "@/component/ui/skeleton";
import { fetchBlogs, queryKeys } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <Card key={item}>
          <CardContent>
            <Skeleton className="mb-4 aspect-[4/3] w-full" />
            <Skeleton className="mb-3 h-5 w-3/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-4 h-4 w-5/6" />
            <Skeleton className="h-4 w-24" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function BlogSection() {
  const { data: blog = [], isLoading, isError } = useQuery({
    queryKey: queryKeys.blogs,
    queryFn: fetchBlogs,
  });

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-black dark:text-white">
      <h2 className="mb-8 text-center text-3xl font-bold">Latest Blog Posts</h2>
      {isLoading ? (
        <BlogGridSkeleton />
      ) : isError ? (
        <p className="text-sm text-red-600">Blog posts could not be loaded.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((post) => (
            <Card
              key={post._id}
              className="bg-yellow-50 transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900"
            >
              <CardContent>
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
                <p className="mb-4 line-clamp-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-yellow-700 hover:underline dark:text-yellow-400"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
