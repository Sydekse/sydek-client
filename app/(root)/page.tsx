import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";
import { HomeBelowHero } from "@/components/home/home-below-hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        eyebrow="Digital services that think ahead, move fast, and scale with you."
        title="Your digital partner, on demand"
        highlightedWord="digital partner"
        subtitle="Streamline delivery, sharpen decisions, and stay ahead of change. Sydek works alongside your team—with clear communication and outcomes you can measure."
        actions={
          <>
            <Button asChild variant="secondary" className="rounded-full px-6">
              <Link href="/company/contact">Get started</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/solutions/services">Our services</Link>
            </Button>
          </>
        }
      />
      <HomeBelowHero />
    </div>
  );
}
