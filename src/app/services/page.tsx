import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical web services for teams that need results, not just a redesign.",
  description: "Learn more about practical web services for teams that need results, not just a redesign.",
};

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Compass,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    description:
      "Custom marketing websites built to look polished, load fast, and guide visitors toward action.",
    outcome: "Best for teams that need a credible online presence that converts.",
  },
  {
    icon: Compass,
    title: "Brand Positioning",
    description:
      "Clear messaging, page structure, and visual direction that make your offer easier to understand.",
    outcome: "Best for founders refining how they explain value in a crowded market.",
  },
  {
    icon: Rocket,
    title: "Launch Pages & Campaigns",
    description:
      "High-converting landing pages for product launches, lead generation, and event promotion.",
    outcome: "Best for teams that need a focused page with one clear goal.",
  },
  {
    icon: BarChart3,
    title: "Conversion Optimization",
    description:
      "Practical improvements to copy, layout, and calls to action based on user behavior and business goals.",
    outcome: "Best for sites that already get traffic but need better results.",
  },
  {
    icon: Layers3,
    title: "Content Structure & SEO",
    description:
      "Search-friendly page architecture, metadata, and content hierarchy that support discoverability.",
    outcome: "Best for businesses that want to grow organic visibility over time.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Ongoing Support",
    description:
      "Reliable updates, new sections, and iterative improvements after launch so your site stays current.",
    outcome: "Best for teams that want a long-term partner, not a one-off handoff.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We review your goals, audience, competitors, and current site to identify the fastest path to improvement.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We define the page structure, messaging priorities, and visual direction before design begins.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "We create a responsive, accessible experience with clear hierarchy and conversion-focused details.",
  },
  {
    step: "04",
    title: "Launch & Refine",
    description:
      "We test the final experience, launch with confidence, and support post-launch improvements as needed.",
  },
];

const differentiators = [
  "Strategy-first approach that aligns the website with business goals before pixels are pushed.",
  "Clear, benefit-led copy that helps visitors understand what you do and why it matters.",
  "Modern, modular design system that scales across pages without losing consistency.",
  "Fast turnaround with a structured process that keeps projects moving.",
  "Built for accessibility, responsiveness, and maintainability from day one.",
];

const faqItems = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with founders, service businesses, agencies, and in-house teams that need a professional website or landing page that supports growth.",
  },
  {
    question: "Do you only build new websites?",
    answer:
      "No. We also improve existing sites by refining messaging, restructuring pages, and upgrading design and conversion flow.",
  },
  {
    question: "Can you help with copy and content?",
    answer:
      "Yes. We can shape the page narrative, improve section copy, and help organize content so it reads clearly and converts better.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "Most projects begin with a discovery call so we can understand your goals, timeline, and the scope of work before recommending next steps.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-medium text-[var(--primary)]">
              Services built to clarify, convert, and grow
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Practical web services for teams that need results, not just a redesign.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Whether you need a full website, a sharper message, or a high-performing landing page,
              we help you turn a confusing online presence into a clear path to action.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">
                  Request a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/portfolio">View selected work</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-[var(--secondary)]/10 p-5">
              <p className="text-sm font-medium text-[var(--primary)]">What you can expect</p>
              <p className="mt-2 text-base text-black/70">
                A structured process, thoughtful design, and clear communication from kickoff to launch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Strategy-led planning",
                "Responsive design",
                "Conversion-focused copy",
                "Accessible components",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-black/[0.03] p-4 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service categories"
          title="Choose the support that matches your stage."
          description="Each service is designed to solve a specific problem, from positioning and design to launch support and optimization."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={
                <div className="space-y-3">
                  <p>{service.description}</p>
                  <p className="text-sm font-medium text-[var(--primary)]">{service.outcome}</p>
                </div>
              }
            />
          ))}
        </div>
      </section>

      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A simple process that keeps projects moving."
            description="You get a clear roadmap, regular communication, and a final result that is ready to launch with confidence."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-sm font-semibold text-[var(--primary)]">
                  {step.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Why this approach works"
              title="Better than a generic template. Faster than a custom process with no structure."
              description="We combine strategy, design, and execution so you get a site that is easier to manage and more effective at driving action."
            />
            <div className="mt-8 space-y-4">
              {differentiators.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-[var(--primary)]" />
                  <p className="text-sm leading-7 text-black/75">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 text-white shadow-lg">
            <Sparkles className="h-10 w-10 text-white/90" />
            <h3 className="mt-6 text-2xl font-semibold">Need a clearer scope?</h3>
            <p className="mt-4 text-white/85">
              We can help you define the right package, timeline, and deliverables before you commit.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Discovery call",
                "Project estimate",
                "Scope recommendations",
                "Launch plan",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="secondary">
                <Link href="/contact">Talk through your project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you reach out."
            description="These are the most common questions we hear from teams comparing options or planning a new project."
          />
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to turn your website into a stronger sales tool?"
          description="Book a consultation to discuss your goals, scope, and the fastest path to a better result."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}