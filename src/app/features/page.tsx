import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Learn more about features",
};

import Link from "next/link";
import { ArrowRight, BarChart3, Blocks, Cloud, Gauge, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { StatsStrip } from "@/components/StatsStrip";
import { CTABanner } from "@/components/CTABanner";

export default function FeaturesPage() {
  const featureCards = [
    {
      icon: Gauge,
      title: "Fast, reliable performance",
      description:
        "Pages load quickly, interactions feel smooth, and the experience stays responsive across devices and connection speeds.",
    },
    {
      icon: Workflow,
      title: "Streamlined workflows",
      description:
        "Reduce manual steps with clear processes, smart automation, and interfaces that help teams move faster with fewer mistakes.",
    },
    {
      icon: ShieldCheck,
      title: "Built-in trust and security",
      description:
        "Protect customer data and support confident decision-making with secure patterns, clear permissions, and dependable infrastructure.",
    },
    {
      icon: BarChart3,
      title: "Actionable reporting",
      description:
        "Track what matters with dashboards and summaries that turn activity into useful insight for leaders and operators.",
    },
    {
      icon: Layers3,
      title: "Flexible content structure",
      description:
        "Organize pages, campaigns, and product details in a way that scales as your team grows and your needs change.",
    },
    {
      icon: Cloud,
      title: "Connected ecosystem",
      description:
        "Integrate the tools your team already uses so data flows cleanly between systems without extra admin work.",
    },
  ];

  const integrations = [
    "CRM platforms",
    "Email marketing tools",
    "Analytics suites",
    "Payment providers",
    "Project management tools",
    "Cloud storage",
    "Customer support systems",
    "Automation platforms",
  ];

  const stats = [
    { value: "42%", label: "faster launch cycles" },
    { value: "3x", label: "more efficient handoffs" },
    { value: "99.9%", label: "uptime-ready architecture" },
    { value: "24/7", label: "visibility into key metrics" },
  ];

  const projects = [
    {
      icon: Sparkles,
      title: "Unified customer portal",
      description:
        "A streamlined experience that reduced support requests, improved self-service, and gave customers faster access to the information they needed.",
      href: "/portfolio",
      outcome: "Cut support volume by 31% in the first quarter",
      tag: "Workflow upgrade",
    },
    {
      icon: Blocks,
      title: "Scalable content system",
      description:
        "A modular setup for marketing and product teams to publish faster without sacrificing consistency or quality.",
      href: "/portfolio",
      outcome: "Reduced page production time from days to hours",
      tag: "Content operations",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Features" },
        ]}
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      />

      <Hero
        title="Features that help teams move faster and serve customers better"
        subtitle="See how a thoughtful product experience improves performance, simplifies workflows, and creates measurable business value."
        ctaLabel="Book a Call"
        ctaHref="#feature-grid"
        secondaryLabel="Learn More"
        secondaryHref="#benefits"
      />

      <SocialProofBanner
        title="Designed for teams that need clarity, speed, and dependable results"
        stats={[
          { value: "120+", label: "projects delivered" },
          { value: "4.9/5", label: "average client satisfaction" },
          { value: "30%", label: "average efficiency gain" },
        ]}
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      />

      <section id="feature-grid" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Everything you need to launch with confidence"
          description="Each feature is designed to remove friction, improve consistency, and support better outcomes for your team and your customers."
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Feature deep dive"
            title="Standout capabilities, explained in plain language"
            description="These are the features that make the biggest difference in day-to-day work and long-term growth."
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                href={project.href}
                outcome={project.outcome}
                tag={project.tag}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Integrations"
              title="Connect the tools your team already trusts"
              description="Keep your stack working together with integrations that reduce duplicate work and improve data consistency."
              className="mb-6"
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {integrations.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
            <SectionHeading
              eyebrow="Business value"
              title="Features that translate into measurable outcomes"
              description="The right capabilities do more than look good — they save time, improve conversion, and make growth easier to sustain."
              align="left"
              className="mb-6"
            />
            <StatsStrip
              stats={stats}
              title="Trusted results that move the business forward"
              description="A concise snapshot of the outcomes clients care about most: speed, quality, and measurable growth."
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to see these features in action?"
          description="Book a demo to explore the workflow, integrations, and reporting that can support your next stage of growth."
          buttonLabel="Book a Call"
          buttonHref="/contact"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Want a closer look at the platform?</h2>
              <p className="mt-2 text-slate-600">
                We can walk you through the features that matter most to your team and show how they support real
                outcomes.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}