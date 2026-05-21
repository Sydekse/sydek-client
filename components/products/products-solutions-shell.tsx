"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/careers/hero-section";
import ProductGrid, {
  type ProductGridTile,
} from "@/components/products/product-grid";
import ProjectsGrid from "@/components/projects/projects-grid";
import {
  SectionSplitHeader,
  WorkShowcaseCarousel,
  type WorkShowcaseCarouselProject,
  type WorkShowcaseAccent,
} from "@/components/marketing";
import type { ProductShowcaseItem } from "@/types/products";
import { STACK_LOGOS } from "@/lib/stack-logos";

interface Product extends ProductShowcaseItem {
  features: string[];
}

/** Matches `ProductShowcaseItem`: `id` is optional — grid + carousel keys must stay `string`. */
function stableProductId(p: Pick<Product, "id" | "title">): string {
  return p.id ?? p.title;
}

interface Integration {
  name: string;
  logo: string;
}

const products: Product[] = [
  {
    id: "wegenie",
    title: "Wegenie",
    caseStudyId: "wegenie",
    description:
      "A crowdfunding platform designed for genuine causes, empowering individuals and organizations to connect with supporters through a secure, transparent environment.",
    image: "/assets/images/products/wegenie.png",
    category: "Crowdfunding",
    features: [
      "Low transaction commissions for fair funding",
      "Transparency and trust for backer confidence",
      "Chapa, Telebirr & Stripe integrations",
      "Customizable campaign pages",
      "Real-time donation tracking",
    ],
    link: "https://wegenie-webapp.vercel.app/",
  },
  {
    id: "fetan",
    title: "Fetan",
    caseStudyId: "fetan",
    description:
      "A fast and reliable fintech solution for seamless currency exchange and financial transactions, offering developers free APIs and businesses high-quality service delivery.",
    image: "/assets/images/products/fetan.png",
    category: "Finance",
    features: [
      "Real-time currency exchange rates",
      "Free developer APIs",
      "Efficiency & quality guaranteed",
      "Secure payment processing",
      "Comprehensive documentation",
    ],
    link: "https://fetan.co/",
  },
  {
    id: "tibeb",
    title: "Tibeb",
    caseStudyId: "tibeb",
    description:
      "An educational platform providing accessible, high-quality courses across business, technology, and personal development, designed to unlock potential for all learners.",
    image: "/assets/images/products/tibeb.png",
    category: "Education",
    features: [
      "Wide range of interactive courses",
      "Student progress tracking",
      "Curriculum & gradebook management",
      "Community engagement tools",
      "Practical real-world skill focus",
    ],
    link: "https://tibeb.vercel.app/",
  },
  {
    id: "echolens",
    title: "Echolens",
    caseStudyId: "echolens",
    description:
      "AI-powered TikTok analytics with personalized podcast insights, virality scoring, and advanced optimization filters for faster, smarter growth.",
    image: "/assets/images/products/serp.png",
    category: "Analytics",
    features: [
      "Personalized podcast analyzing TikTok performance",
      "AI-powered virality and sentiment scoring",
      "Precision filtering for high-impact content",
      "Comprehensive PDF reports and strategy breakdowns",
      "Secure dashboard with real-time tracking",
    ],
    link: "https://echolens.infy.uk",
  },
];

const integrations: Integration[] = [
  { name: "Chapa", logo: "/assets/images/products/chapa.png" },
  { name: "Telebirr", logo: "/assets/images/products/telebirr.png" },
  { name: "Stripe", logo: "/assets/images/products/stripe.png" },
  { name: "Salesforce", logo: "/assets/images/products/salesforce.png" },
  { name: "Slack", logo: "/assets/images/products/slack.png" },
  { name: "Shopify", logo: "/assets/images/products/shopify.png" },
];

const PRODUCTS_CAROUSEL_ACCENTS: WorkShowcaseAccent[] = [
  "purple",
  "lavender",
  "warm",
  "ink",
];

function productCatalogToCarouselSpotlight(p: Product, index: number): WorkShowcaseCarouselProject {
  const [headlineFeature, ...otherFeatures] = p.features;
  const tagline =
    headlineFeature?.trim().length ?? 0
      ? headlineFeature!
      : p.description.trim().slice(0, 140).replace(/\s+\S*$/, "") +
        (p.description.length > 140 ? "…" : "");

  return {
    slug: stableProductId(p),
    name: p.title,
    tagline,
    description: p.description,
    stack:
      otherFeatures.length > 0
        ? otherFeatures.slice(0, 10)
        : p.features.slice(0, 6),
    domain: p.category,
    status: "live",
    accent: PRODUCTS_CAROUSEL_ACCENTS[index % PRODUCTS_CAROUSEL_ACCENTS.length]!,
  };
}

function buildProductBentoTiles(
  featured: Product,
  integrationList: Integration[]
): ProductGridTile[] {
  const logos = integrationList.map((i) => ({
    name: i.name,
    src: i.logo,
  }));

  const href = featured.caseStudyId
    ? `/company/case-studies/${featured.caseStudyId}`
    : featured.link;
  const external = /^https?:\/\//i.test(href);

  return [
    {
      id: "featured",
      gridClassName: "md:col-span-6 md:row-span-2",
      variant: "featured",
      tag: featured.category,
      title: featured.title,
      description: featured.description,
      imageUrl: featured.image,
      href,
      external,
      features: featured.features,
      ctaLabel: featured.caseStudyId ? "Read case study" : "Launch product",
    },
    {
      id: "stat",
      gridClassName: "md:col-span-3 md:row-span-2",
      variant: "stat",
      value: `${products.length}+`,
      label: "Products shipped",
      description:
        "From crowdfunding and payments to education and analytics — each launch is owned end-to-end by a Sydek squad.",
    },
    {
      id: "logos",
      gridClassName: "md:col-span-3 md:row-span-1",
      variant: "logos",
      eyebrow: "Payments & platforms",
      logos,
    },
    {
      id: "quote",
      gridClassName: "md:col-span-3 md:row-span-1",
      variant: "quote",
      productLabel: featured.title,
      quote:
        "Sydek moves fast without breaking trust — clear scopes, crisp interfaces, and they're genuinely invested in outcomes.",
      attribution: "Partner feedback",
      role: "Early access cohort",
    },
    {
      id: "tech",
      gridClassName: "md:col-span-12",
      variant: "tech",
      title: "Technologies we use",
      technologies: [
        { name: "React", logoSrc: STACK_LOGOS.react },
        { name: "Next.js", logoSrc: STACK_LOGOS.nextjs },
        { name: "TypeScript", logoSrc: STACK_LOGOS.typescript },
        { name: "Node.js", logoSrc: STACK_LOGOS.nodejs },
        {
          name: "Stripe",
          logoSrc: STACK_LOGOS.stripe,
        },
        { name: "OpenAI", logoSrc: STACK_LOGOS.openai },
        { name: "AWS", logoSrc: STACK_LOGOS.aws },
        { name: "Supabase", logoSrc: STACK_LOGOS.supabase },
      ],
    },
  ];
}

export function ProductsSolutionsShell() {
  const [selectedProductId, setSelectedProductId] = useState<string>(() =>
    products[0] ? stableProductId(products[0]) : ""
  );

  const showcaseProjects = products.map(productCatalogToCarouselSpotlight);

  const handleProductSelect = useCallback((id: string) => {
    setSelectedProductId(id);
  }, []);

  const featured =
    products.find((p) => stableProductId(p) === selectedProductId) ?? products[0];

  const carouselIndexRaw = showcaseProjects.findIndex(
    (spot) => spot.slug === selectedProductId
  );
  const carouselIndex = carouselIndexRaw >= 0 ? carouselIndexRaw : 0;

  const tiles = featured ? buildProductBentoTiles(featured, integrations) : [];

  const handleCarouselIndexChange = useCallback((index: number) => {
    const row = products[index];
    if (row) setSelectedProductId(stableProductId(row));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        title="Products built for scale"
        subtitle="Crowdfunding, fintech, education, and analytics — shipped as polished experiences your users can trust."
        highlightedWord="scale"
        actions={
          <>
            <Button asChild variant="secondary" className="rounded-full px-6">
              <Link href="/company/contact">Contact sales</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/scoping">Start growing</Link>
            </Button>
          </>
        }
      />

      <LayoutGroup id="products-spotlight">
        <motion.section
          layout
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="pb-6 md:pb-10"
        >
          <div className="mx-auto max-w-terrava px-[clamp(1rem,4vw,4rem)] pt-4">
            <WorkShowcaseCarousel
              projects={showcaseProjects}
              index={carouselIndex}
              onIndexChange={handleCarouselIndexChange}
            />
          </div>
        </motion.section>

        <section className="bg-muted/20 dark:bg-muted/15">
          <motion.div layout transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
            <ProjectsGrid
              projects={products.map((project) => ({
                id: stableProductId(project),
                title: project.title,
                description: project.description,
                category: project.category,
                image: project.image,
                link: /^https?:\/\//i.test(project.link)
                  ? project.link
                  : "/company/contact",
              }))}
              selectionMode
              selectedProjectId={selectedProductId}
              onProjectSelect={handleProductSelect}
              showLoadMore={false}
            />
          </motion.div>

          <motion.section
            layout
            aria-live="polite"
            aria-label="Product spotlight details"
            className="rounded-t-[1.75rem] border-t border-border/60 bg-gradient-to-b from-muted/35 to-muted/15 px-0 pb-14 pt-10 shadow-[0_-24px_60px_-40px_rgba(15,23,42,0.35)] dark:from-muted/25 dark:to-background dark:shadow-[0_-24px_60px_-40px_rgba(0,0,0,0.45)] md:rounded-t-[2.25rem] md:pb-16 md:pt-14"
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={selectedProductId}
                initial={{ opacity: 0.55, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.35, y: -8 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductGrid tiles={tiles} className="py-0 md:py-0" />
              </motion.div>
            </AnimatePresence>
          </motion.section>
        </section>
      </LayoutGroup>

      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display mb-6 text-3xl font-normal tracking-[var(--tracking-tight)] md:text-4xl">
            Ready to transform your digital experience?
          </h2>
          <p className="font-body mx-auto mb-8 max-w-2xl text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-muted-foreground md:text-base">
            Discover how Sydek products can empower your business and community.
          </p>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/company/contact">
              Contact sales
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
