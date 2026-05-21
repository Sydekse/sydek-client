import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  ChevronRight,
} from "lucide-react";
import { HeroSection } from "@/components/careers/hero-section";
import type { CaseStudy } from "@/data/case-studies";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface CaseStudyDetailProps {
  study: CaseStudy;
  relatedStudies: CaseStudy[];
}

export function CaseStudyDetail({
  study,
  relatedStudies,
}: CaseStudyDetailProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        variant="left"
        contentClassName="max-w-4xl"
        leadingAccessory={
          <div className="space-y-4">
            <Link
              href="/company/case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to case studies
            </Link>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                {study.category}
              </span>
              <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">{study.industry}</span>
            </div>
          </div>
        }
        title={study.title}
        subtitle={
          <>
            <p className="mb-2 text-xl text-muted-foreground">{study.client}</p>
            <p className="text-lg text-muted-foreground">{study.description}</p>
          </>
        }
      />

      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="aspect-[21/9] overflow-hidden rounded-xl border shadow-lg">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                width={1600}
                height={686}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="mb-6 rounded-xl border bg-card p-6">
                  <h2 className="mb-4 text-lg font-semibold">Project overview</h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Client / partner
                      </p>
                      <p className="font-medium">{study.client}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Industry</p>
                      <p className="font-medium">{study.industry}</p>
                    </div>

                    {study.duration ? (
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">{study.duration}</p>
                      </div>
                    ) : null}

                    {study.servicesProvided &&
                    study.servicesProvided.length > 0 ? (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Services provided
                        </p>
                        <ul className="mt-1 space-y-1">
                          {study.servicesProvided.map((s) => (
                            <li key={s} className="flex items-center text-sm">
                              <ChevronRight className="mr-1 h-4 w-4 shrink-0 text-secondary" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-xl bg-muted p-6">
                  <h2 className="mb-4 text-lg font-semibold">Key results</h2>
                  <ul className="space-y-3">
                    {study.results.map((r) => (
                      <li key={r} className="flex gap-3 rounded-lg border bg-card p-3">
                        <div className="shrink-0 rounded bg-secondary/10 p-2">
                          <BarChart2 className="h-5 w-5 text-secondary" />
                        </div>
                        <span className="text-sm leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 space-y-10 lg:order-2 lg:col-span-8">
              {study.challengeBullets && study.challengeBullets.length > 0 ? (
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Challenge</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    {study.challengeBullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {study.contentSections.map((sec) => (
                <article key={sec.heading}>
                  <h2 className="mb-4 text-2xl font-bold">{sec.heading}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    {sec.paragraphs.map((p, i) => (
                      <p
                        key={`${sec.heading}-${i}`}
                        className="leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedStudies.length > 0 ? (
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
              Related <span className="text-gradient">case studies</span>
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {relatedStudies.map((r) => (
                <Card key={r.id} className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image || "/placeholder.svg"}
                      alt={r.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-lg">{r.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{r.client}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {r.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="hover:text-secondary">
                      <Link href={`/company/case-studies/${r.id}`}>
                        View study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-secondary via-accent to-tertiary p-10 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want a story like this?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Tell us where you are on the roadmap — discovery, rebuild, or
              scaling — and we will map an accountable path.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/company/contact">Contact us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                <Link href="/scoping">Project scoping</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
