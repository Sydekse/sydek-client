import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { renderHighlightedSegments } from "@/lib/render-highlighted-title";

export type TerravaHeroCTA = { label: string; href: string };

export interface TerravaHeroProps {
  /** Uppercase eyebrow above the headline (Manrope · portfolio eyebrow styling) */
  eyebrow: string;
  headline: ReactNode;
  description: string;
  primaryCta: TerravaHeroCTA;
  secondaryCta?: TerravaHeroCTA;
  /** Required for `layout="immersive"` */
  backgroundSrc?: string;
  backgroundAlt?: string;
  wordmark?: string;
  copyrightName?: string;
  priorityImage?: boolean;
  /**
   * `minimal` — light centered hero (home-style).
   * `immersive` — full-bleed image hero with footer ribbon (marketing inner pages).
   */
  layout?: "minimal" | "immersive";
  /** When provided with string `headline`, highlights this substring like careers HeroSection. */
  highlightedWord?: string;
  gradientClassName?: string;
}

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/company/about", label: "About" },
  { href: "/solutions/services", label: "Service" },
  {
    href: "/solutions/platform/client-digital-platform",
    label: "Platform",
  },
  { href: "/company/contact", label: "Contact" },
] as const;

export function TerravaHero({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  backgroundSrc,
  backgroundAlt = "",
  wordmark = "Sydek",
  copyrightName = "Sydek",
  priorityImage = false,
  layout = "immersive",
  highlightedWord,
  gradientClassName = "text-gradient",
}: TerravaHeroProps) {
  const year = new Date().getFullYear();

  const headlineRendered =
    highlightedWord !== undefined &&
    highlightedWord.length > 0 &&
    typeof headline === "string"
      ? renderHighlightedSegments(headline, highlightedWord, gradientClassName)
      : headline;

  const isMinimal = layout === "minimal";

  if (isMinimal) {
    return (
      <section className="relative isolate overflow-hidden bg-background pb-14 pt-28 md:pb-20 md:pt-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.12),transparent_60%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.14),transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-[clamp(1.25rem,4vw,2.5rem)] text-center">
          <p className="font-sans leading-relaxed text-balance eyebrow">{eyebrow}</p>
          <h1 className="display-heading mt-8 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-light text-foreground">
            {headlineRendered}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-auto rounded-full px-8 py-3 text-sm font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              <Link href={primaryCta.href}>
                <span>{primaryCta.label}</span>
                <span
                  className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/40 text-secondary-foreground"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </Link>
            </Button>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  if (!backgroundSrc) {
    throw new Error("TerravaHero immersive layout requires backgroundSrc");
  }

  return (
    <section className="relative isolate flex min-h-[85vh] flex-col justify-between overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt || "Sydek"}
          fill
          className="object-cover"
          priority={priorityImage}
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-[18] bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[17] bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-terrava flex-1 flex-col items-center justify-center px-[clamp(1.5rem,5vw,5rem)] py-8 md:py-12">
        <h1
          className="font-display mb-8 max-w-4xl text-center font-light tracking-[var(--tracking-tight)] text-white"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: "var(--leading-display)",
          }}
        >
          {headlineRendered}
        </h1>

        <div
          className="w-full max-w-lg rounded-[var(--radius-terrava-lg)] border border-white/20 px-8 py-8 shadow-[var(--shadow-terrava-panel)] backdrop-blur-md md:max-w-xl md:px-10 md:py-10"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.92)" }}
        >
          <p className="text-foreground/90 mb-2 inline-block rounded-[var(--radius-terrava-pill)] bg-black/[0.06] px-3 py-1 font-body text-[length:var(--text-eyebrow)] font-normal tracking-[var(--tracking-eyebrow)]">
            {eyebrow}
          </p>
          <p className="font-body mt-4 text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button
              asChild
              variant="secondary"
              className="rounded-[var(--radius-terrava-pill)] px-6 font-body text-sm font-medium shadow-md transition-transform duration-200 hover:scale-[1.02]"
            >
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </Button>
            {secondaryCta ? (
              <Button
                asChild
                variant="outline"
                className="rounded-[var(--radius-terrava-pill)] border-secondary/35 bg-background/90 px-6 font-body text-sm font-medium text-foreground backdrop-blur-sm hover:bg-background hover:border-secondary/50 dark:border-secondary/45 dark:bg-card/70"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative z-0 flex flex-col">
        <p
          className="pointer-events-none select-none text-center font-display font-light text-white/85"
          style={{
            fontSize: "clamp(5rem, 18vw, 14rem)",
            lineHeight: 0.88,
            letterSpacing: "var(--tracking-tight)",
            marginBottom: "-0.12em",
          }}
          aria-hidden
        >
          {wordmark}
        </p>

        <div className="border-t border-white/25 bg-black/25 px-[clamp(1.5rem,5vw,5rem)] py-4 backdrop-blur-sm">
          <div className="mx-auto flex max-w-terrava flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-xs text-white/70">
              © {year} {copyrightName}. All rights reserved.
            </p>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 font-body text-xs text-white/70 sm:justify-end"
              aria-label="Footer"
            >
              {FOOTER_LINKS.map((item, i) => (
                <span key={item.href} className="inline-flex items-center">
                  {i > 0 ? (
                    <span className="select-none px-2 text-white/40" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
