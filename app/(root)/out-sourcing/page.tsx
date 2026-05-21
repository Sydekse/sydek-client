"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Users,
  UserCheck,
  ShoppingBag,
  ArrowRight,
  Globe,
  Clock,
  Shield,
  Briefcase,
  Award,
  Zap,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/components/careers/hero-section";

export default function OutsourcingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Expert Outsourcing Solutions"
        highlightedWord="Outsourcing"
        subtitle="Access top-tier talent, specialized teams, and procurement services to accelerate your digital transformation journey."
        actions={
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
            <Link href="/company/contact">
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Comprehensive Outsourcing Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible solutions designed to meet your specific business needs
              and technical requirements.
            </p>
          </div>

          <Tabs defaultValue="teams" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8 h-auto">
              <TabsTrigger
                value="teams"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Users className="mr-2 h-5 w-5" />
                Team Outsourcing
              </TabsTrigger>
              <TabsTrigger
                value="experts"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <UserCheck className="mr-2 h-5 w-5" />
                Expert Individuals
              </TabsTrigger>
              <TabsTrigger
                value="procurement"
                className="py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Procurement Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="teams" className="mt-0">
              <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Dedicated Development Teams
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Access fully-managed, cross-functional teams that
                      seamlessly integrate with your organization. Our teams are
                      assembled based on your specific project requirements and
                      technical needs.
                    </p>

                    <ul className="space-y-3 mb-6">
                      {[
                        "Cross-functional teams with diverse skill sets",
                        "Seamless integration with your existing workflows",
                        "Flexible scaling based on project demands",
                        "Dedicated project managers and quality assurance",
                        "Regular reporting and transparent communication",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/company/contact">
                      <Button className="bg-secondary hover:bg-secondary/90">
                        Request a Team
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] bg-gradient-to-br from-secondary/10 to-tertiary/10 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Users className="h-8 w-8 text-secondary" />
                        </div>
                        <div className="absolute top-1/4 left-0 w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                          <Briefcase className="h-6 w-6 text-accent" />
                        </div>
                        <div className="absolute top-1/4 right-0 w-14 h-14 bg-tertiary/20 rounded-full flex items-center justify-center">
                          <Zap className="h-6 w-6 text-tertiary" />
                        </div>
                        <div className="absolute bottom-0 left-1/4 w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
                          <Globe className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="absolute bottom-0 right-1/4 w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                          <Shield className="h-6 w-6 text-accent" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-background/90 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-xl font-bold text-gradient">
                              Team
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experts" className="mt-0">
              <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 p-6">
                        {[
                          {
                            icon: <Award className="h-6 w-6 text-secondary" />,
                            title: "Senior Developer",
                          },
                          {
                            icon: <Shield className="h-6 w-6 text-accent" />,
                            title: "Security Expert",
                          },
                          {
                            icon: <Zap className="h-6 w-6 text-tertiary" />,
                            title: "DevOps Engineer",
                          },
                          {
                            icon: <Globe className="h-6 w-6 text-secondary" />,
                            title: "UX Designer",
                          },
                          {
                            icon: <Briefcase className="h-6 w-6 text-accent" />,
                            title: "Project Manager",
                          },
                          {
                            icon: <Clock className="h-6 w-6 text-tertiary" />,
                            title: "QA Specialist",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-background/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center text-center"
                          >
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2">
                              {item.icon}
                            </div>
                            <span className="text-xs font-medium">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">
                      Individual Expert Outsourcing
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Augment your team with specialized experts who bring deep
                      domain knowledge and technical expertise to address
                      specific challenges or skill gaps.
                    </p>

                    <ul className="space-y-3 mb-6">
                      {[
                        "Senior developers with 8+ years of experience",
                        "Specialized experts in niche technologies",
                        "Flexible engagement models (part-time/full-time)",
                        "Rigorous vetting and skill assessment",
                        "Ongoing professional development and training",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/company/contact">
                      <Button className="bg-secondary hover:bg-secondary/90">
                        Find an Expert
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="procurement" className="mt-0">
              <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Strategic Procurement Services
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Leverage our global network and industry expertise to
                      source the right technology, tools, and services at
                      competitive prices with streamlined procurement processes.
                    </p>

                    <ul className="space-y-3 mb-6">
                      {[
                        "Hardware and software procurement",
                        "Vendor evaluation and selection",
                        "Contract negotiation and management",
                        "License optimization and compliance",
                        "Supply chain management and logistics",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/company/contact">
                      <Button className="bg-secondary hover:bg-secondary/90">
                        Explore Procurement
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] bg-gradient-to-br from-tertiary/10 to-secondary/10 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-72 h-72 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-background/90 rounded-full flex items-center justify-center shadow-lg z-10">
                            <ShoppingBag className="h-12 w-12 text-tertiary" />
                          </div>
                        </div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                          <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                            <span className="text-sm font-medium">
                              Cost Savings
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                          <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                            <span className="text-sm font-medium">
                              Efficiency
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose Our Outsourcing Solutions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Maximize efficiency, reduce costs, and stay ahead with our
              tailored outsourcing services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-secondary" />,
                title: "Global Talent Pool",
                description:
                  "Access skilled professionals from around the world to meet your project needs.",
              },
              {
                icon: <Clock className="h-8 w-8 text-secondary" />,
                title: "24/7 Productivity",
                description:
                  "Leverage time zone differences for round-the-clock progress on your projects.",
              },
              {
                icon: <Shield className="h-8 w-8 text-secondary" />,
                title: "Cost Efficiency",
                description:
                  "Reduce overhead costs while maintaining high-quality output and delivery.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from businesses that have transformed with our outsourcing
              solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Their dedicated team took our project from concept to completion seamlessly. Exceptional quality and communication!",
                author: "Getaneh S, Tech CEO",
                company: "Diplomat Corner",
              },
              {
                quote:
                  "They help me generate more leads with the digital world they built for my company",
                author: "Bewqet L, CEO",
                company: "Organic Millstone",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border shadow-sm">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 text-secondary mb-4" />
                  <p className="text-muted-foreground mb-4">
                    {testimonial.quote}
                  </p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our outsourcing services.
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              {
                question: "How do you ensure the quality of outsourced teams?",
                answer:
                  "We rigorously vet all team members, provide ongoing training, and assign dedicated project managers to oversee quality and performance.",
              },
              {
                question: "Can I scale my team up or down as needed?",
                answer:
                  "Yes, our flexible engagement models allow you to scale your team based on project demands, ensuring cost-efficiency and agility.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We cater to a wide range of industries, including tech, healthcare, finance, e-commerce, and more, with tailored solutions for each.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-tertiary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Optimize Your Business?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to unlock the full potential of outsourcing and
            drive your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
