"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { CAL_BOOKING_URL, CAL_BRAND_COLOR } from "@/lib/booking";
import { cn } from "@/lib/utils";

function buildEmbedUrl(theme: "light" | "dark") {
  const params = new URLSearchParams({
    embed: "true",
    theme,
    brandColor: CAL_BRAND_COLOR.replace("#", ""),
  });
  return `${CAL_BOOKING_URL}?${params.toString()}`;
}

export function CalBookingEmbed({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { resolvedTheme } = useTheme();

  const embedUrl = useMemo(
    () => buildEmbedUrl(resolvedTheme === "dark" ? "dark" : "light"),
    [resolvedTheme]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [embedUrl]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[min(720px,80vh)] w-full bg-background",
        className
      )}
    >
      {!loaded ? <CalBookingSkeleton /> : null}

      {shouldLoad ? (
        <iframe
          key={embedUrl}
          src={embedUrl}
          title="Book a 30 minute meeting with Sydek IT Solutions"
          className={cn(
            "absolute inset-0 h-full w-full border-0 transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          allow="clipboard-write"
        />
      ) : null}

      <p className="absolute bottom-4 right-4 z-10 text-xs text-muted-foreground">
        <Link
          href={CAL_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underline-offset-4 hover:text-secondary hover:underline"
        >
          Open in Cal.com
          <ExternalLink className="h-3 w-3" />
        </Link>
      </p>
    </div>
  );
}

export function CalBookingSkeleton() {
  return (
    <div
      className="flex min-h-[min(720px,80vh)] w-full flex-col gap-4 p-6 md:p-8"
      aria-busy="true"
      aria-label="Loading booking calendar"
    >
      <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />
      <div className="h-4 w-full max-w-md animate-pulse rounded bg-muted/80" />
      <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-7">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-lg bg-muted/60"
          />
        ))}
      </div>
    </div>
  );
}
