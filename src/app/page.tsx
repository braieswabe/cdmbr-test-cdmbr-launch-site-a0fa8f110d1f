import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoStrip } from "@/components/LogoStrip";
import { StatsRow } from "@/components/StatsRow";
import { SocialProofStrip } from "@/components/SocialProofStrip";

export default function HomePage() {
  const logos = [
    "Northstar Health",
    "Summit Finance",
    "Brightline Studio",
    "Harbor & Co.",
    "Atlas Retail",
    "Evergreen Labs",
  ];

  const stats = [
    { label: "Average lift in qualified leads", value: "42%" },
    { label: "Projects delivered on time", value: "98%" },
    { label: "Client satisfaction score", value: "4.9/5" },
    { label: "Weeks from kickoff to launch", value: "6–10" },
  ];

  const services = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      number: "01",
      title: "Strategy that clarifies the path",
      description:
        "We define the right message, audience, and conversion goals before design or development begins.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      number: "02",
      title: "Web design that builds trust",
      description:
        "Clean layouts, strong hierarchy, and polished visuals help visitors understand your value fast.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      number: "03",
      title: "Development that performs",
      description:
        "Fast, accessible, mobile-first builds that are easy to maintain and ready to scale.",
    },
    {
      icon: <Clock3 className="h-5 w-5" />,
      number: "04",
      title: "Launch support without friction",
      description:
        "We handle the details, from content updates to QA, so your team can launch with confidence.",
    },
  ];

  const testimonials = [
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      number: "01",
      title: "A smoother sales process",
      description:
        "“Within two weeks of launch, our inbound inquiries were noticeably better qualified. The site finally explains what we do in a way prospects understand.” — Maya R., Operations Director",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      number: "02",
      title: "Clear, credible, and easy to use",
      description:
        "“We saw a measurable increase in demo requests after the redesign. The team made the process simple and the result feels premium.” — Jordan T., Founder",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      number: "03",
      title: "A partner we could trust",
      description:
        "“They brought structure, calm, and excellent communication. We always knew what was happening and what came next.” — Priya S., Marketing Lead",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <Hero
        title="A professional website that turns interest into action."
        subtitle="We design and build polished, conversion-focused websites for teams that want clarity, credibility, and measurable results."
        ctaLabel="Start a project"
        ctaHref="/contact"
        secondaryCtaLabel="View services"
        secondaryCtaHref="/services"
      />

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 shadow-sm">
          <LogoStrip logos={logos} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Why teams choose us"
          title="Built to earn trust quickly"
          description="Every page is designed to answer the questions your visitors are already asking: what you do, why it matters, and why they should choose you."
        />
        <StatsRow stats={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Featured services"
          title="Practical support for the full website journey"
          description="From positioning to launch, we help you create a site that looks sharp, loads fast, and supports your business goals."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <FeatureCard key={service.number} {...service} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="How it works"
          title="A simple process that keeps projects moving"
          description="We keep the experience clear and collaborative so you always know what’s happening and what comes next."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Discover",
              text: "We learn about your goals, audience, and current challenges so the work starts with the right priorities.",
            },
            {
              step: "02",
              title: "Design and build",
              text: "We create a polished experience with strong messaging, thoughtful visuals, and reliable development.",
            },
            {
              step: "03",
              title: "Launch and improve",
              text: "We test, launch, and support the site so you can keep building momentum after go-live.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Results and proof"
          title="Clients come to us for clarity, and stay for the outcomes"
          description="Real-world feedback from teams who needed a website that could support growth, not just look good."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.number} {...testimonial} />
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <SocialProofStrip
            items={[
              "Trusted by growing service businesses",
              "Built for mobile-first conversion",
              "Accessible, fast, and easy to maintain",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <CTABanner
          headline="Ready for a website that feels as professional as your business?"
          description="Let’s create a clear, credible experience that helps visitors take the next step with confidence."
          buttonLabel="Book a consultation"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}