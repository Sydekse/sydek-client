/** Grouping for `/company/case-studies` tabs. */
export type CaseStudySuite = "sydek-product" | "client-project";

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

export interface CaseStudy {
  id: string;
  suite: CaseStudySuite;
  title: string;
  /** Shown as “Client / Partner” in UI */
  client: string;
  description: string;
  category: string;
  industry: string;
  results: string[];
  image: string;
  featured: boolean;
  duration?: string;
  servicesProvided?: string[];
  challengeBullets?: string[];
  contentSections: CaseStudySection[];
}

function sectionsFrom(
  intro: string[],
  approach: string[],
  outcome: string[]
): CaseStudySection[] {
  return [
    { heading: "Context", paragraphs: intro },
    { heading: "What we shipped", paragraphs: approach },
    { heading: "Outcomes & learnings", paragraphs: outcome },
  ];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "wegenie",
    suite: "sydek-product",
    title: "Wegenie — crowdfunding with trust at the center",
    client: "Sydek (product)",
    description:
      "A crowdfunding platform for genuine causes: transparent funding, fair fees, and localized payment rails.",
    category: "Product & Platform",
    industry: "Crowdfunding",
    results: [
      "Multi-rail payments (Chapa, Telebirr, Stripe)",
      "Campaign tooling built for trust and clarity",
      "Real-time visibility for backers and organizers",
    ],
    image: "/assets/images/products/wegenie.png",
    featured: true,
    duration: "Ongoing product evolution",
    servicesProvided: [
      "Product strategy & UX",
      "Full-stack delivery",
      "Payments & compliance patterns",
      "Analytics & operations consoles",
    ],
    challengeBullets: [
      "Backers need transparency and low friction across devices.",
      "Regional payment methods must sit beside global cards.",
      "Organizers need crisp storytelling without losing compliance.",
    ],
    contentSections: sectionsFrom(
      [
        "Wegenie helps individuals and organizations fundraise with a secure, transparent environment. The mandate was simple on paper — make giving feel safe — and complex in practice across payments, payouts, and trust signals.",
      ],
      [
        "We designed campaign flows around clarity: progress, payouts, and risk signals surfaced early. Payments integrated multiple rails so geography did not limit participation. Organizer tooling keeps campaigns coherent without heavyweight admin overhead.",
      ],
      [
        "The product reinforces trust as a flywheel: clear fees, understandable timelines, and visible delivery of funds. Operational analytics help organizers iterate announcements and tiers without guesswork.",
      ]
    ),
  },
  {
    id: "fetan",
    suite: "sydek-product",
    title: "Fetan — fintech APIs builders can rely on",
    client: "Sydek (product)",
    description:
      "Fast currency tooling and dependable APIs so teams can embed exchange and payments without re-learning money movement.",
    category: "Fintech APIs",
    industry: "Finance",
    results: [
      "Real-time FX surfaces",
      "Developer-first documentation posture",
      "Operational reliability baked into SLAs",
    ],
    image: "/assets/images/products/fetan.png",
    featured: true,
    duration: "Ongoing operations",
    servicesProvided: [
      "API surface design",
      "Security & reconciliation patterns",
      "Docs & onboarding",
    ],
    challengeBullets: [
      "FX data must stay fresh without surprising integrators.",
      "Errors need to be legible across languages and dashboards.",
      "Business users and developers share the same trust bar.",
    ],
    contentSections: sectionsFrom(
      [
        "Fetan targets teams that need credible exchange primitives without assembling a treasury desk. Velocity matters, but correctness matters more.",
      ],
      [
        "We focused on deterministic responses, sane defaults, and documentation that respects a developer’s clock. Operational tooling keeps reconciliation visible so finance teams aren’t guessing.",
      ],
      [
        "The result is an API posture that earns repeat integration: predictable behavior, observable health, and a path from prototype to revenue-grade usage.",
      ]
    ),
  },
  {
    id: "tibeb",
    suite: "sydek-product",
    title: "Tibeb — learning that scales with the learner",
    client: "Sydek (product)",
    description:
      "Accessible courses spanning business, technology, and growth skills — engineered for cohorts that need structure and warmth.",
    category: "Education platform",
    industry: "EdTech",
    results: [
      "Progress surfaced for instructors and learners",
      "Operational workflows for curriculum teams",
      "Engagement tooling tuned for cohort dynamics",
    ],
    image: "/assets/images/products/tibeb.png",
    featured: false,
    duration: "Iterative roadmap",
    servicesProvided: ["Learning UX", "Content tooling", "Assessments & analytics"],
    challengeBullets: [
      "Learners need pacing without abandonment.",
      "Instructors need signal, not spreadsheets.",
      "Curriculum evolves faster than brittle CMSes allow.",
    ],
    contentSections: sectionsFrom(
      [
        "Tibeb concentrates on unlocking potential across skill levels — which means respecting attention, scaffolding practice, and making progress legible.",
      ],
      [
        "We stitched together curriculum management, grading light-paths, and community touchpoints so the product feels humane at scale.",
      ],
      [
        "Operational analytics help creators see what resonates, iterate modules, and keep cohort sentiment healthy.",
      ]
    ),
  },
  {
    id: "echolens",
    suite: "sydek-product",
    title: "Echolens — TikTok analytics with an AI lens",
    client: "Sydek (product)",
    description:
      "Signals for creators and teams — virality cues, summaries, and exportable narratives instead of noisy dashboards.",
    category: "AI & Analytics",
    industry: "Media",
    results: [
      "Narratives over raw grids",
      "Filtering tuned for decisive weekly reviews",
      "Secure workspace for collaborators",
    ],
    image: "/assets/images/products/serp.png",
    featured: true,
    duration: "Continuous iteration",
    servicesProvided: ["Data UX", "Model-assisted insights", "Export & reporting flows"],
    challengeBullets: [
      "Creators refuse another dashboard maze.",
      "Insights must survive weekly review rhythms.",
      "Trust requires transparent scoring, not vibes.",
    ],
    contentSections: sectionsFrom(
      [
        "Echolens targets teams that live on TikTok velocity: they need sharper reads on what drove lift last week — not another vanity chart.",
      ],
      [
        "We combined filtering with narrative summaries so decisions move faster than export-and-pivot loops. Collaboration stays scoped without leaking drafts.",
      ],
      [
        "Outcomes skew toward repeatable reviews: sharper bets, tighter creative cycles, and fewer Friday fire drills chasing theories.",
      ]
    ),
  },
  {
    id: "nibertad",
    suite: "client-project",
    title: "NiberTad — real estate commerce for Ethiopia",
    client: "NiberTad",
    description:
      "A dealership-grade web platform showcasing properties with pragmatic UX tuned for Ethiopian connectivity realities.",
    category: "Marketplace platform",
    industry: "Real estate",
    results: [
      "Broker-ready listing workflows",
      "Performance-conscious UI paths",
      "Analytics on inquiry momentum",
    ],
    image: "/assets/images/projects/nibertad.png",
    featured: true,
    duration: "Engagement spanning multiple releases",
    servicesProvided: ["Product design", "Web platform", "Infra-aligned delivery"],
    challengeBullets: [
      "Listings must feel trustworthy despite fragmented data upstream.",
      "Mobile-first journeys dominate early discovery.",
      "Broker teams need repeatable operations, not one-off setups.",
    ],
    contentSections: sectionsFrom(
      [
        "NiberTad needed a storefront-class experience for listings without drowning operators in heavyweight CRM bloat.",
      ],
      [
        "We concentrated on brokerage workflows — inquiry capture, repeatable listing patterns, and fast pages on constrained networks.",
      ],
      [
        "Momentum shows up where teams live day-to-day: fewer drop-offs mid-inquiry and clearer attribution on what converts.",
      ]
    ),
  },
  {
    id: "diplomat-corner",
    suite: "client-project",
    title: "Diplomat Corner — marketplace for the diplomatic community",
    client: "Diplomat Corner",
    description:
      "An Ethiopia-first marketplace where diplomatic members list duty-free cars, rentals, and homes — public marketplace plus operator tools, Clerk-backed identity, and threaded messaging between buyers and sellers.",
    category: "Marketplace platform",
    industry: "Marketplaces & services",
    results: [
      "Role-aware listing rules enforced server-side (canMutateListing, admin gates)",
      "Newest-first discovery across legacy and new inventory",
      "Dual messaging pathways with inbox threading, dedupe, and category labels",
    ],
    image: "/assets/images/projects/diplomat-corner.png",
    featured: true,
    duration: "Live · 2025 refresh",
    servicesProvided: [
      "Marketplace UX + admin back-office",
      "Go API with MongoDB and authorization model",
      "Identity (Clerk) and messaging primitives",
      "Operational modules (featured products, cron refreshes)",
    ],
    challengeBullets: [
      "Public listings must stay trustworthy while admins move fast.",
      "Conversation history spans legacy data and richer threaded models.",
      "Featured inventory needs predictable refresh without ops drag.",
    ],
    contentSections: sectionsFrom(
      [
        "Diplomat Corner targets the diplomatic corridor in Ethiopia — duty-sensitive inventory and messaging expectations that behave more like procurement than casual classifieds.",
      ],
      [
        "Sydek layered a Next.js client and Go + Chi backend on MongoDB, with Clerk securing identity and a messaging model that carries both legacy traffic and threaded inboxes.",
      ],
      [
        "The build prioritizes guarded mutations and operator clarity: newest-first catalogs, repeatable admin approvals, and a featured-products rhythm that scales with marketing rhythms.",
      ]
    ),
  },
  {
    id: "embedur",
    suite: "client-project",
    title: "EmbedUr — outbound control plane RevOps can read",
    client: "EmbedUr",
    description:
      "Multi-tenant cold outreach with campaigns, lead enrichment pipelines, webhook orchestration (n8n), and ingestible replies — one surface for sequencing, integrations, and why a touch failed.",
    category: "RevOps automation",
    industry: "Outbound & integrations",
    results: [
      "NestJS modular monolith with Prisma jobs and isolation per tenant",
      "Webhook-driven flows with idempotent ingestion for replies and bookings",
      "Next.js 15 dashboards with Axios + slice-based auth ergonomics",
    ],
    image: "/placeholder.svg?height=686&width=1600&query=EmbedUr%20dashboard",
    featured: false,
    duration: "Live · 2025",
    servicesProvided: [
      "Outbound architecture & integration mapping",
      "NestJS + Prisma workflows",
      "Next.js dashboards and BFF route handlers",
    ],
    challengeBullets: [
      "Each tenant blends different vendors yet needs one audit narrative.",
      "Reply traffic must hydrate CRMs without double-counting webhook noise.",
      "Operators need deterministic reasons when enrichment or send paths fail.",
    ],
    contentSections: sectionsFrom(
      [
        "EmbedUr concentrates on observable outbound — connecting Smartlead-style sending with Bright Data/TexAu enrichment and n8n hooks without hiding failure modes.",
      ],
      [
        "Sydek shaped a NestJS core with PostgreSQL via Prisma, modularizing jobs and tenancy while the Next.js 15 tier surfaces ingestion state and Axios-powered clients.",
      ],
      [
        "RevOps now sees lineage from lead → enrichment attempt → outbound → reply ingest, shortening the forensic loop whenever a corridor stalls.",
      ]
    ),
  },
  {
    id: "addis-spare",
    suite: "client-project",
    title: "Addis Spare — spare parts catalogue with three roles",
    client: "Addis Spare",
    description:
      "Ethiopia-first automotive marketplace linking buyers (owners, mechanics) and suppliers plus operator consoles for catalog, inventory, payments, and onboarding — Axios service layers with JWT-aware sessions.",
    category: "Marketplace platform",
    industry: "Automotive & commerce",
    results: [
      "Customer · supplier · admin workflows on shared design primitives",
      "Refresh-token-aware sessions with deterministic logout flows",
      "Vehicle-fit metadata (make / model / year) driving inventory truth",
    ],
    image: "/placeholder.svg?height=686&width=1600&query=Addis%20Spare",
    featured: false,
    duration: "Live · 2024",
    servicesProvided: [
      "Marketplace storefront + ops surfaces",
      "Role-aware authentication model",
      "Payment capture / refund / void flows",
      "Domain-driven Axios modules separating UI thinness",
    ],
    challengeBullets: [
      "Three audiences share one codebase without leaking controls.",
      "Parts metadata must survive inventory churn and supplier quirks.",
      "Payment edge cases demand calm operator tooling and APIs.",
    ],
    contentSections: sectionsFrom(
      [
        "Addis Spare needed retail-grade depth inside Ethiopia’s aftermarket reality — fragmented suppliers, multilingual buyers, and thin patience for flaky availability.",
      ],
      [
        "Sydek unified storefront, supplier operations, and admin back-office atop Next.js 15 with Tailwind v4 primitives, Axios modules per domain, and SWR-aligned data reads plus Cloudinary media.",
      ],
      [
        "The payoff is coherence: onboarding gates for suppliers, resilient JWT sessions that retry refresh before hard logout, and payments that reconcile capture/refund semantics without brittle scripts.",
      ]
    ),
  },
  {
    id: "liyu-catering",
    suite: "client-project",
    title: "Liyu Catering — marketing site with a booking nerve center",
    client: "Liyu Catering",
    description:
      "Public catering marketing site that funnels structured event inquiries through Server Actions, paired with a compact admin desk for triage — Mongo + Mongoose on the server only, JWT admin auth with bcrypt verification.",
    category: "Marketing + booking",
    industry: "Hospitality",
    results: [
      "Server Actions keep credentials off the browser",
      "Dedicated admin verification endpoint enforcing bcrypt checks",
      "Brand palette anchored in deep brown #532516 + gold #E8982E",
    ],
    image: "/placeholder.svg?height=686&width=1600&query=Liyu%20Catering",
    featured: false,
    duration: "Live · 2024",
    servicesProvided: [
      "Landing + funnel UX",
      "Server Actions ingestion model",
      "MongoDB/Mongoose persistence",
      "Radix-heavy accessible forms",
    ],
    challengeBullets: [
      "Bookings demand structured payloads without heavyweight CRM spend.",
      "Staff need humane triage, not spreadsheets.",
      "Brand fidelity must propagate through CTAs without CSS sprawl.",
    ],
    contentSections: sectionsFrom(
      [
        "Liyu needed conversion clarity for catering inquiries while insulating database credentials entirely from clients.",
      ],
      [
        "Sydek leaned on Next.js App Router flows with Server Actions, Mongo-backed persistence through Mongoose, and JWT-backed admin tooling with bcrypt hashing verified through a dedicated `/api/admin/verify` handshake.",
      ],
      [
        "Operators gain a deterministic inbox narrative while diners see a tactile brand system expressed through Tailwind + Radix components tuned to Ethiopian palate cues.",
      ]
    ),
  },
  {
    id: "kansa-business-group",
    suite: "client-project",
    title: "Kansa Business Group — one brand across seven sectors",
    client: "Kansa Business Group",
    description:
      "Corporate web system for education, agriculture, mining, hospitality, aquaculture, wholesale, and cross-border footprints — routed sector hubs sharing chrome, emerald + terracotta OKLCH tokens, and accessible Radix primitives.",
    category: "Corporate storytelling",
    industry: "Conglomerate / multi-vertical",
    results: [
      "Route-per-sector pattern without seven divergent repos",
      "Semantic Tailwind v4 consuming OKLCH theme tokens",
      "Keyboard-ready overlays and forms via Radix",
    ],
    image: "/placeholder.svg?height=686&width=1600&query=Kansa%20Business%20Group",
    featured: true,
    duration: "Live · 2026",
    servicesProvided: [
      "Information architecture for multi-vertical narrative",
      "Design token system (OKLCH) + Tailwind v4 utilities",
      "React Hook Form + Zod validation surfaces",
    ],
    challengeBullets: [
      "Seven industries must still read as one house brand.",
      "Rebrands cannot require touching every JSX atom.",
      "Motion and media-heavy heroes must stay CLS-conscious.",
    ],
    contentSections: sectionsFrom(
      [
        "Kansa stitches seven operating vectors under one marquee — educators, miners, hospitality teams, wholesalers, aquaculture ventures, agronomists, and cross-border subsidiaries.",
      ],
      [
        "Sydek encoded emerald + terracotta OKLCH tokens into semantic Tailwind v4 utilities, pairing Lucide accents with Radix dialogs/menus/forms for keyboard parity.",
      ],
      [
        "Stakeholders reorder sectors without spawning microsites — sector routes inherit shared chrome while respecting Next Image performance budgets on animated hero choreography.",
      ]
    ),
  },
  {
    id: "sydek-rag",
    suite: "sydek-product",
    title: "Sydek RAG Scoping — contact forms replaced by conversational scoping",
    client: "Sydek (platform experiment)",
    description:
      "Adaptive dialogue that gathers requirements, runs Quiz Mode to resolve ambiguity, and grounds answers via vector retrieval across Sydek’s historical PRDs, models, and case studies.",
    category: "AI / RAG",
    industry: "Product intelligence",
    results: [
      "Intent-guided multi-turn prompting with prioritized follow-ups",
      "Vector-grounded answers referencing internal artifacts",
      "Outputs toward CRM-ready briefs plus human escalation seams",
    ],
    image: "/placeholder.svg?height=686&width=1600&query=RAG%20scoping",
    featured: false,
    duration: "In development · 2026",
    servicesProvided: [
      "Conversation design",
      "Retrieval pipelines + embeddings governance",
      "Go services with gRPC + gateway surfaces",
      "LLM orchestration for PRD + spreadsheet-grade outputs",
    ],
    challengeBullets: [
      "Ambiguous prompts need deterministic quiz scaffolding.",
      "Financial models demand rigor comparable to spreadsheets.",
      "Escalations must handshake cleanly into human CRM flows.",
    ],
    contentSections: sectionsFrom(
      [
        "Sydek treats first contact as scoped delivery — extracting scope, ambiguity, and financial guardrails instead of warehousing another generic lead.",
      ],
      [
        "A Next.js experience fronts Go services reachable through gRPC + gateway paths, grounding responses with vector-retrieved artifacts spanning PRDs and historical models.",
      ],
      [
        "Quiz Mode trims uncertainty with structured forks, producing near-production PRDs/Pearson-style spreadsheets while reserving human escalation when novelty spikes.",
      ]
    ),
  },
  {
    id: "9grocery",
    suite: "client-project",
    title: "9 Grocery — mobile-first grocery journeys",
    client: "9 Grocery",
    description:
      "Ordering and fulfilment choreography with notifications and merchant tooling aligned to SKU reality.",
    category: "Mobile commerce",
    industry: "Retail",
    results: [
      "Slot orchestration for delivery",
      "Merchant visibility into SKU health",
      "Reliable lifecycle messaging for buyers",
    ],
    image: "/assets/images/projects/9grocery.png",
    featured: false,
    servicesProvided: ["Mobile UX", "Order orchestration", "Merchant dashboards"],
    challengeBullets: [
      "Basket truth must survive substitutions.",
      "Delivery promises require truthful inventory seams.",
      "Merchants refuse opaque black boxes.",
    ],
    contentSections: sectionsFrom(
      [
        "Grocery UX fails fastest when substitutions feel random and slots feel dishonest.",
      ],
      [
        "We paired buyer messaging with fulfilment dashboards so substitutions were explainable and slots matched reality.",
      ],
      [
        "Ops teams reclaimed hours previously lost to manual intervention while buyers saw fewer apologies.",
      ]
    ),
  },
  {
    id: "pandro",
    suite: "client-project",
    title: "Pandro — conversational automation that respects Instagram",
    client: "Pandro",
    description:
      "Automation for DMs grounded in personalization tokens, approvals, and rate-aware guardrails.",
    category: "AI automation",
    industry: "Social commerce",
    results: [
      "Template libraries tuned for personalization",
      "Analytics across campaigns rather than anecdotes",
      "Guardrails honoring platform etiquette",
    ],
    image: "/assets/images/projects/pandro.png",
    featured: false,
    servicesProvided: ["Automation design", "AI-assisted messaging", "Integrations"],
    challengeBullets: [
      "DM automation can cross from helpful to noisy fast.",
      "Teams still need approvals and audit traces.",
      "Analytics must reconcile campaign intent with inbox reality.",
    ],
    contentSections: sectionsFrom(
      [
        "Pandro narrows on Instagram-led revenue — automation must feel human and stay inside policy envelopes.",
      ],
      [
        "We shipped guardrailed sequencing, workspaces for approvals, and analytics that reconcile campaign promises with replies.",
      ],
      [
        "Growth teams reclaimed creative cycles while compliance-adjacent teams slept better.",
      ]
    ),
  },
  {
    id: "cadolast",
    suite: "client-project",
    title: "Cadolast — reading that listens back",
    client: "Cadolast",
    description:
      "Article-to-audio playlists with expressive TTS pathways and queues built for commuters and learners.",
    category: "Web application",
    industry: "Media & accessibility",
    results: [
      "Voice controls that respect context switching",
      "Queues that binge safely",
      "Accessibility-first chrome",
    ],
    image: "/assets/images/projects/cadolast.png",
    featured: false,
    servicesProvided: ["Audio UX", "Content pipelines", "Performance tuning"],
    challengeBullets: [
      "Long-form intake must tolerate interruptions.",
      "TTS fidelity cannot cost battery or attention.",
      "Accessibility is the default surface, not a bolt-on.",
    ],
    contentSections: sectionsFrom(
      [
        "Cadolast reframes articles as playlists — commuters need forgiving controls and trustworthy queues.",
      ],
      [
        "We prioritized keyboard flows, buffering strategies, and voice selection that survives backgrounding on mobile browsers.",
      ],
      [
        "Readers spend more uninterrupted minutes learning while editors see which formats convert to listens.",
      ]
    ),
  },
  {
    id: "wisetoq",
    suite: "client-project",
    title: "WiseToq — TikTok engagement grounded in transcripts",
    client: "WiseToq",
    description:
      "AI-assisted comments informed by transcripts, brand packs, and human approvals before anything ships.",
    category: "AI & social tooling",
    industry: "Media",
    results: [
      "Relevance tied to transcripts, not guesswork",
      "Brand packs keep tone reproducible",
      "Human checkpoints before outbound noise",
    ],
    image: "/assets/images/projects/wisetoq.png",
    featured: false,
    servicesProvided: ["AI workflow design", "Experiment tracking", "Cost observability"],
    challengeBullets: [
      "Engagement tooling can torch brand sentiment overnight.",
      "Operators need repeatable experiments.",
      "Token spend must remain legible finance-wise.",
    ],
    contentSections: sectionsFrom(
      [
        "WiseToq helps teams automate TikTok comments without pretending context does not matter.",
      ],
      [
        "We leaned on transcripts, approvals, and brand voice packs so automation amplified humans instead of replacing judgment.",
      ],
      [
        "Growth teams iterated faster while brand stewards retained veto paths and accountants saw proportional spend telemetry.",
      ]
    ),
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}

export function getRelatedCaseStudies(
  currentId: string,
  limit = 3
): CaseStudy[] {
  const pool = caseStudies.filter((c) => c.id !== currentId);
  const featuredFirst = [...pool.filter((c) => c.featured), ...pool.filter((c) => !c.featured)];
  return featuredFirst.slice(0, limit);
}
