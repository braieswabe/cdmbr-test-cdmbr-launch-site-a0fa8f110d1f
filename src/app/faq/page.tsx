"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircle, ShieldCheck, Sparkles, Clock3, BadgeCheck, PhoneCall } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  title: string;
  description: string;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    title: "Services and scope",
    description: "Clear answers about what we do, what’s included, and how we tailor work to your goals.",
    items: [
      {
        question: "What types of projects do you take on?",
        answer:
          "We work on professional websites, landing pages, content strategy, and conversion-focused updates for businesses that want a clearer message and stronger results. If your goal is to improve trust, leads, or clarity, we can help.",
      },
      {
        question: "Do you only build new websites?",
        answer:
          "No. We also improve existing sites by refining messaging, restructuring pages, tightening calls to action, and making the overall experience easier to use. Many clients come to us for a focused refresh rather than a full rebuild.",
      },
      {
        question: "Can you help with content and copywriting?",
        answer:
          "Yes. We can shape the messaging for your homepage, services, about page, FAQs, and supporting content so the site speaks clearly to the right audience and supports SEO without sounding generic.",
      },
    ],
  },
  {
    title: "Process and timeline",
    description: "Understand how projects move forward, what we need from you, and how quickly you can expect progress.",
    items: [
      {
        question: "What does your process look like?",
        answer:
          "We start with a short discovery call, then review your goals, audience, and current materials. From there, we define the structure, messaging, and priorities before moving into design and implementation. You’ll always know what happens next.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines depend on scope, but most focused website projects move from kickoff to launch in a few weeks. Larger builds or content-heavy projects may take longer, especially if they require multiple review rounds or new assets.",
      },
      {
        question: "How much input will I need to provide?",
        answer:
          "We keep the process efficient. You’ll share your goals, key details about your business, and any existing materials. We handle the structure and execution, then check in at the right points to keep everything aligned.",
      },
    ],
  },
  {
    title: "Pricing and support",
    description: "Reduce uncertainty with transparent expectations around cost, revisions, and ongoing help.",
    items: [
      {
        question: "How do you price projects?",
        answer:
          "Pricing is based on scope, complexity, and the level of strategy or content support required. We’ll always clarify what’s included before work begins so there are no surprises.",
      },
      {
        question: "Do you offer fixed pricing?",
        answer:
          "Yes, for well-defined projects we can provide a fixed quote. If the scope is still evolving, we may recommend a phased approach so you can move forward with confidence and control costs.",
      },
      {
        question: "What kind of support do you provide after launch?",
        answer:
          "We offer post-launch support to help with updates, refinements, and small improvements. If you need ongoing help, we can discuss a support plan that fits your needs and pace of growth.",
      },
    ],
  },
  {
    title: "Results and communication",
    description: "Learn how we measure success and how we keep communication simple and responsive.",
    items: [
      {
        question: "How do you measure success?",
        answer:
          "Success is measured by outcomes that matter: clearer messaging, stronger engagement, better conversion, and a smoother experience for your visitors. We focus on practical improvements that support business goals.",
      },
      {
        question: "How do you communicate during the project?",
        answer:
          "We keep communication direct and responsive through email and scheduled check-ins. You’ll get concise updates, clear next steps, and quick answers when questions come up.",
      },
      {
        question: "Can you work with our existing brand or team?",
        answer:
          "Absolutely. We can work within your current brand guidelines or collaborate with your internal team, designer, or marketer to keep the project consistent and efficient.",
      },
    ],
  },
];

const supportHighlights = [
  {
    icon: BadgeCheck,
    title: "Reliable delivery",
    description: "Clear milestones, realistic timelines, and a process designed to keep projects moving.",
  },
  {
    icon: Clock3,
    title: "Responsive communication",
    description: "Fast, straightforward answers so you’re never left wondering what happens next.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent expectations",
    description: "Scope, pricing, and support are explained clearly before work begins.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true });

  const toggleItem = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpenItems((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                <HelpCircle className="h-4 w-4" />
                Answers that help you move forward with confidence
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Frequently asked questions, answered clearly
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page is designed to remove uncertainty. Browse by topic to learn more about services, process,
                pricing, and support — or reach out if you need a more specific answer.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                >
                  Contact the team
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-200">
              {supportHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-indigo-500/20 p-2 text-indigo-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-5">
                <p className="text-sm font-medium text-white/90">Need a faster answer?</p>
                <p className="mt-2 text-sm leading-6 text-white/95">
                  Email us or call during business hours. We respond quickly and keep the next step simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ categories"
            title="Grouped answers for the questions people ask most"
            description="Use these sections to find practical details fast. If your question is not covered, we’re happy to help directly."
          />

          <div className="mt-10 space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight">{group.title}</h2>
                  <p className="mt-2 max-w-3xl text-slate-600">{group.description}</p>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, itemIndex) => {
                    const key = `${groupIndex}-${itemIndex}`;
                    const isOpen = Boolean(openItems[key]);
                    return (
                      <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200">
                        <button
                          type="button"
                          onClick={() => toggleItem(groupIndex, itemIndex)}
                          className="flex w-full items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left transition hover:bg-slate-100"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-slate-900">{item.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen ? (
                          <div className="bg-white px-5 py-4 text-sm leading-7 text-slate-600">
                            {item.answer}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <CTABanner
              headline="Still have a question?"
              description="If you didn’t find what you need here, send us a message. We’ll give you a clear answer and point you to the best next step."
              buttonLabel="Contact support"
              buttonHref="/contact"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-indigo-600 px-6 py-8 text-white shadow-lg sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Direct support
                </div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Prefer a quick conversation instead of searching for the right answer?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-indigo-100 sm:text-base">
                  Reach out and we’ll respond with a concise, helpful answer. We’re here to make the next step easy.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  <PhoneCall className="h-4 w-4" />
                  Contact us
                </Link>
                <Link
                  href="mailto:hello@yourcompany.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  hello@yourcompany.com
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}