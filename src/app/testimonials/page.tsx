import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read customer testimonials, success stories, and ratings that show how our work helps teams launch with confidence and convert more visitors.",
};

const testimonials = [
  {
    icon: Quote,
    number: "01",
    title: "“We launched in two weeks and immediately looked more credible.”",
    description:
      "The new site gave our team a polished presence that matched the quality of our service. In the first month, demo requests increased by 38% and prospects started referencing the site in sales calls.",
    className: "bg-white",
  },
  {
    icon: Quote,
    number: "02",
    title: "“Clear messaging made it easier for customers to say yes.”",
    description:
      "Before the redesign, visitors were confused about what we did. After the update, our bounce rate dropped and our lead form conversion nearly doubled because the value proposition finally clicked.",
    className: "bg-white",
  },
  {
    icon: Quote,
    number: "03",
    title: "“The process was organized, fast, and surprisingly collaborative.”",
    description:
      "We had a tight deadline and a lot of stakeholders. The team kept everything moving, translated feedback into action quickly, and delivered a site that felt premium without becoming overcomplicated.",
    className: "bg-white",
  },
  {
    icon: Quote,
    number: "04",
    title: "“Our portfolio now does the selling for us.”",
    description:
      "The case study layout and visual hierarchy helped us present our work more clearly. Prospects now spend more time on the site and come into calls with a much better understanding of our value.",
    className: "bg-white",
  },
  {
    icon: Quote,
    number: "05",
    title: "“We finally have a website our team is proud to share.”",
    description:
      "The brand feel is modern, the copy is concise, and the navigation is intuitive. It has become a reliable asset for recruiting, sales, and partner conversations alike.",
    className: "bg-white",
  },
  {
    icon: Quote,
    number: "06",
    title: "“Support was thoughtful from kickoff to launch.”",
    description:
      "Every detail felt intentional, from mobile spacing to CTA placement. The result is a site that looks sharp, performs well, and gives us a stronger foundation for growth.",
    className: "bg-white",
  },
];

const ratingItems = [
  { label: "Average customer rating", value: "4.9/5" },
  { label: "Verified reviews", value: "120+" },
  { label: "Projects delivered on time", value: "98%" },
  { label: "Clients who would recommend us", value: "100%" },
];

const outcomes = [
  {
    title: "More qualified leads",
    description:
      "Customers consistently report better lead quality after clarifying the offer, improving trust signals, and simplifying the path to contact.",
  },
  {
    title: "Faster buying decisions",
    description:
      "Shorter pages, stronger proof points, and clearer CTAs help visitors understand the value quickly and move forward with confidence.",
  },
  {
    title: "A stronger brand impression",
    description:
      "A polished, modern website makes your business feel established, reliable, and ready for serious conversations.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Testimonials" },
            ]}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8 lg:pb-24 lg:pt-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-sm font-medium text-[var(--primary)]">
              Social proof
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Trusted by teams that need results, not just a pretty website.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">
              These testimonials reflect what clients value most: clear communication,
              strong design judgment, and a website that helps them win trust faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--primary)]/90"
              >
                Start your project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:text-[var(--primary)]"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Featured quotes"
          title="What clients say after launch"
          description="Short, specific feedback from teams that wanted a site that looks credible and converts better."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.number} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <TestimonialCard {...testimonial} />
              <div className="mt-5 border-t border-black/5 pt-5 text-sm text-black/60">
                Verified client feedback
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/[0.02] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rating summary"
            title="A quick snapshot of customer satisfaction"
            description="Visitors can scan the numbers first, then read the stories behind them."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {ratingItems.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-black/60">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-[var(--primary)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Outcome stories"
          title="The results clients care about"
          description="Beyond praise, these are the practical outcomes that make a website worth the investment."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <CTABanner
          headline="Ready to create a site people trust?"
          description="If you want stronger messaging, better design, and a smoother path to conversion, we’d love to help."
          buttonLabel="Book a consultation"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}