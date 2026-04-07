import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Image as ImageIcon, MapPin, PlayCircle, Sparkles, Star } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImageGrid } from "@/components/ImageGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual gallery of authentic work, spaces, products, and moments captured with clarity and style.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
];

const images = [
  { src: "/images/gallery-1.jpg", alt: "Bright modern workspace with natural light", caption: "Workspace refresh for a growing team" },
  { src: "/images/gallery-2.jpg", alt: "Product display with premium packaging", caption: "Packaging and product presentation" },
  { src: "/images/gallery-3.jpg", alt: "Conference event with branded stage design", caption: "Live event environment and stage visuals" },
  { src: "/images/gallery-4.jpg", alt: "Hospitality interior with warm materials", caption: "Interior styling for a hospitality brand" },
  { src: "/images/gallery-5.jpg", alt: "Creative team reviewing printed layouts", caption: "Design review and production planning" },
  { src: "/images/gallery-6.jpg", alt: "Outdoor brand shoot with real people", caption: "Lifestyle imagery for campaign use" },
];

export default function GalleryPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title="A gallery of real work, real spaces, and real moments"
        subtitle="Explore a visual collection designed to show detail, atmosphere, and quality. From brand photography to product scenes and event coverage, each image supports a clear story."
        primaryCtaLabel="Book a call"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View portfolio"
        secondaryCtaHref="/portfolio"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual selection"
          title="Images chosen for clarity, composition, and context"
          description="Use the gallery to review the style, tone, and level of finish you can expect across a project."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {["All", "Spaces", "Products", "Events", "People"].map((item, index) => (
            <button
              key={item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {index === 0 ? <ImageIcon className="mr-2 inline h-4 w-4" /> : null}
              {item}
            </button>
          ))}
        </div>

        <ImageGrid images={images} />
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Lightbox view"
            title="Open images for a closer look"
            description="Each image is presented with enough space to inspect composition, color, and detail without distraction."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Natural light and clean framing",
                description: "Ideal for workspaces, interiors, and brand environments that need to feel open and credible.",
                icon: <Camera className="h-5 w-5" />,
              },
              {
                title: "Context-rich product imagery",
                description: "Shows the product in use, helping buyers understand scale, finish, and practical value.",
                icon: <Sparkles className="h-5 w-5" />,
              },
              {
                title: "People and process",
                description: "Authentic team moments that make a brand feel approachable and trustworthy.",
                icon: <Star className="h-5 w-5" />,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-900">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Caption notes"
          title="Short context for each collection"
          description="Helpful notes make it easier to understand what each image is meant to communicate."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Workspace imagery is best for recruiting, culture pages, and service credibility.",
            "Product scenes are styled to highlight finish, function, and premium positioning.",
            "Event photography captures energy, scale, and brand presence in real settings.",
            "Lifestyle images help audiences picture the service or product in everyday use.",
          ].map((note) => (
            <div key={note} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <MapPin className="mt-0.5 h-5 w-5 text-slate-900" />
              <p className="text-sm leading-6 text-slate-700">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Need visuals that feel polished and authentic?"
        description="Whether you are planning a shoot, refreshing a gallery, or building a visual library, we can help shape the right direction."
        buttonLabel="Inquire now"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}