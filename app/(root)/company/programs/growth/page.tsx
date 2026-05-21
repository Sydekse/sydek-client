import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/careers/hero-section";

const pillars = [
  {
    title: "Growth foundations",
    description:
      "Positioning, narrative, and the minimum viable instrumentation so teams know what moves the needle versus what merely feels productive.",
  },
  {
    title: "Experimentation discipline",
    description:
      "Hypothesis-led cycles, humane guardrails on spend, and review rituals that compound learning instead of restarting every quarter.",
  },
  {
    title: "Customer-centric product practice",
    description:
      "Discovery habits, feedback loops grounded in qualitative signal, and roadmaps biased toward recurring value — especially when capital is scarce.",
  },
  {
    title: "Revenue rhythms",
    description:
      "Pipeline hygiene, repeatable commercial motions, and the operating cadence founders need across pre-seed and early growth arcs.",
  },
];

export default function GrowthProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        title="Growth program for builders in motion"
        highlightedWord="builders in motion"
        subtitle="A Sydek-hosted track for ambitious pre-seed teams — especially founders in Addis Ababa and across African cities — who want sharper growth foundations without importing copy-paste playbooks."
        actions={
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild
          >
            <Link href="/company/contact">
              Apply interest
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <section className="border-t bg-muted/20 py-16 md:py-24 dark:bg-muted/10">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Who it is for
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Local roots, exportable ambition
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you are shipping a SaaS wedge, marketplace liquidity, or
            regulated infra, we meet you where your runway is thin and your bar
            for craft is high. The program prizes velocity with judgment — teams
            who want accountable squads, not ceremonial mentoring.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Curriculum pillars
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Foundations founders actually use weekly
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/15 py-16 md:py-24 dark:bg-muted/10">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Cohort model
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Small batches, anchored outcomes
          </h2>
          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Format.</span>{" "}
              Tight facilitator-led sessions with rotating office hours —
              anchored on your live metrics, launches, or fundraising narrative.
            </li>
            <li>
              <span className="font-medium text-foreground">Assignments.</span>{" "}
              Ship logs, teardowns with peers, and lightweight templates you can
              reuse with your squad.
            </li>
            <li>
              <span className="font-medium text-foreground">Geography.</span>{" "}
              Open to teams across continents; we dedicate airtime for builders
              in Addis Ababa and peer African hubs who want locally grounded
              playbooks paired with globally legible benchmarks.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl rounded-3xl border bg-gradient-to-br from-secondary/10 via-background to-accent/15 p-10 text-center md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to tighten your next growth arc?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us stage, runway, and the bet you want to clarify — we will
            propose a pragmatic path alongside Sydek builders.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link href="/company/contact">
                Talk with Sydek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/scoping">Project scoping</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
