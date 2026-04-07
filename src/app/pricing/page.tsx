"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleHelp,
  Clock3,
  CreditCard,
  FileText,
  Gauge,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
  CTABanner,
  FAQAccordion,
  PricingTable,
  SectionHeading,
} from "@/components";

const monthlyTiers = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Best for focused updates, landing pages, or a polished one-page presence.",
    highlight: false,
    features: [
      "Discovery call and scope outline",
      "1 core page or landing page",
      "Responsive design",
      "Basic on-page SEO setup",
      "Launch support",
    ],
  },
  {
    name: "Growth",
    price: "$3,500",
    description: "Recommended for service businesses that need a stronger website and clearer conversion flow.",
    highlight: true,
    features: [
      "Strategy workshop",
      "Up to 5 pages",
      "Messaging guidance",
      "Custom design system",
      "Conversion-focused layout",
      "Launch QA and handoff",
    ],
  },
  {
    name: "Scale",
    price: "$7,500",
    description: "For larger builds, multi-page sites, or teams that need deeper collaboration and support.",
    highlight: false,
    features: [
      "Full discovery and planning",
      "Up to 10 pages",
      "Advanced content structure",
      "Component-based build",
      "Priority feedback rounds",
      "Training and documentation",
    ],
  },
];

const annualTiers = [
  {
    name: "Starter",
    price: "$15,000",
    description: "Best for focused updates, landing pages, or a polished one-page presence.",
    highlight: false,
    features: [
      "Discovery call and scope outline",
      "1 core page or landing page",
      "Responsive design",
      "Basic on-page SEO setup",
      "Launch support",
    ],
  },
  {
    name: "Growth",
    price: "$35,000",
    description: "Recommended for service businesses that need a stronger website and clearer conversion flow.",
    highlight: true,
    features: [
      "Strategy workshop",
      "Up to 5 pages",
      "Messaging guidance",
      "Custom design system",
      "Conversion-focused layout",
      "Launch QA and handoff",
    ],
  },
  {
    name: "Scale",
    price: "$75,000",
    description: "For larger builds, multi-page sites, or teams that need deeper collaboration and support.",
    highlight: false,
    features: [
      "Full discovery and planning",
      "Up to 10 pages",
      "Advanced content structure",
      "Component-based build",
      "Priority feedback rounds",
      "Training and documentation",
    ],
  },
];

const faqItems = [
  {
    question: "Do you offer fixed pricing?",
    answer:
      "Yes for most standard projects. If the scope is unusual or likely to change, we’ll recommend a custom quote so expectations stay clear.",
  },
  {
    question: "What affects the final price?",
    answer:
      "Page count, content complexity, integrations, timeline, and the level of strategy or copy support all influence the total investment.",
  },
  {
    question: "Can I start small and expand later?",
    answer:
      "Absolutely. Many clients begin with a focused build and add pages, features, or support once the core site is live.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes. A deposit secures your project slot and allows us to begin planning and scheduling work right away.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Hosting is typically billed separately unless your proposal states otherwise. We’ll help you choose the right setup for your needs.",
  },
];

const valuePoints = [
  {
    number: "01",
    icon: <Gauge className="h-5 w-5" />,
    title: "Built for outcomes",
    description:
      "Pricing reflects the strategy, design quality, and conversion thinking that help your site do more than just look good.",
    className: "bg-white",
  },
  {
    number: "02",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Clear scope, fewer surprises",
    description:
      "You’ll know what’s included before work begins, which makes it easier to plan and approve with confidence.",
    className: "bg-white",
  },
  {
    number: "03",
    icon: <Sparkles className="h-5 w-5" />,
    title: "Flexible for different needs",
    description:
      "Whether you need a quick launch or a more comprehensive engagement, the pricing structure adapts to the project.",
    className: "bg-white",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const tiers = useMemo(() => (billing === "monthly" ? monthlyTiers : annualTiers), [billing]);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900">Pricing</span>
        </div>

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Transparent pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Clear pricing for confident decisions
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose a package that matches your goals, or request a custom quote if your project
            needs a more tailored scope. Every engagement is designed to deliver measurable value.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billing === "annual"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-12">
          <PricingTable tiers={tiers} />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Custom quote"
            title="Need something more tailored?"
            description="For enterprise needs, multi-phase work, or variable scope, we’ll build a proposal around your priorities and timeline."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-900 p-3 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Bespoke project scope</h2>
                  <p className="text-sm text-slate-600">Ideal for larger teams and evolving requirements.</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom discovery and planning",
                  "Flexible page and feature scope",
                  "Integration support",
                  "Priority scheduling options",
                  "Stakeholder review checkpoints",
                  "Launch and post-launch support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                <Clock3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Typical timeline</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Most custom projects begin with a short discovery phase, followed by a scoped proposal
                and a delivery plan that fits your schedule.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600"
              >
                Request a custom quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Value"
          title="Why the pricing makes sense"
          description="You’re not just paying for pages — you’re investing in clarity, credibility, and a smoother path to conversion."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {valuePoints.map((point) => (
            <div
              key={point.number}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                {point.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Pricing questions, answered"
            description="A few quick answers to help you compare options and move forward with confidence."
          />
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <CTABanner
          headline="Ready to start your project?"
          description="Book a call and we’ll help you choose the right package or build a custom proposal."
          buttonLabel="Schedule a call"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}