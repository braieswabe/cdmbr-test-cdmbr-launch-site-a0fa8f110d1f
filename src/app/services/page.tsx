import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical services for teams that want better outcomes, not more complexity.",
  description: "Learn more about practical services for teams that want better outcomes, not more complexity.",
};

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Cog,
  Compass,
  Gauge,
  Handshake,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: <Compass className="h-5 w-5" />,
    number: "01",
    title: "Strategy & Discovery",
    description:
      "Clarify goals, identify opportunities, and turn scattered ideas into a practical roadmap your team can act on.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    number: "02",
    title: "Brand & Messaging",
    description:
      "Shape a clear, credible story that helps the right people understand what you do and why it matters.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    number: "03",
    title: "Website Design & Build",
    description:
      "Create a polished, conversion-focused website that looks premium, loads fast, and works beautifully on every device.",
  },
  {
    icon: <Cog className="h-5 w-5" />,
    number: "04",
    title: "Ongoing Optimization",
    description:
      "Improve performance over time with content updates, conversion tuning, and technical refinements that compound results.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    number: "05",
    title: "Support & Maintenance",
    description:
      "Keep your site secure, current, and dependable with proactive care and responsive support when you need it.",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    number: "06",
    title: "Launch & Growth Support",
    description:
      "Go live with confidence and keep momentum with post-launch guidance, reporting, and next-step recommendations.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "We start with a focused conversation about your goals, audience, and current challenges so we can recommend the right path.",
  },
  {
    title: "Plan",
    description:
      "You receive a clear scope, timeline, and deliverables list so expectations are aligned before work begins.",
  },
  {
    title: "Create",
    description:
      "We design and build with regular check-ins, keeping the process collaborative without creating extra work for your team.",
  },
  {
    title: "Refine",
    description:
      "We review the details, test key flows, and make thoughtful adjustments to ensure the final result feels polished and effective.",
  },
  {
    title: "Launch",
    description:
      "After launch, we stay available for support, training, and improvements so your investment continues to perform.",
  },
];

const useCases = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Professional services",
    description:
      "Ideal for consultants, agencies, and firms that need a credible online presence and a stronger lead pipeline.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Growing businesses",
    description:
      "Best for teams that have outgrown a basic website and need a more strategic digital experience.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Internal teams",
    description:
      "Helpful for marketing and operations teams that need reliable execution and a partner who can move quickly.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Launches and repositioning",
    description:
      "A strong fit for new offers, refreshed brands, or businesses entering a new market with a clearer message.",
  },
];

const comparison = [
  {
    title: "Strategy",
    items: ["Audience and goals review", "Competitive scan", "Messaging direction", "Recommended scope"],
  },
  {
    title: "Design & Build",
    items: ["Custom page layouts", "Responsive development", "Conversion-focused CTAs", "Performance best practices"],
  },
  {
    title: "Launch Support",
    items: ["QA and testing", "Content handoff", "Launch checklist", "Post-launch guidance"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
                <Sparkles className="h-4 w-4" />
                Services built to create clarity, trust, and momentum
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Practical services for teams that want better outcomes, not more complexity.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                From strategy and messaging to design, development, and ongoing support, we help you
                choose the right level of help for where your business is today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
                >
                  Schedule a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-300 hover:text-sky-700"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <BadgeCheck className="h-4 w-4 text-emerald-500" />
                    Clear scope
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Know exactly what’s included before work begins.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Gauge className="h-4 w-4 text-emerald-500" />
                    Measurable progress
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Track outcomes with milestones, reviews, and launch support.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <CalendarCheck2 className="h-4 w-4 text-emerald-500" />
                    Predictable timeline
                  </div>
                  <p className="mt-2 text-sm text-slate-600">A structured process keeps the project moving without surprises.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Built for handoff
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Your team gets a site and system they can confidently use.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services overview"
          title="Choose the right support for your goals."
          description="Each service is designed to solve a specific business need, whether you need a sharper message, a stronger website, or a reliable partner to keep things moving."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="A practical delivery process that keeps projects clear and manageable."
            description="We keep the work structured, collaborative, and focused on outcomes so you always know what’s happening next."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we help"
          title="Built for real-world use cases across growing organizations."
          description="Whether you’re refining an established brand or launching something new, the work is tailored to your context and priorities."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} number="" title={item.title} description={item.description} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {comparison.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Not sure which service fits best?"
        description="Tell us what you’re trying to improve, and we’ll recommend the most effective next step."
        buttonLabel="Contact an expert"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}