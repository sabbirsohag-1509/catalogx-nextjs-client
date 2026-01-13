"use client";

import GlobalLoader from "@/app/components/loader/GlobalLoader";
import { QueryClient, QueryClientProvider, useIsFetching } from "@tanstack/react-query";

import { useState } from "react";

function GlobalFetchingLoader() {
  const isFetching = useIsFetching();
  if (!isFetching) return null;
  return <GlobalLoader />;
}

export default function QueryProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalFetchingLoader />
      {children}
    </QueryClientProvider>
  );
}
