import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatsStrip } from "@/components/StatsStrip";
import { LogoCloud } from "@/components/LogoCloud";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonGroup } from "@/components/ButtonGroup";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, Clock3, ShieldCheck, Sparkles, Target } from "lucide-react";

export default function HomePage() {
  const logos = ["Northstar Health", "Crescent Labs", "Atlas Retail", "Summit Finance", "Harbor Studio", "Vertex Group"];

  const stats = [
    { label: "Projects delivered", value: "180+" },
    { label: "Average response time", value: "< 24 hrs" },
    { label: "Client retention", value: "94%" },
    { label: "Average rating", value: "4.9/5" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavBar />

      <section className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_40%),linear-gradient(135deg,_#0f172a_0%,_#1d4ed8_55%,_#38bdf8_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          <Hero
            title="Professional support that turns interest into action."
            subtitle="We help growing businesses win trust faster, communicate clearly, and convert more qualified leads with a polished digital presence and a proven delivery process."
            primaryCtaLabel="Request a quote"
            primaryCtaHref="/contact"
            secondaryCtaLabel="Explore services"
            secondaryCtaHref="/services"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Clear positioning that helps visitors understand your value in seconds.",
                  "Conversion-focused pages built to guide the next step.",
                  "Modern design system with consistent spacing and strong hierarchy.",
                  "Fast, responsive experiences that feel credible on every device.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Built for growth</p>
                  <p className="text-lg font-bold text-slate-900">A cleaner path from first visit to booked call</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Lead quality", value: "Higher intent inquiries" },
                  { label: "Trust signals", value: "Proof placed where it matters" },
                  { label: "Decision support", value: "Pricing, FAQs, and testimonials" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="text-sm font-medium text-slate-600">{row.label}</span>
                    <span className="text-sm font-semibold text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <LogoCloud logos={logos} />
          <div className="mt-8">
            <StatsStrip stats={stats} />
          </div>
          <div className="mt-8">
            <SocialProofStrip text="Trusted by teams that need a professional presence, clearer messaging, and a smoother path to conversion." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="The challenge"
          title="Most websites explain the business, but don’t move the buyer forward."
          description="Visitors want clarity, confidence, and a simple next step. If the message is vague or the page feels dated, they leave before they ever reach out."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">What usually gets in the way</h3>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li className="flex gap-3"><Clock3 className="mt-0.5 h-5 w-5 text-blue-600" />Unclear messaging that forces visitors to guess what you do.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />Weak trust signals that make it harder to justify a call.</li>
              <li className="flex gap-3"><BarChart3 className="mt-0.5 h-5 w-5 text-blue-600" />Pages that look fine, but don’t support conversion decisions.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">What a stronger site does instead</h3>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li className="flex gap-3"><Target className="mt-0.5 h-5 w-5 text-blue-600" />Leads with outcomes, not jargon.</li>
              <li className="flex gap-3"><BriefcaseBusiness className="mt-0.5 h-5 w-5 text-blue-600" />Shows proof, process, and pricing context early.</li>
              <li className="flex gap-3"><ArrowRight className="mt-0.5 h-5 w-5 text-blue-600" />Makes the next step obvious on every page.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Key benefits"
            title="Everything is designed to build confidence and drive action."
            description="From first impression to final click, each section supports a clear business outcome."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <FeatureCard number="01" icon={<Sparkles className="h-5 w-5" />} title="Sharper positioning" description="Communicate what makes you different in a way that is easy to understand and easy to remember." />
            <FeatureCard number="02" icon={<CheckCircle2 className="h-5 w-5" />} title="More qualified leads" description="Guide the right visitors toward a quote, call, or consultation with less friction." />
            <FeatureCard number="03" icon={<ShieldCheck className="h-5 w-5" />} title="Stronger trust signals" description="Use testimonials, logos, metrics, and process clarity to reduce hesitation." />
            <FeatureCard number="04" icon={<BarChart3 className="h-5 w-5" />} title="Better decision support" description="Help buyers compare options with pricing, FAQs, and service detail pages." />
            <FeatureCard number="05" icon={<Clock3 className="h-5 w-5" />} title="Faster launch cycles" description="Move from strategy to live pages with a structured, efficient delivery process." />
            <FeatureCard number="06" icon={<Target className="h-5 w-5" />} title="Consistent conversion flow" description="Keep calls to action aligned across the site so every page supports the same goal." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Featured services"
          title="Flexible support for the parts of your site that matter most."
          description="Choose the level of help you need, from strategy and messaging to design and launch."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <ServiceCard number="01" icon={<BriefcaseBusiness className="h-5 w-5" />} title="Website strategy" description="Clarify your message, structure your pages, and define the conversion path before design begins." />
          <ServiceCard number="02" icon={<Sparkles className="h-5 w-5" />} title="Design and build" description="Create a polished, responsive experience with modern visuals and accessible interactions." />
          <ServiceCard number="03" icon={<BarChart3 className="h-5 w-5" />} title="Optimization support" description="Improve key pages over time with better copy, stronger proof, and clearer calls to action." />
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonGroup
            primaryLabel="Explore services"
            primaryHref="/services"
            secondaryLabel="View pricing"
            secondaryHref="/pricing"
          />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Clients value the clarity, speed, and professionalism."
            description="Short, outcome-focused feedback from teams that needed a site they could trust."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <TestimonialCard number="01" icon={<CheckCircle2 className="h-5 w-5" />} title="A smoother sales conversation" description="“We started getting better inquiries within the first month because the site finally explained our offer clearly.”" />
            <TestimonialCard number="02" icon={<CheckCircle2 className="h-5 w-5" />} title="A more credible brand presence" description="“The new pages made us look as established as we are. That mattered a lot in competitive pitches.”" />
            <TestimonialCard number="03" icon={<CheckCircle2 className="h-5 w-5" />} title="Fast, organized delivery" description="“The process was simple, the communication was excellent, and every milestone was easy to review.”" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A simple path from inquiry to launch."
          description="Clear steps keep the project moving and make it easy to stay aligned."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["01", "Discovery", "We review your goals, audience, and current site to identify the biggest opportunities."],
            ["02", "Strategy", "We define the page structure, messaging priorities, and conversion goals."],
            ["03", "Design and build", "We create polished pages with responsive layouts and consistent calls to action."],
            ["04", "Launch and refine", "We publish, review performance, and make improvements based on real feedback."],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{number}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Ready for a website that feels credible and converts better?"
        description="Book a call to discuss your goals, review your current site, and get a clear recommendation for next steps."
        buttonLabel="Book a call"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}