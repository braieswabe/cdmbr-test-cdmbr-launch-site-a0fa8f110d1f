"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FilterTabs } from "@/components/FilterTabs";
import { ImageGrid } from "@/components/ImageGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Camera, Layers3, Sparkles, Wand2 } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern workspace with warm lighting and editorial styling",
    caption: "Editorial workspace styling for a consulting brand launch.",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative team reviewing a website design system",
    caption: "Design system exploration for a multi-page service website.",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    alt: "Polished product photography on a clean background",
    caption: "Product imagery for a premium ecommerce collection.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer workspace with screens showing a web interface",
    caption: "Launch-day content for a SaaS homepage refresh.",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Team collaboration in a bright meeting room",
    caption: "Brand photography for a leadership and culture campaign.",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal interior with natural light and soft shadows",
    caption: "Lifestyle imagery for a hospitality and events portfolio.",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Brand", value: "brand" },
  { label: "Product", value: "product" },
  { label: "Culture", value: "culture" },
  { label: "Launches", value: "launches" },
];

const featuredCollection = [
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Curated gallery wall with framed visuals and warm tones",
    caption: "Featured collection: a cohesive visual system for a premium service brand.",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of a designer arranging visual assets",
    caption: "Built to feel editorial, credible, and easy to browse on any device.",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Gallery" },
            ]}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              Visual showcase
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A gallery built to make your work look its best.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Present projects, campaigns, and brand moments in a clean visual
              system that feels polished on desktop and effortless on mobile.
              Every section is designed to help visitors browse, compare, and
              take the next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Request a custom gallery</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/portfolio">See portfolio highlights</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Camera, title: "Photography", description: "Crisp, high-contrast visuals with room to breathe." },
              { icon: Layers3, title: "Collections", description: "Group work by theme, campaign, or deliverable." },
              { icon: Sparkles, title: "Presentation", description: "Elegant cards, subtle shadows, and clear captions." },
              { icon: Wand2, title: "Conversion", description: "Built to inspire inquiries, bookings, and proposals." },
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
          eyebrow="Browse by theme"
          title="Filter the gallery by what matters most."
          description="Use categories to quickly scan brand work, product imagery, culture shots, and launch assets."
        />
        <div className="mt-8">
          <FilterTabs tabs={categories} activeValue="all" onChange={() => undefined} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          eyebrow="Gallery grid"
          title="A flexible layout for visual storytelling."
          description="Use this grid for campaign imagery, project snapshots, or a curated portfolio of your best work."
        />
        <div className="mt-10">
          <ImageGrid
            title="Selected visuals"
            subtitle="A curated mix of brand, product, and lifestyle imagery that shows range without losing consistency."
            items={galleryItems}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Featured collection"
              title="One standout set, framed with context."
              description="Highlight a signature project or a seasonal collection with a short narrative that explains the creative direction."
            />
            <div className="mt-8 space-y-4">
              {featuredCollection.map((item) => (
                <figure key={item.caption} className="overflow-hidden rounded-3xl border border-black/5 bg-[var(--background)]">
                  <img src={item.src} alt={item.alt} className="h-64 w-full object-cover" />
                  <figcaption className="p-5 text-sm leading-6 text-black/70">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[var(--color-primary)] p-8 text-white shadow-lg">
            <SectionHeading
              eyebrow="Need a curated presentation?"
              title="We can shape the gallery around your brand."
              description="From launch pages to portfolio showcases, we design visual systems that feel premium and easy to navigate."
              className="text-white"
            >
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary">
                  <Link href="/contact">Start a project</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>
            </SectionHeading>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to turn your visuals into a stronger first impression?"
        description="Book a discovery call and we’ll help you organize, present, and elevate your best work."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </main>
  );
}