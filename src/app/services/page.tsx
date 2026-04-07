import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import Link from "next/link";
import {
  Breadcrumbs,
  CTABanner,
  FAQAccordion,
  FeatureCard,
  Hero,
  SectionHeading,
  ServiceCard,
  StatsStrip,
} from "@/components";

const serviceCategories = [
  {
    icon: "Strategy",
    title: "Brand and website strategy",
    description:
      "Clarify your message, sharpen your positioning, and map the pages and content that turn visitors into qualified leads.",
  },
  {
    icon: "Design",
    title: "Conversion-focused design",
    description:
      "Modern, polished interfaces with strong hierarchy, clear calls to action, and layouts built for trust and action.",
  },
  {
    icon: "Build",
    title: "Next.js development",
    description:
      "Fast, accessible websites built with clean code, responsive layouts, and a structure that supports growth.",
  },
  {
    icon: "Content",
    title: "SEO content and page copy",
    description:
      "Benefit-led copy that explains value in plain language, improves search visibility, and supports conversion.",
  },
  {
    icon: "Support",
    title: "Launch and ongoing support",
    description:
      "Reliable updates, performance improvements, and content changes so your site keeps working after launch.",
  },
  {
    icon: "Growth",
    title: "Optimization and iteration",
    description:
      "Measure what matters, refine the user journey, and improve results with data-backed updates over time.",
  },
];

const serviceDetails = [
  {
    title: "Website strategy",
    description:
      "We start by aligning your goals, audience, and offer so every page has a clear purpose and a measurable next step.",
    deliverables: [
      "Messaging and positioning review",
      "Page-by-page content plan",
      "Conversion path recommendations",
      "SEO and structure guidance",
    ],
    outcome:
      "A clear roadmap that reduces guesswork and helps your website support sales conversations from day one.",
    useCase:
      "Best for teams launching a new site, repositioning an offer, or improving a site that is not generating enough leads.",
  },
  {
    title: "Design and build",
    description:
      "We design and develop a polished site that feels credible, loads quickly, and works smoothly on every device.",
    deliverables: [
      "Responsive page design",
      "Component-based Next.js build",
      "Accessibility and performance checks",
      "Launch-ready QA and handoff",
    ],
    outcome:
      "A professional website that makes your business look established and helps visitors move forward with confidence.",
    useCase:
      "Ideal for service businesses, agencies, and growing brands that need a modern site with strong conversion focus.",
  },
  {
    title: "Content and SEO",
    description:
      "We write clear, search-friendly copy that answers real questions, builds trust, and supports organic discovery.",
    deliverables: [
      "Homepage and service page copy",
      "Blog and FAQ content structure",
      "Keyword-informed page outlines",
      "Metadata and on-page SEO support",
    ],
    outcome:
      "Better visibility in search and stronger engagement from visitors who arrive with intent.",
    useCase:
      "A strong fit when you want your site to educate prospects, rank for relevant searches, and convert more qualified traffic.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We review your goals, audience, current site, and competitors to identify the fastest path to better results.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We define the pages, messaging, and features needed to support your primary business objective.",
  },
  {
    step: "03",
    title: "Design and build",
    description:
      "We create a clean, responsive experience with clear hierarchy, strong calls to action, and thoughtful details.",
  },
  {
    step: "04",
    title: "Review and refine",
    description:
      "We test the experience, tighten the copy, and make sure the final site is polished and easy to use.",
  },
  {
    step: "05",
    title: "Launch and improve",
    description:
      "We launch with confidence and can continue optimizing based on feedback, analytics, and business priorities.",
  },
];

const faqItems = [
  {
    question: "Which service is right for me?",
    answer:
      "If you need clarity, start with strategy. If you already know your direction, design and build may be the best fit. If your site needs more traffic and better lead quality, content and SEO are often the highest-impact next step.",
  },
  {
    question: "Do you work with existing websites?",
    answer:
      "Yes. We can improve a current site, redesign key pages, or rebuild the full experience depending on what will create the most value.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Absolutely. We offer end-to-end delivery so you get one clear process, one point of contact, and a site that stays consistent from concept to launch.",
  },
  {
    question: "How do you price service engagements?",
    answer:
      "Pricing depends on scope, timeline, and the level of support you need. We provide clear estimates and can recommend the most efficient path forward.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />
      </div>

      <Hero
        title="Services built to turn interest into action"
        subtitle="From strategy and design to development and ongoing support, we help you create a website that looks credible, explains value clearly, and drives measurable outcomes."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service categories"
          title="Everything you need to launch, improve, and grow"
          description="Choose a focused engagement or combine services for a complete website experience. Every option is designed to reduce friction and support better business results."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service detail highlights"
            title="Clear deliverables, practical outcomes, and the right fit"
            description="Each service is structured to solve a specific problem and move your business forward with less guesswork."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceDetails.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
                    {service.title}
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                    Deliverables
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.outcome}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-500">{service.useCase}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A simple process that keeps projects moving"
          description="You get a clear plan, regular communication, and a delivery process designed to avoid surprises."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-indigo-600">{step.step}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to talk through your project?"
          description="Tell us what you need, and we’ll recommend the most effective service mix, timeline, and next step."
          buttonLabel="Book a Call"
          buttonHref="/contact"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <StatsStrip
          stats={[
            { label: "Average launch timeline", value: "4–8 weeks" },
            { label: "Projects with clear scope", value: "100%" },
            { label: "Client satisfaction", value: "5.0/5" },
          ]}
        />
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          Looking for a custom engagement?{" "}
          <Link href="/contact" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Contact us
          </Link>{" "}
          to request a tailored quote.
        </p>
      </div>
    </main>
  );
}