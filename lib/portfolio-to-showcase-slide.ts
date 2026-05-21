import type { PortfolioProjectRecord } from "@/data/projects-portfolio";
import type { SydekShowcaseAccent, SydekShowcaseProject } from "@/lib/sydek-org-projects";

const ACCENT_CYCLE: SydekShowcaseAccent[] = [
  "purple",
  "lavender",
  "warm",
  "ink",
];

/** Maps `PortfolioProjectRecord` rows into `SydekShowcaseProject` carousel slides (`/solutions/projects`). */
export function portfolioRecordToShowcaseSlide(
  record: PortfolioProjectRecord,
  accentIndex: number
): SydekShowcaseProject {
  return {
    slug: record.id,
    name: record.title,
    tagline:
      record.features[0] ??
      (record.description.length > 140
        ? `${record.description.slice(0, 137)}…`
        : record.description),
    description: record.description,
    highlights: record.features,
    stack: record.stack.map((t) => t.name),
    domain: record.category,
    status: "live",
    url: /^https?:\/\//i.test(record.link) ? record.link : undefined,
    accent: ACCENT_CYCLE[accentIndex % ACCENT_CYCLE.length]!,
  };
}
