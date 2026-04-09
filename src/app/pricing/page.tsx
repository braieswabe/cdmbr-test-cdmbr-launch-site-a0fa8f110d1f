"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";

type BillingCycle = "monthly" | "annual";

const pricingPlans = [
  {
    name: "Starter",
    monthly: 1800,
    annual: 18000,
    description: "For smaller teams that need a polished, credible website without unnecessary complexity.",
    recommended: false,
    features: [
      "Up to 5 core pages",
      "Responsive design system",
      "Basic on-page SEO setup",
      "Contact form integration",
      "Launch support",
    ],
  },
  {
    name: "Growth",
    monthly: 3600,
    annual: 36000,
    description: "For businesses that want stronger messaging, more conversion focus, and room to scale.",
    recommended: true,
    features: [
      "Up to 10 pages or sections",
      "Messaging and content structure",
      "Conversion-focused page design",
      "SEO-ready metadata and hierarchy",
      "Priority launch support",
      "Two rounds of revisions",
    ],
  },
  {
    name: "Scale",
    monthly: 6200,
    annual: 62000,
    description: "For larger launches, multi-page builds, or teams that need ongoing design and support.",
    recommended: false,
    features: [
      "Custom scope and page architecture",
      "Advanced conversion strategy",
      "Multiple templates or page types",
      "Content support and refinement",
      "Post-launch optimization window",
      "Dedicated project coordination",
    ],
  },
];

const faqItems = [
  {
    question: "Do you offer monthly payment plans?",
    answer:
      "Yes. You can choose monthly or annual billing depending on how you want to structure the project budget.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Each tier includes the core design and build work listed in the plan. We can also scope add-ons if you need extra pages, copy support, or advanced functionality.",
  },
  {
    question: "Can the scope be customized?",
    answer:
      "Absolutely. The plans are a starting point, and we can tailor the scope to match your timeline, content needs, and growth goals.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Because work begins with planning and design, refunds are handled case by case based on project stage and contract terms.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = useMemo(
    () =>
      pricingPlans.map((plan) => ({
        ...plan,
        price: billingCycle === "monthly" ? plan.monthly : plan.annual,
        suffix: billingCycle === "monthly" ? "/project" : "/year",
      })),
    [billingCycle],
  );

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing" },
            ]}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-medium text-[var(--primary)]">
              Transparent pricing for confident decisions
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Clear pricing, simple choices, and no surprise scope creep.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Choose a plan that fits your stage, compare what is included, and move forward with
              confidence. If your needs are unique, we can tailor a custom scope.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">
                  Get a quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/services">Review services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Plans"
            title="Pick the level of support you need."
            description="Every plan is designed to be easy to compare, with the Growth tier recommended for most teams."
          />
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billingCycle === "monthly"
                  ? "bg-[var(--primary)] text-white"
                  : "text-black/70 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billingCycle === "annual"
                  ? "bg-[var(--primary)] text-white"
                  : "text-black/70 hover:text-black"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                plan.recommended ? "border-[var(--primary)] ring-1 ring-[var(--primary)]/20" : "border-black/5"
              }`}
            >
              {plan.recommended ? (
                <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3.5 w-3.5" />
                  Recommended
                </div>
              ) : null}
              <p className="text-sm font-medium text-[var(--primary)]">{plan.name}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  ${plan.price.toLocaleString()}
                </span>
                <span className="pb-1 text-sm text-black/60">{plan.suffix}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-black/70">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-black/75">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link href="/contact">Choose {plan.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Best value"
                title="Growth is the most popular choice for teams that want momentum."
                description="It balances scope, speed, and strategic support, making it a strong fit for most service businesses and startups."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Messaging support",
                  "Conversion-focused layout",
                  "SEO-ready structure",
                  "Priority revisions",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <BadgeCheck className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 text-white shadow-lg">
              <ShieldCheck className="h-10 w-10 text-white/90" />
              <h3 className="mt-6 text-2xl font-semibold">What makes the pricing easy to trust</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/85">
                <p>• Clear deliverables so you know exactly what is included.</p>
                <p>• Flexible billing options to match your budget planning.</p>
                <p>• Upgrade paths if your scope expands after kickoff.</p>
                <p>• No hidden fees for the standard project workflow.</p>
              </div>
              <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock3 className="h-4 w-4" />
                  Typical timeline: 2 to 6 weeks depending on scope
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Need something custom?"
          title="We can adapt the scope without starting from scratch."
          description="If your project needs extra pages, advanced functionality, or a more tailored rollout, we will recommend the most efficient path."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Add-on pages and templates",
            "Copy refinement and content support",
            "Post-launch optimization and updates",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <Sparkles className="h-5 w-5 text-[var(--primary)]" />
              <p className="mt-3 text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Pricing questions, answered."
            description="A few quick details to help you compare plans and understand how billing works."
          />
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to choose a plan?"
          description="If you know what you need, we can move quickly. If you are still deciding, we will help you find the right fit."
          buttonLabel="Start a conversation"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}