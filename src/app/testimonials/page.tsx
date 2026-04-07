import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

import Link from "next/link";
import { Star, Quote, PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const testimonials = [
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Clear communication from day one",
    description:
      "The team translated a complex launch into a simple plan, kept every milestone visible, and delivered exactly when they said they would. Our internal team finally felt aligned.",
    author: "Maya Chen",
    role: "Marketing Director, Northstar Health",
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "A measurable lift in qualified leads",
    description:
      "Within eight weeks of launch, our conversion rate improved by 31% and sales had a cleaner handoff process. The work was thoughtful, fast, and grounded in business outcomes.",
    author: "Jordan Patel",
    role: "Founder, Brightline Advisory",
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Reliable delivery without the usual back-and-forth",
    description:
      "We needed a partner who could move quickly without sacrificing quality. They brought structure, strong design judgment, and a calm process that made the whole project easier.",
    author: "Elena Torres",
    role: "Operations Lead, Studio Arc",
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Our team finally had a site we could be proud of",
    description:
      "The new website looks polished, loads quickly, and explains our services in plain language. Prospects now understand our value in the first few seconds.",
    author: "Chris Morgan",
    role: "CEO, Meridian Supply Co.",
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "A partner that thinks beyond the brief",
    description:
      "They didn’t just execute the request — they improved the messaging, simplified the user journey, and helped us focus on the pages that actually drive inquiries.",
    author: "Priya Desai",
    role: "Growth Lead, Harbor & Co.",
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Fast turnaround, strong results, zero surprises",
    description:
      "We launched on schedule, reduced support questions, and saw a noticeable increase in demo requests. The process was transparent from kickoff to handoff.",
    author: "Daniel Brooks",
    role: "VP of Sales, ClearPath Software",
  },
];

const caseStudies = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "B2B services firm: 31% more qualified inquiries",
    description:
      "Challenge: the old site was hard to navigate and failed to explain the offer clearly. Solution: a streamlined information architecture, stronger proof points, and a conversion-focused homepage. Result: more qualified inquiries and fewer unproductive sales calls.",
    href: "/services",
    outcome: "31% increase in qualified inquiries",
    tag: "Case study",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Professional services brand: faster decision-making",
    description:
      "Challenge: prospects needed too much explanation before reaching out. Solution: concise service pages, clearer pricing guidance, and trust-building testimonials. Result: shorter sales cycles and better-fit leads.",
    href: "/portfolio",
    outcome: "Shorter sales cycles and better-fit leads",
    tag: "Case study",
  },
];

const stats = [
  { value: "4.9/5", label: "Average client rating" },
  { value: "96%", label: "Would recommend us" },
  { value: "31%", label: "Average lift in inquiries" },
  { value: "2–6 weeks", label: "Typical launch timeline" },
];

const videoItems = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Client interview: why the process worked",
    description:
      "A short conversation about communication, speed, and the business impact of a clearer website.",
  },
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Project recap: before and after",
    description:
      "See how a more focused message and stronger visuals improved confidence and conversion.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      />

      <Hero
        title="Customer success stories that build confidence"
        subtitle="See how clear strategy, thoughtful design, and reliable delivery help teams launch with confidence and generate measurable results."
        ctaLabel="Get Started"
        ctaHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl font-bold tracking-tight text-slate-900">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client feedback"
          title="What customers say after launch"
          description="These reviews reflect the outcomes clients care about most: clarity, responsiveness, and business growth."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-4">
                <TestimonialCard {...item} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Deeper proof of what’s possible"
          description="A closer look at the challenge, the solution, and the measurable outcomes delivered for real clients."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <div key={project.title} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm">
              <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                {project.tag}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
                Outcome: {project.outcome}
              </div>
              <div className="mt-6">
                <Link href={project.href} className="inline-flex items-center gap-2 font-semibold text-slate-900 transition hover:text-slate-600">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Video testimonials"
          title="Hear directly from the people we’ve helped"
          description="Short interviews and project recaps add another layer of trust and show the experience behind the results."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {videoItems.map((video) => (
            <div key={video.title} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <VideoEmbed
                src={video.src}
                title={video.title}
                description={video.description}
                className="overflow-hidden rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-xl sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Rating summary</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by teams that value clarity and results</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Our clients consistently highlight communication, quality, and measurable outcomes. If you want a partner who keeps projects moving and makes the next step obvious, we’d love to talk.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="mt-3 text-4xl font-bold">4.9/5</div>
              <p className="mt-2 text-sm text-slate-300">Based on verified client feedback across strategy, design, and launch projects.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to create your own success story?"
        description="Book a call to discuss your goals, timeline, and the results you want to achieve."
        buttonLabel="Book a Call"
        buttonHref="/contact"
      />
    </main>
  );
}