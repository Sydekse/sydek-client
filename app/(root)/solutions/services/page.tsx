import Link from "next/link"
import { HeroSection } from "@/components/careers/hero-section"
import { ServicesBento } from "@/components/marketing/services-bento"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Code, Smartphone, Palette, Database, Server, Lightbulb, Globe, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Palette className="h-10 w-10 text-secondary" />,
    title: "Brand Identity",
    description:
      "Create a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors.",
    features: [
      "Logo design and brand guidelines",
      "Visual identity systems",
      "Brand messaging and voice",
      "Brand strategy and positioning",
      "Marketing collateral design",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Code className="h-10 w-10 text-secondary" />,
    title: "Web Development",
    description:
      "Build responsive, user-friendly websites and web applications that deliver exceptional user experiences and drive business results.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Content management systems",
      "Web application development",
      "Website maintenance and support",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-secondary" />,
    title: "Mobile Applications",
    description:
      "Develop intuitive, high-performance mobile applications for iOS and Android that engage users and solve real business problems.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Ongoing maintenance and updates",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Database className="h-10 w-10 text-secondary" />,
    title: "Backend Systems",
    description:
      "Create robust, scalable backend systems that power your digital infrastructure and support your business operations.",
    features: [
      "API development and integration",
      "Database design and optimization",
      "Cloud infrastructure setup",
      "Microservices architecture",
      "Performance optimization",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Server className="h-10 w-10 text-secondary" />,
    title: "DevOps & Cloud",
    description:
      "Implement efficient DevOps practices and cloud solutions to improve development workflows and optimize infrastructure costs.",
    features: [
      "CI/CD pipeline setup",
      "Cloud migration and management",
      "Infrastructure as code",
      "Monitoring and logging",
      "Security implementation",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    title: "Digital Strategy",
    description:
      "Develop comprehensive digital strategies that align with your business goals and drive digital transformation initiatives.",
    features: [
      "Digital transformation roadmaps",
      "Technology stack recommendations",
      "User research and insights",
      "Competitive analysis",
      "ROI measurement frameworks",
    ],
    image: "/placeholder.svg?height=500&width=800",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges through in-depth discussions and research.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a tailored strategy that outlines the approach, timeline, and deliverables.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our design team creates wireframes and visual designs that align with your brand and meet user needs.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers bring the designs to life, building robust, scalable, and secure digital solutions.",
  },
  {
    number: "05",
    title: "Testing",
    description: "We rigorously test all aspects of the solution to ensure quality, performance, and security.",
  },
  {
    number: "06",
    title: "Launch",
    description: "After final approvals, we deploy the solution and provide training and documentation as needed.",
  },
  {
    number: "07",
    title: "Support",
    description: "We offer ongoing support and maintenance to ensure your solution continues to perform optimally.",
  },
]

const testimonials = [
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
]

const servicesOverviewSteps = services.slice(0, 4).map((s, index) => ({
  index: `00${index + 1}`,
  title: s.title,
  description: s.description,
}))

const servicesBentoSpotlight = {
  label: "How Sydek engages",
  title: "From discovery workshops to hardened production systems",
  description:
    "We pair strategists with senior engineers early so scope, UX, architecture, and risk tradeoffs stay coherent. Fewer pivots mid-build—and documentation your internal team can own after handoff.",
  imageSrc: "/assets/images/nav-bar/navbar-below.png",
  imageAlt: "Sydek services preview",
  primaryCta: { label: "Plan the next sprint", href: "/company/contact" },
  outlineCta: { label: "Explore projects", href: "/solutions/projects" },
  moreHref: { label: "More details", href: "/company/about" },
} as const

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        eyebrow="What we ship"
        title="Our services"
        highlightedWord="services"
        subtitle="Comprehensive digital solutions tailored to your business needs."
      />

      <ServicesBento
        topSteps={servicesOverviewSteps}
        spotlight={servicesBentoSpotlight}
        bottomTiles={[
          {
            icon: <Lock className="h-6 w-6 text-tertiary" />,
            title: "Governed releases",
            description:
              "Security reviews, environment isolation, and change logs baked into how we merge—especially when multiple vendors touch production.",
          },
          {
            icon: <Globe className="h-6 w-6 text-secondary" />,
            title: "Global collaboration",
            description:
              "Workshops spanning timezones, stakeholder updates you can skim in minutes, and async artifacts so approvals never stall launches.",
          },
        ]}
        className="pt-4 md:pt-10"
      />

      <section className="border-t bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Capability <span className="text-gradient">depth</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Drill into what we ship—each pillar includes research, UX, engineering, Q/A, and handoff support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border bg-background transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start gap-2 p-0 hover:bg-transparent hover:text-secondary"
                  >
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn more
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to delivering exceptional digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.slice(0, 4).map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {processSteps.slice(4).map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-primary-foreground/80">What our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:max-w-4xl md:mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/10"
              >
                <p className="italic mb-6 text-primary-foreground/80">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Let's collaborate to create innovative digital solutions that drive your business forward. Our team of
              experts is ready to bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

