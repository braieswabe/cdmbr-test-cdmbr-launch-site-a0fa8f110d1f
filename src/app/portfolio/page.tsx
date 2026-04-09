"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FilterTabs } from "@/components/FilterTabs";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";
import { Building2, Globe, ShieldCheck, Sparkles } from "lucide-react";

const portfolioFilters = [
  { label: "All projects", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Brand", value: "brand" },
  { label: "Ecommerce", value: "ecommerce" },
  { label: "Operations", value: "operations" },
];

const projects = [
  {
    title: "Northstar Analytics",
    description:
      "Rebuilt the homepage and product story for a B2B analytics platform, clarifying the value proposition and improving demo requests.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a modern laptop screen",
    metrics: ["+42% demo requests", "2.1x time on page", "3-week launch"],
    outcomes: ["Sharper messaging", "Faster buyer understanding", "Mobile-first conversion flow"],
    href: "/contact",
    tags: ["SaaS", "Messaging", "Conversion"],
  },
  {
    title: "Harbor & Co.",
    description:
      "Designed a premium brand site for a boutique advisory firm with a refined visual system and stronger trust signals.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Elegant office interior with natural light",
    metrics: ["+31% qualified leads", "18% lower bounce rate", "New brand launch"],
    outcomes: ["Clear service positioning", "Executive-level polish", "Improved lead quality"],
    href: "/contact",
    tags: ["Brand", "Professional Services", "Lead Gen"],
  },
  {
    title: "Fieldstone Supply",
    description:
      "Created an ecommerce experience that made product discovery easier and reduced friction across key category pages.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Curated product display in a retail environment",
    metrics: ["+27% add-to-cart rate", "15% faster browsing", "Expanded catalog"],
    outcomes: ["Better navigation", "Stronger merchandising", "Cleaner product hierarchy"],
    href: "/contact",
    tags: ["Ecommerce", "UX", "Merchandising"],
  },
  {
    title: "Summit Operations",
    description:
      "Streamlined a service website for an operations consultancy with clearer proof points, service pages, and calls to action.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team collaborating around a table with laptops",
    metrics: ["+38% contact form submissions", "4 core pages rebuilt", "Faster content updates"],
    outcomes: ["Simpler content management", "More direct CTAs", "Better service clarity"],
    href: "/contact",
    tags: ["Operations", "Services", "Content"],
  },
  {
    title: "Lumen Studio",
    description:
      "Built a portfolio site for a creative studio with case studies, visual storytelling, and a stronger inquiry path.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Creative studio workspace with design materials",
    metrics: ["+54% inquiry rate", "6 case studies", "New portfolio system"],
    outcomes: ["More compelling proof", "Better project framing", "Higher-value leads"],
    href: "/contact",
    tags: ["Brand", "Portfolio", "Creative"],
  },
  {
    title: "Crest Health",
    description:
      "Delivered a patient-focused website that balanced trust, accessibility, and clear next steps for new visitors.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Healthcare professional in a bright clinical setting",
    metrics: ["+22% appointment requests", "WCAG-minded structure", "Improved clarity"],
    outcomes: ["Accessible navigation", "Trust-building content", "Simplified booking flow"],
    href: "/contact",
    tags: ["Healthcare", "Accessibility", "Trust"],
  },
];

const clientLogos = ["Northstar", "Harbor & Co.", "Fieldstone", "Summit", "Lumen", "Crest"];

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio" },
            ]}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              Selected work
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Proof of work that shows how we solve real business problems.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70">
              This portfolio highlights the strategy, design, and execution behind
              websites that improve clarity, build trust, and drive measurable
              action. Each project includes the goal, the approach, and the
              outcome so decision-makers can evaluate fit quickly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Request a proposal</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/services">Review services</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Building2, title: "Business-first", description: "Work shaped around goals, not just visuals." },
              { icon: Globe, title: "Web-ready", description: "Responsive, accessible, and built for real users." },
              { icon: ShieldCheck, title: "Trust signals", description: "Proof points, testimonials, and clear outcomes." },
              { icon: Sparkles, title: "Polished delivery", description: "Modern design with a conversion-oriented system." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <item.icon className="h-6 w-6 text-[var(--color-primary)]" />
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio overview"
          title="A clear view of the projects we’re proud to stand behind."
          description="Browse selected work across SaaS, brand, ecommerce, and service businesses."
        />
        <div className="mt-8">
          <FilterTabs tabs={portfolioFilters} activeValue="all" onChange={() => undefined} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <div className="relative">
                  <img src={project.image} alt={project.imageAlt} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[var(--secondary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
                  <p className="text-sm leading-6 text-black/70">{project.description}</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="rounded-2xl bg-[var(--background)] px-3 py-3 text-sm font-medium text-black/75">
                        {metric}
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-black/70">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={project.href}>Discuss a similar project</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          eyebrow="Results highlights"
          title="The kind of impact clients come to us for."
          description="These outcomes reflect the clarity, trust, and conversion improvements that strong web strategy can create."
        />
        <div className="mt-10">
          <StatsRow
            items={[
              { label: "Average lift in qualified inquiries", value: "31%" },
              { label: "Projects launched in under 6 weeks", value: "12" },
              { label: "Client retention across retainers", value: "94%" },
              { label: "Industries served", value: "8" },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Client logos"
            title="Trusted by teams that need a site they can rely on."
            description="A few of the brands and teams that have partnered with us for launches, redesigns, and ongoing improvements."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-2xl border border-black/5 bg-[var(--background)] px-4 py-6 text-sm font-semibold text-black/60"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have a project in mind?"
        description="If you need a portfolio site, a redesign, or a high-converting launch page, we can help you shape the right approach."
        buttonLabel="Start the conversation"
        buttonHref="/contact"
      />
    </main>
  );
}