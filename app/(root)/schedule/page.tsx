import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Globe2, Video } from "lucide-react";
import { HeroSection } from "@/components/careers/hero-section";
import { CalBookingEmbed } from "@/components/marketing/cal-booking-embed";
import { Button } from "@/components/ui/button";
import { CAL_BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Schedule a call | Sydek",
  description:
    "Book a 30-minute discovery call with Sydek. Share your goals, timeline, and constraints—we'll help you shape the right next step.",
};

const EXPECTATIONS = [
  {
    icon: Video,
    title: "Video or phone",
    description:
      "Meet on Google Meet or your preferred channel—whatever works for your team.",
  },
  {
    icon: Clock,
    title: "30 minutes",
    description:
      "A focused session to understand scope, priorities, and how Sydek can help.",
  },
  {
    icon: Globe2,
    title: "Remote-friendly",
    description:
      "We work with teams across time zones, with clear async follow-up after the call.",
  },
] as const;

export default function SchedulePage() {
  return (
    <div className="min-h-screen pb-20">
      <HeroSection
        eyebrow="Schedule"
        title="Book a discovery call with Sydek"
        highlightedWord="discovery call"
        subtitle="Pick a time that works for you. We'll discuss your product idea, delivery constraints, and whether we're the right partner for the work ahead."
      />

      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start lg:pt-2">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                What to expect
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No hard sell—just a practical conversation about your goals and
                how we might collaborate.
              </p>
            </div>

            <ul className="space-y-4">
              {EXPECTATIONS.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-2xl border border-border/60 bg-card/60 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-secondary/35"
            >
              <Link href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Open full booking page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </aside>

          <div
            id="booking-calendar"
            className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[var(--shadow-terrava-card)] scroll-mt-28"
          >
            <CalBookingEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
