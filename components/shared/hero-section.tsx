"use client";

import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";

/** @deprecated Prefer `@/components/careers/hero-section` (`subtitle`, `highlightedWord`, `actions`). */
interface LegacyHeroSectionProps {
  title: string;
  highlightedTitle?: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  /** Unused — hero matches careers radial style. */
  backgroundParticles?: number;
}

/**
 * Compatibility wrapper: maps shared hero props to `HeroSection`.
 */
const SharedHeroSection: React.FC<LegacyHeroSectionProps> = ({
  title,
  highlightedTitle,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
}) => {
  const trail = highlightedTitle?.trim() ?? "";
  const fullTitle =
    trail.length > 0
      ? `${title.trimEnd()} ${trail}`.replace(/\s+/g, " ")
      : title.trim();
  const word = trail.length > 0 && fullTitle.includes(trail) ? trail : undefined;

  return (
    <HeroSection
      title={fullTitle}
      highlightedWord={word}
      subtitle={description}
      actions={
        buttonText ? (
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild={Boolean(buttonLink) && !onButtonClick}
            onClick={onButtonClick}
          >
            {buttonLink && !onButtonClick ? (
              <Link href={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            ) : (
              <>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </>
            )}
          </Button>
        ) : undefined
      }
    />
  );
};

export default SharedHeroSection;
