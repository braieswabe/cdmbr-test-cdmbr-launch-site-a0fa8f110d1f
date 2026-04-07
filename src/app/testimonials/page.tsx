import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Testimonials | Professional Website",
  description:
    "Read client testimonials that highlight reliability, responsiveness, and measurable results.",
};

const testimonials = [
  {
    name: "Maya Thompson",
    role: "Founder, Northstar Advisory",
    rating: 5,
    quote:
      "They made our value proposition much easier to understand. The new site feels more premium, and we started getting better-fit inquiries almost immediately.",
    result: "More qualified leads in the first month",
  },
  {
    name: "Daniel Kim",
    role: "Marketing Director, Brightline SaaS",
    rating: 5,
    quote:
      "Communication was fast, the process was organized, and the final result gave our team a clearer story to tell. It improved both sales conversations and conversion rates.",
    result: "32% lift in demo requests",
  },
  {
    name: "Priya Shah",
    role: "Operations Lead, Summit Legal",
    rating: 5,
    quote:
      "We needed a website that felt trustworthy without being stiff. The balance was exactly right, and clients now tell us the site makes it easier to take the next step.",
    result: "Stronger trust and more inbound calls",
  },
  {
    name: "Ethan Brooks",
    role: "Owner, Harbor Home Services",
    rating: 5,
    quote:
      "The new service pages are simple, clear, and focused on what customers care about. That clarity has made a real difference in how people respond.",
    result: "41% more form submissions",
  },
  {
    name: "Sofia Martinez",
    role: "Head of Growth, Peak Studio",
    rating: 5,
    quote:
      "They brought structure to our messaging and design, which helped us present a more consistent brand across every touchpoint.",
    result: "Higher engagement across key pages",
  },
  {
    name: "Jordan Lee",
    role: "Managing Partner, ClearPath Finance",
    rating: 5,
    quote:
      "Responsive, thoughtful, and easy to work with. The project stayed on track, and the final site gave us a stronger foundation for future marketing.",
    result: "Better conversion and less friction",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-100">
              <Quote className="h-4 w-4" />
              Real feedback from clients who value clarity and results
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Testimonials that show what it feels like to work with us.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Clients consistently mention the same things: clear communication, dependable delivery, and work that
              makes their business easier to understand and easier to trust.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Average rating</p>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-5xl font-semibold text-slate-950">5.0</span>
              <div className="pb-2">
                <StarRating rating={5} />
                <p className="mt-1 text-sm text-slate-500">Based on client feedback across recent projects</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Projects", value: "40+" },
                { label: "Repeat clients", value: "68%" },
                { label: "Avg. response time", value: "< 1 day" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xl font-semibold text-slate-950">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonial grid"
          title="Client reviews that highlight trust, responsiveness, and measurable value."
          description="These testimonials reflect the outcomes clients care about most: stronger positioning, better conversion, and a smoother process from start to finish."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-start justify-between gap-4">
                <StarRating rating={item.rating} />
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Verified client
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
                <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm font-medium text-blue-800">
                  {item.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Results summary"
            title="What clients say again and again."
            description="Across industries and project types, the feedback points to the same themes: clarity, reliability, and outcomes that support growth."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Clearer messaging",
                description:
                  "Clients often mention that the final work helped them explain their offer faster and with more confidence.",
              },
              {
                title: "Better responsiveness",
                description:
                  "They value a process that stays organized, communicates clearly, and keeps momentum moving forward.",
              },
              {
                title: "Measurable improvement",
                description:
                  "Many projects led to stronger conversion, more qualified inquiries, or better engagement on key pages.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready for a smoother, more confident project experience?"
          description="If you want a partner who communicates clearly, delivers reliably, and focuses on outcomes, let’s start with a quick conversation."
          buttonLabel="Contact us today"
          buttonHref="/contact"
        />
      </section>

      <Footer />
    </main>
  );
}