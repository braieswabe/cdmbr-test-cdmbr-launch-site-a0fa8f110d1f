import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  CTABanner,
  FeatureCard,
  Hero,
  SectionHeading,
  StatsStrip,
  TestimonialCard,
} from "@/components";

export const metadata: Metadata = {
  title: "Professional Website Template",
  description:
    "A flexible, conversion-focused page template for professional websites that need clear messaging, trust-building content, and a strong next step.",
};

const stats = [
  { label: "Average response time", value: "< 1 business day" },
  { label: "Projects delivered", value: "250+" },
  { label: "Client satisfaction", value: "98%" },
  { label: "Repeat engagement", value: "72%" },
];

const highlights = [
  {
    icon: "✓",
    title: "Clear positioning",
    description:
      "Present your value in plain language so visitors understand what you do, who it’s for, and why it matters.",
  },
  {
    icon: "⚡",
    title: "Built for action",
    description:
      "Guide people toward a single next step with focused calls to action, concise sections, and strong visual hierarchy.",
  },
  {
    icon: "★",
    title: "Trust-first structure",
    description:
      "Use proof points, outcomes, and customer-centered messaging to reduce friction and increase confidence.",
  },
];

const testimonials = [
  {
    icon: "“",
    title: "Simple, polished, and effective",
    description:
      "The page made our offer easier to understand and helped us turn more visits into qualified inquiries.",
    author: "Maya Chen",
    role: "Operations Director, Northline Studio",
  },
  {
    icon: "“",
    title: "A strong foundation for growth",
    description:
      "We needed something flexible for future pages. This template gave us a professional starting point without feeling generic.",
    author: "Jordan Patel",
    role: "Founder, Bright Harbor Consulting",
  },
];

export default function GenericPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Page Template" },
          ]}
        />
      </div>

      <Hero
        title="A flexible page template that keeps your message clear"
        subtitle="Use this professional layout for new pages, campaign landing pages, or supporting content that needs to build trust and drive a next step."
        ctaLabel="Get Started"
        ctaHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/services"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StatsStrip stats={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why this page works"
          title="Designed to help visitors understand, trust, and act"
          description="A strong professional page should answer the right questions quickly: what you offer, why it matters, and what happens next."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Content body"
            title="Use this space for the details that matter most"
            description="This section is ideal for long-form explanations, service overviews, process summaries, or supporting media that helps visitors make a confident decision."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                Keep the message focused on outcomes
              </h3>
              <p className="text-base leading-7 text-slate-600">
                Professional websites perform best when every section supports a
                single goal. That means clear headlines, short supporting copy,
                and proof that shows how your work creates value. Whether you’re
                introducing a service, launching a campaign, or sharing a
                resource, the structure should make it easy for visitors to
                understand the benefit and move forward.
              </p>
              <p className="text-base leading-7 text-slate-600">
                Use this area to explain your process, highlight measurable
                results, or answer the questions people ask before they reach
                out. Keep the language direct and customer-centered. Instead of
                describing features in isolation, connect them to outcomes such
                as faster turnaround, better clarity, stronger conversion, or
                reduced risk.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Supporting block
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                A concise summary of what visitors should do next
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-200">
                Keep the next step obvious. If the page is educational, invite
                readers to learn more. If it is conversion-focused, direct them
                to book a call or request a quote. The goal is to reduce
                hesitation and make the path forward feel simple.
              </p>
              <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-sm font-medium text-slate-200">
                  Best practice
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Pair one clear CTA with a short explanation of what happens
                  after the click. That small detail can improve confidence and
                  increase conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What clients say"
          title="Professional, approachable, and easy to trust"
          description="Social proof helps visitors feel confident that your process is reliable and your results are real."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.author}
              icon={item.icon}
              title={item.title}
              description={item.description}
              author={item.author}
              role={item.role}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to turn this template into a high-performing page?"
          description="Use a clear structure, strong proof points, and a focused call to action to help more visitors take the next step."
          buttonLabel="Book a Call"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}