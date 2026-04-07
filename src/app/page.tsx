import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsStrip } from "@/components/StatsStrip";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ArrowRight, BarChart3, Clock3, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

export default function HomePage() {
  const stats = [
    { value: "98%", label: "client satisfaction" },
    { value: "2–4 wks", label: "typical launch timeline" },
    { value: "3x", label: "average conversion lift" },
    { value: "24h", label: "response time" },
  ];

  const testimonials = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Clear strategy, fast execution",
      description:
        "We came in with a vague idea and left with a polished site that immediately improved lead quality. The process was organized, responsive, and easy to trust.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Better messaging, better results",
      description:
        "The new homepage made our value proposition obvious in seconds. Inquiries became more relevant, and our sales team spent less time qualifying leads.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Reliable from start to finish",
      description:
        "Every milestone was delivered on time, every question was answered quickly, and the final product felt thoughtful, modern, and built to convert.",
    },
  ];

  return (
    <main className="bg-zinc-50 text-zinc-900">
      <NavBar />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <Hero
            title="Professional websites that turn attention into qualified inquiries"
            subtitle="We design and build clear, credible, conversion-focused sites for businesses that need stronger messaging, faster delivery, and measurable results."
            ctaLabel="Request a quote"
            ctaHref="/contact"
            secondaryLabel="View services"
            secondaryHref="/services"
          />
          <div className="mt-12">
            <SocialProofStrip
              items={["Trusted by growing teams", "Fast turnaround", "Clear communication", "Built for conversion"]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <StatsStrip stats={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Featured services"
          title="Everything you need to launch with confidence"
          description="From strategy to launch, we focus on the work that improves clarity, builds trust, and helps visitors take action."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            icon={<BarChart3 className="h-5 w-5" />}
            number="01"
            title="Strategy & positioning"
            description="Clarify your message, sharpen your offer, and align the site around the outcomes your customers care about."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            number="02"
            title="Design & content"
            description="Create a polished visual system and concise copy that feels professional, approachable, and easy to scan."
          />
          <FeatureCard
            icon={<Clock3 className="h-5 w-5" />}
            number="03"
            title="Build & launch"
            description="Deliver a responsive, performant site with smooth handoff, reliable support, and a launch plan that reduces friction."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            number="04"
            title="Trust & credibility"
            description="Use testimonials, proof points, and clear calls to action to help visitors feel confident taking the next step."
          />
          <FeatureCard
            icon={<Users className="h-5 w-5" />}
            number="05"
            title="Ongoing improvements"
            description="Refine pages over time with practical updates that improve conversion, clarity, and search visibility."
          />
          <FeatureCard
            icon={<ArrowRight className="h-5 w-5" />}
            number="06"
            title="Support that responds"
            description="Get a partner who communicates clearly, moves quickly, and stays focused on outcomes that matter to your business."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A simple process designed to keep things moving"
            description="We make it easy to go from first conversation to launch without unnecessary complexity."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your goals, audience, and current challenges so the site is built around real business priorities.",
              },
              {
                step: "02",
                title: "Design and build",
                description:
                  "We create a clean, modern experience with concise messaging, strong hierarchy, and responsive layouts.",
              },
              {
                step: "03",
                title: "Review and launch",
                description:
                  "We refine the details, confirm everything works smoothly, and launch with confidence and clarity.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                <div className="text-sm font-semibold text-indigo-600">Step {item.step}</div>
                <h3 className="mt-3 text-xl font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients value the clarity, speed, and measurable impact"
          description="Real feedback from teams that needed a website partner who could deliver with confidence."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.title}
              icon={testimonial.icon}
              title={testimonial.title}
              description={testimonial.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <CTABanner
          headline="Ready for a website that works harder for your business?"
          description="Let’s create a polished, high-converting experience that helps the right people understand your value and take action."
          buttonLabel="Book a consultation"
          buttonHref="/contact"
        />
      </section>

      <Footer />
    </main>
  );
}