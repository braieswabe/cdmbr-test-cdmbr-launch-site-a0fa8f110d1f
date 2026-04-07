import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear advice for teams that want better results.",
  description: "Learn more about clear advice for teams that want better results.",
};

import Link from "next/link";
import { CalendarDays, Tag, ArrowRight, Newspaper, Sparkles, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";

const featuredPost = {
  title: "How to choose a partner that can actually deliver on time",
  excerpt:
    "A practical guide to evaluating process, communication, and accountability before you sign a contract.",
  date: "April 2, 2026",
  category: "Buying Guide",
};

const posts = [
  {
    title: "7 signs your project needs a clearer scope",
    excerpt: "Spot the warning signs early and avoid delays, rework, and budget creep.",
    date: "March 28, 2026",
    category: "Project Planning",
  },
  {
    title: "What a strong onboarding process should include",
    excerpt: "See the steps that keep stakeholders aligned from kickoff through launch.",
    date: "March 21, 2026",
    category: "Operations",
  },
  {
    title: "How to compare proposals without getting lost in jargon",
    excerpt: "A simple framework for evaluating value, risk, and long-term fit.",
    date: "March 14, 2026",
    category: "Buying Guide",
  },
  {
    title: "The metrics that matter after a website launch",
    excerpt: "Focus on the numbers that show whether your site is helping the business grow.",
    date: "March 7, 2026",
    category: "Analytics",
  },
  {
    title: "A practical checklist for a smoother client handoff",
    excerpt: "Reduce friction with a handoff process that keeps work moving after launch.",
    date: "February 28, 2026",
    category: "Client Experience",
  },
  {
    title: "When to refresh your brand messaging",
    excerpt: "Learn the signals that your positioning needs a reset and how to approach it.",
    date: "February 20, 2026",
    category: "Brand Strategy",
  },
];

const categories = [
  "All posts",
  "Buying Guide",
  "Project Planning",
  "Operations",
  "Analytics",
  "Client Experience",
  "Brand Strategy",
];

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Insights, guides, and practical advice
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Clear advice for teams that want better results.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Read concise, useful articles on planning, delivery, and decision-making — written to help you move faster with
              more confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#latest"
                className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Explore articles
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Book a call
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                <Newspaper className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Featured article</p>
                <p className="font-semibold text-slate-950">{featuredPost.category}</p>
              </div>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950">{featuredPost.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{featuredPost.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {featuredPost.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Featured
              </span>
            </div>
            <Link
              href="#latest"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600"
            >
              Read the featured post
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section id="latest" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recent articles"
          title="Fresh thinking for better decisions."
          description="Browse our latest posts for practical guidance you can use right away."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-2 text-slate-900">
              <Search className="h-5 w-5 text-sky-600" />
              <h2 className="text-lg font-semibold">Categories</h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href="#latest"
                  className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm font-semibold">Editorial promise</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Every article is written to answer a real question, reduce uncertainty, and help you make a better decision.
              </p>
            </div>
          </aside>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-sky-100 via-white to-slate-100 p-6">
                  <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-sky-300 bg-white/70">
                    <div className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white">
                        {index + 1}
                      </div>
                      <p className="mt-3 text-sm font-medium text-slate-900">Article image placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
                      {post.category}
                    </span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition group-hover:text-sky-600"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  );
}