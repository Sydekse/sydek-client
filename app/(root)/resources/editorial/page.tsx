import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/careers/hero-section";
import ArticleCard from "@/components/resources/editorial/article-card";
import FeaturedArticle from "@/components/resources/editorial/featured-article";
import Newsletter from "@/components/resources/editorial/newsletter";

export default function EditorialPage() {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch",
      excerpt:
        "Explore the emerging technologies and methodologies that are shaping the future of web development.",
      date: "February 28, 2025",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      slug: "future-of-web-development",
    },
    {
      id: 2,
      title: "Designing for Accessibility: Best Practices",
      excerpt:
        "Learn how to create inclusive digital experiences that work for everyone.",
      date: "February 20, 2025",
      category: "Design",
      image: "/placeholder.svg?height=400&width=600",
      slug: "designing-for-accessibility",
    },
    {
      id: 3,
      title: "The Rise of AI in Digital Marketing",
      excerpt:
        "Discover how artificial intelligence is transforming the digital marketing landscape.",
      date: "February 15, 2025",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
      slug: "rise-of-ai-in-digital-marketing",
    },
    {
      id: 4,
      title: "Mobile-First Development: Why It Matters",
      excerpt:
        "Understand the importance of prioritizing mobile experiences in your development process.",
      date: "February 10, 2025",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      slug: "mobile-first-development",
    },
    {
      id: 5,
      title: "Building Scalable Web Applications",
      excerpt:
        "Strategies and best practices for creating web applications that can grow with your business.",
      date: "February 5, 2025",
      category: "Development",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-scalable-web-applications",
    },
    {
      id: 6,
      title: "The Psychology of User Experience",
      excerpt:
        "Explore how understanding human psychology can help you create more effective digital experiences.",
      date: "January 28, 2025",
      category: "UX Design",
      image: "/placeholder.svg?height=400&width=600",
      slug: "psychology-of-user-experience",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Sydek Editorial"
        highlightedWord="Editorial"
        subtitle="Insights, trends, and thought leadership from our experts."
        actions={
          <Button
            size="lg"
            className="rounded-full bg-secondary text-white hover:bg-secondary/90"
            asChild
          >
            <Link href="#articles">
              Browse Articles
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      {/* Featured Article */}
      <FeaturedArticle
        title="Digital Transformation: Navigating the Future"
        description="In an era of rapid technological advancement, businesses must embrace digital transformation to stay competitive. This article explores strategies for successful implementation."
        image="/placeholder.svg?height=400&width=600"
        buttonLink="/resources/editorial/digital-transformation"
      />

      {/* Articles Grid */}
      <section id="articles" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
