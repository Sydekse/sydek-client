/**
 * Mirrors `sydek-portfolio/lib/projects.ts` entries where `org === "sydek"`.
 * Single source representation for `/solutions/projects` carousel + spotlight.
 */

export type ProjectStatus = "live" | "in-development" | "coming-soon";

export type ProjectCategory = "google" | "engineering-lead";

export type AffiliationBrand =
  | "google"
  | "world-bank"
  | "oxford"
  | "oxbridge"
  | "lovable";

export type SydekOrgProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  domain: string;
  status: ProjectStatus;
  org: "sydek" | "nahom" | "ananya";
  url?: string;
  year?: string;
  accent: "purple" | "lavender" | "warm" | "ink";
  category?: ProjectCategory;
  affiliation?: AffiliationBrand;
};

/** Product/builds shipped under Sydek org (from portfolio corpus). */
export const SYDEK_ORG_PROJECTS: SydekOrgProject[] = [
  {
    slug: "diplomat-corner",
    name: "Diplomat Corner",
    tagline: "Marketplace for the diplomatic community",
    description:
      "An Ethiopia-first marketplace where members of the diplomatic community list duty-free cars, rentals, and homes. A public client and operator-facing admin sit on top of a Go service backed by MongoDB, with Clerk handling identity and threaded messaging powering buyer–seller conversations.",
    highlights: [
      "Server-gated mutation rules with role-aware authorization (canMutateListing, requireAdmin)",
      "Newest-first browse ordering enforced at the database layer for legacy and new listings alike",
      "Dual messaging model — legacy collection + threaded inbox with topic dedupe and category labels",
      "Curated featured-products module refreshed on a cron schedule",
    ],
    stack: [
      "Next.js (App Router)",
      "Go + Chi",
      "MongoDB",
      "Clerk",
      "shadcn/ui",
    ],
    domain: "Marketplace",
    status: "live",
    org: "sydek",
    year: "2025",
    url: "https://diplomatcorner.net/",
    accent: "purple",
  },
  {
    slug: "embedur",
    name: "EmbedUr",
    tagline: "A data-aware outbound control plane",
    description:
      "EmbedUr is a multi-tenant cold-outreach platform that orchestrates campaigns, leads, enrichment pipelines, and reply ingestion. It glues sequencing tools, enrichment vendors, and automation (n8n) into one observable surface — so RevOps can see where every lead is, why it failed, and what each integration did.",
    highlights: [
      "NestJS modular monolith with Prisma-backed jobs and per-tenant isolation",
      "n8n webhook orchestration, Smartlead-compatible sending, Bright Data + TexAu enrichment",
      "Reply classification, booking, and webhook ingestion built on idempotent flows",
      "Next.js 15 dashboard with BFF route handlers, Zustand auth slice, Axios client",
    ],
    stack: [
      "Next.js 15",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Turborepo",
      "Bun",
    ],
    domain: "Outbound automation",
    status: "live",
    org: "sydek",
    year: "2025",
    url: "https://embedur.sydek.dev/",
    accent: "warm",
  },
  {
    slug: "addis-spare",
    name: "Addis Spare",
    tagline: "Automotive spare parts marketplace",
    description:
      "An Ethiopia-first marketplace for automotive spare parts connecting buyers (vehicle owners, mechanics) with suppliers, plus operators who manage users, catalog, inventory, and orders. A multi-role Next.js 15 client (storefront, supplier ops, admin back-office) consuming a REST backend with JWT auth and refresh-token retry.",
    highlights: [
      "Three-role mental model (customer / supplier / admin) on one codebase with shared design system and API layer",
      "Role-aware client auth — useAuth enforces JWT validity, optional role checks, and a supplier onboarding gate",
      "Resilient API session — refresh-token retry on 401, with clean logout on hard auth failure",
      "Domain-driven service layer (Axios + per-domain modules) keeps UI components thin",
      "Real e-commerce depth — explicit vehicle compatibility (make / model / year), inventory, payments (capture / refund / void)",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "Axios",
      "SWR",
      "Cloudinary",
      "TypeScript",
    ],
    domain: "Marketplace",
    status: "live",
    org: "sydek",
    year: "2024",
    accent: "ink",
  },
  {
    slug: "liyu-catering",
    name: "Liyu Catering",
    tagline: "Catering site + booking funnel",
    description:
      "A marketing and lead-capture website for an Ethiopian catering business: a public site that converts visitors into structured event inquiries, plus a simple admin area where staff review and triage incoming bookings.",
    highlights: [
      "Marketing site + booking funnel + admin inbox in one Next.js codebase",
      "Server-first mutations — Booking submissions flow through Server Actions, no MongoDB credentials exposed to the client",
      "JWT admin auth with bcrypt password hashing, verified via a dedicated /api/admin/verify endpoint",
      "Brand-led visual system — deep brown #532516 + accent gold #E8982E applied consistently across pages and CTAs",
    ],
    stack: [
      "Next.js (App Router)",
      "React 18",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "JWT",
      "bcryptjs",
    ],
    domain: "Marketing + Booking",
    status: "live",
    org: "sydek",
    year: "2024",
    accent: "warm",
  },
  {
    slug: "kansa-business-group",
    name: "Kansa Business Group",
    tagline: "One brand, seven sectors",
    description:
      "A corporate digital-presence system for a diversified Ethiopian business group operating across education, agriculture, mining, hospitality, aquaculture, wholesale, and a Uganda subsidiary. One Next.js codebase unifies seven business lines under a single brand experience — sector hubs, animated home, and shared chrome.",
    highlights: [
      "Multi-vertical storytelling without seven separate sites — route-per-sector pattern with a shared design language",
      "OKLCH design tokens (emerald + terracotta) consumed via semantic Tailwind v4 utilities — centralized rebrands without touching components",
      "Accessible Radix-based primitives — dialogs, menus, and form controls keyboard- and focus-ready out of the box",
      "Performance-conscious media — Next Image, structured layouts, and minimal layout shift on hero sections",
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "Tailwind CSS v4",
      "OKLCH tokens",
      "React Hook Form",
      "Zod",
      "Lucide",
    ],
    domain: "Corporate / Marketing",
    status: "live",
    org: "sydek",
    year: "2026",
    url: "https://kansatrading.com/",
    accent: "lavender",
  },
  {
    slug: "sydek-rag",
    name: "Sydek RAG Scoping",
    tagline: "An AI scoping engine in place of a contact form",
    description:
      "An AI-driven conversational interface that replaces the traditional “Contact Us” intake. Visitors are led through an adaptive dialogue that extracts requirements, validates assumptions via Quiz Mode, and produces near-production-ready PRDs and financial models — grounded in Sydek's historical artifacts via RAG.",
    highlights: [
      "Multi-turn dialogue with intent detection and dynamic question generation",
      "Vector-grounded retrieval over prior PRDs, financial models, and case studies",
      "Quiz Mode for ambiguity resolution — multiple choice, yes/no, priority ranking",
      "PRD and Pearson-style financial model generation with CRM hand-off and human escalation",
    ],
    stack: [
      "Next.js",
      "Go",
      "gRPC + gRPC Gateway",
      "Vector DB",
      "LLM pipeline",
    ],
    domain: "AI / RAG",
    status: "in-development",
    org: "sydek",
    year: "2026",
    accent: "lavender",
  },
];
