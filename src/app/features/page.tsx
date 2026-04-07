import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Layers3, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the capabilities, benefits, and practical advantages that make our offering easy to adopt and valuable to use.",
};

const featureDetails = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast setup, clear next steps",
    description:
      "Get up and running quickly with a guided onboarding flow, sensible defaults, and a structure that helps teams move without confusion.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Flexible enough for real workflows",
    description:
      "Adapt the experience to your process, whether you need a simple launch path or a more detailed setup for multiple stakeholders.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Built for trust and consistency",
    description:
      "Every interaction is designed to feel polished, reliable, and easy to understand so users can act with confidence.",
  },
];

const comparisonRows = [
  {
    label: "Setup time",
    ours: "Quick, guided, and low-friction",
    others: "Often requires heavy customization",
  },
  {
    label: "Clarity",
    ours: "Benefit-led messaging and clean structure",
    others: "Feature lists without context",
  },
  {
    label: "Conversion support",
    ours: "Repeated CTAs and trust signals throughout",
    others: "One CTA at the bottom",
  },
  {
    label: "Maintainability",
    ours: "Simple to update and scale",
    others: "Hard to extend without rework",
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <Hero
        title="Features that help people understand, trust, and take action."
        subtitle="This page explains what the offering does, how it works in practice, and why it matters for teams that want better outcomes without unnecessary complexity."
        ctaLabel="Request a demo"
        ctaHref="/contact"
        secondaryCtaLabel="See pricing"
        secondaryCtaHref="/pricing"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features intro"
          title="Practical capabilities, not buzzwords."
          description="The experience is designed to reduce friction, support decision-making, and make it easier for teams to launch with confidence."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featureDetails.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Feature breakdown"
            title="What each capability helps you do."
            description="A closer look at the most useful parts of the system, with the business benefit attached to each one."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <FeatureCard
              icon={<BarChart3 className="h-5 w-5" />}
              number="01"
              title="Performance insights"
              description="See what is working, where people drop off, and which pages deserve attention so you can make informed improvements."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              number="02"
              title="Polished presentation"
              description="Present your brand with a consistent, premium look that builds credibility from the first interaction."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5" />}
              number="03"
              title="Reliable structure"
              description="Keep content organized and easy to scan, making it simpler for visitors to find what they need and move forward."
            />
            <FeatureCard
              icon={<Layers3 className="h-5 w-5" />}
              number="04"
              title="Scalable foundation"
              description="Add new pages, sections, and campaigns without rebuilding the entire experience from scratch."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comparison section"
          title="Why this approach stands out."
          description="A straightforward comparison that shows how the experience differs from generic alternatives and rigid plan tiers."
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
            <div>Capability</div>
            <div>Our approach</div>
            <div>Typical alternative</div>
          </div>
          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-3 gap-4 px-6 py-5 text-sm leading-6">
                <div className="font-semibold text-slate-900">{row.label}</div>
                <div className="text-slate-700">{row.ours}</div>
                <div className="text-slate-600">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-600 to-indigo-600 p-8 text-white shadow-lg md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Feature CTA</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to see the features in action?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-sky-50">
              Book a demo, explore the workflow, and get a clear sense of how the experience can support your team’s goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-slate-100"
          >
            Start a trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Need a tailored walkthrough?"
          description="We can show you how the features map to your goals, your team, and your current process."
          buttonLabel="Talk to us"
          buttonHref="/contact"
        />
      </section>

      <Footer />
    </main>
  );
}