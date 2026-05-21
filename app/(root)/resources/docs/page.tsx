import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Book, Code, Users } from "lucide-react"
import { HeroSection } from "@/components/careers/hero-section"

const docCategories = [
  {
    icon: <Book className="h-6 w-6" />,
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    links: [
      { title: "Account Creation", href: "/resources/docs/getting-started/account-creation" },
      { title: "Platform Overview", href: "/resources/docs/getting-started/platform-overview" },
      { title: "Quick Start Guide", href: "/resources/docs/getting-started/quick-start-guide" },
    ],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer Guide",
    description: "Detailed documentation for developers",
    links: [
      { title: "API Reference", href: "/resources/docs/developer-guide/api-reference" },
      { title: "SDK Documentation", href: "/resources/docs/developer-guide/sdk-documentation" },
      { title: "Best Practices", href: "/resources/docs/developer-guide/best-practices" },
    ],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client Guide",
    description: "Learn how to use the platform as a client",
    links: [
      { title: "Project Management", href: "/resources/docs/client-guide/project-management" },
      { title: "Communication Tools", href: "/resources/docs/client-guide/communication-tools" },
      { title: "Reporting Features", href: "/resources/docs/client-guide/reporting-features" },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Sydek Documentation"
        highlightedWord="Documentation"
        subtitle={
          <>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl mx-auto">
              Comprehensive guides and resources for both developers and clients.
            </p>
            <div className="mx-auto max-w-lg">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
                <Input placeholder="Search documentation..." className="py-6 pl-10 text-lg" />
              </div>
            </div>
          </>
        }
      />

      {/* Documentation Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border shadow-sm">
                <div className="mb-4 text-secondary">{category.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-secondary hover:underline">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Additional Help?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Our support team is here to assist you. Whether you're a developer or a client, we're ready to answer your
              questions.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

