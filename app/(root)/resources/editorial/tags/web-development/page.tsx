import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Tag, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { HeroSection } from "@/components/careers/hero-section"

// Sample articles for the "Web Development" tag
const webDevArticles = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    author: "Alex Johnson",
    authorRole: "Senior Developer",
    date: "February 28, 2025",
    category: "Technology",
    tags: ["Web Development", "Future Tech", "JavaScript", "WebAssembly", "AI"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "8 min read",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt: "Discover powerful CSS features and techniques that will transform your web projects.",
    author: "Maya Patel",
    authorRole: "Frontend Specialist",
    date: "February 15, 2025",
    category: "Development",
    tags: ["Web Development", "CSS", "Frontend", "Design"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "6 min read",
  },
  {
    slug: "optimizing-web-performance",
    title: "Optimizing Web Performance: A Comprehensive Guide",
    excerpt: "Learn how to make your websites faster, more responsive, and more efficient.",
    author: "James Wilson",
    authorRole: "Performance Engineer",
    date: "January 30, 2025",
    category: "Development",
    tags: ["Web Development", "Performance", "Optimization", "UX"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "10 min read",
  },
  {
    slug: "web-accessibility-best-practices",
    title: "Web Accessibility Best Practices for Inclusive Design",
    excerpt: "Create websites that are accessible to everyone, including users with disabilities.",
    author: "Sarah Chen",
    authorRole: "UX Designer",
    date: "January 22, 2025",
    category: "Design",
    tags: ["Web Development", "Accessibility", "Inclusive Design", "WCAG"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "7 min read",
  },
  {
    slug: "serverless-architecture-for-web-apps",
    title: "Serverless Architecture for Modern Web Applications",
    excerpt: "Explore how serverless computing is changing how we build and deploy web applications.",
    author: "Michael Kim",
    authorRole: "Cloud Architect",
    date: "January 10, 2025",
    category: "Technology",
    tags: ["Web Development", "Serverless", "Cloud Computing", "Architecture"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "9 min read",
  },
  {
    slug: "responsive-design-strategies",
    title: "Responsive Design Strategies for 2025 and Beyond",
    excerpt: "Stay ahead of the curve with advanced techniques for building responsive websites.",
    author: "Emily Rodriguez",
    authorRole: "Frontend Developer",
    date: "January 5, 2025",
    category: "Design",
    tags: ["Web Development", "Responsive Design", "CSS", "Mobile"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "6 min read",
  },
]

export default function WebDevelopmentTagPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        variant="left"
        contentClassName="max-w-4xl"
        leadingAccessory={
          <div className="space-y-4">
            <Link
              href="/resources/editorial"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Editorial
            </Link>
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Tag</span>
            </div>
          </div>
        }
        title="Web Development"
        subtitle={
          <>
            <p className="text-xl md:text-xl">
              Articles, tutorials, and insights about web development technologies, practices, and trends.
            </p>
            <div className="relative mt-6 max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
              <Input placeholder="Search web development articles..." className="pl-10" />
            </div>
          </>
        }
      />

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webDevArticles.map((article, index) => (
                <Link key={index} href={`/resources/editorial/${article.slug}`} className="group">
                  <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 flex-grow">{article.excerpt}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-8 h-8 rounded-full bg-muted overflow-hidden mr-3">
                          <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt={article.author}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{article.author}</p>
                          <p className="text-xs text-muted-foreground">{article.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">Showing 6 of 24 articles</p>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Load More Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tags */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Tags</h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/resources/editorial/tags/javascript"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                JavaScript
              </Link>
              <Link
                href="/resources/editorial/tags/frontend"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                Frontend Development
              </Link>
              <Link
                href="/resources/editorial/tags/css"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                CSS
              </Link>
              <Link
                href="/resources/editorial/tags/react"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                React
              </Link>
              <Link
                href="/resources/editorial/tags/api"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                API Development
              </Link>
              <Link
                href="/resources/editorial/tags/performance"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                Performance
              </Link>
              <Link
                href="/resources/editorial/tags/accessibility"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/resources/editorial/tags/frameworks"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                Web Frameworks
              </Link>
              <Link
                href="/resources/editorial/tags/design-systems"
                className="bg-background hover:bg-muted border rounded-full px-4 py-2 text-sm transition-colors"
              >
                Design Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Web Development</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest web development insights, tutorials, and trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

