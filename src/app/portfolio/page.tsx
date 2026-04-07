import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Filter, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProofStrip } from "@/components/SocialProofStrip";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected projects, creative proof, and real-world outcomes across branding, web, and digital experiences.",
};

const categories = ["All", "Branding", "Web Design", "Product", "Campaigns", "Strategy"];

const projects = [
  {
    title: "Northstar Financial",
    description:
      "A conversion-focused website redesign that clarified services, improved trust signals, and increased qualified inquiries.",
    tags: ["Web Design", "Strategy", "Finance"],
    category: "Web Design",
    image: "/images/portfolio/northstar-financial.jpg",
  },
  {
    title: "Harbor Health",
    description:
      "A patient-friendly digital experience that simplified appointment booking and made care options easier to understand.",
    tags: ["Product", "Healthcare", "UX"],
    category: "Product",
    image: "/images/portfolio/harbor-health.jpg",
  },
  {
    title: "Studio Vale",
    description:
      "A refined brand identity and portfolio system built to showcase premium work and attract higher-value clients.",
    tags: ["Branding", "Creative", "Identity"],
    category: "Branding",
    image: "/images/portfolio/studio-vale.jpg",
  },
  {
    title: "Summit Supply",
    description:
      "A B2B campaign landing page that aligned messaging, sharpened positioning, and lifted demo requests.",
    tags: ["Campaigns", "B2B", "Lead Gen"],
    category: "Campaigns",
    image: "/images/portfolio/summit-supply.jpg",
  },
  {
    title: "ClearPath SaaS",
    description:
      "A product marketing site that translated complex features into clear benefits for decision-makers and buyers.",
    tags: ["Web Design", "SaaS", "Messaging"],
    category: "Web Design",
    image: "/images/portfolio/clearpath-saas.jpg",
  },
  {
    title: "Evergreen Hospitality",
    description:
      "A polished booking experience that highlighted amenities, reduced friction, and supported direct reservations.",
    tags: ["Strategy", "Hospitality", "Conversion"],
    category: "Strategy",
    image: "/images/portfolio/evergreen-hospitality.jpg",
  },
];

const highlights = [
  {
    title: "Northstar Financial",
    goal: "Increase trust and improve lead quality.",
    process:
      "We restructured the homepage around outcomes, added clearer service pathways, and introduced stronger proof points throughout the journey.",
    outcome:
      "The new site created a more confident first impression and helped the team start more relevant sales conversations.",
  },
  {
    title: "ClearPath SaaS",
    goal: "Make a technical product easier to buy.",
    process:
      "We translated feature depth into practical use cases, paired each section with concise visuals, and tightened the CTA flow.",
    outcome:
      "Visitors could understand the product faster, which supported better engagement from both prospects and internal stakeholders.",
  },
  {
    title: "Studio Vale",
    goal: "Position the studio for premium work.",
    process:
      "We built a visual system that felt editorial and modern, then organized the portfolio to spotlight process, craft, and results.",
    outcome:
      "The brand now feels more selective, more credible, and better aligned with the studio’s ideal clients.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 p-8 shadow-sm sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Selected work with measurable impact
              </div>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  Portfolio work that looks good and performs even better.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Explore a curated set of projects across branding, web, product, and campaign work.
                  Each example shows how clear strategy, thoughtful design, and practical execution come
                  together to move the business forward.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Browse projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Discuss a similar project
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <BriefcaseBusiness className="h-6 w-6 text-sky-600" />
                <p className="mt-4 text-sm font-medium text-slate-500">Project types</p>
                <p className="mt-1 text-2xl font-bold">Brand, web, product</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <p className="mt-4 text-sm font-medium text-slate-500">Focus</p>
                <p className="mt-1 text-2xl font-bold">Clarity and conversion</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
                <Image
                  src="/images/portfolio/featured-project.jpg"
                  alt="Featured portfolio project preview"
                  width={1200}
                  height={800}
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project gallery"
          title="A quick look at the work."
          description="Filter by category to scan the kinds of projects we’ve delivered and the outcomes they were built to support."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
              type="button"
            >
              <Filter className="h-4 w-4" />
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                <Link
                  href="#details"
                  className="inline-flex items-center text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  View project highlights
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="details" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project detail preview"
            title="How the work was approached."
            description="A few examples of the goals, process, and outcomes behind the projects shown above."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <dl className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-900">Goal</dt>
                    <dd>{item.goal}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Process</dt>
                    <dd>{item.process}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Outcome</dt>
                    <dd>{item.outcome}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SocialProofStrip
          items={[
            "Trusted by growing teams across finance, healthcare, SaaS, and hospitality",
            "Built to support stronger positioning and better conversion",
            "Designed for clarity, credibility, and long-term maintainability",
          ]}
        />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Have a project in mind?"
          description="If you need a portfolio-worthy website, a sharper brand presence, or a custom digital experience, let’s talk through the best path forward."
          buttonLabel="Start a conversation"
          buttonHref="/contact"
        />
      </section>

      <Footer />
    </main>
  );
}