/**
 * Portfolio / case-study data for `/solutions/projects`.
 * Paths are served from `/public` (e.g. `/assets/images/...`).
 */
import { STACK_LOGOS } from "@/lib/stack-logos";

export interface PortfolioIntegration {
  name: string;
  src: string;
}

export interface PortfolioStackTech {
  name: string;
  logoSrc: string;
}

export interface PortfolioProjectRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  /** Matches `CaseStudy.id` when `/company/case-studies/[id]` should be the spotlight target. */
  caseStudyId?: string;
  tags: string[];
  features: string[];
  integrationLogos: PortfolioIntegration[];
  stack: PortfolioStackTech[];
}

const reactNextAws: PortfolioStackTech[] = [
  { name: "React", logoSrc: STACK_LOGOS.react },
  { name: "Next.js", logoSrc: STACK_LOGOS.nextjs },
  { name: "TypeScript", logoSrc: STACK_LOGOS.typescript },
  { name: "Tailwind CSS", logoSrc: STACK_LOGOS.tailwindcss },
  { name: "AWS", logoSrc: STACK_LOGOS.aws },
];

const aiSocialStack: PortfolioStackTech[] = [
  { name: "React", logoSrc: STACK_LOGOS.react },
  { name: "Next.js", logoSrc: STACK_LOGOS.nextjs },
  { name: "TypeScript", logoSrc: STACK_LOGOS.typescript },
  { name: "OpenAI", logoSrc: STACK_LOGOS.openai },
  { name: "Node.js", logoSrc: STACK_LOGOS.nodejs },
  { name: "MongoDB", logoSrc: STACK_LOGOS.mongodb },
];

const mobileFirebaseStack: PortfolioStackTech[] = [
  { name: "React", logoSrc: STACK_LOGOS.react },
  { name: "TypeScript", logoSrc: STACK_LOGOS.typescript },
  { name: "Firebase", logoSrc: STACK_LOGOS.firebase },
  { name: "Node.js", logoSrc: STACK_LOGOS.nodejs },
];

export const portfolioProjects: PortfolioProjectRecord[] = [
  {
    id: "nibertad",
    title: "NiberTad",
    description:
      "A pioneering real estate dealership platform in Ethiopia, offering property advertisements with a user-centric software design.",
    category: "Web Platform",
    image: "/assets/images/projects/nibertad.png",
    link: "https://nibretad.com",
    caseStudyId: "nibertad",
    tags: ["Real Estate", "Platform", "Ethiopia"],
    features: [
      "Regional listing discovery and brokerage workflows",
      "Responsive dashboards for brokers and renters",
      "Operational analytics for inquiries and engagements",
      "Performance-minded UI for constrained networks",
      "Secure onboarding and credential flows",
    ],
    integrationLogos: [
      { name: "AWS", src: STACK_LOGOS.aws },
      { name: "Stripe", src: STACK_LOGOS.stripe },
      { name: "Supabase", src: STACK_LOGOS.supabase },
    ],
    stack: reactNextAws,
  },
  {
    id: "diplomat-corner",
    title: "Diplomat Corner",
    description:
      "A trusted service platform for the diplomatic community in Ethiopia — property, mobility, and liaison support.",
    category: "Service Platform",
    image: "/assets/images/projects/diplomat-corner.png",
    link: "/company/contact",
    caseStudyId: "diplomat-corner",
    tags: ["Diplomatic Services", "Platform", "Ethiopia"],
    features: [
      "Service catalog for housing, rentals, and logistics",
      "Role-based concierge coordination",
      "Audit-friendly booking and SLA tracking",
      "Multilingual-ready content framework",
      "Analytics for fulfillment and utilization",
    ],
    integrationLogos: [
      { name: "Slack", src: "/assets/images/products/slack.png" },
      { name: "Salesforce", src: "/assets/images/products/salesforce.png" },
      { name: "Stripe", src: STACK_LOGOS.stripe },
    ],
    stack: [
      { name: "Next.js", logoSrc: STACK_LOGOS.nextjs },
      { name: "React", logoSrc: STACK_LOGOS.react },
      { name: "TypeScript", logoSrc: STACK_LOGOS.typescript },
      { name: "GraphQL", logoSrc: STACK_LOGOS.graphql },
      { name: "Supabase", logoSrc: STACK_LOGOS.supabase },
    ],
  },
  {
    id: "9grocery",
    title: "9 Grocery",
    description:
      "Grocery commerce with streamlined ordering and delivery coordination for busy households.",
    category: "Mobile App & E-commerce",
    image: "/assets/images/projects/9grocery.png",
    link: "/company/contact",
    caseStudyId: "9grocery",
    tags: ["Mobile App", "E-commerce", "Grocery"],
    features: [
      "Inventory-aware cart and substitutions",
      "Delivery slot orchestration",
      "Push notifications for order state",
      "Promotions engine for recurring buyers",
      "Merchant ops console for SKU health",
    ],
    integrationLogos: [
      { name: "Shopify", src: "/assets/images/products/shopify.png" },
      { name: "Stripe", src: STACK_LOGOS.stripe },
      { name: "Firebase", src: STACK_LOGOS.firebase },
    ],
    stack: mobileFirebaseStack,
  },
  {
    id: "pandro",
    title: "Pandro",
    description:
      "Instagram DM automation tuned for conversational commerce and repeatable playbooks.",
    category: "AI Tool & Social Media",
    image: "/assets/images/projects/pandro.png",
    link: "/company/contact",
    caseStudyId: "pandro",
    tags: ["AI", "Instagram", "Automation"],
    features: [
      "Template libraries with personalization tokens",
      "Guardrails for rate limits and policy safety",
      "Conversation analytics across campaigns",
      "Webhook-ready CRM handoff",
      "Team workspaces with approvals",
    ],
    integrationLogos: [
      { name: "Slack", src: "/assets/images/products/slack.png" },
      { name: "OpenAI", src: STACK_LOGOS.openai },
      { name: "MongoDB", src: STACK_LOGOS.mongodb },
    ],
    stack: aiSocialStack,
  },
  {
    id: "cadolast",
    title: "Cadolast",
    description:
      "Listen-first reader: playlists from articles powered by expressive text-to-speech.",
    category: "Web Application & Accessibility",
    image: "/assets/images/projects/cadolast.png",
    link: "/company/contact",
    caseStudyId: "cadolast",
    tags: ["TTS", "Accessibility", "Productivity"],
    features: [
      "Adaptive voices and playback controls",
      "Queue management for binge listening",
      "Offline-friendly caches for saved articles",
      "Accessibility-first keyboard navigation",
      "Usage insights for comprehension modes",
    ],
    integrationLogos: [
      { name: "OpenAI", src: STACK_LOGOS.openai },
      { name: "AWS", src: STACK_LOGOS.aws },
      { name: "Vercel", src: STACK_LOGOS.vercel },
    ],
    stack: [
      { name: "React", logoSrc: STACK_LOGOS.react },
      { name: "Next.js", logoSrc: STACK_LOGOS.nextjs },
      { name: "TypeScript", logoSrc: STACK_LOGOS.typescript },
      { name: "OpenAI", logoSrc: STACK_LOGOS.openai },
      { name: "AWS", logoSrc: STACK_LOGOS.aws },
    ],
  },
  {
    id: "wisetoq",
    title: "WiseToq",
    description:
      "AI-assisted TikTok engagement that reads transcripts before it comments.",
    category: "AI Tool & Social Media",
    image: "/assets/images/projects/wisetoq.png",
    link: "/company/contact",
    caseStudyId: "wisetoq",
    tags: ["AI", "TikTok", "Engagement"],
    features: [
      "Transcript ingestion for safer relevance",
      "Brand voice packs for consistent tone",
      "Experiment tracking per niche",
      "Human-in-the-loop approvals",
      "Cost and token observability dashboards",
    ],
    integrationLogos: [
      { name: "OpenAI", src: STACK_LOGOS.openai },
      { name: "Slack", src: "/assets/images/products/slack.png" },
      { name: "MongoDB", src: STACK_LOGOS.mongodb },
    ],
    stack: aiSocialStack,
  },
];
