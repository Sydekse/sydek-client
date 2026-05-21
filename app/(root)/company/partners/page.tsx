import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/careers/hero-section"

// Sample partner logos
const featured = [
  { name: "Microsoft", logo: "/placeholder.svg?height=80&width=180", size: "enterprise" },
  { name: "Salesforce", logo: "/placeholder.svg?height=80&width=180", size: "enterprise" },
  { name: "AWS", logo: "/placeholder.svg?height=80&width=180", size: "enterprise" },
  { name: "HubSpot", logo: "/placeholder.svg?height=80&width=180", size: "enterprise" },
]

const technology = [
  { name: "MongoDB", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "Stripe", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "Docker", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "SendGrid", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "Cloudflare", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "Auth0", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
]

const services = [
  { name: "Deloitte", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "Accenture", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "KPMG", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
  { name: "McKinsey", logo: "/placeholder.svg?height=60&width=120", size: "standard" },
]

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        sectionClassName="pb-20 md:pb-32"
        title="Our Partners"
        highlightedWord="Partners"
        subtitle="Collaborating with industry leaders to deliver innovative solutions and exceptional value to our clients."
        actions={
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
            <Link href="#partner-program">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        }
      />

      {/* Featured Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">Our strategic partnerships with global industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {featured.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-card rounded-xl border hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Integrating with leading technology providers to enhance our platform capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {technology.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-xl border hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Service <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Consulting firms and agencies that help implement and maximize Sydek solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-xl border hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section id="partner-program" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our <span className="text-gradient">Partner Program</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Sydek Partner Program offers a collaborative approach to building, marketing, and selling
                  solutions that help our mutual customers succeed.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a technology provider, service provider, or consultant, we offer resources and support
                  to help you grow your business with Sydek.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Access to technical resources and training",
                    "Co-marketing opportunities",
                    "Sales enablement materials",
                    "Partner portal access",
                    "Dedicated partner manager",
                    "Joint go-to-market strategies",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-secondary hover:bg-secondary/90">
                  <Link href="/company/partners/apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Partner Program Tiers</CardTitle>
                    <CardDescription>Choose the partnership level that's right for your business</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">Silver Partner</h3>
                        <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          Entry Level
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Perfect for smaller businesses and consultants getting started with Sydek.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/company/partners/silver">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg border-secondary/50 bg-secondary/5 relative">
                      <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">Gold Partner</h3>
                        <span className="text-sm bg-secondary/20 text-secondary px-2 py-1 rounded-full">Mid-Tier</span>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Ideal for established businesses looking to grow their Sydek practice.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/company/partners/gold">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">Platinum Partner</h3>
                        <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          Enterprise
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        For strategic partners with deep expertise and significant market reach.
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/company/partners/platinum">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How do I qualify for the Sydek Partner Program?",
                  answer:
                    "Our partner program is open to businesses that align with our values and can demonstrate expertise in relevant areas. The specific requirements vary by partnership tier, but typically include having qualified staff, a track record of successful projects, and a commitment to ongoing training and certification.",
                },
                {
                  question: "What benefits do partners receive?",
                  answer:
                    "Partners receive a range of benefits including access to training and certification programs, sales enablement resources, co-marketing opportunities, lead sharing, dedicated partner support, and depending on the partnership tier, revenue sharing options.",
                },
                {
                  question: "Is there a cost to join the partner program?",
                  answer:
                    "The Silver tier is available at no cost, while Gold and Platinum tiers have annual program fees that reflect the increased benefits and support. These fees are often offset by the first successful customer engagement.",
                },
                {
                  question: "How long does the application process take?",
                  answer:
                    "Typically, the application review process takes 2-3 weeks. After initial approval, there may be additional onboarding steps depending on the partnership tier you're applying for.",
                },
                {
                  question: "Can I upgrade my partnership tier later?",
                  answer:
                    "Yes, partners can apply to upgrade their tier as their business grows. Upgrades are evaluated based on performance in the current tier, including customer success stories, certification achievements, and revenue generation.",
                },
              ].map((faq, index) => (
                <details key={index} className="group border rounded-lg overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-6 pt-0 border-t">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <div className="relative bg-gradient-to-r from-secondary via-accent to-tertiary p-12 text-center">
              <div className="absolute inset-0 bg-opacity-90 bg-grid-white/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Partner with Sydek?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Join our global network of partners and grow your business while delivering exceptional solutions to
                  clients.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                    Apply to Partner Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Partner Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

