import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical ideas for better websites, clearer messaging, and stronger growth.",
  description: "Learn more about practical ideas for better websites, clearer messaging, and stronger growth.",
};

import Link from "next/link";
import { CalendarDays, ChevronRight, Clock3, Search, Tag } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";

const featuredArticle = {
  title: "How to turn a website into a reliable sales asset",
  excerpt:
    "A practical framework for clarifying your message, reducing friction, and guiding visitors toward action without sounding pushy or generic.",
  date: "April 9, 2026",
  category: "Strategy",
  readTime: "8 min read",
  href: "/blog/turn-website-into-sales-asset",
};

const articles = [
  {
    title: "The 7-page structure that helps service businesses convert faster",
    description:
      "See how a focused information architecture improves clarity, trust, and lead quality across the buyer journey.",
    date: "April 2, 2026",
    category: "Conversion",
  },
  {
    title: "What high-performing homepages say in the first 10 seconds",
    description:
      "A breakdown of the messaging patterns that help visitors understand value immediately and keep scrolling.",
    date: "March 28, 2026",
    category: "Messaging",
  },
  {
    title: "How to write service pages that answer objections before they appear",
    description:
      "Use plain language, proof points, and outcome-led copy to reduce hesitation and increase qualified inquiries.",
    date: "March 21, 2026",
    category: "Copywriting",
  },
  {
    title: "Design choices that make a professional brand feel more credible",
    description:
      "From spacing to typography, learn which visual decisions create confidence and which ones quietly erode it.",
    date: "March 14, 2026",
    category: "Design",
  },
  {
    title: "A simple content plan for teams that need SEO without the chaos",
    description:
      "Build a sustainable publishing rhythm around topics your audience actually searches for and shares.",
    date: "March 7, 2026",
    category: "SEO",
  },
  {
    title: "The best calls to action are specific, not loud",
    description:
      "Discover how direct, benefit-led CTAs outperform vague prompts and help users move forward with confidence.",
    date: "February 28, 2026",
    category: "Optimization",
  },
];

const categories = [
  "All topics",
  "Strategy",
  "Messaging",
  "Copywriting",
  "Design",
  "SEO",
  "Optimization",
];

export default function BlogPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.6fr_0.8fr] lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--secondary)]/10 px-4 py-2 text-sm font-medium text-[var(--primary)]">
            <Tag className="h-4 w-4" />
            Featured article
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Practical ideas for better websites, clearer messaging, and stronger growth.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-black/70">
                Read concise, actionable articles on web strategy, content, design, and conversion
                — written for teams that want measurable results, not marketing fluff.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-black/60">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {featuredArticle.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {featuredArticle.readTime}
                </span>
                <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 font-medium text-[var(--primary)]">
                  {featuredArticle.category}
                </span>
              </div>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/70">
                Learn how to structure your homepage, sharpen your offer, and create a content
                system that supports SEO and sales at the same time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={featuredArticle.href}>Read featured article</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="#latest-posts">Browse recent posts</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[var(--secondary)]/15 via-white to-[var(--accent)]/10 p-6">
              <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] p-6 text-white shadow-lg">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      Latest insight
                    </span>
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Featured read</p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight">
                      How to turn a website into a reliable sales asset
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                      A clear framework for improving clarity, trust, and conversion across every
                      key page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Browse by topic</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-[var(--primary)] p-6 text-white shadow-sm">
            <p className="text-sm font-medium text-white/80">Need a faster path?</p>
            <h2 className="mt-2 text-2xl font-semibold">Get the website checklist</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              A concise guide to the pages, proof points, and calls to action that help visitors
              move from interest to inquiry.
            </p>
            <Button asChild className="mt-5 bg-white text-[var(--primary)] hover:bg-white/90">
              <Link href="/contact">Request the checklist</Link>
            </Button>
          </div>
        </aside>
      </section>

      <section id="latest-posts" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recent articles"
          title="Fresh ideas for teams that want better results"
          description="A curated feed of practical articles, updates, and playbooks designed to help you make smarter decisions about your website and content."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--secondary)]/30 via-[var(--accent)]/10 to-[var(--primary)]/20" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-sm text-black/55">
                  <span className="rounded-full bg-black/5 px-3 py-1 font-medium text-black/70">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/70">{article.description}</p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition group-hover:gap-3"
                >
                  Read article
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <NewsletterSignup
          eyebrow="Stay in the loop"
          title="Get one useful article each month"
          description="Join readers who want practical guidance on messaging, design, SEO, and conversion — delivered in a format you can actually use."
          buttonLabel="Subscribe"
          note="No spam. Just concise insights, examples, and updates that help you improve your website with confidence."
        />
      </section>
    </main>
  );
}