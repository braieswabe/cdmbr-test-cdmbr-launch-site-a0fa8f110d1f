import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Filter,
  Newspaper,
  Search,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore practical articles on web strategy, conversion, SEO, and brand clarity.",
};

const categories = [
  "All articles",
  "Strategy",
  "SEO",
  "Conversion",
  "Branding",
  "Content",
];

const featuredPost = {
  title: "How to turn a homepage into a conversion tool without making it feel pushy",
  excerpt:
    "A strong homepage should answer three questions quickly: what you do, who it’s for, and why it matters. This guide breaks down the structure, messaging, and design choices that help visitors move forward with confidence.",
  category: "Conversion",
  date: "April 2, 2026",
  readTime: "8 min read",
};

const posts = [
  {
    icon: Newspaper,
    number: "01",
    title: "The 7 sections every high-performing service page should include",
    description:
      "A practical framework for building service pages that are clear, persuasive, and easy to scan on mobile.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Brand trust signals that actually influence buying decisions",
    description:
      "Learn which proof points matter most and how to present them without overwhelming your audience.",
  },
  {
    icon: Search,
    number: "03",
    title: "SEO for small businesses: what to prioritize before publishing more content",
    description:
      "A focused approach to search visibility that starts with intent, structure, and useful answers.",
  },
  {
    icon: Filter,
    number: "04",
    title: "Why your navigation may be costing you leads",
    description:
      "Simple information architecture improvements can reduce friction and help visitors find the right path faster.",
  },
  {
    icon: CalendarDays,
    number: "05",
    title: "How often should you update your website content?",
    description:
      "A realistic maintenance plan for keeping your site accurate, relevant, and aligned with your business goals.",
  },
  {
    icon: Clock3,
    number: "06",
    title: "What makes a case study persuasive to decision-makers",
    description:
      "The best case studies focus on context, challenge, action, and measurable outcome — not just a list of deliverables.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              <Sparkles className="h-4 w-4" />
              Practical insights for better websites and stronger growth
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A blog built to educate, rank, and help people make better decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We publish clear, actionable articles on website strategy, SEO,
              conversion, and brand messaging — written for busy teams that want
              useful guidance, not jargon.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Read featured article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Browse topics</p>
                <p className="text-lg font-semibold text-slate-950">
                  Find the right article faster
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    index === 0
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Most read this month</p>
              <p className="mt-2 text-base font-semibold text-slate-950">
                Homepage structure that improves clarity and conversions
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A concise breakdown of the sections and messaging that help
                visitors understand your value quickly.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured article"
          title="How to turn a homepage into a conversion tool"
          description="This guide explains how to structure your homepage so it answers key questions, builds trust, and encourages action."
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-lg">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="min-h-[280px] bg-gradient-to-br from-slate-800 via-slate-900 to-sky-900 p-8 lg:p-10">
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90">
                {featuredPost.category}
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Get help with your homepage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 text-slate-900 lg:p-10">
              <h3 className="text-xl font-semibold">What you’ll learn</h3>
              <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                <li>• How to lead with a clear value proposition</li>
                <li>• Where to place proof, benefits, and calls to action</li>
                <li>• How to reduce friction for mobile visitors</li>
                <li>• Which sections support SEO without cluttering the page</li>
              </ul>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Editor’s note</p>
                <p className="mt-2 text-base leading-7 text-slate-700">
                  We write for founders, marketers, and small teams who need
                  practical advice they can apply immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent articles"
            title="Fresh ideas for strategy, SEO, and conversion"
            description="Browse our latest articles for actionable guidance you can use to improve your website and content."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
            <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Categories
              </p>
              <div className="mt-4 space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-slate-950 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{category}</span>
                    <span className="text-xs opacity-70">
                      {index === 0 ? "12" : `0${index + 3}`}
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.number} {...post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NewsletterSignup />
      </section>
    </main>
  );
}