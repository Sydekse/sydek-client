import Link from "next/link";
import { Button } from "@/components/ui/button";
import CtaCard from "@/components/shared/cta-card";
import {
  SectionSplitHeader,
  ShowcaseCard,
} from "@/components/marketing";
import { HeroSection } from "@/components/careers/hero-section";
import type { Project } from "@/types/projects";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    description:
      "A complete overhaul of an e-commerce platform, focusing on user experience, performance, and conversion optimization.",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "2",
    title: "Mobile Banking Application",
    description:
      "A secure and intuitive mobile banking application with advanced features and biometric authentication.",
    category: "Mobile Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "3",
    title: "Healthcare Management System",
    description:
      "A comprehensive healthcare management system for hospitals and clinics, streamlining patient care and administrative tasks.",
    category: "Enterprise Solutions",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "4",
    title: "AI-Powered Content Platform",
    description:
      "A content management platform with AI-powered recommendations and analytics for publishers.",
    category: "AI & Machine Learning",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "5",
    title: "Smart Home Control System",
    description:
      "An integrated system for controlling smart home devices with voice commands and automated routines.",
    category: "IoT Solutions",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "6",
    title: "Corporate Brand Identity",
    description:
      "A complete brand identity redesign for a multinational corporation, including logo, guidelines, and marketing materials.",
    category: "Brand Identity",
    image: "/placeholder.svg?height=600&width=800",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        eyebrow="Portfolio"
        title="Explore work that ships as one connected system"
        highlightedWord="connected system"
        subtitle="Case studies and product engagements across web, mobile, and enterprise — crafted for clarity, scale, and measurable impact."
        actions={
          <>
            <Button asChild variant="secondary" className="rounded-full px-6">
              <Link href="/company/contact">Start a project</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/solutions/services">Our services</Link>
            </Button>
          </>
        }
      />

      <section className="bg-background py-12 md:py-16">
        <SectionSplitHeader
          eyebrow="Featured"
          title="Fintech dashboard redesign"
          description="A complete overhaul of a financial technology platform's dashboard, focusing on data visualization, user experience, and performance optimization."
        />
        <div className="mx-auto max-w-terrava px-[clamp(1.5rem,5vw,5rem)]">
          <ShowcaseCard
            tag="Case study"
            title="Fintech Dashboard Redesign"
            description="Data visualization, UX, and performance optimization for a high-traffic trading and analytics surface."
            imageSrc="/placeholder.svg?height=400&width=600"
            href="#"
            frameClassName="aspect-[21/10] w-full max-w-4xl shrink-0 md:aspect-[2/1]"
            className="mx-auto"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-terrava px-[clamp(1.5rem,5vw,5rem)]">
          <SectionSplitHeader
            eyebrow="All projects"
            title="Selected engagements"
            description="Swipe to explore more work — each engagement pairs strategy, engineering, and design for outcomes you can measure."
          />
        </div>
        <div className="w-full overflow-x-auto pb-4 pl-[max(0px,calc((100vw-1200px)/2))] [scrollbar-width:thin]">
          <div className="flex gap-4 pr-8 md:gap-5">
            {projects.map((project) => (
              <ShowcaseCard
                key={project.id}
                tag={project.category}
                title={project.title}
                description={project.description}
                imageSrc={project.image}
                href={`/projects/${project.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaCard
        title="Ready to Start Your Project?"
        description="Let's collaborate to create innovative solutions that drive your business forward."
        buttonText="Contact Us"
        buttonLink="/company/contact"
        backgroundClass="bg-muted/30"
      />
    </div>
  );
}
