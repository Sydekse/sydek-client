import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ApplicationForm } from "@/components/careers/application-form";
import { ApplyAboutSidebar } from "@/components/careers/apply-about-sidebar";
import { getVacancyBySlug } from "@/lib/careers-api";
import { HeroSection } from "@/components/careers/hero-section";

export default async function JobApplicationPage({
  params,
}: {
  params: Promise<{ job: string }>;
}) {
  const { job } = await params;
  const vacancy = await getVacancyBySlug(job).catch(() => null);
  const jobTitle = vacancy?.title ?? job
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const applicationsOpen = vacancy?.status === "published";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(95,31,95,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(187,173,213,0.2),transparent_60%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/company/careers"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Apply for <span className="text-gradient">{jobTitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {applicationsOpen
                ? "We're excited about your interest in joining our team. Please complete the application form below."
                : vacancy
                  ? "This role is no longer accepting applications, but we're glad you're exploring Sydek."
                  : "We're excited about your interest in joining our team. Please complete the application form below."}
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {applicationsOpen ? (
                <ApplicationForm jobTitle={jobTitle} jobSlug={job} />
              ) : vacancy && vacancy.status === "archived" ? (
                <div className="rounded-xl border bg-muted/30 p-8 text-muted-foreground">
                  Applications for this position are closed. See other roles on the{" "}
                  <Link href="/company/careers" className="text-secondary underline">
                    careers page
                  </Link>
                  .
                </div>
              ) : (
                <ApplicationForm jobTitle={jobTitle} jobSlug={job} />
              )}
            </div>

            <div className="space-y-8">
              <ApplyAboutSidebar
                jobTitle={jobTitle}
                intro={vacancy?.applySidebarIntro}
                highlights={vacancy?.applySidebarHighlights}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
