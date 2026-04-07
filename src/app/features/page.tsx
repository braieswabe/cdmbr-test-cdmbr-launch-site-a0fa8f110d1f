import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everything is designed to make your website clearer, stronger, and easier to trust.",
  description: "Learn more about everything is designed to make your website clearer, stronger, and easier to trust.",
};

import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

const featureDetails = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Clear positioning that helps the right clients say yes",
    description:
      "We turn complex offers into concise messaging that explains what you do, who it is for, and why it matters. That clarity reduces friction and improves inquiry quality.",
    benefits: [
      "Sharper homepage and service page messaging",
      "Stronger first impression in under 10 seconds",
      "Better alignment between traffic and leads",
    ],
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Conversion-focused structure that guides action",
    description:
      "Every section is arranged to answer the questions visitors already have, then move them naturally toward the next step. The result is a smoother path from interest to contact.",
    benefits: [
      "More qualified calls and form submissions",
      "Less drop-off from confused visitors",
      "Clear calls to action across key pages",
    ],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Trust signals that make your business feel dependable",
    description:
      "We highlight proof, process, testimonials, and service expectations so prospects feel confident choosing you. That trust is often the difference between browsing and booking.",
    benefits: [
      "More credibility at every stage of the page",
      "Reduced hesitation before reaching out",
      "A professional presence that supports premium pricing",
    ],
  },
  {
    icon: <Wand2 className="h-5 w-5" />,
    title: "Responsive support that keeps your site working well",
    description:
      "After launch, we help you stay current with updates, refinements, and content improvements. You get a website that continues to support your goals instead of going stale.",
    benefits: [
      "Faster updates when priorities change",
      "Ongoing improvements based on real performance",
      "Less time spent managing website issues",
    ],
  },
];

const comparisonRows = [
  {
    label: "Messaging",
    modern: "Benefit-led and easy to scan",
    old: "Feature-heavy and vague",
  },
  {
    label: "Structure",
    modern: "Built around user questions and action",
    old: "Pages that look good but don’t guide decisions",
  },
  {
    label: "Trust",
    modern: "Proof, process, and clarity throughout",
    old: "Testimonials buried at the bottom",
  },
  {
    label: "Support",
    modern: "Responsive updates and ongoing refinement",
    old: "Launch and leave it behind",
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Features" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-neutral-950 via-primary-900 to-secondary-800 px-6 py-14 text-white shadow-sm sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90">
              <Sparkles className="h-4 w-4" />
              Features that drive outcomes
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything is designed to make your website clearer, stronger, and easier to trust.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
              Our approach combines strategic messaging, conversion-focused structure, and
              dependable support so your site can attract better leads and support measurable
              growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#feature-breakdown"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-neutral-100"
              >
                Explore features
              </Link>
              <Link
                href="#feature-cta"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core capabilities"
          title="The right features remove confusion and help visitors move forward."
          description="Each capability is built to improve clarity, credibility, and conversion without adding unnecessary complexity."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureDetails.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              number={`0${index + 1}`}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section id="feature-breakdown" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Feature breakdown"
          title="A closer look at what each feature does for your business."
          description="These are not just design choices—they are practical improvements that support better decisions and stronger outcomes."
        />
        <div className="mt-8 grid gap-6">
          {featureDetails.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-neutral-600">{feature.description}</p>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-5 lg:w-[320px]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Benefits
                  </p>
                  <ul className="mt-4 space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm leading-6 text-neutral-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comparison"
          title="A better alternative to generic websites and outdated processes."
          description="See how a modern, benefit-led approach compares to the methods that often slow growth down."
        />
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200">
          <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-700">
            <div>Area</div>
            <div>Modern approach</div>
            <div>Older method</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.label} className="grid grid-cols-3 gap-4 border-b border-neutral-200 px-6 py-5 last:border-b-0">
              <div className="font-medium text-neutral-900">{row.label}</div>
              <div className="text-neutral-600">{row.modern}</div>
              <div className="text-neutral-500">{row.old}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="feature-cta" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready for a website that feels clear, credible, and easy to act on?"
          description="Book a conversation to see how these features can support your goals and improve results."
          buttonLabel="Book a demo"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}