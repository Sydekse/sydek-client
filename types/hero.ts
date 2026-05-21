import type { ReactNode } from "react";

export interface HeroSectionProps {
  title: string;
  /** Omit when hero is title-only (e.g. legal pages with card body below). */
  subtitle?: ReactNode;
  /** Eyebrow line above headline (muted uppercase styling). */
  eyebrow?: string;
  gradientClassName?: string;
  highlightedWord?: string;
  /** Rendered inside the hero column before eyebrow/title (e.g. “Back” link). */
  leadingAccessory?: ReactNode;
  /** Text alignment inside the constrained column. */
  variant?: "center" | "left";
  actions?: ReactNode;
  sectionClassName?: string;
  contentClassName?: string;
  /** Renders below the headline column inside the hero section (same radial backdrop). */
  belowContent?: ReactNode;
}
