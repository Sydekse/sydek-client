import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2, Bookmark, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/careers/hero-section"

// This would typically come from a CMS or API
const articles = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look to the future, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is increasingly being integrated into the development process, from code generation and optimization to automated testing and debugging. Tools like GitHub Copilot are just the beginning of what promises to be a revolution in how developers write and maintain code.</p>
      
      <p>AI can analyze vast amounts of code to identify patterns, suggest improvements, and even generate entire functions based on natural language descriptions. This not only speeds up development but also helps reduce errors and improve code quality.</p>
      
      <h2>WebAssembly (Wasm)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser by allowing code written in languages like C, C++, and Rust to run at near-native speed. This opens up possibilities for complex applications that were previously impractical for the web, from advanced games to professional-grade video editing tools.</p>
      
      <p>As WebAssembly continues to mature, we can expect to see more desktop-quality applications migrating to the web, blurring the line between web and native experiences.</p>
      
      <h2>Edge Computing</h2>
      <p>The rise of edge computing is changing where and how web applications are deployed and executed. By running code closer to the user, edge functions reduce latency and improve performance, especially for global applications.</p>
      
      <p>Frameworks like Next.js are embracing this trend with features that make it easier to deploy and run code at the edge, enabling developers to build faster, more responsive applications without managing complex infrastructure.</p>
      
      <h2>Headless Architecture</h2>
      <p>The separation of frontend and backend concerns continues to gain momentum with headless architecture. By decoupling the presentation layer from the content management system or e-commerce platform, developers gain greater flexibility in how they build and deploy user interfaces.</p>
      
      <p>This approach enables teams to use modern frontend frameworks while leveraging specialized backend systems, resulting in better performance, improved developer experience, and more consistent user experiences across different channels.</p>
      
      <h2>Web Components and Micro-Frontends</h2>
      <p>As applications grow in complexity, there's an increasing need for modular, reusable components that can work across different frameworks and projects. Web Components provide a standardized way to create custom, reusable elements that encapsulate functionality and styling.</p>
      
      <p>Similarly, micro-frontend architecture allows teams to build and deploy parts of a frontend independently, enabling larger organizations to scale development across multiple teams while maintaining a cohesive user experience.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying informed about emerging trends and continuously adapting our skills and approaches, we can build better, faster, and more engaging web experiences that meet the evolving needs of users and businesses.</p>
      
      <p>As these technologies mature and new ones emerge, the web will continue to be a dynamic platform for innovation and creativity, pushing the boundaries of what's possible in digital experiences.</p>
    `,
    author: "Alex Johnson",
    authorRole: "Senior Developer",
    date: "February 28, 2025",
    category: "Technology",
    tags: ["Web Development", "Future Tech", "JavaScript", "WebAssembly", "AI"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "8 min read",
    relatedArticles: ["designing-for-accessibility", "mobile-first-development", "building-scalable-web-applications"],
  },
  {
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone.",
    content: "Full article content would go here...",
    author: "Maya Patel",
    authorRole: "UX Designer",
    date: "February 20, 2025",
    category: "Design",
    tags: ["Accessibility", "UX Design", "Inclusive Design", "WCAG"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "6 min read",
    relatedArticles: ["future-of-web-development", "psychology-of-user-experience", "mobile-first-development"],
  },
  {
    slug: "mobile-first-development",
    title: "Mobile-First Development: Why It Matters",
    excerpt: "Understand the importance of prioritizing mobile experiences in your development process.",
    content: "Full article content would go here...",
    author: "James Wilson",
    authorRole: "Frontend Developer",
    date: "February 10, 2025",
    category: "Development",
    tags: ["Mobile", "Responsive Design", "Frontend", "User Experience"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "5 min read",
    relatedArticles: ["future-of-web-development", "designing-for-accessibility", "building-scalable-web-applications"],
  },
  {
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications",
    excerpt: "Strategies and best practices for creating web applications that can grow with your business.",
    content: "Full article content would go here...",
    author: "Sarah Chen",
    authorRole: "Software Architect",
    date: "February 5, 2025",
    category: "Development",
    tags: ["Scalability", "Architecture", "Performance", "Best Practices"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "10 min read",
    relatedArticles: ["future-of-web-development", "mobile-first-development", "rise-of-ai-in-digital-marketing"],
  },
]

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Find the article by slug
  const article = articles.find((article) => article.slug === slug)

  // If article not found, this would typically redirect to a 404 page
  if (!article) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link href="/resources/editorial">
          <Button>Back to Editorial</Button>
        </Link>
      </div>
    )
  }

  // Find related articles
  const relatedArticles = articles.filter((a) => article.relatedArticles.includes(a.slug)).slice(0, 3)

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
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                {article.category}
              </span>
              <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">{article.readTime}</span>
            </div>
          </div>
        }
        title={article.title}
        subtitle={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center">
              <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-muted">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={article.author}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{article.author}</p>
                <p className="text-xs text-muted-foreground">{article.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {article.date}
            </div>
          </div>
        }
      />

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden border shadow-lg">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <div className="flex lg:flex-col gap-4 justify-center">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Bookmark className="h-5 w-5" />
                    <span className="sr-only">Bookmark</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <MessageSquare className="h-5 w-5" />
                    <span className="sr-only">Comment</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>

              <div className="mt-12 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/resources/editorial/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm bg-muted hover:bg-muted/80 px-3 py-1 rounded-full transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-6 border-t">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt={article.author}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                    <p className="text-sm mt-1">
                      <Link href="#" className="text-secondary hover:underline">
                        View Profile
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="lg:col-span-2 order-3">
              <div className="lg:sticky lg:top-32">
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground">TABLE OF CONTENTS</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-secondary hover:underline">
                    AI-Powered Development
                  </a>
                  <a href="#" className="block hover:text-secondary">
                    WebAssembly (Wasm)
                  </a>
                  <a href="#" className="block hover:text-secondary">
                    Edge Computing
                  </a>
                  <a href="#" className="block hover:text-secondary">
                    Headless Architecture
                  </a>
                  <a href="#" className="block hover:text-secondary">
                    Web Components and Micro-Frontends
                  </a>
                  <a href="#" className="block hover:text-secondary">
                    Conclusion
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <Link key={index} href={`/resources/editorial/${relatedArticle.slug}`} className="group">
                  <div className="bg-background rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={relatedArticle.image || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {relatedArticle.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-2 mb-1 group-hover:text-secondary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{relatedArticle.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link href="/resources/editorial">View All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest insights and updates.
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

