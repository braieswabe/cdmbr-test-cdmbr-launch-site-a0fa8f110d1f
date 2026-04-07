import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials that show the outcome",
  description: "Learn more about testimonials that show the outcome",
};

import Link from "next/link";
import { Star, Quote, PlayCircle, TrendingUp, Users, BadgeCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsStrip } from "@/components/StatsStrip";
import { TestimonialCard } from "@/components/TestimonialCard";

const testimonials = [
  {
    number: "01",
    icon: <Quote className="h-5 w-5" />,
    title: "Launch felt calm and organized",
    description:
      "They turned a messy handoff into a clear plan, kept us updated weekly, and delivered a site our team is proud to share. Conversion improved within the first month.",
    author: "Maya Chen",
    role: "Marketing Director, Northstar Health",
    rating: 5,
  },
  {
    number: "02",
    icon: <Quote className="h-5 w-5" />,
    title: "Better leads, less friction",
    description:
      "We saw a noticeable lift in qualified inquiries after the new messaging and page structure went live. The process was efficient and the recommendations were practical.",
    author: "Daniel Ortiz",
    role: "Founder, Studio Forge",
    rating: 5,
  },
  {
    number: "03",
    icon: <Quote className="h-5 w-5" />,
    title: "A partner who thinks ahead",
    description:
      "They did not just execute the brief. They flagged issues early, simplified the user journey, and helped us make decisions faster. That saved time across the whole team.",
    author: "Priya Nair",
    role: "VP of Operations, Meridian Group",
    rating: 5,
  },
  {
    number: "04",
    icon: <Quote className="h-5 w-5" />,
    title: "Clear communication from start to finish",
    description:
      "Every milestone was easy to understand. We always knew what was next, what was needed from us, and how the project was tracking. That level of clarity is rare.",
    author: "Ethan Brooks",
    role: "Product Lead, Harborline",
    rating: 5,
  },
  {
    number: "05",
    icon: <Quote className="h-5 w-5" />,
    title: "Strong design and strong business sense",
    description:
      "The final result looked polished, but more importantly it supported our goals. The team balanced brand, usability, and conversion in a way that made a real difference.",
    author: "Sofia Alvarez",
    role: "CEO, Brightpath Advisory",
    rating: 5,
  },
  {
    number: "06",
    icon: <Quote className="h-5 w-5" />,
    title: "Easy to work with, easy to trust",
    description:
      "They were responsive, thoughtful, and focused on outcomes. We would absolutely work with them again for future launches and ongoing improvements.",
    author: "Jordan Kim",
    role: "Head of Growth, Peakline",
    rating: 5,
  },
];

const results = [
  { label: "Average lift in qualified leads", value: "32%", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "Projects delivered on time", value: "98%", icon: <BadgeCheck className="h-5 w-5" /> },
  { label: "Client satisfaction score", value: "4.9/5", icon: <Star className="h-5 w-5" /> },
  { label: "Repeat clients and referrals", value: "70%", icon: <Users className="h-5 w-5" /> },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Testimonials", href: "/testimonials" },
              ]}
            />
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                Real feedback from real clients
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Testimonials that show the outcome
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                See how clients describe the experience, the communication, and the results.
                These stories highlight what changed after launch, not just what was delivered.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Request a quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore services
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Average rating</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-4xl font-semibold text-slate-950">4.9</span>
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <BadgeCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {results.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <p className="mt-3 text-2xl font-semibold text-slate-950">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client stories"
            title="What customers say after launch"
            description="A mix of short quotes, measurable outcomes, and working relationships that turned into repeat business."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">{item.icon}</div>
                  <div className="flex text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-950">{item.author}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Video testimonials"
              title="Richer proof from clients who stayed involved"
              description="Use video to hear tone, context, and the business impact in the client’s own words."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Northstar Health",
                  description:
                    "A launch recap covering the new site structure, clearer messaging, and the lift in consultation requests.",
                },
                {
                  title: "Studio Forge",
                  description:
                    "A short interview about simplifying the buyer journey and improving lead quality without increasing ad spend.",
                },
              ].map((video) => (
                <div
                  key={video.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
                    <div className="rounded-full bg-white/10 p-5 backdrop-blur">
                      <PlayCircle className="h-12 w-12" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-950">{video.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <StatsStrip
            stats={[
              { label: "Average project rating", value: "4.9/5" },
              { label: "Client retention", value: "92%" },
              { label: "Referral rate", value: "68%" },
              { label: "Launches completed", value: "140+" },
            ]}
          />
        </section>

        <CTABanner
          headline="Ready to see results like these?"
          description="Tell us what you are trying to improve and we will recommend the best next step."
          buttonLabel="Book a call"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}