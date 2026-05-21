"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveCard from "@/components/about/interactive-card";
import { HeroSection } from "@/components/careers/hero-section";
import { MissionSection } from "@/components/about/mission-section";
import { ValuesSection } from "@/components/about/values-section";
import { CTASection } from "@/components/about/cta-section";
import { SectionHeading } from "@/components/shared/section-heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Daniel Solomon",
    role: "CEO",
    bio: "With over 10 years of experience in digital project management, Daniel ensures every project is delivered on time and exceeds client expectations.",
    image: "/assets/images/about/daniel.jpg",
    social: {
      linkedin: "http://linkedin.com/in/daniel-solomon-720b5b157",
      email: "daniel@sydek.dev",
    },
  },
  {
    name: "Michael Seyoum",
    role: "COO",
    bio: "Michael combines strategic vision with operational excellence to ensure our company delivers the highest quality solutions to our clients.",
    image: "/assets/images/about/michael.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/michael-seyoum-bb899423a",
      email: "michael@sydek.dev",
    },
  },
  {
    name: "Nahom Teguade",
    role: "CTO",
    bio: "Nahom specializes in creating innovative technical solutions and leads our development team with expertise in cutting-edge technologies.",
    image: "/assets/images/about/nahom.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nahom-teguade-38b4ba1b9/",
      email: "nahom@sydek.dev",
    },
  },
  {
    name: "Esperansa Dereje",
    role: "Project Manager",
    bio: "Esperansa is an expert in managing projects and teams to ensure timely delivery of projects.",
    image: "/assets/images/about/esperansa.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/esperansa-dereje-26a85a292",
      email: "esperansadereje21@gmail.com",
    },
  },
  {
    name: "Ananya Fekeremariam",
    role: "Lead Engineer",
    bio: "Ananya specializes in distributed systems, kubernetes, and cloud infrastructure creating robust solutions for our clients.",
    image: "/assets/images/about/ananya.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/ananya-fekeremariam-7298b8248/",
      email: "ananyafekeremariam@gmail.com",
    },
  },
  {
    name: "Yohanan Mengistu",
    role: "Creative Director",
    bio: "Yohanan develops engaging content strategies and creative campaigns that connect brands with their target audiences.",
    image: "/assets/images/about/yohanan.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/yohanan-mengistu-452677210/",
      email: "info@sydek.com",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="About Sydek"
        highlightedWord="Sydek"
        subtitle="A forward-thinking digital services company committed to helping businesses and individuals succeed in the digital world."
      />

      <MissionSection
        imageSrc="/assets/images/about/mission-leaf.jpg"
        imageAlt="Sydek Mission"
        title="Our Mission"
        description={[
          "At Sydek, we blend creativity, technical expertise, and strategic insight to bring ideas to life. We stay ahead of industry trends, ensuring our solutions are not only innovative but scalable for future growth.",
          "Our mission is to empower clients by delivering high-quality digital experiences that exceed expectations, enhance brand presence, and support business objectives in a competitive market.",
        ]}
      />

      {/* Team Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <SectionHeading
                title="Our Team Values"
                subtitle="What makes our team special is our shared commitment to excellence, innovation, and client success."
              />

              <div className="space-y-4">
                {[
                  {
                    title: "Collaborative Spirit",
                    description:
                      "We believe in the power of teamwork and open communication to achieve the best results.",
                  },
                  {
                    title: "Client-Focused Approach",
                    description:
                      "We put our clients' needs first and work closely with them to ensure their vision becomes reality.",
                  },
                  {
                    title: "Creative Problem-Solving",
                    description:
                      "We approach challenges with creativity and innovation, finding unique solutions to complex problems.",
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg">
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70" />
              <Image
                src="/assets/images/about/group.jpg"
                alt="Team Collaboration"
                width={800}
                height={600}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeading
            title="Our Experts"
            subtitle="Our team includes top-tier developers with backgrounds at global technology firms like Google and Bloomberg, who bring world-class engineering discipline and creativity to every project."
            center
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <InteractiveCard
                key={index}
                className="bg-card overflow-hidden h-full"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground">{member.bio}</p>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`mailto:${member.social.email}`}
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <ValuesSection
        title="Our Uniqune Values"
        subtitle="The principles that guide our work and relationships."
        values={[
          {
            title: "Innovation",
            description:
              "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
          },
          {
            title: "Integrity",
            description:
              "We operate with honesty, transparency, and ethical standards in all our dealings.",
          },
          {
            title: "Adaptability",
            description:
              "We embrace change and continuously evolve to meet the demands of a dynamic digital landscape.",
          },
        ]}
      />

      <CTASection
        title="Join Our Journey"
        description="Interested in working with us or joining our team? We'd love to hear from you."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Careers"
      />
    </div>
  );
}
