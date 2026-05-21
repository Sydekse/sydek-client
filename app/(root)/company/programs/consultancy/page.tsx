import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/careers/hero-section";

const capabilities = [
  "Product discovery, technical architecture reviews, and delivery governance.",
  "Platform modernization paths — from brittle monolith seams to pragmatic service boundaries.",
  "AI-augmented workflows with human checkpoints for regulated or brand-sensitive journeys.",
];

const engagements = [
  {
    title: "Advisory sprint",
    description:
      "1–3 week arcs for sharp decisions — stack choices, rollout sequencing, hiring plans.",
  },
  {
    title: "Embedded squad",
    description:
      "Cross-functional teammates who shoulder roadmap chunks while upskilling your internal team.",
  },
  {
    title: "Rescue / relaunch",
    description:
      "Stabilizing live systems, refactoring hotspots, or shipping the next chapter after a stalled release.",
  },
];

/** Placeholder page — swap body copy anytime as positioning solidifies. */
export default function ConsultancyProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        title="Consultancy on demand"
        highlightedWord="on demand"
        subtitle="Executive-grade technical and product consultancy with Sydek delivery muscle — articulate the stakes, shorten the ambiguity, ship with receipts."
        actions={
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild
          >
            <Link href="/company/contact">
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <section className="border-t bg-muted/20 py-16 md:py-24 dark:bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible depth when you cannot hire the full roster yet
            </h2>
            <ul className="mx-auto mt-8 max-w-2xl space-y-4 text-left text-lg text-muted-foreground">
              {capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Engagement models
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the posture to the risk
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {engagements.map((e) => (
              <div key={e.title} className="rounded-2xl border bg-card p-6">
                <h3 className="text-lg font-semibold">{e.title}</h3>
                <p className="mt-4 text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/15 py-16 md:py-24 dark:bg-muted/10">
        <div className="container mx-auto max-w-3xl rounded-3xl border bg-background/80 px-8 py-12 text-center shadow-sm backdrop-blur-sm md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Outline your mandate — we will reply with sequencing options.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Share constraints, timelines, stakeholders, and the artifacts you already
            have. We prioritize clarity over bureaucracy.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
              <Link href="/company/contact">
                Contact Sydek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/scoping">Structured scoping</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
