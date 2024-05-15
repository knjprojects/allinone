"use client";
import { EdgeStoreProvider } from "../lib/edgestore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

const client = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <EdgeStoreProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </EdgeStoreProvider>
  );
};

export default Providers;
