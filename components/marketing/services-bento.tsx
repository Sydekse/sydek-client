import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ServicesBentoStep = {
  index: string;
  title: string;
  description: string;
};

export type ServicesBentoSpotlight = {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta: { label: string; href: string };
  outlineCta?: { label: string; href: string };
  moreHref?: { label: string; href: string };
};

export type ServicesBentoTile = {
  icon: ReactNode;
  title: string;
  description: string;
};

export interface ServicesBentoProps {
  className?: string;
  topSteps: ServicesBentoStep[];
  spotlight: ServicesBentoSpotlight;
  bottomTiles: [ServicesBentoTile, ServicesBentoTile];
}

export function ServicesBento({
  className,
  topSteps,
  spotlight,
  bottomTiles,
}: ServicesBentoProps) {
  const [leftTile, rightTile] = bottomTiles;

  return (
    <section
      className={cn(
        "bg-[hsl(0_0%_97%)] py-16 md:py-24 dark:bg-muted/25",
        className
      )}
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        {/* Top metrics row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {topSteps.map((step) => (
            <div
              key={step.index}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:rounded-3xl"
            >
              <span className="font-mono text-xs font-medium text-muted-foreground">
                {step.index}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Spotlight */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-12 md:gap-6">
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm md:col-span-7 md:rounded-3xl lg:min-h-[320px]">
            <Image
              src={spotlight.imageSrc}
              alt={spotlight.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:col-span-5 md:rounded-3xl md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">
              {spotlight.label}
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              {spotlight.title}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-[1.05rem]">
              {spotlight.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                variant="secondary"
                className="rounded-full px-6"
              >
                <Link href={spotlight.primaryCta.href}>
                  {spotlight.primaryCta.label}
                </Link>
              </Button>
              {spotlight.outlineCta ? (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-secondary/35 px-6 hover:border-secondary/50 dark:border-secondary/45"
                >
                  <Link href={spotlight.outlineCta.href}>
                    {spotlight.outlineCta.label}
                  </Link>
                </Button>
              ) : null}
              {spotlight.moreHref ? (
                <Link
                  href={spotlight.moreHref.href}
                  className="sm:ml-1 text-center text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline sm:text-left"
                >
                  {spotlight.moreHref.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        {/* Bottom pair */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6">
          {[leftTile, rightTile].map((tile, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:rounded-3xl md:p-8"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary dark:bg-secondary/20"
                aria-hidden
              >
                {tile.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{tile.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
