"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about process, timelines, pricing, support, and what to expect when working with us.",
};

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqItems: FAQItem[] = [
  {
    category: "Getting started",
    question: "How do we begin a project?",
    answer:
      "Start with a short discovery call. We’ll review your goals, audience, timeline, and current website so we can recommend the right scope and next steps.",
  },
  {
    category: "Getting started",
    question: "What do you need from us before kickoff?",
    answer:
      "We typically ask for your brand assets, access to any existing site or analytics, examples of sites you like, and a clear list of priorities. If you do not have everything ready, we can help you organize it.",
  },
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 2 and 6 weeks depending on scope, content readiness, and feedback speed. We’ll share a realistic timeline before work begins.",
  },
  {
    category: "Process",
    question: "How many revision rounds are included?",
    answer:
      "We build in structured review points so feedback stays focused and efficient. The exact number depends on the package, but the goal is always to keep momentum without sacrificing quality.",
  },
  {
    category: "Pricing",
    question: "Is pricing fixed or custom?",
    answer:
      "We offer transparent starting prices for common needs and custom quotes for larger or more complex builds. That way you know what to expect before you commit.",
  },
  {
    category: "Pricing",
    question: "Do you offer payment plans?",
    answer:
      "Yes. For many projects, we can split payment into milestones to make budgeting easier while keeping the project moving forward.",
  },
  {
    category: "Support",
    question: "Will you help after launch?",
    answer:
      "Absolutely. We can support post-launch updates, content changes, and ongoing improvements so your site keeps performing as your business grows.",
  },
  {
    category: "Support",
    question: "Can you work with our internal team?",
    answer:
      "Yes. We regularly collaborate with founders, marketers, designers, and developers to fit smoothly into existing workflows and approvals.",
  },
  {
    category: "Support",
    question: "What if we need something outside the standard scope?",
    answer:
      "If a request falls outside the original plan, we’ll explain the impact clearly and propose the best way to handle it without surprises.",
  },
];

const categories = ["All", ...Array.from(new Set(faqItems.map((item) => item.category)))];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? faqItems
        : faqItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ" },
            ]}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8 lg:pb-24 lg:pt-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-sm font-medium text-[var(--primary)]">
              Help center
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Answers to the questions people ask before they buy.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">
              Use this page to remove uncertainty, explain your process, and help visitors
              move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Search or filter"
          title="Jump to the topic you need"
          description="Choose a category to narrow the list and make scanning easier on mobile and desktop."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20"
                  : "bg-white text-black/70 ring-1 ring-black/10 hover:text-[var(--primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`${item.category}-${item.question}`}
                className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                      {item.category}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold">{item.question}</h2>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-black/70">
                    <p className="max-w-3xl leading-7">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-black/[0.02] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Still need help?"
            title="Talk to a real person"
            description="If your question is not covered here, we can help you choose the right next step."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--primary)]/90"
            >
              Contact support
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:text-[var(--primary)]"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <CTABanner
          headline="Need a custom answer?"
          description="We’re happy to walk you through scope, timing, pricing, or anything else that would help you decide."
          buttonLabel="Book a call"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}