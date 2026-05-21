import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteActionBanner() {
  return (
    <section
      aria-labelledby="site-footer-cta-heading"
      className="relative overflow-hidden rounded-3xl shadow-lg"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary via-accent to-tertiary opacity-[0.94]" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-black/10 blur-3xl dark:bg-black/25" />

      <div className="relative z-10 flex flex-col gap-10 px-8 py-12 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 md:text-sm">
            Partnership first
          </p>
          <h2
            id="site-footer-cta-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Build what&apos;s next, together
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/90 md:text-lg">
            Growth Strategy, Product strategy, UX craft, and engineering in one engagement from
            discovery workshops to launches that your team can own long after hands off.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap md:flex-col lg:flex-row">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8 shadow-md"
          >
            <Link href="/company/contact">Start a conversation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/75 bg-transparent text-white hover:bg-white/15 hover:text-white dark:border-white/70 dark:hover:bg-white/10"
          >
            <Link href="/solutions/services">Explore services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
