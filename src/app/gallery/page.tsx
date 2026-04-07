import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Grid3X3, Layers3, Sparkles, ZoomIn } from "lucide-react";
import {
  Breadcrumbs,
  CTABanner,
  Hero,
  ImageGrid,
  SectionHeading,
  Tabs,
} from "@/components";

export const metadata: Metadata = {
  title: "Gallery | Professional Website",
  description:
    "Browse a curated gallery of brand visuals, product screenshots, and project highlights designed to inspire your next launch.",
};

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Design team collaborating around a laptop in a modern studio",
    caption: "Team collaboration and creative direction",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Product dashboard displayed on a laptop screen",
    caption: "Dashboard UI with clear performance metrics",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional portrait of a business team in a bright office",
    caption: "Brand photography with a human, approachable feel",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative workspace with sketches, notes, and color samples",
    caption: "Concept exploration and visual system development",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Team reviewing a project roadmap on a large screen",
    caption: "Strategy sessions that keep projects aligned",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Cross-functional team meeting in a glass conference room",
    caption: "Client workshops and collaborative planning",
  },
];

const categoryTabs = [
  {
    id: "all",
    label: "All work",
    content: (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <figure
            key={item.alt}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <figcaption className="space-y-2 p-5">
              <p className="text-sm font-semibold text-slate-900">{item.caption}</p>
              <p className="text-sm leading-6 text-slate-600">
                Built to communicate quality, clarity, and measurable outcomes at a glance.
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    ),
  },
  {
    id: "brand",
    label: "Brand",
    content: (
      <div className="grid gap-6 md:grid-cols-2">
        {galleryItems.slice(0, 4).map((item) => (
          <figure key={item.alt} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <img src={item.src} alt={item.alt} className="aspect-[16/10] w-full rounded-2xl object-cover" />
            <figcaption className="mt-4 text-sm text-slate-600">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    ),
  },
  {
    id: "product",
    label: "Product",
    content: (
      <div className="grid gap-6 lg:grid-cols-2">
        {galleryItems.slice(1, 5).map((item) => (
          <figure key={item.alt} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <img src={item.src} alt={item.alt} className="aspect-[16/9] w-full rounded-2xl object-cover" />
            <figcaption className="mt-4 text-sm text-slate-600">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    ),
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Gallery" },
          ]}
        />
      </div>

      <Hero
        title="A visual gallery of work that builds trust fast"
        subtitle="Explore brand imagery, product screenshots, and project moments that show how polished execution turns attention into action."
        ctaLabel="Get Started"
        ctaHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse by category"
          title="Find the style, format, or project type you need"
          description="Use the gallery to compare visual directions, review examples, and get a feel for the quality and consistency we bring to every project."
        />
        <div className="mt-10">
          <Tabs tabs={categoryTabs} defaultTabId="all" />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured collection"
            title="A closer look at the details that matter"
            description="From clean layouts to authentic photography, every asset is chosen to support clarity, credibility, and conversion."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                  alt="Creative team reviewing a polished website layout"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <ZoomIn className="h-4 w-4 text-indigo-600" />
                  Expanded view
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  Designed for a strong first impression
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  This collection highlights the kind of visuals that help teams explain value quickly:
                  product clarity, real people, and project context that feels credible and current.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Camera,
                  title: "Authentic photography",
                  description: "Natural lighting, real environments, and people-centered imagery that feels trustworthy.",
                },
                {
                  icon: Layers3,
                  title: "Modular layouts",
                  description: "Flexible compositions that work across landing pages, case studies, and campaign assets.",
                },
                {
                  icon: Sparkles,
                  title: "Brand-aligned polish",
                  description: "Consistent color, spacing, and hierarchy that keep the experience refined and easy to scan.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Need something similar?"
          title="Tell us what you want to create next"
          description="If a visual style here matches your goals, we can adapt it into a website, campaign, or product experience built around your brand."
          action={
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Request a Quote
            </Link>
          }
        />
        <div className="mt-8">
          <CTABanner
            headline="Ready to turn inspiration into a polished, high-converting experience?"
            description="Book a call and we’ll help you translate the right visual direction into a clear plan, timeline, and next step."
            buttonLabel="Book a Call"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}