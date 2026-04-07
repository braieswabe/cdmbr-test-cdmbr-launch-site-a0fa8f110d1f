import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Globe2,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Portfolio | Selected work and measurable outcomes",
  description:
    "Explore selected projects that show our approach to design, content, and digital experiences built to perform.",
};

const projects = [
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "B2B website redesign for a professional services firm",
    description:
      "Rebuilt the site around clearer service pages, stronger proof points, and a simpler path to inquiry. The result was more qualified leads and fewer drop-offs.",
    href: "/portfolio/b2b-website-redesign",
    outcome: "42% increase in qualified inquiries",
    tag: "Website redesign",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Conversion-focused landing pages for a SaaS launch",
    description:
      "Created a modular landing page system that helped the team launch faster, test messaging, and improve demo requests.",
    href: "/portfolio/saas-landing-pages",
    outcome: "31% lift in demo conversions",
    tag: "SaaS",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Editorial content hub for a growing brand",
    description:
      "Designed a content experience that made articles easier to browse, improved search visibility, and supported ongoing lead nurturing.",
    href: "/portfolio/editorial-content-hub",
    outcome: "2.8x organic traffic growth",
    tag: "Content strategy",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Local service business site with stronger trust signals",
    description:
      "Focused the homepage on credibility, service clarity, and fast contact options to help visitors take the next step sooner.",
    href: "/portfolio/local-service-business-site",
    outcome: "More calls from high-intent visitors",
    tag: "Local business",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Brand refresh for a consulting team",
    description:
      "Updated the visual system and messaging to better reflect expertise, improve consistency, and support premium positioning.",
    href: "/portfolio/consulting-brand-refresh",
    outcome: "Clearer positioning across every page",
    tag: "Brand system",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Campaign microsite for a product announcement",
    description:
      "Built a focused launch experience with concise messaging, social proof, and a clear call to action for early interest.",
    href: "/portfolio/product-launch-microsite",
    outcome: "Fast launch with strong engagement",
    tag: "Campaign",
  },
];

const caseStudies = [
  {
    title: "Professional services firm: more qualified leads from the same traffic",
    summary:
      "The original site had strong services but weak structure. We simplified the navigation, clarified the offer, and added proof points throughout the funnel.",
    goals: ["Increase inquiry quality", "Reduce bounce rate", "Improve service clarity"],
    approach:
      "We reorganized the homepage around customer questions, rewrote service pages in plain language, and added a stronger contact path on every key page.",
    outcome:
      "Within the first quarter, the firm saw a 42% increase in qualified inquiries and a noticeable drop in low-fit submissions.",
  },
  {
    title: "SaaS launch: a landing page system that supported faster testing",
    summary:
      "The team needed a page that could support launch, iterate quickly, and convert traffic from paid and organic campaigns.",
    goals: ["Launch quickly", "Improve demo requests", "Support A/B testing"],
    approach:
      "We created a flexible layout with modular sections, concise benefit-led copy, and a clear hierarchy for product value and social proof.",
    outcome:
      "The new landing pages improved demo conversions by 31% and gave the team a repeatable structure for future campaigns.",
  },
  {
    title: "Editorial hub: content that was easier to find and easier to trust",
    summary:
      "The brand had useful content, but it was buried in a structure that made discovery difficult for both readers and search engines.",
    goals: ["Increase organic traffic", "Improve content discovery", "Support lead nurturing"],
    approach:
      "We introduced category pathways, stronger article summaries, and a cleaner reading experience that made the content feel more authoritative.",
    outcome:
      "Organic traffic grew 2.8x over six months, and the content hub became a reliable source of inbound leads.",
  },
];

const industries = [
  "Professional services",
  "SaaS",
  "Local business",
  "Consulting",
  "Healthcare",
  "Nonprofit",
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Selected work built for clarity, credibility, and results
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Portfolio examples that show how strategy becomes measurable
                  outcomes
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Browse selected projects across websites, content systems,
                  campaigns, and brand refreshes. Each example highlights the
                  problem, the approach, and the result so you can see how we
                  work in practice.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <SectionHeading
                eyebrow="What clients value"
                title="A process that keeps projects moving"
                description="Clear communication, thoughtful planning, and work that is designed to support business goals."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { value: "6–10 weeks", label: "typical website project timeline" },
                  { value: "1 point of contact", label: "for simpler communication" },
                  { value: "Measurable goals", label: "built into every project" },
                  { value: "Fast handoff", label: "with organized deliverables" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-xl font-bold text-slate-950">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project grid"
            title="A visual snapshot of recent work"
            description="These projects show how we combine design, messaging, and structure to create experiences that feel polished and perform well."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Case studies"
              title="Detailed examples with goals, approach, and outcomes"
              description="Use these summaries to understand how we think through scope, structure, and execution on real client work."
            />
            <div className="mt-10 grid gap-6">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {study.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {study.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.goals.map((goal) => (
                          <span
                            key={goal}
                            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4 rounded-2xl bg-slate-50 p-6">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                          Approach
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {study.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                          Outcome
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {study.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <SectionHeading
                eyebrow="Industry highlights"
                title="Experience across a range of business models"
                description="We adapt the structure, tone, and proof points to fit the audience and the buying journey."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
              <h2 className="text-3xl font-semibold tracking-tight">
                Want to see work similar to your project?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
                We can share relevant examples, talk through scope, and help you
                understand the best path forward for your goals, timeline, and
                budget.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
                  <Link href="/contact">Book a Call</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          headline="Ready to discuss a similar project?"
          description="Tell us what you need, and we’ll recommend a practical approach with clear next steps."
          buttonLabel="Get Started"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}