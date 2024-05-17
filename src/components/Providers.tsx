"use client";
import { EdgeStoreProvider } from "../lib/edgestore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
const client = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light", dark: "dark" }}
      defaultTheme="system"
    >
      <EdgeStoreProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </EdgeStoreProvider>
    </ThemeProvider>
  );
};

export default Providers;
