"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { installLocalStorageShimOn } from "@/lib/local-storage-shim";

/** Browser: fix broken/embedder `window.localStorage`. Server: no-op (`window` missing). */
function ensureClientLocalStorage(): void {
  if (typeof window === "undefined") return;
  installLocalStorageShimOn(
    window as unknown as typeof globalThis & { localStorage?: Storage }
  );
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  ensureClientLocalStorage();

  return (
    <NextThemesProvider {...props} defaultTheme="light" forcedTheme={props.forcedTheme || undefined}>
      {children}
    </NextThemesProvider>
  );
}
