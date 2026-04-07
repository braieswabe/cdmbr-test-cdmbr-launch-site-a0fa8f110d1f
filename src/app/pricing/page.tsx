"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CTABanner,
  FAQAccordion,
  PricingTable,
  SectionHeading,
  StatsStrip,
} from "@/components";

const pricingPlans = [
  {
    planName: "Starter",
    monthly: "$2,500",
    annual: "$27,000",
    features: [
      "Up to 5 core pages",
      "Messaging and page structure",
      "Responsive design system",
      "Basic SEO setup",
      "Launch support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact",
    popular: false,
    audience: "Best for new businesses and focused service pages",
  },
  {
    planName: "Growth",
    monthly: "$5,500",
    annual: "$59,400",
    features: [
      "Up to 10 pages",
      "Strategy workshop",
      "Custom design and Next.js build",
      "Conversion copy support",
      "SEO foundations and analytics",
      "Priority revisions",
    ],
    ctaLabel: "Book a Call",
    ctaHref: "/contact",
    popular: true,
    audience: "Best for teams that want a stronger lead engine",
  },
  {
    planName: "Scale",
    monthly: "$9,500",
    annual: "$102,600",
    features: [
      "Multi-page website or redesign",
      "Advanced content and SEO planning",
      "Component library and flexible templates",
      "Performance optimization",
      "Ongoing support window",
      "Custom integrations",
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
    popular: false,
    audience: "Best for established brands with more complex needs",
  },
];

const comparisonRows = [
  ["Strategy session", "Included", "Included", "Included"],
  ["Custom design", "Basic", "Full", "Full"],
  ["Copywriting support", "Optional", "Included", "Included"],
  ["SEO setup", "Basic", "Advanced", "Advanced"],
  ["Analytics integration", "Optional", "Included", "Included"],
  ["Post-launch support", "7 days", "14 days", "30 days"],
];

const faqItems = [
  {
    question: "Do you offer monthly and annual pricing?",
    answer:
      "Yes. You can review pricing as a monthly equivalent or annual project value depending on the engagement structure that fits your business best.",
  },
  {
    question: "What is included in the quoted price?",
    answer:
      "Each package includes the deliverables listed on the plan card. If your project needs additional pages, integrations, or content support, we’ll outline those separately before work begins.",
  },
  {
    question: "Can you create a custom package?",
    answer:
      "Absolutely. If your needs do not fit neatly into one tier, we can tailor a scope around your goals, timeline, and budget.",
  },
  {
    question: "How do payments work?",
    answer:
      "Most projects are billed with a deposit to begin and milestone-based payments during delivery. We’ll confirm the schedule before kickoff.",
  },
  {
    question: "Is ongoing support available after launch?",
    answer:
      "Yes. We can provide a support window, monthly updates, or a custom maintenance arrangement depending on how much help you want after launch.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = useMemo(
    () =>
      pricingPlans.map((plan) => ({
        ...plan,
        price: billingCycle === "monthly" ? plan.monthly : plan.annual,
      })),
    [billingCycle]
  );

  return (
    <main className="bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>{" "}
          / Pricing
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white shadow-2xl sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Transparent pricing
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Clear pricing for websites that need to perform
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Choose a plan that matches your stage of growth. Every package is built to
              deliver a polished site, a smoother buying journey, and a clear path to
              measurable results.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 p-1">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billingCycle === "monthly"
                    ? "bg-white text-slate-950"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billingCycle === "annual"
                    ? "bg-white text-slate-950"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Annual
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing plans"
          title="Pick the level of support that fits your goals"
          description="Each plan is designed to be clear, practical, and easy to compare so you can choose with confidence."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingTable key={plan.planName} {...plan} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plan comparison"
            title="See what’s included at a glance"
            description="A simple side-by-side view helps you compare scope, support, and the level of customization each plan provides."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-900">
              <div>Feature</div>
              <div>Starter</div>
              <div>Growth</div>
              <div>Scale</div>
            </div>
            <div className="divide-y divide-slate-200">
              {comparisonRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-4 px-6 py-4 text-sm text-slate-600">
                  <div className="font-medium text-slate-900">{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                  <div>{row[3]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Add-ons"
          title="Optional extras for teams that need more"
          description="Add the support you need without paying for things you do not."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Extra page design",
              description: "Add new landing pages, case studies, or service pages as your needs grow.",
            },
            {
              title: "Copywriting sprint",
              description: "Get sharper messaging for a homepage, service page, or campaign launch.",
            },
            {
              title: "SEO content plan",
              description: "Build a practical roadmap for blog topics, FAQs, and search-friendly pages.",
            },
            {
              title: "Ongoing support",
              description: "Keep your site updated with monthly improvements, fixes, and content changes.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} title="Pricing and billing questions" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Not sure which plan is right?"
          description="Book a call and we’ll help you choose the most efficient path based on your goals, timeline, and budget."
          buttonLabel="Book a Call"
          buttonHref="/contact"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <StatsStrip
          stats={[
            { label: "Typical response time", value: "1 business day" },
            { label: "Projects with custom scope", value: "Flexible" },
            { label: "Average client rating", value: "5.0/5" },
          ]}
        />
      </section>
    </main>
  );
}