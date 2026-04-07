import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Learn more about gallery",
};

import Link from "next/link";
import { ArrowRight, Camera, Image as ImageIcon, Sparkles, Wand2 } from "lucide-react";
import {
  Hero,
  SectionHeading,
  PortfolioCard,
  CTABanner,
  SocialProofStrip,
} from "@/components";

const galleryItems = [
  {
    icon: Camera,
    number: "01",
    title: "Brand launch event",
    description:
      "A polished evening showcase with editorial lighting, candid guest moments, and detail shots that captured the energy of the launch.",
  },
  {
    icon: ImageIcon,
    number: "02",
    title: "Product detail series",
    description:
      "Clean, high-contrast imagery designed to highlight texture, finish, and craftsmanship across a premium product line.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Studio portrait collection",
    description:
      "A cohesive set of portraits with consistent framing and color treatment for use across web, press, and internal communications.",
  },
  {
    icon: Wand2,
    number: "04",
    title: "Behind-the-scenes moments",
    description:
      "Natural, documentary-style images that show process, collaboration, and the people behind the work.",
  },
];

const featuredAlbum = [
  "Editorial event coverage with fast turnaround",
  "Curated image selection for web and social use",
  "Consistent color grading across the full set",
  "Usage-ready files delivered in organized folders",
];

const proofItems = [
  "Trusted by teams launching new products and experiences",
  "Consistent visual direction across campaigns and collections",
  "Images selected to support marketing, PR, and web goals",
];

export default function GalleryPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero
        title="A visual gallery that shows the quality, consistency, and care behind the work."
        subtitle="Browse a curated collection of imagery from events, products, portraits, and behind-the-scenes moments. Every set is selected to communicate style, context, and results."
        ctaLabel="Explore the gallery"
        ctaHref="#image-grid"
        secondaryCtaLabel="Request similar work"
        secondaryCtaHref="/contact"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Gallery intro"
          title="A concise visual collection with clear context"
          description="This gallery is organized to help you quickly understand the range of work and the kinds of projects we support."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              The collection includes polished event coverage, product imagery, and lifestyle details that can be used
              across websites, campaigns, and presentations. The goal is simple: show the work clearly and make it easy
              to imagine what’s possible for your brand.
            </p>
            <SocialProofStrip items={proofItems} />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">What you’ll find here</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Strong composition and consistent visual polish</li>
              <li>• Real-world examples with practical business use</li>
              <li>• A mix of wide shots, details, and human moments</li>
              <li>• Collections that are easy to browse on mobile</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="image-grid" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Image grid"
            title="Selected highlights from recent work"
            description="A responsive grid of thumbnails that gives you a quick sense of style, range, and consistency."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Featured album"
          title="Launch night: a curated set with a clear story"
          description="This album brings together the strongest images from a single event to show how we document atmosphere, detail, and audience response."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-lg">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["/gallery-1.jpg", "/gallery-2.jpg", "/gallery-3.jpg", "/gallery-4.jpg"].map((src, index) => (
                <div
                  key={src}
                  className="aspect-square rounded-2xl border border-white/10 bg-white/10 p-2"
                >
                  <div className="flex h-full items-center justify-center rounded-xl bg-white/10 text-sm font-medium text-white/80">
                    Shot {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Why this set works</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The album balances wide context with close-up detail, making it useful for announcements, recap posts,
              and portfolio presentation. It’s designed to feel cohesive while still giving each image a clear job.
            </p>
            <ul className="mt-6 space-y-3">
              {featuredAlbum.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <CTABanner
            headline="Need a gallery like this for your brand or event?"
            description="We can help you plan, capture, and organize a collection that feels polished and easy to use across channels."
            buttonLabel="Talk about your project"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}