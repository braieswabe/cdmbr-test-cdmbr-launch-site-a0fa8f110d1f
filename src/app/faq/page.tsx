"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircleQuestion, ShieldCheck, Sparkles } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqItems: FAQItem[] = [
  {
    category: "Getting started",
    question: "How do I know which service is the right fit?",
    answer:
      "Start with your goal. If you need a clear plan, we’ll help you choose the most practical option based on timeline, scope, and budget. If you’re unsure, reach out and we’ll point you in the right direction.",
  },
  {
    category: "Getting started",
    question: "Do you work with small businesses and growing teams?",
    answer:
      "Yes. We regularly support founders, local businesses, and established teams that want a reliable partner without unnecessary complexity.",
  },
  {
    category: "Process",
    question: "What happens after I submit a contact form?",
    answer:
      "We review your message, confirm the best next step, and reply with either a direct answer or a short list of questions so we can move efficiently.",
  },
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope, but most projects begin with a discovery step and a clear schedule. We’ll always share realistic milestones before work starts.",
  },
  {
    category: "Pricing",
    question: "Are your prices fixed or custom?",
    answer:
      "We offer transparent pricing for standard services and custom quotes for larger or more specialized work. Either way, we explain what’s included before you commit.",
  },
  {
    category: "Pricing",
    question: "Do you require a deposit?",
    answer:
      "For most projects, yes. A deposit reserves your start date and allows us to begin planning and preparation right away.",
  },
  {
    category: "Support",
    question: "What if I need help after launch or after the project is complete?",
    answer:
      "We offer ongoing support options so you can keep things running smoothly. If you need a one-time fix or a longer-term relationship, we can discuss the best fit.",
  },
  {
    category: "Support",
    question: "How quickly do you respond to support requests?",
    answer:
      "During business hours, we aim to respond within one business day. Urgent requests are prioritized and handled as quickly as possible.",
  },
  {
    category: "Support",
    question: "Can I speak with someone before making a decision?",
    answer:
      "Absolutely. We’re happy to answer questions by phone or email so you can make an informed choice with confidence.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          </div>
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <HelpCircle className="h-7 w-7" />
            </div>
            <SectionHeading
              eyebrow="FAQ"
              title="Quick answers to the questions people ask most."
              description="Use this page to understand our process, pricing, support, and what to expect before you reach out."
              align="center"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-sky-600" />
                <h2 className="text-lg font-semibold">Browse by topic</h2>
              </div>
              <div className="mt-5 space-y-3">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase()}`}
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                  >
                    {category}
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600">
                <ShieldCheck className="mb-2 h-5 w-5 text-emerald-600" />
                If you still have questions, our team is happy to help by phone or email.
              </div>
            </div>

            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category} id={category.toLowerCase()} className="scroll-mt-24">
                  <SectionHeading eyebrow={category} title={category} description="" />
                  <div className="mt-4 space-y-4">
                    {faqItems
                      .filter((item) => item.category === category)
                      .map((item) => {
                        const index = faqItems.indexOf(item);
                        const isOpen = openIndex === index;
                        return (
                          <div key={item.question} className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <button
                              type="button"
                              onClick={() => setOpenIndex(isOpen ? null : index)}
                              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            >
                              <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.question}</span>
                              <ChevronDown
                                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                            {isOpen ? (
                              <div className="px-5 pb-5">
                                <p className="text-sm leading-6 text-slate-600">{item.answer}</p>
                              </div>
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

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: MessageCircleQuestion,
                  title: "Still unsure?",
                  description: "Send us a message and we’ll help you find the right answer quickly.",
                },
                {
                  icon: ShieldCheck,
                  title: "Clear expectations",
                  description: "We explain scope, timing, and pricing before you commit to anything.",
                },
                {
                  icon: Sparkles,
                  title: "Simple next steps",
                  description: "If we’re a fit, we’ll guide you through the process without unnecessary back-and-forth.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <item.icon className="h-6 w-6 text-sky-600" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Didn’t find your answer?"
          description="Reach out and we’ll respond with a clear, helpful answer — usually within one business day."
          buttonLabel="Contact support"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}