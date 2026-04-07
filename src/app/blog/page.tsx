import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Filter,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog | Insights, strategy, and practical guidance",
  description:
    "Read clear, actionable articles on growth, design, operations, and digital strategy. Built for teams that want better decisions and measurable outcomes.",
};

const featuredPost = {
  title: "What high-performing websites do differently in the first 10 seconds",
  description:
    "A practical breakdown of the trust signals, messaging patterns, and page structure choices that help visitors understand value quickly and take action with confidence.",
  category: "Strategy",
  readTime: "8 min read",
  date: "April 2026",
  href: "/blog/high-performing-websites-first-10-seconds",
};

const posts = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "How to turn service pages into consistent lead generators",
    description:
      "See how clear positioning, proof points, and a focused call to action can improve conversion without adding friction.",
    href: "/blog/service-pages-lead-generators",
    category: "Conversion",
    readTime: "6 min read",
    date: "April 18, 2026",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "The design details that make a brand feel more credible",
    description:
      "From spacing and typography to imagery and microcopy, small choices can have a measurable impact on trust.",
    href: "/blog/design-details-credible-brand",
    category: "Brand",
    readTime: "5 min read",
    date: "April 14, 2026",
  },
  {
    icon: <CalendarDays className="h-5 w-5" />,
    title: "A simple content calendar for teams that need steady SEO growth",
    description:
      "Build a repeatable publishing system that supports search visibility, audience education, and sales conversations.",
    href: "/blog/content-calendar-seo-growth",
    category: "SEO",
    readTime: "7 min read",
    date: "April 10, 2026",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "How to choose keywords that match real buyer intent",
    description:
      "Focus on the questions your customers actually ask and create pages that answer them clearly and completely.",
    href: "/blog/choose-keywords-buyer-intent",
    category: "SEO",
    readTime: "6 min read",
    date: "April 6, 2026",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: "Why faster project delivery usually starts with better scope",
    description:
      "Learn how tighter planning, clearer approvals, and fewer handoffs can reduce delays and improve outcomes.",
    href: "/blog/faster-delivery-better-scope",
    category: "Operations",
    readTime: "4 min read",
    date: "April 2, 2026",
  },
  {
    icon: <ArrowRight className="h-5 w-5" />,
    title: "What to include in a case study that actually helps sell",
    description:
      "A strong case study should show the problem, the process, and the result in language that decision-makers trust.",
    href: "/blog/case-study-that-helps-sell",
    category: "Sales",
    readTime: "5 min read",
    date: "March 28, 2026",
  },
];

const categories = [
  "All topics",
  "Strategy",
  "Conversion",
  "SEO",
  "Brand",
  "Operations",
  "Sales",
];

const tags = [
  "Website strategy",
  "Lead generation",
  "Content planning",
  "Conversion rate",
  "Client communication",
  "Search visibility",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Editorial insights for teams that want better results
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Practical ideas for clearer messaging, stronger content, and
                  better growth
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Our blog shares straightforward guidance on websites, content,
                  and digital strategy. Every article is written to help teams
                  make better decisions, improve performance, and move faster
                  with less guesswork.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#latest-posts">Browse articles</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/contact">Book a Call</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: "120+", label: "articles and guides published" },
                  { value: "3x", label: "more qualified traffic from content" },
                  { value: "1 day", label: "average response time for inquiries" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-2xl font-bold text-slate-950">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  <TrendingUp className="h-4 w-4" />
                  Featured article
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {featuredPost.title}
                </h2>
                <p className="text-base leading-7 text-slate-600">
                  {featuredPost.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button asChild className="w-full">
                  <Link href={featuredPost.href}>Read featured article</Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest thinking"
            title="Articles that help teams plan, publish, and perform"
            description="Explore practical posts on content strategy, website conversion, SEO, and the systems behind consistent growth."
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                See services
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Filter className="h-4 w-4 text-blue-600" />
                Topic filters
              </div>
              <div className="mt-5 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Categories
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                        type="button"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Popular tags
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        type="button"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm leading-6 text-slate-600">
                    Looking for a specific topic? Use the filters to find
                    articles on strategy, SEO, conversion, and content planning.
                  </p>
                </div>
              </div>
            </aside>

            <div id="latest-posts" className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <BlogPostCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Get new articles in your inbox
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                  Join readers who want practical guidance on websites, content,
                  and growth. We send useful updates, not clutter.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">Request a quote</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/about">Learn more</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
                <h3 className="text-xl font-semibold">What subscribers get</h3>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-blue-50">
                  <li>• Clear breakdowns of what works on high-converting pages</li>
                  <li>• SEO ideas you can apply without a large content team</li>
                  <li>• Real examples from client projects and editorial planning</li>
                  <li>• Short, actionable updates you can use right away</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          headline="Need help turning content into qualified leads?"
          description="We help teams build content systems that support search visibility, trust, and measurable growth."
          buttonLabel="Get Started"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}