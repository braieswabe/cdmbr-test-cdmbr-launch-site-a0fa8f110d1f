import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Learn more about features",
};

import { ButtonGroup } from "@/components/ButtonGroup";
import { CTABanner } from "@/components/CTABanner";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsStrip } from "@/components/StatsStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ArrowRightLeft, Blocks, Gauge, PlugZap, ShieldCheck, Workflow } from "lucide-react";

const logos = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Stripe"];

const stats = [
  { label: "Faster launch cycles", value: "2-4 weeks" },
  { label: "Average performance score", value: "95+" },
  { label: "Client satisfaction", value: "4.9/5" },
  { label: "Reusable components", value: "100%" },
];

const comparisonHeaders = ["Capability", "Our approach", "Typical alternative"];
const comparisonRows = [
  ["Design system", "Reusable, consistent, and scalable across pages", "One-off layouts that drift over time"],
  ["Performance", "Built for speed, accessibility, and clean code", "Heavy pages with inconsistent quality"],
  ["Delivery", "Clear scope, fast iteration, and predictable handoff", "Slow cycles and unclear ownership"],
  ["Maintenance", "Easy to update and extend as needs change", "Hard to evolve without rework"],
];

export default function FeaturesPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features" }]} />

      <Hero
        title="Everything you need to launch with confidence."
        subtitle="Our feature set is designed to help teams move faster, stay consistent, and turn interest into action with less friction."
        primaryCtaLabel="Request a demo"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Explore pricing"
        secondaryCtaHref="/pricing"
      />

      <StatsStrip stats={stats} />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Feature matrix"
          title="Built for clarity, speed, and scale."
          description="Each capability is designed to solve a real business problem, not just add more surface area."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            number="01"
            icon={<Blocks className="h-5 w-5" />}
            title="Modular page sections"
            description="Compose pages from reusable blocks so teams can launch faster without sacrificing consistency."
          />
          <FeatureCard
            number="02"
            icon={<Gauge className="h-5 w-5" />}
            title="Performance-first builds"
            description="Keep pages fast, responsive, and optimized for real users across devices."
          />
          <FeatureCard
            number="03"
            icon={<Workflow className="h-5 w-5" />}
            title="Streamlined workflows"
            description="Reduce handoff friction with a clear structure that supports design, content, and development."
          />
          <FeatureCard
            number="04"
            icon={<PlugZap className="h-5 w-5" />}
            title="Easy integrations"
            description="Connect forms, analytics, CRM tools, and marketing systems without unnecessary complexity."
          />
          <FeatureCard
            number="05"
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Reliable foundations"
            description="Use a stable, accessible codebase that’s easier to maintain and extend over time."
          />
          <FeatureCard
            number="06"
            icon={<ArrowRightLeft className="h-5 w-5" />}
            title="Flexible scaling"
            description="Start with what you need now and add more pages, sections, and capabilities as you grow."
          />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="Features that translate into business value."
            description="The result is a site that feels polished to visitors and practical for your team."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard number="01" icon={<Gauge className="h-5 w-5" />} title="More qualified leads" description="Clear messaging and strong CTAs help visitors understand your value quickly." />
            <FeatureCard number="02" icon={<ShieldCheck className="h-5 w-5" />} title="Higher trust" description="Consistent visuals, proof points, and structure make your brand feel credible." />
            <FeatureCard number="03" icon={<Workflow className="h-5 w-5" />} title="Lower maintenance overhead" description="Reusable patterns reduce rework and make future updates easier." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Works with the tools teams already use."
          description="Designed to fit into modern workflows without forcing a platform change."
        />
        <div className="mt-10">
          <LogoCloud logos={logos} />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Comparison"
            title="A cleaner alternative to patchwork solutions."
            description="See how a structured, conversion-focused build compares to a more fragmented approach."
          />
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to see the features in action?"
        description="Book a call to review your goals and get a tailored recommendation."
        buttonLabel="Book a call"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}