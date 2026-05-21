import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { caseStudies, type CaseStudySuite } from "@/data/case-studies";
import { HeroSection } from "@/components/careers/hero-section";

const TAB_IDS: { value: CaseStudySuite | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sydek-product", label: "Sydek products" },
  { value: "client-project", label: "Client builds" },
];

function filterByTab(
  tab: CaseStudySuite | "all",
  studies: typeof caseStudies
) {
  if (tab === "all") return studies;
  return studies.filter((s) => s.suite === tab);
}

export default function CaseStudiesPage() {
  const industries = [...caseStudies.reduce((acc, c) => {
    acc.set(c.industry, (acc.get(c.industry) ?? 0) + 1);
    return acc;
  }, new Map<string, number>())];

  industries.sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        title="Our success stories"
        highlightedWord="success stories"
        subtitle="Product launches shipped by Sydek and client builds we stewarded — grounded in measurable outcomes."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Featured <span className="text-gradient">case studies</span>
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {caseStudies
              .filter((study) => study.featured)
              .map((study) => (
                <div
                  key={study.id}
                  className="overflow-hidden rounded-2xl border bg-card shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                        {study.category}
                      </span>
                      <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{study.title}</h3>
                    <p className="mb-6 text-muted-foreground">
                      {study.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">
                        Key results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 shrink-0 text-secondary" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="bg-secondary hover:bg-secondary/90">
                      <Link href={`/company/case-studies/${study.id}`}>
                        Read case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section
        id="case-study-explorer"
        className="scroll-mt-28 bg-muted/30 py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            All case studies
          </h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mx-auto mb-12 grid max-w-xl w-full grid-cols-3">
              {TAB_IDS.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {TAB_IDS.map((t) => (
              <TabsContent key={t.value} value={t.value} className="mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filterByTab(t.value, caseStudies).map((study) => (
                    <Card key={study.id} className="overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          width={400}
                          height={267}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="mb-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                            {study.category}
                          </span>
                          <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">
                            {study.suite === "sydek-product"
                              ? "Sydek product"
                              : "Client build"}
                          </span>
                        </div>
                        <CardTitle>{study.title}</CardTitle>
                        <CardDescription>{study.client}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-muted-foreground">
                          {study.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="ghost"
                          className="hover:text-secondary"
                        >
                          <Link href={`/company/case-studies/${study.id}`}>
                            View case study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Industries we work <span className="text-gradient">across</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A snapshot aligned to the engagements represented on this page.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([industry, count]) => (
              <Link
                key={industry}
                href={`/company/case-studies#case-study-explorer`}
                className="group"
              >
                <div className="h-full rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-secondary">
                    {industry}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Explore case studies spanning this slice of work.
                  </p>
                  <p className="text-sm font-medium text-secondary">
                    {count} {count === 1 ? "story" : "stories"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <div className="relative bg-gradient-to-r from-secondary via-accent to-tertiary p-12 text-center">
              <div className="absolute inset-0 bg-grid-white/5 opacity-90"></div>
              <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Ready to write your success story?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
                  Let&apos;s map how product, platforms, or growth bets should
                  land for your teams and customers.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-white text-secondary hover:bg-white/90"
                    asChild
                  >
                    <Link href="/company/contact">
                      Contact us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/scoping">Request scoping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
