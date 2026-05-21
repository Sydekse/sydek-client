import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Monitor,
  Code,
  BookOpen,
  FileCode,
  BarChart2,
  Smartphone,
  Search,
  Download,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/careers/hero-section"

const resourceCategories = [
  {
    id: "guides",
    title: "Guides & Whitepapers",
    description: "In-depth resources to help you get the most out of our platform",
    items: [
      {
        title: "Getting Started with Sydek Platform",
        description: "A comprehensive guide for new users to set up and start using the Sydek platform effectively.",
        fileType: "PDF",
        fileSize: "4.2 MB",
        dateUpdated: "March 2, 2025",
        icon: <BookOpen className="h-6 w-6 text-blue-500" />,
        downloadUrl: "#",
      },
      {
        title: "Security Best Practices Whitepaper",
        description: "Learn how to implement security best practices when using the Sydek platform for your projects.",
        fileType: "PDF",
        fileSize: "3.8 MB",
        dateUpdated: "February 15, 2025",
        icon: <FileText className="h-6 w-6 text-blue-500" />,
        downloadUrl: "#",
      },
      {
        title: "Enterprise Integration Guide",
        description: "Detailed instructions for integrating Sydek with your existing enterprise systems and workflows.",
        fileType: "PDF",
        fileSize: "5.6 MB",
        dateUpdated: "January 28, 2025",
        icon: <FileText className="h-6 w-6 text-blue-500" />,
        downloadUrl: "#",
      },
      {
        title: "2025 Digital Transformation Trends",
        description: "Our annual report on emerging trends in digital transformation across various industries.",
        fileType: "PDF",
        fileSize: "7.2 MB",
        dateUpdated: "January 10, 2025",
        icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "templates",
    title: "Templates & Boilerplates",
    description: "Ready-to-use templates to accelerate your development process",
    items: [
      {
        title: "React Component Library Starter",
        description:
          "A pre-configured template for building your own React component library with Storybook integration.",
        fileType: "ZIP",
        fileSize: "2.3 MB",
        dateUpdated: "March 5, 2025",
        icon: <Code className="h-6 w-6 text-green-500" />,
        downloadUrl: "#",
      },
      {
        title: "Next.js E-commerce Starter Kit",
        description:
          "A fully functional e-commerce starter template built with Next.js, including product listings, cart, and checkout.",
        fileType: "ZIP",
        fileSize: "8.7 MB",
        dateUpdated: "February 22, 2025",
        icon: <Code className="h-6 w-6 text-green-500" />,
        downloadUrl: "#",
      },
      {
        title: "Mobile App UI Kit",
        description:
          "A comprehensive UI kit for mobile app design, including common screens and components in Figma format.",
        fileType: "Fig",
        fileSize: "34.5 MB",
        dateUpdated: "February 10, 2025",
        icon: <Smartphone className="h-6 w-6 text-green-500" />,
        downloadUrl: "#",
      },
      {
        title: "Dashboard Template Pack",
        description: "A collection of responsive admin dashboard templates with various layouts and component options.",
        fileType: "ZIP",
        fileSize: "12.4 MB",
        dateUpdated: "January 18, 2025",
        icon: <Monitor className="h-6 w-6 text-green-500" />,
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Utilities",
    description: "Helpful tools to enhance your workflow and productivity",
    items: [
      {
        title: "Sydek CLI Tool",
        description:
          "Command-line interface for managing your Sydek projects, automating tasks, and streamlining workflows.",
        fileType: "EXE/DMG",
        fileSize: "18.6 MB",
        dateUpdated: "March 8, 2025",
        icon: <FileCode className="h-6 w-6 text-purple-500" />,
        downloadUrl: "#",
      },
      {
        title: "Performance Analyzer",
        description: "A desktop application for analyzing and optimizing the performance of your web applications.",
        fileType: "EXE/DMG",
        fileSize: "24.2 MB",
        dateUpdated: "February 28, 2025",
        icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
        downloadUrl: "#",
      },
      {
        title: "Design System Generator",
        description: "Automatically generate a consistent design system from your existing UI components.",
        fileType: "ZIP",
        fileSize: "3.8 MB",
        dateUpdated: "February 12, 2025",
        icon: <FileCode className="h-6 w-6 text-purple-500" />,
        downloadUrl: "#",
      },
      {
        title: "API Request Builder",
        description: "Interactive tool for building, testing, and documenting API requests to your Sydek backends.",
        fileType: "EXE/DMG",
        fileSize: "16.9 MB",
        dateUpdated: "January 25, 2025",
        icon: <Code className="h-6 w-6 text-purple-500" />,
        downloadUrl: "#",
      },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        sectionClassName="pb-20 md:pb-32"
        title="Resources & Downloads"
        highlightedWord="Downloads"
        subtitle={
          <>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl mx-auto">
              Access our collection of guides, templates, tools, and other resources to help you get the most out of the
              Sydek platform.
            </p>
            <div className="flex max-w-md items-center justify-center mx-auto">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
                <Input placeholder="Search resources..." className="py-6 pl-10 pr-4 text-lg" />
              </div>
            </div>
          </>
        }
      />

      {/* Resources Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="guides">Guides & Whitepapers</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="tools">Tools & Utilities</TabsTrigger>
            </TabsList>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground text-center mb-8">{category.description}</p>

                  <div className="space-y-6">
                    {category.items.map((item, index) => (
                      <Card key={index} className="overflow-hidden border hover:shadow-md transition-all duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <div className="md:col-span-3 p-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-muted rounded-lg">{item.icon}</div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground mb-4">{item.description}</p>
                                <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4">
                                  <span className="flex items-center">
                                    <FileText className="h-4 w-4 mr-1" />
                                    {item.fileType}
                                  </span>
                                  <span>{item.fileSize}</span>
                                  <span>Updated: {item.dateUpdated}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-2 bg-muted flex items-center justify-center p-6 md:border-l">
                            <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
                              <Link href={item.downloadUrl}>
                                <Download className="mr-2 h-4 w-4" />
                                Download {item.fileType}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* SDK Downloads */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer <span className="text-gradient">SDKs</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Official Software Development Kits for integrating with the Sydek platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "JavaScript/TypeScript",
                version: "v2.4.1",
                updated: "March 5, 2025",
                icon: <Code className="h-10 w-10 text-yellow-500" />,
                packageManager: "npm install @sydek/js-sdk",
                docsUrl: "#",
                downloadUrl: "#",
              },
              {
                name: "Python",
                version: "v1.9.2",
                updated: "February 28, 2025",
                icon: <Code className="h-10 w-10 text-blue-500" />,
                packageManager: "pip install sydek-sdk",
                docsUrl: "#",
                downloadUrl: "#",
              },
              {
                name: "Java",
                version: "v3.2.0",
                updated: "February 20, 2025",
                icon: <Code className="h-10 w-10 text-red-500" />,
                packageManager: "maven: com.sydek:java-sdk:3.2.0",
                docsUrl: "#",
                downloadUrl: "#",
              },
              {
                name: "PHP",
                version: "v2.1.3",
                updated: "February 15, 2025",
                icon: <Code className="h-10 w-10 text-purple-500" />,
                packageManager: "composer require sydek/php-sdk",
                docsUrl: "#",
                downloadUrl: "#",
              },
            ].map((sdk, index) => (
              <Card key={index} className="border hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex justify-center mb-2">{sdk.icon}</div>
                  <CardTitle className="text-center">{sdk.name}</CardTitle>
                  <CardDescription className="text-center">
                    {sdk.version} • Updated {sdk.updated}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-2 rounded-md text-sm mb-4 overflow-x-auto">
                    <code>{sdk.packageManager}</code>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                    <Link href={sdk.downloadUrl}>
                      <Download className="mr-2 h-4 w-4" />
                      Download SDK
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={sdk.docsUrl}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Documentation
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Explore our full library of resources to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Documentation",
                description: "Comprehensive documentation for all Sydek products and services",
                icon: <BookOpen className="h-12 w-12 text-secondary" />,
                url: "/resources/docs",
              },
              {
                title: "API Reference",
                description: "Detailed API documentation with examples and references",
                icon: <Code className="h-12 w-12 text-secondary" />,
                url: "/resources/docs/developer-guide/api-reference",
              },
              {
                title: "Tutorial Videos",
                description: "Step-by-step video tutorials for common tasks and workflows",
                icon: <Monitor className="h-12 w-12 text-secondary" />,
                url: "/resources/videos",
              },
              {
                title: "Community Forums",
                description: "Connect with other Sydek users to share knowledge and get help",
                icon: <Users className="h-12 w-12 text-secondary" />,
                url: "/community",
              },
              {
                title: "Sample Projects",
                description: "Browse and download example projects built with Sydek",
                icon: <FolderOpen className="h-12 w-12 text-secondary" />,
                url: "/resources/examples",
              },
              {
                title: "Webinars & Events",
                description: "Recordings of past webinars and information about upcoming events",
                icon: <Calendar className="h-12 w-12 text-secondary" />,
                url: "/resources/events",
              },
            ].map((resource, index) => (
              <Link key={index} href={resource.url} className="group">
                <div className="bg-card rounded-xl border p-8 h-full hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find What You Need?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Our support team is here to help you find the resources you need to succeed with Sydek.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/company/contact">Contact Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources/docs">Browse Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Users({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function FolderOpen({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

function Calendar({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

