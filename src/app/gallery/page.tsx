import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Learn more about gallery",
};

import Link from "next/link";
import { ArrowRight, Camera, Film, Image as ImageIcon, LayoutGrid, Sparkles, Wand2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImageGallery } from "@/components/ImageGallery";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsStrip } from "@/components/StatsStrip";
import { SocialProofStrip } from "@/components/SocialProofStrip";

const galleryImages = [
  {
    src: "/gallery/editorial-portrait.jpg",
    alt: "Editorial portrait with soft natural light and clean composition",
    title: "Editorial portrait series",
    description: "Refined lighting, calm framing, and a polished finish designed for brand storytelling.",
  },
  {
    src: "/gallery/event-reception.jpg",
    alt: "Elegant event reception with warm ambient lighting and guests in conversation",
    title: "Event coverage",
    description: "Candid moments and wide scene-setting images that capture atmosphere and energy.",
  },
  {
    src: "/gallery/product-detail.jpg",
    alt: "Close-up product image highlighting texture, materials, and craftsmanship",
    title: "Product detail study",
    description: "Sharp, conversion-ready imagery that highlights quality, texture, and key selling points.",
  },
  {
    src: "/gallery/team-workshop.jpg",
    alt: "Team workshop session with collaborative discussion around a table",
    title: "Workshop documentation",
    description: "Authentic behind-the-scenes visuals that show process, teamwork, and momentum.",
  },
  {
    src: "/gallery/architecture-exterior.jpg",
    alt: "Modern architecture exterior with strong lines and balanced daylight",
    title: "Architecture and spaces",
    description: "Clean, structured compositions that emphasize form, scale, and visual balance.",
  },
  {
    src: "/gallery/social-campaign.jpg",
    alt: "Lifestyle campaign image with vibrant color and natural movement",
    title: "Campaign imagery",
    description: "Flexible visuals built for web, social, and marketing use across channels.",
  },
];

const categories = [
  { icon: <Camera className="h-5 w-5" />, title: "Portraits", description: "Professional headshots and editorial portraits with a polished, approachable feel." },
  { icon: <Film className="h-5 w-5" />, title: "Events", description: "Conference, launch, and community coverage that captures the moments people remember." },
  { icon: <ImageIcon className="h-5 w-5" />, title: "Products", description: "Clean product imagery that supports trust, clarity, and stronger conversion." },
  { icon: <LayoutGrid className="h-5 w-5" />, title: "Brand systems", description: "Consistent visual sets designed to work across landing pages, campaigns, and social content." },
];

const proofItems = [
  "Fast turnaround for launch-ready assets",
  "Consistent color and composition across sets",
  "Images optimized for web, print, and social",
  "Clear direction from planning to delivery",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
        <Hero
          title="A curated gallery of work that communicates quality at a glance"
          subtitle="Explore polished visuals across portraits, events, products, and brand campaigns — all created to build trust, support storytelling, and drive engagement."
          ctaLabel="Browse the gallery"
          ctaHref="#gallery"
          secondaryLabel="View categories"
          secondaryHref="#categories"
        />

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} className="mb-8" />
          <StatsStrip
            stats={[
              { label: "Projects captured", value: "120+" },
              { label: "Average delivery", value: "3 days" },
              { label: "Usage formats", value: "Web + print" },
              { label: "Client satisfaction", value: "98%" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Introduction"
            title="Visual work that feels consistent, modern, and easy to use"
            description="This gallery highlights the kind of imagery that helps brands communicate professionalism, personality, and attention to detail without overwhelming the viewer."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Designed for impact",
                description: "Each image is selected for clarity, composition, and the ability to support a stronger first impression.",
              },
              {
                icon: <Wand2 className="h-5 w-5" />,
                title: "Edited for consistency",
                description: "Color, tone, and crop are handled with a cohesive visual standard so the collection feels unified.",
              },
              {
                icon: <ImageIcon className="h-5 w-5" />,
                title: "Built for real use",
                description: "The gallery reflects assets that work across websites, campaigns, presentations, and social channels.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <ImageGallery images={galleryImages} />
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Collections"
            title="Browse by category"
            description="Use these groupings to quickly find the style of imagery that best fits your project, audience, or campaign goal."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <div key={category.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">{category.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SocialProofStrip items={proofItems} />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <CTABanner
            headline="Need imagery that looks polished and performs well?"
            description="Let’s create a gallery of assets that helps your brand stand out, communicate clearly, and convert with confidence."
            buttonLabel="Start a project"
            buttonHref="/contact"
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-xl sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Next step</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">See how the right visuals can improve clarity and trust</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Whether you need a polished portfolio, a product showcase, or campaign-ready imagery, we can help you present your work with consistency and impact.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Request a quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}