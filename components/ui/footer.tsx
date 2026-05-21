"use client";

import Link from "next/link";
import { ExternalLink, Linkedin } from "lucide-react";

import { SiteActionBanner } from "@/components/marketing/site-action-banner";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Products", href: "/solutions/products" },
      { label: "Projects", href: "/solutions/projects" },
      { label: "Services", href: "/solutions/services" },
      { label: "Outsourcing", href: "/out-sourcing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Case studies", href: "/company/case-studies" },
      { label: "Growth program", href: "/company/programs/growth" },
      { label: "Consultancy", href: "/company/programs/consultancy" },
      { label: "Contact", href: "/company/contact" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Project scoping", href: "/scoping" },
      { label: "Outsourcing", href: "/out-sourcing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 pt-12 pb-6 md:pt-16 md:pb-8 lg:px-6">
        <div className="mb-12 md:mb-14">
          <SiteActionBanner />
        </div>

        <div className="rounded-3xl border border-border/70 bg-muted/80 px-6 py-10 shadow-sm dark:border-border dark:bg-card md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:gap-12">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h3 className="mb-4 text-sm font-semibold text-foreground">
                    {col.title}
                  </h3>
                  <ul className="space-y-3">
                    {col.links.map((item) => (
                      <li key={`${col.title}-${item.href}`}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <aside className="rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-background/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Sydek on LinkedIn
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Updates on delivery practices, launches, and how we partner
                    with product teams across time zones.
                  </p>
                </div>
                <Link
                  href="https://www.linkedin.com/company/sydekse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 rounded-full border border-border/80 p-2 text-muted-foreground transition-colors hover:border-secondary hover:text-secondary dark:border-white/15"
                  aria-label="Sydek on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
              <Link
                href="https://www.linkedin.com/company/sydekse/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-secondary hover:underline"
              >
                Follow Sydek
                <ExternalLink className="h-3 w-3" aria-hidden />
              </Link>
            </aside>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-border/60 pt-8 dark:border-white/10 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-baseline gap-0">
              <span className="bg-gradient-to-r from-secondary via-accent to-tertiary bg-clip-text text-xl font-bold text-transparent">
                Sydek
              </span>
              <span className="text-sm text-muted-foreground">{`, ${year}. All rights reserved.`}</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/sydekse/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:border-secondary hover:text-secondary dark:border-white/15 dark:bg-transparent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[1.125rem] w-[1.125rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
