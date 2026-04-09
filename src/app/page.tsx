import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import Link from "next/link";

import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";
import { TestimonialCard } from "@/components/TestimonialCard";

const trustedBy = [
  "Northstar Health",
  "Summit Capital",
  "Brightline Studio",
  "Atlas Commerce",
  "Harbor Labs",
  "Vertex Partners",
];

const stats = [
  { label: "Launches delivered", value: "120+" },
  { label: "Average conversion lift", value: "38%" },
  { label: "Time to first draft", value: "5 days" },
  { label: "Client satisfaction", value: "4.9/5" },
];

const features = [
  {
    icon: "⚡",
    title: "Fast, polished delivery",
    description:
      "Move from idea to a high-converting website without the usual delays, handoffs, or design drift.",
  },
  {
    icon: "🎯",
    title: "Built to convert",
    description:
      "Every page is structured around clarity, trust, and action so visitors know exactly what to do next.",
  },
  {
    icon: "🧠",
    title: "Strategy first",
    description:
      "We turn your offer into a clear story with messaging that speaks to real customer pain points.",
  },
  {
    icon: "📱",
    title: "Responsive by default",
    description:
      "Your site looks sharp and works smoothly on phones, tablets, and large desktop screens.",
  },
];

const testimonials = [
  {
    icon: "“",
    number: "01",
    title: "More qualified leads",
    description:
      "“We launched with a clearer message and started hearing from better-fit prospects within the first week.”",
  },
  {
    icon: "“",
    number: "02",
    title: "A smoother sales process",
    description:
      "“The new site answers common questions before the first call, which has made our sales conversations much easier.”",
  },
  {
    icon: "“",
    number: "03",
    title: "A brand that feels premium",
    description:
      "“Our website finally matches the quality of our work. It feels credible, modern, and easy to navigate.”",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_42%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Hero
                title="A professional website that turns attention into action."
                subtitle="We design and build modern websites that clarify your offer, build trust fast, and help more visitors become customers."
                ctaLabel="Start your project"
                ctaHref="/contact"
              />
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/pricing">See pricing</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/portfolio">View portfolio</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Website preview</p>
                    <h2 className="mt-1 text-2xl font-semibold">Clear. Credible. Conversion-ready.</h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">
                    Live in 2 weeks
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-sm text-slate-300">Primary CTA</p>
                    <p className="mt-2 text-lg font-semibold">Book a discovery call</p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-sm text-slate-300">Trust signal</p>
                    <p className="mt-2 text-lg font-semibold">4.9/5 client satisfaction</p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4 sm:col-span-2">
                    <p className="text-sm text-slate-300">Outcome</p>
                    <p className="mt-2 text-lg font-semibold">
                      Better messaging, stronger credibility, and more qualified inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip title="Trusted by growing teams" subtitle="Used by founders, operators, and in-house teams that need a polished web presence that converts." items={trustedBy} />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why clients choose us"
          title="Everything your website needs to win trust."
          description="From messaging to layout to mobile polish, we focus on the details that make a site feel credible and easy to act on."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A simple process with no surprises."
            description="We keep the project moving with clear milestones, fast feedback loops, and a launch plan that keeps momentum high."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Step 01</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Discover</h3>
              <p className="mt-3 text-slate-600">
                We learn about your audience, goals, and current bottlenecks so the site is built around real business needs.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Step 02</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Design and build</h3>
              <p className="mt-3 text-slate-600">
                We create a clean, modern experience with strong hierarchy, persuasive copy, and responsive components.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Step 03</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">Launch and improve</h3>
              <p className="mt-3 text-slate-600">
                We refine the final details, launch with confidence, and give you a site that is ready to support growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <StatsRow
          title="Results that matter"
          subtitle="Clear metrics that help visitors understand the impact quickly."
          items={stats}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="What clients say"
          title="Proof that the experience feels as good as the results."
          description="Short, specific feedback from teams that needed a website to do more than just look nice."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.number} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <CTABanner
          headline="Ready for a website that works harder for your business?"
          description="Let’s build a site that looks premium, explains your value clearly, and helps more visitors take the next step."
          buttonLabel="Book a consultation"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}