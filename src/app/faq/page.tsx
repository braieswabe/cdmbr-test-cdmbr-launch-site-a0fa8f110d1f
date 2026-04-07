"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageSquareText, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const faqGroups = [
  {
    title: "Getting started",
    items: [
      {
        question: "What types of projects do you take on?",
        answer:
          "We work on professional websites, service pages, brand refreshes, and conversion-focused digital experiences for teams that want clearer messaging and stronger results.",
      },
      {
        question: "How do we begin?",
        answer:
          "Start with a short discovery call. We’ll learn about your goals, review your current site or materials, and recommend the best next step with a clear timeline.",
      },
      {
        question: "Do you help with strategy as well as design?",
        answer:
          "Yes. We combine messaging, structure, and design so the final site is not only polished, but also easier for visitors to understand and act on.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Most projects take between 2 and 6 weeks depending on scope, content readiness, and the number of pages involved.",
      },
    ],
  },
  {
    title: "Process and delivery",
    items: [
      {
        question: "What do you need from us before work begins?",
        answer:
          "We usually need your goals, any existing brand assets, a list of services or pages, and a point of contact for feedback. We’ll guide you through the rest.",
      },
      {
        question: "How do you keep projects on schedule?",
        answer:
          "We use a simple milestone-based process with clear checkpoints, fast feedback loops, and regular updates so everyone knows what’s happening next.",
      },
      {
        question: "Can you work with our existing brand?",
        answer:
          "Absolutely. We can build within your current brand system or help refine it if the visuals or messaging need to be stronger.",
      },
      {
        question: "Will the site be mobile-friendly?",
        answer:
          "Yes. Every page is designed and tested for mobile, tablet, and desktop so the experience stays consistent across devices.",
      },
    ],
  },
];

const supportItems = [
  {
    icon: <MessageSquareText className="h-5 w-5" />,
    title: "Need a quick answer?",
    description:
      "Send us a message and we’ll respond with clear next steps, usually within one business day.",
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Not sure which service fits?",
    description:
      "We’ll help you choose the right scope based on your goals, timeline, and budget.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "Getting started-0": true });

  const toggleItem = (groupTitle: string, index: number) => {
    const key = `${groupTitle}-${index}`;
    setOpenItems((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <main className="bg-white text-slate-900">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      />

      <Hero
        title="Straight answers before you get started"
        subtitle="Find quick, practical answers about our process, timelines, and what to expect so you can move forward with confidence."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/services"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {supportItems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                {item.icon}
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ categories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Questions organized by topic</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              Browse the topics below to quickly find the information you need before booking a call or requesting a quote.
            </p>
          </div>

          <div className="space-y-10">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{group.title}</h3>
                <div className="mt-4 space-y-3">
                  {group.items.map((item, index) => {
                    const key = `${group.title}-${index}`;
                    const isOpen = openItems[key] ?? false;

                    return (
                      <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <button
                          type="button"
                          onClick={() => toggleItem(group.title, index)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-100"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-slate-900">{item.question}</span>
                          <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen ? (
                          <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Still need help?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                If your question is not covered here, send us a message. We’ll help you understand the best path forward and what it will take to get there.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready for a clear next step?"
        description="Book a call and we’ll recommend the right approach based on your goals, timeline, and budget."
        buttonLabel="Book a Call"
        buttonHref="/contact"
      />
    </main>
  );
}