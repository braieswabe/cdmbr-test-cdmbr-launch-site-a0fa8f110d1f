import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, Camera, CheckCircle2, Filter, Globe2, LayoutGrid, Sparkles, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects, case studies, and client results that show our approach to thoughtful design and measurable outcomes.",
};

const projects = [
  {
    number: "01",
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "B2B SaaS website redesign",
    description: "Rebuilt the marketing site around clearer messaging, stronger proof, and a faster path to demo requests. Qualified leads increased by 38% in the first quarter.",
    className: "bg-white",
  },
  {
    number: "02",
    icon: <Building2 className="h-5 w-5" />,
    title: "Professional services brand refresh",
    description: "Modernized the visual system, refined the service pages, and created a more credible experience for enterprise buyers evaluating the firm.",
    className: "bg-white",
  },
  {
    number: "03",
    icon: <Camera className="h-5 w-5" />,
    title: "Creative studio portfolio",
    description: "Designed a visual-first portfolio with case study storytelling, image-led navigation, and a polished presentation for prospective clients.",
    className: "bg-white",
  },
  {
    number: "04",
    icon: <Globe2 className="h-5 w-5" />,
    title: "Multi-location service business",
    description: "Improved local discovery, clarified service areas, and added trust signals that helped lift contact form submissions by 29%.",
    className: "bg-white",
  },
  {
    number: "05",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Executive recruiting landing pages",
    description: "Created concise, conversion-focused pages that helped candidates understand the opportunity and apply with confidence.",
    className: "bg-white",
  },
  {
    number: "06",
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Growth campaign microsite",
    description: "Built a campaign hub with sharper calls to action, proof-backed claims, and a streamlined content structure for launch support.",
    className: "bg-white",
  },
];

const caseStudies = [
  {
    number: "01",
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "From scattered pages to a clear conversion path",
    description:
      "A consulting firm needed a site that felt more credible and easier to navigate. We consolidated fragmented content into a focused structure, added social proof, and clarified the offer. Result: more time on page, fewer drop-offs, and stronger inbound inquiries.",
    className: "bg-slate-50",
  },
  {
    number: "02",
    icon: <Sparkles className="h-5 w-5" />,
    title: "Turning visual polish into business confidence",
    description:
      "A design-led brand wanted a portfolio that matched the quality of its work. We introduced a modular gallery, project summaries, and a refined visual hierarchy to help prospects quickly understand the value behind each engagement.",
    className: "bg-slate-50",
  },
  {
    number: "03",
    icon: <ArrowRight className="h-5 w-5" />,
    title: "A faster path from interest to action",
    description:
      "For a service company with high-intent traffic, we simplified the decision journey with stronger CTAs, clearer service descriptions, and a more persuasive proof section. The result was a smoother handoff from browsing to booking.",
    className: "bg-slate-50",
  },
];

const logos = ["Northstar Group", "Summit Health", "Apex Studio", "Harbor Finance", "Fieldwork Labs", "Crescent Partners"];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <Hero
        title="Portfolio built to prove results"
        subtitle="Selected work that combines sharp craftsmanship with measurable outcomes. Explore projects that improved clarity, increased conversions, and helped brands present themselves with confidence."
        primaryCtaLabel="Request a proposal"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Explore services"
        secondaryCtaHref="/services"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected projects"
          title="Work that is easy to scan and hard to ignore"
          description="Browse a curated set of projects across professional services, SaaS, creative, and local business brands."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {["All work", "Web design", "Brand refresh", "Conversion", "Portfolio"].map((item, index) => (
            <button
              key={item}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {index === 0 ? <Filter className="h-4 w-4" /> : null}
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.number} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-slate-200">
                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {project.number}
                  </div>
                  <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    View project
                  </div>
                </div>
                <div className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/10" />
                <div className="absolute left-5 top-5 rounded-2xl bg-white p-3 shadow-sm">
                  {project.icon}
                </div>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {["Strategy", "Design", "Content"].map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="A closer look at the thinking behind the work"
            description="Each engagement starts with the same goal: make the value obvious, reduce friction, and help the right audience take the next step."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <ProjectCard key={study.number} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Trusted by teams that care about quality"
          description="A few of the clients and collaborators who have partnered with us on launches, refreshes, and ongoing digital work."
        />
        <LogoCloud logos={logos} />
        <div className="mt-8">
          <SocialProofStrip text="Projects delivered for teams that needed stronger positioning, cleaner design, and a better path to conversion." />
        </div>
      </section>

      <CTABanner
        headline="Have a project in mind?"
        description="If you need a portfolio, website, or campaign page that looks polished and performs well, let’s talk about the scope."
        buttonLabel="Request a proposal"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}