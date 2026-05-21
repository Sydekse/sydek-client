"use client";

import type { HeroSectionProps } from "@/types/hero";
import { renderHighlightedSegments } from "@/lib/render-highlighted-title";
import { cn } from "@/lib/utils";

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  leadingAccessory,
  gradientClassName = "text-gradient",
  highlightedWord,
  actions,
  sectionClassName,
  contentClassName,
  variant = "center",
  belowContent,
}: HeroSectionProps) {
  const headline = highlightedWord
    ? renderHighlightedSegments(title, highlightedWord, gradientClassName)
    : title;

  const align = variant === "left" ? "text-left" : "text-center";

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24",
        sectionClassName
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto max-w-4xl",
            align,
            contentClassName
          )}
        >
          {leadingAccessory ? (
            <div className="mb-6">{leadingAccessory}</div>
          ) : null}

          {eyebrow ? (
            <p className="eyebrow mb-6 leading-relaxed text-balance">{eyebrow}</p>
          ) : null}

          <h1 className="display-heading mb-6 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-light tracking-[var(--tracking-tight)] text-foreground">
            {headline}
          </h1>

          {subtitle != null ? (
            typeof subtitle === "string" || typeof subtitle === "number" ? (
              <p
                className={cn(
                  "mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl",
                  variant === "center" && "mx-auto"
                )}
              >
                {subtitle}
              </p>
            ) : (
              <div
                className={cn(
                  "mb-8 max-w-2xl space-y-2 text-muted-foreground md:text-lg",
                  variant === "center" && "mx-auto"
                )}
              >
                {subtitle}
              </div>
            )
          ) : null}

          {actions ? (
            <div
              className={cn(
                "flex flex-wrap items-center gap-3",
                variant === "center" && "justify-center"
              )}
            >
              {actions}
            </div>
          ) : null}
        </div>
        {belowContent}
      </div>
    </section>
  );
}
