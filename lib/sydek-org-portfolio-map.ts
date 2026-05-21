/**
 * Bridges `SydekOrgProject` corpus into spotlight grid types used by `ProjectsGrid`
 * / `ProductGrid`.
 */
import type { PortfolioIntegration, PortfolioProjectRecord, PortfolioStackTech } from "@/data/projects-portfolio";
import { STACK_LOGOS, type StackLogoKey } from "@/lib/stack-logos";
import type { SydekOrgProject } from "@/data/sydek-org-projects";

const PLACEHOLDER_LOGO =
  "/placeholder.svg?height=48&width=48&query=technology";

/** Poster art for catalogue cards — extend as marketing assets arrive. */
const GRID_ART: Partial<Record<string, string>> = {
  "diplomat-corner": "/assets/images/projects/diplomat-corner.png",
};

/** Case study detail routes for portfolio slugs mirroring `@/data/case-studies`. */
const CASE_STUDY_ID_BY_SLUG: Partial<Record<string, string>> = {
  "diplomat-corner": "diplomat-corner",
  embedur: "embedur",
  "addis-spare": "addis-spare",
  "liyu-catering": "liyu-catering",
  "kansa-business-group": "kansa-business-group",
  "sydek-rag": "sydek-rag",
};

function inferStackLogoKey(line: string): StackLogoKey | undefined {
  const s = line.trim().toLowerCase();
  // Narrow matches first — stack lines are prose labels from the corpus.
  if (/grpc\b|grpc\s+gateway/.test(s)) return "grpc";
  if (/mongoose\b/.test(s)) return "mongoose";
  if (/tanstack\b/.test(s)) return "datatables";
  if (/react\s+hook\s+form\b/.test(s)) return "veevalidate";
  if (/oklch\b|design\s+tokens/.test(s)) return "css3";
  if (/protobuf\b|protocol\s+buffers\b/.test(s)) return "protobuf";
  if (/\bvector\s+db\b|vector\s+database\b/.test(s)) return "elasticsearch";
  if (/\bllm\b|llm\s+pipeline/.test(s)) return "pytorch";
  if (/bcrypt/.test(s)) return "nodejs";
  if (/jwt\b|\bjson\s+web\s+token\b/.test(s)) return "oauth";
  if (/\bzod\b/.test(s)) return "json";
  if (/clerk\b/.test(s)) return "oauth";
  if (/lucide\b/.test(s)) return "feathersjs";
  if (/radix\b|\bradix\s+ui\b/.test(s)) return "tailwindcss";
  if (/shadcn/.test(s)) return "tailwindcss";
  if (/\bnestjs\b/.test(s)) return "nestjs";
  if (/prisma\b/.test(s)) return "prisma";
  if (/postgresql\b|\bpostgres\b/.test(s)) return "postgresql";
  if (/turborepo\b|\bturbo\b/.test(s)) return "turbo";
  if (/\bbun\b/.test(s)) return "bun";
  if (/axios\b/.test(s)) return "axios";
  if (/\bswr\b/.test(s)) return "vercel";
  if (/cloudinary\b/.test(s)) return "aws";
  if (/\bgolang\b|\bgo\s*\+\s*chi\b|^go\b$/.test(s)) return "go";
  if (/(?:^|[\s/({:,])next\.?\s*js\b|(?:^|[\s/({:,])next\s+js\b/.test(s))
    return "nextjs";
  if (/\breact\b/.test(s)) return "react";
  if (/typescript\b|\btsx\b|\btype\s*:\s*"react"/.test(s)) return "typescript";
  if (/tailwind\b/.test(s)) return "tailwindcss";
  if (/node\.?js\b/.test(s)) return "nodejs";
  if (/mongo(db)?/.test(s)) return "mongodb";
  if (/aws\b|amazon\b/.test(s)) return "aws";
  if (/supabase\b/.test(s)) return "supabase";
  if (/firebase\b/.test(s)) return "firebase";
  if (/graphql\b/.test(s)) return "graphql";
  if (/vercel\b/.test(s)) return "vercel";
  if (/\bslack\b/.test(s)) return "slack";
  if (/\bopenai\b/.test(s)) return "openai";
  return undefined;
}

function uniqueLogoKeys(stack: string[]): StackLogoKey[] {
  const out: StackLogoKey[] = [];
  const seen = new Set<string>();
  for (const line of stack) {
    const k = inferStackLogoKey(line);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(k);
    if (out.length >= 6) break;
  }
  return out;
}

function stackLinesToPortfolioTechnologies(lines: string[]): PortfolioStackTech[] {
  return lines.map((name) => {
    const trimmed = name.trim();
    const logoKey = inferStackLogoKey(trimmed);
    const logoSrc = logoKey ? STACK_LOGOS[logoKey] : PLACEHOLDER_LOGO;
    return { name: trimmed, logoSrc };
  });
}

function stackLinesToIntegrationLogos(stack: string[]): PortfolioIntegration[] {
  const keys = uniqueLogoKeys(stack);
  if (keys.length === 0) {
    return [{ name: "Stack", src: PLACEHOLDER_LOGO }];
  }
  return keys.map((k) => ({
    name: k.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()),
    src: STACK_LOGOS[k],
  }));
}

function spotlightHref(project: SydekOrgProject): string {
  const caseStudy = CASE_STUDY_ID_BY_SLUG[project.slug];
  if (caseStudy) return `/company/case-studies/${caseStudy}`;
  if (project.url) return project.url;
  return "/company/contact";
}

export function sydekOrgProjectToPortfolioRecord(
  project: SydekOrgProject
): PortfolioProjectRecord {
  const href = spotlightHref(project);
  const integrationLogos = stackLinesToIntegrationLogos(project.stack);
  const stackTech = stackLinesToPortfolioTechnologies(project.stack);

  return {
    id: project.slug,
    title: project.name,
    description: project.tagline,
    category: project.domain,
    image: GRID_ART[project.slug] ?? PLACEHOLDER_LOGO,
    link: href,
    caseStudyId: CASE_STUDY_ID_BY_SLUG[project.slug],
    tags:
      stackTech.length > 0
        ? stackTech.slice(0, 4).map((t) => t.name)
        : [project.domain, project.year ?? "", project.status].filter(Boolean),
    features: project.highlights.slice(0, 6),
    integrationLogos,
    stack: stackTech.slice(0, 10),
  };
}

export function sydekOrgProjectsToPortfolioRecords(
  projects: SydekOrgProject[]
): PortfolioProjectRecord[] {
  return projects.map(sydekOrgProjectToPortfolioRecord);
}
