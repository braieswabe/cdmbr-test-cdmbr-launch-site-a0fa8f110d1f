"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, CircleHelp, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";

type Tier = {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  recommended?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    priceMonthly: "$1,200",
    priceAnnual: "$12,000",
    description: "Best for businesses that need a polished foundation and a clear path to launch.",
    features: [
      "Homepage and core service page design",
      "Mobile-friendly responsive build",
      "Basic SEO setup and metadata",
      "Launch support and handoff",
    ],
  },
  {
    name: "Growth",
    priceMonthly: "$2,400",
    priceAnnual: "$24,000",
    description: "Recommended for teams that want stronger conversion, more pages, and strategic guidance.",
    recommended: true,
    features: [
      "Everything in Starter",
      "Up to 6 custom pages",
      "Messaging refinement and content structure",
      "Conversion-focused CTA placement",
      "Priority revisions and launch QA",
    ],
  },
  {
    name: "Partner",
    priceMonthly: "$4,000",
    priceAnnual: "$40,000",
    description: "Ideal for ongoing support, content expansion, and continuous improvement.",
    features: [
      "Everything in Growth",
      "Monthly optimization and updates",
      "Blog and SEO support",
      "Performance reviews and recommendations",
      "Fast-response support",
    ],
  },
];

const faqItems = [
  {
    question: "What affects the final price?",
    answer:
      "Pricing depends on page count, content complexity, integrations, timeline, and whether you need ongoing support after launch.",
  },
  {
    question: "Do you offer fixed pricing?",
    answer:
      "Yes. For well-defined projects, we provide a fixed scope so you can budget with confidence before work begins.",
  },
  {
    question: "Can I start small and expand later?",
    answer:
      "Absolutely. Many clients begin with a focused package and add pages, content, or support as their needs grow.",
  },
  {
    question: "Is there a discount for annual commitments?",
    answer:
      "Yes. Annual pricing reflects a lower effective monthly rate for clients who want long-term support and planning.",
  },
];

const includedExtras = [
  "Clear project timeline and milestone updates",
  "Responsive communication throughout the engagement",
  "Launch checklist and quality review",
  "Recommendations for stronger conversion and clarity",
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const displayLabel = useMemo(() => (billing === "monthly" ? "Monthly pricing" : "Annual pricing"), [billing]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Pricing" },
              ]}
            />
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                Transparent pricing, no surprises
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Clear pricing that helps you choose the right level of support.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our pricing is designed to reduce uncertainty. You’ll see what’s included, what affects cost, and which package fits your goals best.
              </p>

              <div className="mt-8 inline-flex rounded-full bg-slate-100 p-1 ring-1 ring-inset ring-slate-200">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    billing === "monthly" ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    billing === "annual" ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Annual
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-500">{displayLabel}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Choose a package that matches your current goals"
            description="Each tier is built to deliver a clear outcome, with room to scale as your needs grow."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  tier.recommended ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-slate-950">{tier.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tier.description}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-950">
                    {billing === "monthly" ? tier.priceMonthly : tier.priceAnnual}
                  </span>
                  <span className="pb-1 text-sm text-slate-500">{billing === "monthly" ? "/project" : "/year"}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    tier.recommended
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="What’s included"
                  title="More than a deliverable — a smoother project experience"
                  description="The value is in the process as much as the final result."
                />
                <div className="mt-8 space-y-4">
                  {includedExtras.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-blue-600" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Optional add-ons</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Need more support?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Add content writing, blog strategy, SEO updates, or ongoing optimization if you want a more complete growth partner.
                </p>
                <div className="mt-6 rounded-2xl bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <CircleHelp className="h-5 w-5 text-cyan-300" />
                    <p className="font-medium">We’ll recommend only what you need.</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    If a smaller scope is the smarter choice, we’ll say so. The goal is to make the investment feel clear and worthwhile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Pricing questions, answered clearly"
              description="These answers cover the most common questions about billing, scope, and next steps."
            />
            <div className="mt-10">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        <CTABanner
          headline="Want a recommendation before you commit?"
          description="Share your goals and we’ll point you to the package that fits best."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}