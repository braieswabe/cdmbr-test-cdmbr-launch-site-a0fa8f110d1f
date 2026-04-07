"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  CreditCard,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading } from "@/components/SectionHeading";

const monthlyTiers = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    description: "Best for small teams that need a polished, reliable presence without unnecessary extras.",
    recommended: false,
    features: [
      "Core website updates",
      "Monthly performance check-in",
      "Basic support response within 2 business days",
      "Up to 2 content requests per month",
    ],
  },
  {
    name: "Growth",
    price: "$3,200",
    period: "/month",
    description: "Recommended for businesses that want ongoing improvements and a partner to help them grow.",
    recommended: true,
    features: [
      "Everything in Starter",
      "Priority support response within 1 business day",
      "Conversion-focused updates",
      "Up to 6 content requests per month",
      "Quarterly strategy review",
    ],
  },
  {
    name: "Scale",
    price: "$5,800",
    period: "/month",
    description: "Ideal for teams with more complex needs, multiple stakeholders, or frequent launch activity.",
    recommended: false,
    features: [
      "Everything in Growth",
      "Dedicated project planning",
      "Faster turnaround on priority requests",
      "Up to 12 content requests per month",
      "Monthly strategy and reporting session",
    ],
  },
];

const annualTiers = [
  {
    name: "Starter",
    price: "$16,200",
    period: "/year",
    description: "Best for small teams that need a polished, reliable presence without unnecessary extras.",
    recommended: false,
    features: [
      "Core website updates",
      "Monthly performance check-in",
      "Basic support response within 2 business days",
      "Up to 2 content requests per month",
    ],
  },
  {
    name: "Growth",
    price: "$34,560",
    period: "/year",
    description: "Recommended for businesses that want ongoing improvements and a partner to help them grow.",
    recommended: true,
    features: [
      "Everything in Starter",
      "Priority support response within 1 business day",
      "Conversion-focused updates",
      "Up to 6 content requests per month",
      "Quarterly strategy review",
    ],
  },
  {
    name: "Scale",
    price: "$62,400",
    period: "/year",
    description: "Ideal for teams with more complex needs, multiple stakeholders, or frequent launch activity.",
    recommended: false,
    features: [
      "Everything in Growth",
      "Dedicated project planning",
      "Faster turnaround on priority requests",
      "Up to 12 content requests per month",
      "Monthly strategy and reporting session",
    ],
  },
];

const pricingFaqs = [
  {
    question: "Can I start with one plan and upgrade later?",
    answer:
      "Yes. Many clients begin with Growth and move to Scale as their needs expand. We make upgrades simple and transparent.",
  },
  {
    question: "Do you offer custom quotes?",
    answer:
      "Absolutely. If your project has unique requirements, we’ll scope it carefully and provide a clear proposal before any work begins.",
  },
  {
    question: "What’s included in onboarding?",
    answer:
      "Onboarding includes a kickoff call, access review, timeline confirmation, and a clear list of what we need from your team to get started.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. We believe pricing should be easy to understand. If something is outside the agreed scope, we’ll discuss it before moving forward.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const tiers = useMemo(
    () => (billingCycle === "monthly" ? monthlyTiers : annualTiers),
    [billingCycle]
  );

  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing" },
            ]}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <CreditCard className="h-4 w-4" />
              Transparent pricing with no surprises
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Pricing that makes it easy to choose the right level of support.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our plans are designed to be clear, flexible, and easy to compare. You’ll know what’s
              included, what it costs, and which option is the best fit for your goals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billingCycle === "monthly"
                    ? "bg-sky-600 text-white shadow-sm"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billingCycle === "annual"
                    ? "bg-sky-600 text-white shadow-sm"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                Annual
              </button>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <Sparkles className="h-4 w-4" />
                Annual billing includes savings
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing table"
          title="Compare plans side by side."
          description="Each tier includes the essentials for a smooth experience, with more support and strategic depth as you move up."
        />
        <div className="mt-10">
          <PricingTable tiers={tiers} />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What affects cost"
            title="Pricing reflects scope, speed, and the level of support you need."
            description="We keep pricing fair by aligning it with the complexity of the work, the pace of delivery, and the amount of ongoing attention required."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Scope",
                description:
                  "More pages, more integrations, and more custom functionality naturally require more time and coordination.",
              },
              {
                icon: <Clock3 className="h-5 w-5" />,
                title: "Timeline",
                description:
                  "If you need a faster turnaround, we’ll plan accordingly so the schedule matches your launch needs.",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "Ongoing support",
                description:
                  "Some teams need a one-time project, while others benefit from continuous improvements and strategic guidance.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
                Why clients see value
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  "A clearer message that helps the right people say yes faster",
                  "A more polished experience that builds trust from the first visit",
                  "A structured process that reduces back-and-forth and saves time",
                  "A partner who thinks beyond launch and supports long-term results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <HelpCircle className="h-4 w-4 text-sky-600" />
                Good to know
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                If you’re not sure which plan fits, start with a conversation. We’ll help you choose the
                most efficient option based on your goals, timeline, and internal capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common pricing questions, answered clearly."
          description="We want you to feel confident before you commit, so here are the questions we hear most often."
        />
        <div className="mt-10">
          <FAQAccordion items={pricingFaqs} />
        </div>
      </section>

      <CTABanner
        headline="Ready for a custom quote or a quick recommendation?"
        description="Tell us what you need, and we’ll suggest the most practical next step."
        buttonLabel="Contact sales"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}