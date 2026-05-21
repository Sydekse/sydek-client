"use client";

import Image from "next/image";
import { Globe, Lock } from "lucide-react";
import {
  ServicesBento,
  type ServicesBentoSpotlight,
  type ServicesBentoStep,
} from "@/components/marketing/services-bento";
import { LOGO_MARQUEE_ITEMS } from "@/lib/logo-marquee";

export function HomeBelowHero() {
  const logoLoop = [...LOGO_MARQUEE_ITEMS, ...LOGO_MARQUEE_ITEMS];

  const servicesBentoTop: ServicesBentoStep[] = [
    {
      index: "001",
      title: "Brand identity",
      description:
        "Positioning and visual systems that clarify who you are and why it matters.",
    },
    {
      index: "002",
      title: "Product & web builds",
      description:
        "Fast, resilient interfaces—from marketing sites to product surfaces your team can iterate on.",
    },
    {
      index: "003",
      title: "Mobile experiences",
      description:
        "Native-quality apps and cross-platform delivery that meet users wherever they work.",
    },
    {
      index: "004",
      title: "Platforms & backends",
      description:
        "APIs, integrations, and cloud foundations that scale without slowing product velocity.",
    },
  ];

  const servicesBentoSpotlight: ServicesBentoSpotlight = {
    label: "Partnership-led delivery",
    title: "From strategy sketches to polished, resilient products",
    imageSrc: "/assets/images/home/future-thinking.jpg",
    imageAlt: "Sydek team collaborating",
    description:
      "Sydek blends product thinking, UX craft, and full-stack engineering so launches feel cohesive—from first workshop to rollout, measurement, and iteration.",
    primaryCta: { label: "Start a conversation", href: "/company/contact" },
    outlineCta: { label: "View projects", href: "/solutions/projects" },
    moreHref: { label: "More details", href: "/solutions/services" },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background pb-16 pt-6 md:pb-20 md:pt-8">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative isolate overflow-hidden rounded-[3rem] border border-border/40 shadow-2xl">
              <div className="relative aspect-[21/13] min-h-[min(100vw,420px)] w-full md:aspect-[21/11] md:min-h-[480px]">
                <Image
                  src="/assets/images/nav-bar/navbar-below.png"
                  alt="Sydek — innovative digital solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 1024px"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55"
                  aria-hidden
                />

                {/* Top-left stat */}
                <div className="absolute left-6 top-8 z-[1] md:left-10 md:top-12 md:max-w-xs">
                  <p className="font-sans text-5xl font-bold tabular-nums text-white md:text-6xl">
                    98%
                  </p>
                  <p className="mt-2 max-w-[12rem] text-sm font-medium leading-snug text-white/95 md:max-w-none md:text-base">
                    Client satisfaction across delivery, communication, and
                    measurable outcomes.
                  </p>
                </div>

                {/* Bottom-right feature copy */}
                <div className="absolute bottom-6 right-6 z-[1] max-w-[18rem] text-right md:bottom-10 md:right-10 md:max-w-sm">
                  <p className="text-lg font-bold text-white md:text-xl">
                    Advanced integrations
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/90 md:text-sm">
                    Connect payments, CRM, commerce, and comms—the stack you
                    already use, orchestrated into one cohesive workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* Attached logo dock below card (carousel) */}
            <div
              className="logo-marquee-shell relative z-10 -mt-10 flex justify-center px-6 md:-mt-[2.75rem] md:px-8"
              aria-label="Partner and client logos"
            >
              <div className="w-full max-w-[min(100%,26rem)] overflow-hidden rounded-full border border-black/10 bg-white py-2.5 pl-6 pr-0 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:border-white/15 dark:bg-card sm:max-w-md md:max-w-xl md:py-3">
                <div className="overflow-hidden rounded-full">
                  <div className="logo-marquee-track">
                    {logoLoop.map((item, idx) => (
                      <figure
                        key={`${item.src}-${idx}`}
                        className="relative flex h-9 shrink-0 items-center px-10 md:h-11 md:px-12"
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          height={44}
                          width={160}
                          className="h-7 max-h-[1.875rem] w-auto max-w-[7.25rem] object-contain grayscale opacity-85 transition-opacity md:h-9 md:max-h-[2.25rem] md:max-w-[8rem] dark:opacity-95"
                          sizes="(max-width: 768px) 120px, 160px"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesBento
        topSteps={servicesBentoTop}
        spotlight={servicesBentoSpotlight}
        bottomTiles={[
          {
            icon: <Lock className="h-6 w-6 text-tertiary" />,
            title: "Security-minded delivery",
            description:
              "Sensible defaults, reviewable changes, and patterns that reduce risk across releases—without drowning your team in process.",
          },
          {
            icon: <Globe className="h-6 w-6 text-secondary" />,
            title: "Distributed by design",
            description:
              "Time zones, bilingual communication, and async-friendly rituals so stakeholders stay aligned from kickoff through handoff.",
          },
        ]}
      />
    </>
  );
}
