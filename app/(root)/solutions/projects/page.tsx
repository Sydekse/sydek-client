"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";
import CtaCard from "@/components/shared/cta-card";
import ProjectsGrid from "@/components/projects/projects-grid";
import ProductGrid, { type ProductGridTile } from "@/components/products/product-grid";
import { SectionSplitHeader } from "@/components/marketing";
import { WorkShowcaseCarousel } from "@/components/marketing/work-showcase-carousel";
import { SYDEK_ORG_PROJECTS } from "@/data/sydek-org-projects";
import {
  sydekOrgProjectToPortfolioRecord,
  sydekOrgProjectsToPortfolioRecords,
} from "@/lib/sydek-org-portfolio-map";
import type { PortfolioIntegration, PortfolioProjectRecord } from "@/data/projects-portfolio";

function buildPortfolioBentoTiles(
  featured: PortfolioProjectRecord,
  totalProjects: number
): ProductGridTile[] {
  const logos: PortfolioIntegration[] = featured.integrationLogos;

  const technologies = featured.stack.map((tech) => ({
    name: tech.name,
    logoSrc: tech.logoSrc,
  }));

  const href = featured.caseStudyId
    ? `/company/case-studies/${featured.caseStudyId}`
    : featured.link;
  const externalHref = /^https?:\/\//i.test(href);

  const ctaLabel =
    featured.caseStudyId !== undefined
      ? "Read case study"
      : featured.link.startsWith("http")
        ? "Open live site"
        : "Talk to us about this project";

  return [
    {
      id: `featured-${featured.id}`,
      gridClassName: "md:col-span-6 md:row-span-2",
      variant: "featured",
      tag: featured.category,
      title: featured.title,
      description: featured.description,
      imageUrl: featured.image,
      href,
      external: externalHref,
      features: featured.features,
      ctaLabel,
    },
    {
      id: `stat-${featured.id}`,
      gridClassName: "md:col-span-3 md:row-span-2",
      variant: "stat",
      value: `${totalProjects}`,
      label: "Sydek org launches",
      description:
        "Marketplaces, outbound automation, catering funnels, and corporate sites — grounded in Ethiopian markets and multilingual ops.",
    },
    {
      id: `logos-${featured.id}`,
      gridClassName: "md:col-span-3 md:row-span-1",
      variant: "logos",
      eyebrow: "Integrations snapshot",
      logos,
    },
    {
      id: `quote-${featured.id}`,
      gridClassName: "md:col-span-3 md:row-span-1",
      variant: "quote",
      productLabel: featured.title,
      quote:
        "Sydek stitched product, infra, and go-to-market needs into one accountable squad — the difference was visible inside the first sprint.",
      attribution: "Delivery partner",
      role: `${featured.tags.slice(0, 2).join(" · ")}`,
    },
    {
      id: `tech-${featured.id}`,
      gridClassName: "md:col-span-12",
      variant: "tech",
      title: "Stack used on this spotlight",
      technologies,
    },
  ];
}

const portfolioRecords = sydekOrgProjectsToPortfolioRecords(SYDEK_ORG_PROJECTS);

export default function ProjectsSolutionsPage() {
  const total = SYDEK_ORG_PROJECTS.length;

  const [carouselIndex, setCarouselIndex] = React.useState(0);

  const safeIndex =
    total > 0 ? ((carouselIndex % total) + total) % total : 0;

  const selectedSlug = SYDEK_ORG_PROJECTS[safeIndex]?.slug ?? "";

  const spotlightTiles = React.useMemo(() => {
    const org = SYDEK_ORG_PROJECTS[safeIndex];
    if (!org) return [];
    const rec = sydekOrgProjectToPortfolioRecord(org);
    return buildPortfolioBentoTiles(rec, total);
  }, [safeIndex, total]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroSection
        title="Our Portfolio"
        highlightedWord="Portfolio"
        subtitle="Cycle through the Sydek spotlight, then unpack stack and integrations — every card maps to launches we steward under Sydek Org."
        actions={
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild
          >
            <Link href="/company/contact">
              Discuss your build
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <section className="pb-6 md:pb-10">
        <div className="mx-auto max-w-terrava px-[clamp(1rem,4vw,4rem)] pt-4">
          <WorkShowcaseCarousel
            projects={SYDEK_ORG_PROJECTS}
            index={carouselIndex}
            onIndexChange={setCarouselIndex}
          />
        </div>
      </section>

    
      <ProductGrid tiles={spotlightTiles} className="py-14 md:py-20" />

      <CtaCard
        title="Ready to build your next product?"
        description="Let's collaborate from discovery through launch — staffed squads that own architecture, UX, and delivery timelines."
        buttonText="Talk with Sydek"
        buttonLink="/company/contact"
      />
    </div>
  );
}
