import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  caseStudies,
  getCaseStudyById,
  getRelatedCaseStudies,
} from "@/data/case-studies";
import { CaseStudyDetail } from "@/components/company/case-study-detail";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) {
    return { title: "Case study | Sydek" };
  }
  return {
    title: `${study.title} | Sydek`,
    description: study.description,
  };
}

export default async function CaseStudyByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) {
    notFound();
  }
  const related = getRelatedCaseStudies(study.id);
  return <CaseStudyDetail study={study} relatedStudies={related} />;
}
