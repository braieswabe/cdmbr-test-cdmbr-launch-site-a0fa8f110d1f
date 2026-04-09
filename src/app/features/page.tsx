import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everything you need to present your offer clearly and convert with confidence.",
  description: "Learn more about everything you need to present your offer clearly and convert with confidence.",
};

import Link from "next/link";
import { ArrowRight, CheckCircle2, LayoutGrid, PlugZap, Sparkles, Wand2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function FeaturesPage() {
  const features = [
    {
      icon: LayoutGrid,
      title: "Flexible page sections",
      description:
        "Build landing pages, service pages, and campaign pages with modular sections that stay consistent and easy to scan.",
    },
    {
      icon: Sparkles,
      title: "Conversion-focused design",
      description:
        "Guide visitors toward the next step with clear hierarchy, strong calls to action, and trust-building proof points.",
    },
    {
      icon: Wand2,
      title: "Polished visual system",
      description:
        "Use refined spacing, gradients, and card-based layouts to create a premium look without sacrificing clarity.",
    },
    {
      icon: PlugZap,
      title: "Simple integrations",
      description:
        "Connect forms, analytics, booking tools, and content workflows without changing the overall experience.",
    },
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Features" },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-4 py-1 text-sm font-medium text-[var(--primary)]">
                Feature overview
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Everything you need to present your offer clearly and convert with confidence.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">
                This feature set is designed to help visitors understand what you do, why it matters, and how to take the next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Book a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Fast to scan",
                  "Easy to update",
                  "Built for trust",
                  "Ready to launch",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-black/[0.03] p-4">
                    <CheckCircle2 className="h-5 w-5 text-[var(--primary)]" />
                    <p className="mt-3 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-black/60">
                The result is a site that feels professional, stays easy to manage, and supports real business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key capabilities"
          title="Built to explain value quickly."
          description="Each feature is designed to reduce friction and help visitors understand why your offer is the right fit."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-black/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Deep dive"
              title="Pages that answer the real questions."
              description="Use dedicated sections to show examples, explain process, and remove uncertainty before the first call."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-black/70">
              <p>
                <strong className="text-black">Service detail sections</strong> help visitors understand what’s included and what outcomes to expect.
              </p>
              <p>
                <strong className="text-black">Proof sections</strong> highlight testimonials, metrics, and case studies so your claims feel credible.
              </p>
              <p>
                <strong className="text-black">Decision support blocks</strong> answer pricing, timelines, and process questions before they become objections.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Use cases"
              title="Works across the pages that matter most."
              description="From home pages to portfolio pages, the same system keeps your site cohesive and conversion-ready."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Home page hero",
                "Service comparison",
                "Pricing transparency",
                "Testimonials and proof",
                "FAQ and support",
                "Portfolio and case studies",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-black/5 bg-black/[0.02] px-4 py-3 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Fits into the tools you already use."
          description="Keep your workflow simple with support for common publishing, contact, and scheduling patterns."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Forms and email",
              description: "Capture leads and route inquiries to the right inbox without extra complexity.",
            },
            {
              title: "Scheduling tools",
              description: "Make it easy for qualified visitors to book a call or request a consultation.",
            },
            {
              title: "Analytics and tracking",
              description: "Measure what matters so you can improve pages based on real visitor behavior.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="See the features in action."
        description="Talk with us about the pages, sections, and workflows that will help your site perform better."
        buttonLabel="Start a project"
        buttonHref="/contact"
      />
    </main>
  );
}