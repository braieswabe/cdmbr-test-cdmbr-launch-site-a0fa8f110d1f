import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical web services that help your business look credible and win better leads.",
  description: "Learn more about practical web services that help your business look credible and win better leads.",
};

import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Compass, Layers3, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: <Compass className="h-6 w-6" />,
    number: "01",
    title: "Strategy & Positioning",
    description:
      "Clarify your message, sharpen your offer, and align your website around the outcomes your audience actually wants.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    number: "02",
    title: "Website Design & Build",
    description:
      "Launch a polished, responsive site that looks credible, loads fast, and guides visitors toward action.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    number: "03",
    title: "Conversion Optimization",
    description:
      "Improve key pages with stronger calls to action, clearer hierarchy, and messaging that reduces hesitation.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    number: "04",
    title: "Ongoing Support",
    description:
      "Keep your site updated, secure, and aligned with your business as priorities evolve.",
  },
  {
    icon: <BriefcaseBusiness className="h-6 w-6" />,
    number: "05",
    title: "Content & SEO Support",
    description:
      "Publish practical, search-friendly content that builds authority and helps the right people find you.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    number: "06",
    title: "Brand Refinement",
    description:
      "Strengthen visual consistency across your site so every page feels intentional, trustworthy, and cohesive.",
  },
];

const process = [
  {
    title: "Discovery",
    description:
      "We start with your goals, audience, and current bottlenecks so the work is focused on measurable outcomes.",
  },
  {
    title: "Plan",
    description:
      "You get a clear scope, timeline, and recommended approach with no vague deliverables or hidden steps.",
  },
  {
    title: "Design & Build",
    description:
      "We create the pages, refine the messaging, and implement a clean, responsive experience across devices.",
  },
  {
    title: "Review & Launch",
    description:
      "We test the details, make final refinements, and launch with confidence so your team can move forward quickly.",
  },
];

const faqItems = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with service-based businesses, professional firms, and growing teams that need a more credible website and a clearer path to conversion.",
  },
  {
    question: "How do you define scope?",
    answer:
      "Scope is based on the pages, content needs, integrations, and timeline. You’ll always know what’s included before work begins.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take 2–6 weeks depending on complexity, feedback speed, and the number of pages or services involved.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes. We can refine your current brand system or build a more cohesive presentation around what already works.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services" },
              ]}
            />
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
                  Services built to improve clarity, trust, and conversion
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Practical web services that help your business look credible and win better leads.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  From strategy and design to launch support, we help you create a website that communicates value quickly, reduces friction, and supports measurable growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
                  >
                    Start a project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 transition hover:bg-slate-50"
                  >
                    View pricing
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 rounded-3xl bg-slate-900 p-6 text-white shadow-xl ring-1 ring-white/10 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-5">
                  <BadgeCheck className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-300">Outcome-focused</p>
                  <p className="mt-2 text-lg font-semibold">Every deliverable supports a business goal.</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <Workflow className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-300">Clear process</p>
                  <p className="mt-2 text-lg font-semibold">You always know what happens next.</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <ShieldCheck className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-300">Reliable delivery</p>
                  <p className="mt-2 text-lg font-semibold">Responsive communication and dependable timelines.</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <Sparkles className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-300">Polished execution</p>
                  <p className="mt-2 text-lg font-semibold">Modern design with attention to every detail.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Services designed to move prospects from interest to action"
            description="Choose the support you need now, or combine services for a more complete website and marketing foundation."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="A simple process that keeps projects moving"
              description="We keep engagements structured, collaborative, and efficient so you can make decisions with confidence."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service details"
            title="What’s included, what’s optional, and where the value comes from"
            description="A clear comparison helps you choose the right level of support without overbuying or guessing."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-px bg-slate-200 md:grid-cols-3">
              {[
                {
                  name: "Strategy",
                  points: ["Positioning review", "Messaging direction", "Page structure recommendations", "Priority action plan"],
                },
                {
                  name: "Design & Build",
                  points: ["Responsive page design", "Conversion-focused layout", "Performance-minded implementation", "Launch-ready QA"],
                },
                {
                  name: "Support",
                  points: ["Content updates", "SEO-friendly blog guidance", "Ongoing improvements", "Priority response time"],
                },
              ].map((column) => (
                <div key={column.name} className="bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{column.name}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {column.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about services, scope, and timelines"
              description="If you’re unsure what to choose, these answers should help you move forward with less friction."
            />
            <div className="mt-10">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        <CTABanner
          headline="Ready for a website that works harder for your business?"
          description="Tell us what you need, and we’ll recommend the most effective next step."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}