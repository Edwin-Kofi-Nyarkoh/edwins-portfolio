"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 10,
            gcTime: 1000 * 60 * 30,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
