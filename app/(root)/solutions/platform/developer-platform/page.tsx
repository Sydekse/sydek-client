"use client";

import type React from "react";
import Link from "next/link";
import { ArrowRight, Code, Database, GitBranch, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";
import KeyBenefitsSection from "@/components/platform/key-benefits";
import FeaturesSection from "@/components/platform/features";
import PlatformOverview from "@/components/platform/platfrom-overview";
import TestimonialsSection from "@/components/shared/testimonial";
import CTACard from "@/components/shared/cta-card";

export default function DeveloperPlatform() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Developer Platform"
        highlightedWord="Platform"
        subtitle="Accelerate your development process with our comprehensive suite of tools and APIs. Build, test, and deploy with ease."
        actions={
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild
          >
            <Link href="/apis">
              Explore APIs
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <FeaturesSection
        title="Key Features"
        features={[
          {
            icon: <Code className="h-6 w-6 text-secondary" />,
            title: "Robust APIs",
            description:
              "Access a wide range of powerful APIs to integrate our services into your applications seamlessly.",
          },
          {
            icon: <Terminal className="h-6 w-6 text-secondary" />,
            title: "CLI Tools",
            description:
              "Streamline your workflow with our intuitive command-line interface tools.",
          },
          {
            icon: <GitBranch className="h-6 w-6 text-secondary" />,
            title: "Version Control",
            description:
              "Built-in version control system to manage your code and collaborate effectively.",
          },
          {
            icon: <Database className="h-6 w-6 text-secondary" />,
            title: "Scalable Infrastructure",
            description:
              "Deploy your applications on our highly scalable and reliable cloud infrastructure.",
          },
        ]}
        columns={4}
      />

      <PlatformOverview
        title="Platform Overview"
        tabs={[
          {
            value: "apis",
            title: "APIs",
            description: "Explore our comprehensive suite of APIs.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "APIs Preview",
          },
          {
            value: "sdks",
            title: "SDKs",
            description: "Integrate our services using language-specific SDKs.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "SDKs Preview",
          },
          {
            value: "docs",
            title: "Documentation",
            description: "Comprehensive guides and API references.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Documentation Preview",
          },
          {
            value: "tools",
            title: "Developer Tools",
            description: "Powerful tools to enhance your development workflow.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Developer Tools Preview",
          },
        ]}
        defaultTab="apis"
        columns={4}
      />

      <TestimonialsSection
        title="Developer Success Stories"
        testimonials={[
          {
            name: "Sarah Lee",
            company: "Innovative Apps Co.",
            quote:
              "The Developer Platform has significantly reduced our time-to-market. The APIs are well-documented and easy to integrate, allowing us to focus on building great products.",
          },
          {
            name: "Mike Chen",
            company: "TechStart Solutions",
            quote:
              "As a startup, we needed a reliable and scalable platform. This solution not only met our needs but exceeded our expectations with its robust features and excellent support.",
          },
          {
            name: "Emily Taylor",
            company: "DataDriven Systems",
            quote:
              "The CLI tools and version control integration have streamlined our development process. It's a game-changer for our team's productivity and collaboration.",
          },
        ]}
        columns={3}
      />

      <CTACard
        title="Ready to Supercharge Your Development?"
        description="Join our community of developers and build amazing applications with our powerful platform."
        buttonText="Sign Up for Free"
        buttonVariant="outline"
        buttonLink="/signup"
        backgroundClass="bg-secondary"
      />
    </div>
  );
}
