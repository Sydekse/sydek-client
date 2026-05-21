"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export type WorkShowcaseAccent = "purple" | "lavender" | "warm" | "ink";

export type WorkShowcaseStatus = "live" | "in-development" | "coming-soon";

/**
 * Minimal spotlight row used by `/solutions/projects` (portfolio corpus)
 * and `/solutions/products` (mapped catalogue items).
 */
export type WorkShowcaseCarouselProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  domain: string;
  status: WorkShowcaseStatus;
  accent: WorkShowcaseAccent;
  year?: string;
};

const accentSurface: Record<
  WorkShowcaseAccent,
  {
    gradient: string;
    glow: string;
    chip: string;
  }
> = {
  purple: {
    gradient:
      "from-secondary/35 via-secondary/10 to-transparent dark:from-secondary/40",
    glow: "bg-secondary/35",
    chip: "bg-secondary/20 text-secondary-foreground",
  },
  lavender: {
    gradient:
      "from-accent/50 via-accent/15 to-transparent dark:from-accent/35",
    glow: "bg-accent/35",
    chip: "bg-accent/25 text-accent-foreground",
  },
  warm: {
    gradient:
      "from-tertiary/35 via-tertiary/10 to-transparent dark:from-tertiary/30",
    glow: "bg-tertiary/35",
    chip: "bg-tertiary/20 text-tertiary-foreground",
  },
  ink: {
    gradient:
      "from-foreground/20 via-foreground/5 to-transparent dark:from-foreground/25",
    glow: "bg-foreground/15",
    chip: "bg-foreground/15 text-foreground",
  },
};

const statusLabel: Record<WorkShowcaseStatus, string> = {
  live: "Live",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

export type WorkShowcaseCarouselProps = {
  projects: WorkShowcaseCarouselProject[];
  /** Current spotlight index — pass with `onIndexChange` from parent for grid sync. */
  index?: number;
  /** When provided with `index`, turns this into a controlled carousel. */
  onIndexChange?: (index: number) => void;
  className?: string;
};

export function WorkShowcaseCarousel({
  projects,
  className,
  index: controlledIndex,
  onIndexChange,
}: WorkShowcaseCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [localIndex, setLocalIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement>(null);

  const count = projects.length;

  const controlled =
    controlledIndex !== undefined && typeof onIndexChange === "function";

  const normalizedIndex =
    count > 0
      ? (((controlled ? controlledIndex! : localIndex) % count) + count) % count
      : 0;

  const indexRef = React.useRef(normalizedIndex);
  indexRef.current = normalizedIndex;

  const setSpotlightIndex = React.useCallback(
    (nextRaw: number) => {
      if (count <= 0) return;
      const safe = ((nextRaw % count) + count) % count;
      if (controlled) onIndexChange!(safe);
      else setLocalIndex(safe);
    },
    [count, controlled, onIndexChange]
  );

  const go = React.useCallback(
    (delta: number) => {
      setSpotlightIndex(normalizedIndex + delta);
    },
    [normalizedIndex, setSpotlightIndex]
  );

  React.useEffect(() => {
    if (controlled) return;
    setLocalIndex(0);
  }, [controlled, projects]);

  React.useEffect(() => {
    if (reduceMotion || count <= 1 || paused) return;
    const t = window.setInterval(() => {
      setSpotlightIndex(indexRef.current + 1);
    }, 7000);
    return () => window.clearInterval(t);
  }, [reduceMotion, count, paused, setSpotlightIndex]);

  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const current = count > 0 ? projects[normalizedIndex] : null;

  if (!current || count === 0) return null;

  const surface = accentSurface[current.accent];
  const displayPos = normalizedIndex + 1;

  return (
    <div className={cn("relative", className)}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="eyebrow">Spotlight</div>
        <span className="text-xs tabular-nums text-muted-foreground">
          {displayPos} / {count}
        </span>
      </div>

      <div
        ref={wrapRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Highlighted projects"
        tabIndex={0}
        className="relative overflow-hidden rounded-terrava-lg border border-border bg-card/80 shadow-terrava-card outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 dot-grid" />
        <div className="pointer-events-none absolute inset-0 grain" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.slug}
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -28 }}
            transition={{ duration: 0.45, ease }}
            className={cn(
              "relative flex min-h-[260px] flex-col md:min-h-[300px] md:flex-row",
              count > 1 && "pb-12 md:pb-14"
            )}
          >
            <div
              className={cn(
                "relative flex flex-1 flex-col justify-center bg-gradient-to-br to-transparent p-8 md:w-[52%] md:p-10",
                surface.gradient
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -bottom-16 -left-12 h-52 w-52 rounded-full blur-3xl opacity-70",
                  surface.glow
                )}
              />
              <div className="relative space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex rounded-terrava-pill px-2.5 py-0.5 text-xs font-medium",
                      surface.chip
                    )}
                  >
                    {current.domain}
                  </span>
                  {current.year ? (
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {current.year}
                    </span>
                  ) : null}
                  <span className="rounded-terrava-pill border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {statusLabel[current.status]}
                  </span>
                </div>
                <h3 className="display-heading text-balance text-3xl font-thin leading-[1.05] md:text-4xl lg:text-[2.75rem]">
                  {current.name}
                </h3>
                <p className="font-display max-w-xl text-pretty text-base italic text-muted-foreground md:text-lg">
                  {current.tagline}
                </p>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col justify-center border-t border-border bg-muted/20 p-8 md:border-l md:border-t-0 md:p-10">
              <div className="eyebrow mb-3">Snapshot</div>
              <p className="line-clamp-6 text-pretty text-sm leading-relaxed text-foreground/85 md:line-clamp-[8] md:text-[15px]">
                {current.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {current.stack.slice(0, 6).map((t, chipIndex) => (
                  <span
                    key={`${current.slug}-stack-${chipIndex}`}
                    className="inline-flex rounded-terrava-pill border border-border bg-background/80 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
                {current.stack.length > 6 ? (
                  <span className="self-center px-1 text-[11px] text-muted-foreground">
                    +{current.stack.length - 6} more
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5"
              role="tablist"
              aria-label="Choose slide"
            >
              {projects.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === normalizedIndex}
                  aria-label={`Show ${p.name}`}
                  onClick={() => setSpotlightIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === normalizedIndex
                      ? "w-8 bg-secondary"
                      : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55"
                  )}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
