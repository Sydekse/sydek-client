"use client";

import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  CheckCircle,
  FileText,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";
import KeyBenefitsSection from "@/components/platform/key-benefits";
import FeaturesSection from "@/components/platform/features";
import PlatformOverview from "@/components/platform/platfrom-overview";
import TestimonialsSection from "@/components/shared/testimonial";
import CTACard from "@/components/shared/cta-card";

export default function ClientDigitalPlatform() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Client Digital Platform"
        highlightedWord="Platform"
        subtitle="Empower your business with our comprehensive client management solution. Streamline operations, enhance collaboration, and drive growth."
        actions={
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild
          >
            <Link href="/signup">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />
      <KeyBenefitsSection
        mainTitle="Transform Your Operations"
        mainDescription="Our Client Digital Platform is designed to streamline your business processes, enhance collaboration, and drive growth through innovative digital solutions."
        mainButtonText="Learn More"
        benefitsTitle="Key Benefits"
        benefits={[
          { icon: CheckCircle, text: "Increased Efficiency" },
          { icon: BarChart, text: "Data-Driven Insights" },
          { icon: Users, text: "Enhanced Collaboration" },
          { icon: Shield, text: "Robust Security" },
          { icon: Zap, text: "Scalable Performance" },
        ]}
      />
      <FeaturesSection
        title="Key Features"
        features={[
          {
            icon: <BarChart className="h-6 w-6 text-secondary" />,
            title: "Performance Tracking",
            description:
              "Monitor project progress and team performance with intuitive dashboards and real-time analytics.",
          },
          {
            icon: <FileText className="h-6 w-6 text-secondary" />,
            title: "Document Management",
            description:
              "Centralize and organize all project-related documents for easy access and collaboration.",
          },
          {
            icon: <Users className="h-6 w-6 text-secondary" />,
            title: "Team Collaboration",
            description:
              "Foster seamless communication and collaboration among team members and stakeholders.",
          },
          {
            icon: <Zap className="h-6 w-6 text-secondary" />,
            title: "Automated Workflows",
            description:
              "Streamline processes with customizable, automated workflows to increase efficiency.",
          },
        ]}
      />
      <PlatformOverview
        title="Platform Overview"
        tabs={[
          {
            value: "dashboard",
            title: "Dashboard",
            description: "Get a bird's-eye view of your entire operation.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Dashboard Preview",
          },
          {
            value: "projects",
            title: "Projects",
            description: "Manage and track all your projects in one place.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Projects Preview",
          },
          {
            value: "team",
            title: "Team Management",
            description:
              "Efficiently manage your team and their responsibilities.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Team Management Preview",
          },
          {
            value: "reports",
            title: "Reports",
            description:
              "Generate insightful reports to drive data-informed decisions.",
            imageSrc: "/placeholder.svg?height=300&width=600",
            imageAlt: "Reports Preview",
          },
        ]}
      />
      <TestimonialsSection
        title="What Our Clients Say"
        columns={2}
        testimonials={[
          {
            name: "Getaneh S, Tech CEO",
            company: "Diplomat Corner",
            quote:
              "Their dedicated team took our project from concept to completion seamlessly. Exceptional quality and communication!",
          },
          {
            name: "Bewqet L, CEO",
            company: "Organic Millstone",
            quote:
              "They help me generate more leads with the digital world they built for my company",
          },
        ]}
      />
      <CTACard
        title="Ready to Transform Your Business?"
        description="Join thousands of satisfied clients and take your project management to the next level."
        buttonText="Start Your Free Trial"
        buttonLink="/trial"
      />
    </div>
  );
}
