import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsStrip } from "@/components/StatsStrip";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/Button";

export default function HomePage() {
  const logos = [
    "Northstar Health",
    "Summit Finance",
    "Brightline Studio",
    "Evergreen Retail",
    "Atlas Logistics",
    "Cedar & Co.",
  ];

  const stats = [
    { value: "98%", label: "client satisfaction" },
    { value: "3.2x", label: "average lead growth" },
    { value: "21 days", label: "typical launch timeline" },
    { value: "40+", label: "successful projects delivered" },
  ];

  const features = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Clear strategy from day one",
      description:
        "We define the right message, audience, and next step before design begins, so every page works toward a measurable outcome.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Reliable delivery you can trust",
      description:
        "A structured process, proactive communication, and quality checks keep projects moving smoothly and on schedule.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Built to improve results",
      description:
        "From conversion-focused layouts to search-friendly content, everything is designed to help you attract and convert better leads.",
    },
    {
      icon: <Clock3 className="h-5 w-5" />,
      title: "Fast turnaround without shortcuts",
      description:
        "We move quickly while keeping the details sharp, so you can launch sooner with confidence in the final result.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Simple next steps",
      description:
        "Whether you need a website, campaign, or ongoing support, we make it easy to start with a clear scope and quote.",
    },
  ];

  const testimonials = [
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "A smoother launch than we expected",
      description:
        "The team translated our goals into a site that feels polished, credible, and easy to navigate. We saw a 47% increase in qualified inquiries within the first month.",
      author: "Maya Chen",
      role: "Marketing Director, Northstar Health",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "They made the process easy",
      description:
        "Communication was consistent, the timeline was realistic, and the final result exceeded our expectations. We finally have a website that supports sales instead of slowing them down.",
      author: "Jordan Patel",
      role: "Founder, Summit Finance",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <Hero
        title="A professional website that earns trust and drives action"
        subtitle="We design and build modern websites for teams that want clearer messaging, stronger credibility, and better conversion. Every page is structured to help visitors understand your value and take the next step."
        ctaLabel="Get Started"
        ctaHref="/contact"
        secondaryLabel="Book a Call"
        secondaryHref="/about"
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <LogoCloud
            title="Trusted by growing teams"
            description="Companies choose us for clear communication, reliable delivery, and measurable results."
            items={logos}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why it works"
              title="Your website should answer questions, build confidence, and move people forward"
              description="Most visitors decide quickly. If your message is unclear, your process feels vague, or your proof is hard to find, they leave. We fix that with a clean structure, plain-language copy, and a design that makes the next step obvious."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Clear messaging", "Explain what you do in language customers understand."],
                ["Stronger trust", "Use proof points, testimonials, and outcomes to reduce hesitation."],
                ["Better conversion", "Guide visitors to book, inquire, or request a quote."],
                ["Search visibility", "Support discoverability with helpful, structured content."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsStrip stats={stats} />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Featured services"
          title="Practical support for websites that need to perform"
          description="Choose the level of help you need, from strategy and design to launch-ready development and ongoing improvements."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A simple process that keeps projects moving"
            description="We keep the journey straightforward so you always know what happens next."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your goals, audience, and current challenges, then define the best path forward.",
              },
              {
                step: "02",
                title: "Design and build",
                description:
                  "We create a polished, conversion-focused experience with content and visuals aligned to your brand.",
              },
              {
                step: "03",
                title: "Launch and improve",
                description:
                  "We test, refine, and launch with confidence, then support ongoing improvements as your needs grow.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-semibold tracking-wide text-slate-500">{item.step}</div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients value the clarity, speed, and results"
          description="Real feedback from teams that needed a website they could confidently share with customers and stakeholders."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </section>

      <CTABanner
        headline="Ready for a website that supports your next stage of growth?"
        description="Let’s turn your goals into a clear, credible, and conversion-focused online presence."
        buttonLabel="Get Started"
        buttonHref="/contact"
      />
    </main>
  );
}