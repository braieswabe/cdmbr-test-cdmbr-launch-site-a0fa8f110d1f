import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical guidance for teams that want clearer messaging and better results.",
  description: "Learn more about practical guidance for teams that want clearer messaging and better results.",
};

import Link from "next/link";
import { CalendarDays, Clock3, ArrowRight, Tag, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";

const categories = [
  "Strategy",
  "SEO",
  "Conversion",
  "Brand",
  "Operations",
  "Client Experience",
];

const featuredPost = {
  title: "How to turn a professional website into a reliable lead source",
  excerpt:
    "A practical framework for clarifying your message, improving trust signals, and making it easier for the right clients to take action.",
  date: "April 7, 2026",
  category: "Conversion",
  readTime: "8 min read",
};

const posts = [
  {
    title: "7 homepage changes that improve inquiries without adding more traffic",
    excerpt:
      "Small adjustments to structure, proof, and calls to action can create a noticeable lift in qualified leads.",
    date: "April 2, 2026",
    category: "Conversion",
    readTime: "6 min read",
  },
  {
    title: "What clients look for before they book a call",
    excerpt:
      "The trust signals, clarity markers, and service details that reduce hesitation and increase response rates.",
    date: "March 28, 2026",
    category: "Client Experience",
    readTime: "5 min read",
  },
  {
    title: "A simple SEO content plan for service businesses",
    excerpt:
      "Build topical authority with a focused publishing rhythm that supports visibility and buyer intent.",
    date: "March 21, 2026",
    category: "SEO",
    readTime: "7 min read",
  },
  {
    title: "How to write service pages that feel clear, confident, and useful",
    excerpt:
      "Use benefit-led copy, scannable structure, and proof to help visitors understand your offer fast.",
    date: "March 14, 2026",
    category: "Strategy",
    readTime: "9 min read",
  },
  {
    title: "The role of testimonials in a high-converting website",
    excerpt:
      "Learn how to place, frame, and select testimonials so they support credibility instead of blending in.",
    date: "March 8, 2026",
    category: "Brand",
    readTime: "4 min read",
  },
  {
    title: "Why responsive support matters after launch",
    excerpt:
      "A dependable post-launch process keeps your site accurate, fast, and aligned with business goals.",
    date: "March 1, 2026",
    category: "Operations",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
              <Tag className="h-4 w-4" />
              Educational content hub
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Practical guidance for teams that want clearer messaging and better results.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              Our blog is built to help you make smarter website decisions. Expect concise,
              authoritative articles on SEO, conversion, trust-building, and client experience—
              all focused on measurable value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#latest"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                Browse articles
              </Link>
              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-primary-300 hover:text-primary-700"
              >
                Get updates
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl bg-neutral-900 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-300">
              Popular topics
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <Search className="h-4 w-4" />
                Search-friendly content
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-200">
                Every article is designed to answer real questions prospects ask before they
                inquire, helping your site earn trust and visibility over time.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured article"
          title="Start here if you want a website that works harder for your business."
          description="A high-value read for first-time visitors who want practical steps, not theory."
        />
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[280px] bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 p-8 text-white sm:p-10">
            <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
              {featuredPost.category}
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {featuredPost.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {featuredPost.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-4 w-4" />
                {featuredPost.readTime}
              </span>
            </div>
            <Link
              href="#latest"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-neutral-100"
            >
              Read featured article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center bg-neutral-100 p-8">
            <div className="w-full max-w-md rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <Tag className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Featured image placeholder
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Use a polished editorial image, product screenshot, or branded illustration to
                reinforce the article’s main takeaway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="latest" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest articles"
          title="Clear, useful articles that support SEO and build confidence."
          description="A mix of strategy, practical guidance, and client-focused insights designed to attract the right audience."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
            <h3 className="text-lg font-semibold">Filter by category</h3>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-primary-700"
                >
                  <span>{category}</span>
                  <span className="text-xs text-neutral-400">View</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-100" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-sm text-neutral-500">
                    <span className="rounded-full bg-primary-50 px-3 py-1 font-medium text-primary-700">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-sm text-neutral-500">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 font-semibold text-primary-700 transition group-hover:text-primary-800"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <NewsletterSignup />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CTABanner
          headline="Want practical ideas you can use right away?"
          description="Subscribe for concise guidance on improving clarity, conversion, and search visibility."
          buttonLabel="Join the newsletter"
          buttonHref="#newsletter"
        />
      </section>
    </main>
  );
}