import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Filter, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio | Professional Website",
  description:
    "Explore selected projects that show how we help brands improve clarity, build trust, and drive measurable results.",
};

const categories = ["All", "Branding", "Web Design", "Content Strategy", "Conversion"];

const projects = [
  {
    title: "SaaS Launch Site for a B2B Platform",
    description:
      "Rebuilt the homepage and product story to make the value proposition easier to understand, helping the team turn more qualified traffic into demo requests.",
    tags: ["Web Design", "Conversion", "SaaS"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    outcome: "32% increase in demo conversions",
  },
  {
    title: "Professional Services Rebrand",
    description:
      "Created a refined visual system and messaging framework that positioned the firm as more credible, responsive, and easy to work with.",
    tags: ["Branding", "Messaging", "Professional Services"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    outcome: "Shorter sales cycle and stronger referrals",
  },
  {
    title: "Local Business Website Redesign",
    description:
      "Simplified navigation, clarified service pages, and added stronger calls to action to help visitors find answers and book faster.",
    tags: ["Web Design", "Local SEO", "Conversion"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    outcome: "41% more contact form submissions",
  },
  {
    title: "Content Hub for Thought Leadership",
    description:
      "Built a blog and resource structure that supports SEO, educates prospects, and reinforces expertise across the buyer journey.",
    tags: ["Content Strategy", "SEO", "Blog"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    outcome: "Organic traffic up 58% in 90 days",
  },
  {
    title: "Ecommerce Landing Page System",
    description:
      "Designed a conversion-focused landing page template that improved product clarity, reduced friction, and supported campaign performance.",
    tags: ["Conversion", "Ecommerce", "Landing Pages"],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    outcome: "19% lift in add-to-cart rate",
  },
  {
    title: "Executive Recruitment Brand Refresh",
    description:
      "Developed a polished digital presence that communicated reliability, discretion, and a premium client experience.",
    tags: ["Branding", "Web Design", "Professional Services"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    outcome: "More inbound inquiries from ideal clients",
  },
];

const caseStudies = [
  {
    title: "From unclear messaging to a stronger pipeline",
    description:
      "A B2B client needed a site that explained their offer quickly. We tightened the story, improved page structure, and added proof points that made the next step obvious.",
    result: "Qualified leads increased by 34% within two months.",
  },
  {
    title: "From fragmented visuals to a consistent brand experience",
    description:
      "We unified the design system across key pages and marketing assets so the brand felt more credible, modern, and dependable at every touchpoint.",
    result: "Higher engagement and better sales conversations followed.",
  },
  {
    title: "From traffic without action to a clearer conversion path",
    description:
      "We reworked the service pages, CTAs, and supporting content to reduce uncertainty and help visitors move forward with confidence.",
    result: "Contact submissions rose while bounce rate dropped.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
              <Sparkles className="h-4 w-4" />
              Selected work with measurable outcomes
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Portfolio examples that show quality, range, and results.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore a curated set of projects across branding, web design, content strategy, and conversion
              optimization. Each one was built to improve clarity, strengthen trust, and help the business grow with
              less friction.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-600 p-3 text-white">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">What clients typically want</p>
                <p className="font-semibold text-slate-900">Clearer messaging, stronger conversion, faster decisions</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                "Websites that explain the offer quickly",
                "Design systems that feel polished and consistent",
                "Content that supports SEO and authority",
                "Pages that guide visitors toward action",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <Filter className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-slate-900">Browse by category:</span>
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 transition ${
                  index === 0
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project grid"
          title="A selection of projects built to perform as well as they look."
          description="Each project combines thoughtful design, clear messaging, and practical structure to help the right audience take the next step."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent opacity-100 transition group-hover:from-slate-950/85" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-sm font-medium text-blue-200">{project.outcome}</p>
                  <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case study highlights"
            title="Short summaries of the work behind the results."
            description="These examples show how strategy, design, and execution come together to create a better experience and stronger business outcomes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-950">{study.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{study.description}</p>
                <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-medium text-blue-800">
                  {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Have a project in mind?"
          description="If you need a website, brand refresh, or conversion-focused content system, let’s talk about the outcome you want and the fastest path to get there."
          buttonLabel="Request a custom quote"
          buttonHref="/contact"
        />
      </section>

      <Footer />
    </main>
  );
}