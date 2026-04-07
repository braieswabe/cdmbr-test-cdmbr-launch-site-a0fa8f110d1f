import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read customer testimonials, ratings, and measurable results from teams who trusted our services.",
};

const testimonials = [
  {
    icon: Quote,
    number: "01",
    title: "A smoother launch than we expected",
    description:
      "“We needed a website that felt premium, loaded quickly, and made it easy for prospects to take the next step. The process was organized, the communication was clear, and the final result exceeded expectations. We saw a noticeable lift in qualified inquiries within the first month.”",
  },
  {
    icon: Quote,
    number: "02",
    title: "Clear strategy, measurable impact",
    description:
      "“What stood out most was the balance of strategy and execution. They didn’t just make things look good — they helped us prioritize the right messaging, improve conversion paths, and simplify the customer journey. Our demo requests increased by 38%.”",
  },
  {
    icon: Quote,
    number: "03",
    title: "Reliable, responsive, and easy to work with",
    description:
      "“Every milestone was delivered on time, and every question was answered quickly. The team made a complex project feel manageable. We now have a site that our sales team is proud to share with prospects.”",
  },
  {
    icon: Quote,
    number: "04",
    title: "A better experience for our customers",
    description:
      "“Our old site made it hard for people to find what they needed. The new experience is intuitive, polished, and much easier to navigate. Support tickets related to basic questions dropped significantly after launch.”",
  },
  {
    icon: Quote,
    number: "05",
    title: "Professional quality with a human touch",
    description:
      "“The copy felt approachable without losing credibility, and the design struck the right balance between modern and trustworthy. It finally feels like our brand online matches the quality of our service.”",
  },
  {
    icon: Quote,
    number: "06",
    title: "A partner, not just a vendor",
    description:
      "“They brought ideas we hadn’t considered and helped us make better decisions throughout the project. The outcome is a site that supports marketing, sales, and recruiting — not just a pretty homepage.”",
  },
];

const caseStudies = [
  {
    icon: TrendingUp,
    number: "42%",
    title: "More qualified leads",
    description:
      "A clearer value proposition and stronger calls to action helped a B2B team turn more visitors into sales conversations.",
  },
  {
    icon: Users,
    number: "3x",
    title: "Higher engagement",
    description:
      "A streamlined information architecture and improved content hierarchy kept visitors moving deeper into the site.",
  },
  {
    icon: CheckCircle2,
    number: "28%",
    title: "Lower bounce rate",
    description:
      "Faster load times, better mobile usability, and more relevant messaging reduced early exits across key landing pages.",
  },
];

const stats = [
  { label: "Average rating", value: "4.9/5" },
  { label: "Projects completed", value: "120+" },
  { label: "Client retention", value: "96%" },
  { label: "Referral rate", value: "68%" },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Testimonials" },
            ]}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-20 lg:pt-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <Star className="h-4 w-4 fill-current" />
              Trusted by growing teams across industries
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Testimonials that show real results, not just nice words.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Our clients come to us for a website experience that builds trust,
              supports sales, and makes their brand easier to understand. Here’s
              what they’ve shared after launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start your project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                See the work
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">
                4.9 average rating
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="text-2xl font-bold text-slate-950">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-medium text-slate-300">
                Most common feedback
              </p>
              <p className="mt-2 text-lg font-semibold">
                “Clear communication, thoughtful strategy, and a final result
                that drives action.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer reviews"
          title="What clients say after working with us"
          description="These testimonials reflect the outcomes our clients care about most: clarity, credibility, and measurable growth."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.number} className="space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <TestimonialCard {...testimonial} />
              <div className="flex items-center justify-between px-1 text-sm text-slate-500">
                <span>Verified client</span>
                <span>5/5 rating</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Outcome highlights"
            title="Short stories with measurable impact"
            description="A strong website should do more than look polished. It should help people understand your value and take the next step."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-3xl font-bold text-slate-950">
                  {item.number}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-950 to-slate-800 p-8 text-white shadow-lg lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to become the next success story?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              If you want a website that feels credible, converts better, and
              supports your business goals, we’d love to hear what you’re
              building.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let’s create a result worth talking about."
        description="We’ll help you build a website experience that earns trust and turns interest into action."
        buttonLabel="Book a consultation"
        buttonHref="/contact"
      />
    </main>
  );
}