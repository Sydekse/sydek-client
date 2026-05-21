"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductShowcaseItem } from "@/types/products";

const SEPARATOR = "✦";

/** Ignore tiny trackpad jitter before stealing wheel for horizontal scroll */
const WHEEL_DELTA_THRESHOLD_PX = 4;

/** Edge inset so first/last card can still snap without hugging viewport corners. */
const TRACK_EDGE_INSET =
  "pl-4 pr-4 md:pl-7 md:pr-7 lg:pl-10 lg:pr-10 [scroll-padding-inline:1rem] md:[scroll-padding-inline:1.75rem] lg:[scroll-padding-inline:2.5rem]";

function showcaseKey(item: ProductShowcaseItem): string {
  return item.id ?? item.title;
}

function normalizeWheelDelta(e: WheelEvent): { dx: number; dy: number } {
  let multiplier = 1;
  if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) multiplier = 24;
  if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    multiplier = typeof window !== "undefined" ? window.innerHeight : 800;
  }
  return { dx: e.deltaX * multiplier, dy: e.deltaY * multiplier };
}

function pointInsideRect(
  x: number,
  y: number,
  rect: DOMRectReadOnly | undefined
): boolean {
  if (!rect) return false;
  return (
    x >= rect.left &&
    x <= rect.right &&
    y >= rect.top &&
    y <= rect.bottom
  );
}

export interface ProductsHorizontalShowcaseProps {
  products: ProductShowcaseItem[];
  /** Highlight + center this card (`product.id ?? product.title`). */
  emphasizedId?: string | null;
  /** When hovering the showcase rail: map vertical wheel to horizontal scroll until edge. */
  captureVerticalWheel?: boolean;
  /** Tighter spacing / smaller carousel chrome after spotlight selection morph. */
  compact?: boolean;
  /** Selection drives parent state; carousel cards stop being full-area links. */
  selectionMode?: boolean;
  /** Fired when a card primary control is activated (carousel + emphasis sync). */
  onSelect?: (id: string) => void;
  className?: string;
}

export function ProductsHorizontalShowcase({
  products,
  emphasizedId = null,
  captureVerticalWheel = true,
  compact = false,
  selectionMode = false,
  onSelect,
  className,
}: ProductsHorizontalShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const p of products) {
      if (!seen.has(p.category)) {
        seen.add(p.category);
        list.push(p.category);
      }
    }
    return ["All", ...list.sort((a, b) => a.localeCompare(b))];
  }, [products]);

  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return products;
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [filter]);

  useEffect(() => {
    if (!emphasizedId || filter === "All") return;
    const present = filtered.some((p) => showcaseKey(p) === emphasizedId);
    if (!present) setFilter("All");
  }, [emphasizedId, filter, filtered]);

  useEffect(() => {
    if (!emphasizedId) return;
    const el = itemRefs.current.get(emphasizedId);
    queueMicrotask(() => {
      el?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    });
  }, [emphasizedId, filtered]);

  /** Wheel listener on the rail only; pointer must be over rail; ignores noise deltas. */
  useEffect(() => {
    const rail = scrollRef.current;
    if (!rail || !captureVerticalWheel) return;

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;

      const rect = rail.getBoundingClientRect();
      if (!pointInsideRect(e.clientX, e.clientY, rect)) return;

      if (rail.scrollWidth <= rail.clientWidth + 1) return;

      const { dx, dy } = normalizeWheelDelta(e);
      const dominant = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
      const delta = dominant !== 0 ? dominant : e.shiftKey ? dx || dy : 0;

      if (!Number.isFinite(delta) || delta === 0) return;
      if (Math.abs(delta) < WHEEL_DELTA_THRESHOLD_PX) return;

      const atStart = rail.scrollLeft <= 0.5;
      const atEnd =
        rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 0.5;
      const scrollingForward = delta > 0;

      const canScrollHorizontallyWithinRail =
        (scrollingForward && !atEnd) || (!scrollingForward && !atStart);

      if (canScrollHorizontallyWithinRail) {
        e.preventDefault();
        rail.scrollLeft += delta;
      }
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, [captureVerticalWheel, filtered.length, products.length]);

  const scrollStep = () => {
    const el = scrollRef.current;
    if (!el) return 360;
    return Math.min(560, Math.max(280, Math.floor(el.clientWidth * 0.85)));
  };

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({
      left: -scrollStep(),
      behavior: "smooth",
    });
  };

  const scrollNext = () => {
    scrollRef.current?.scrollBy({
      left: scrollStep(),
      behavior: "smooth",
    });
  };

  const cardWidthClass = compact
    ? "w-[min(440px,calc(100vw-4.5rem))] sm:w-[min(440px,calc(100vw-5rem))] md:w-[min(440px,72vw)]"
    : "w-[min(560px,calc(100vw-4.5rem))] sm:w-[min(560px,calc(100vw-5rem))] md:w-[min(560px,82vw)]";

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative left-1/2 w-[100vw] max-w-none -translate-x-1/2 overflow-x-hidden border-y border-border/60 bg-muted/30 dark:bg-muted/15",
        compact ? "py-6 md:py-8" : "py-14 md:py-20",
        className
      )}
    >
      <div className="relative mx-auto max-w-terrava px-[clamp(1rem,4vw,4rem)]">
        <nav
          className={cn(
            "flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-muted-foreground md:gap-x-4",
            compact ? "mb-4" : "mb-10"
          )}
          aria-label="Product categories"
        >
          {categories.map((cat, i) => (
            <span key={cat} className="flex items-center gap-3 md:gap-4">
              {i > 0 ? (
                <span className="select-none text-[10px] text-muted-foreground/60 md:text-xs">
                  {SEPARATOR}
                </span>
              ) : null}
              <button
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-2 py-1 transition-colors hover:text-foreground",
                  filter === cat
                    ? "text-foreground underline decoration-secondary decoration-2 underline-offset-4"
                    : "text-muted-foreground"
                )}
              >
                {cat}
              </button>
            </span>
          ))}
        </nav>
      </div>

      <div className="relative w-full">
        <button
          type="button"
          onClick={scrollPrev}
          className={cn(
            "pointer-events-auto absolute left-2 top-1/2 z-[2] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background/95 text-muted-foreground shadow-md transition-colors hover:border-secondary hover:text-secondary md:flex dark:bg-card lg:left-10",
            compact ? "md:left-4" : "md:left-6"
          )}
          aria-label="Scroll carousel left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className={cn(
            "pointer-events-auto absolute right-2 top-1/2 z-[2] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background/95 text-muted-foreground shadow-md transition-colors hover:border-secondary hover:text-secondary md:flex dark:bg-card lg:right-10",
            compact ? "md:right-4" : "md:right-6"
          )}
          aria-label="Scroll carousel right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          className={cn(
            "w-full overscroll-x-contain",
            compact
              ? "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-contain scroll-smooth pb-2 pt-1"
              : "flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-contain scroll-smooth pb-4 pt-2",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "touch-pan-x",
            TRACK_EDGE_INSET
          )}
          tabIndex={0}
          aria-label="Horizontal product carousel"
        >
          {filtered.map((product) => {
            const key = showcaseKey(product);
            const emphasized = emphasizedId != null && key === emphasizedId;
            const externalLink = product.link.startsWith("http");
            const caseStudyHref =
              product.caseStudyId != null
                ? `/company/case-studies/${product.caseStudyId}`
                : null;
            const liveHref =
              product.liveUrl ??
              (!selectionMode && externalLink ? product.link : null);

            const cardBodyInner = (
              <>
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes={
                      compact
                        ? "(max-width:768px) 85vw, 440px"
                        : "(max-width:768px) 85vw, 560px"
                    }
                    className={cn(
                      "object-cover object-top transition-transform duration-500 ease-out",
                      !selectionMode && "group-hover:scale-[1.02]",
                      selectionMode && emphasized && "scale-[1.01]"
                    )}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-5">
                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                      {product.category}
                    </p>
                    <h3 className="truncate text-lg font-semibold text-foreground md:text-xl">
                      {product.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors group-hover:border-secondary group-hover:text-secondary group-focus-visible:border-secondary group-focus-visible:text-secondary",
                      selectionMode && emphasized && "border-secondary text-secondary"
                    )}
                    aria-hidden
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </>
            );

            return (
              <article
                key={`${key}-${product.category}`}
                ref={(node) => {
                  const map = itemRefs.current;
                  if (node) map.set(key, node);
                  else map.delete(key);
                }}
                data-showcase-slug={key}
                className={cn(
                  `${cardWidthClass} shrink-0 snap-center transition-[transform,opacity] duration-300`,
                  emphasized && "sm:scale-[1.02]"
                )}
              >
                <div
                  className={cn(
                    "rounded-[1.75rem] border border-white/80 bg-background/95 p-2 shadow-[0_22px_60px_-24px_rgba(15,23,42,0.35)] ring-1 ring-border/40 dark:border-white/10 dark:bg-card dark:shadow-[0_22px_60px_-24px_rgba(0,0,0,0.65)] dark:ring-white/10",
                    emphasized &&
                      "ring-2 ring-secondary ring-offset-2 ring-offset-muted/40 dark:ring-offset-background"
                  )}
                >
                  {selectionMode ? (
                    <div className="rounded-2xl bg-muted/40 dark:bg-muted/20">
                      <button
                        type="button"
                        onClick={() => onSelect?.(key)}
                        className="group block w-full overflow-hidden rounded-2xl text-left outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-secondary"
                      >
                        {cardBodyInner}
                      </button>
                      {(caseStudyHref != null ||
                        (liveHref != null && liveHref.startsWith("http"))) ? (
                        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/50 px-4 py-3 text-sm">
                          {caseStudyHref != null ? (
                            <Link
                              href={caseStudyHref}
                              className="font-medium text-secondary underline-offset-4 hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Read case study
                            </Link>
                          ) : null}
                          {liveHref != null &&
                          liveHref.startsWith("http") ? (
                            <a
                              href={liveHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit live site
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      href={product.link}
                      {...(externalLink
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group block overflow-hidden rounded-2xl bg-muted/40 dark:bg-muted/20"
                    >
                      {cardBodyInner}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
