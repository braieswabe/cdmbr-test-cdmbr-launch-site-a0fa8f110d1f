import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  Compass,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
  CTABanner,
  FeatureCard,
  Hero,
  SectionHeading,
  ServiceCard,
} from "@/components";

const services = [
  {
    number: "01",
    icon: <Compass className="h-5 w-5" />,
    title: "Strategy & Positioning",
    description:
      "Clarify your offer, sharpen your message, and align your website around the outcomes buyers care about most.",
    outcome: "A clearer story that makes it easier to win trust and convert interest into action.",
    href: "/services/strategy",
  },
  {
    number: "02",
    icon: <Layers3 className="h-5 w-5" />,
    title: "Website Design & Build",
    description:
      "Modern, responsive websites designed to look polished, load fast, and guide visitors toward the next step.",
    outcome: "A professional site that feels credible on day one and scales with your business.",
    href: "/services/web-design",
  },
  {
    number: "03",
    icon: <Rocket className="h-5 w-5" />,
    title: "Conversion Optimization",
    description:
      "Improve calls to action, page structure, and content flow so more visitors become leads or customers.",
    outcome: "More qualified inquiries without increasing traffic.",
    href: "/services/conversion-optimization",
  },
  {
    number: "04",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Content & Messaging",
    description:
      "Benefit-led copywriting for home pages, service pages, landing pages, and supporting content.",
    outcome: "Messaging that is concise, persuasive, and easy to scan.",
    href: "/services/content",
  },
  {
    number: "05",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Ongoing Support",
    description:
      "Reliable updates, performance checks, and small improvements that keep your site current and effective.",
    outcome: "A website that stays secure, relevant, and aligned with your goals.",
    href: "/services/support",
  },
  {
    number: "06",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Launch & Handover",
    description:
      "Structured launch support, training, and documentation so your team can manage the site confidently.",
    outcome: "A smooth handoff with fewer surprises after launch.",
    href: "/services/launch",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discover",
    description:
      "We start with a focused consultation to understand your goals, audience, timeline, and constraints.",
  },
  {
    number: "2",
    title: "Scope",
    description:
      "You receive a clear plan with deliverables, milestones, and a recommended approach based on your needs.",
  },
  {
    number: "3",
    title: "Build",
    description:
      "We design, write, and develop in short feedback cycles so the work stays aligned and efficient.",
  },
  {
    number: "4",
    title: "Refine",
    description:
      "We review the details, test the experience, and make sure the final result is polished and ready to launch.",
  },
  {
    number: "5",
    title: "Deliver",
    description:
      "You get a complete handoff, launch support, and a practical next-step plan for growth.",
  },
];

const useCases = [
  {
    number: "01",
    icon: <Users className="h-5 w-5" />,
    title: "Growing service businesses",
    description:
      "Ideal for firms that need a stronger online presence, clearer offers, and more qualified leads.",
    className: "bg-white",
  },
  {
    number: "02",
    icon: <Target className="h-5 w-5" />,
    title: "Teams with conversion goals",
    description:
      "Best for organizations that want more inquiries, booked calls, or demo requests from existing traffic.",
    className: "bg-white",
  },
  {
    number: "03",
    icon: <CalendarRange className="h-5 w-5" />,
    title: "Launches and rebrands",
    description:
      "Useful when you need a clean, credible rollout with messaging that matches your new direction.",
    className: "bg-white",
  },
  {
    number: "04",
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Established brands needing a refresh",
    description:
      "A strong fit when the site is dated, hard to manage, or no longer reflects the quality of your work.",
    className: "bg-white",
  },
];

const detailHighlights = [
  {
    number: "01",
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "What’s included in a typical engagement",
    description:
      "Most projects include discovery, sitemap planning, messaging guidance, design direction, responsive build, QA, and launch support.",
    className: "bg-slate-50",
  },
  {
    number: "02",
    icon: <Sparkles className="h-5 w-5" />,
    title: "How deliverables are structured",
    description:
      "You get practical outputs such as page outlines, wireframes, polished UI, reusable components, and clear handoff notes.",
    className: "bg-slate-50",
  },
  {
    number: "03",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Typical use cases",
    description:
      "From lead generation and service marketing to product launches and internal enablement, the work is tailored to the outcome.",
    className: "bg-slate-50",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Hero
        title="Services built to move prospects from interest to action"
        subtitle="From strategy and messaging to design, development, and ongoing support, we help you present a clearer offer and a more credible experience."
        primaryCtaLabel="Request a consultation"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View pricing"
        secondaryCtaHref="/pricing"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Service categories"
          title="Choose the support you need"
          description="Each service can stand alone or be combined into a full engagement depending on your goals, timeline, and internal resources."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Service details"
            title="What each service delivers"
            description="A quick look at the outcomes, deliverables, and situations where each service is the best fit."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {detailHighlights.map((item) => (
              <FeatureCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A simple, structured engagement"
          description="We keep the work organized and transparent so you always know what’s happening next."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Best fit"
            title="Common scenarios we support"
            description="If you’re not sure which service you need, these examples can help you identify the right starting point."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item) => (
              <FeatureCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <CTABanner
          headline="Need help choosing the right service?"
          description="Tell us what you’re trying to improve and we’ll recommend the most efficient path forward."
          buttonLabel="Request a quote"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}