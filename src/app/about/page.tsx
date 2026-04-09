import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We build websites that help serious businesses look the part and win the right clients.",
  description: "Learn more about we build websites that help serious businesses look the part and win the right clients.",
};

import Link from "next/link";

import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";

const values = [
  {
    icon: "◎",
    title: "Clarity over clutter",
    description:
      "We make complex offers easy to understand so visitors can quickly see what you do and why it matters.",
  },
  {
    icon: "◆",
    title: "Craft with purpose",
    description:
      "Every layout choice, line of copy, and interaction is designed to support trust and conversion.",
  },
  {
    icon: "◌",
    title: "Partnership first",
    description:
      "We work like an extension of your team, keeping communication direct, thoughtful, and dependable.",
  },
];

const team = [
  {
    icon: "A",
    number: "01",
    title: "Ava Chen — Founder & Strategy Lead",
    description:
      "Ava helps teams sharpen their message, define the right offer, and turn brand clarity into measurable growth.",
  },
  {
    icon: "M",
    number: "02",
    title: "Marcus Reed — Design Director",
    description:
      "Marcus shapes polished, modern interfaces that feel premium while staying easy to navigate on every device.",
  },
  {
    icon: "S",
    number: "03",
    title: "Sofia Patel — Content Lead",
    description:
      "Sofia writes concise, benefit-led copy that speaks to customer pain points and supports stronger conversion.",
  },
  {
    icon: "J",
    number: "04",
    title: "Jordan Kim — Frontend Engineer",
    description:
      "Jordan builds fast, accessible experiences with careful attention to performance, responsiveness, and detail.",
  },
];

const milestones = [
  { year: "2019", title: "Founded with a simple idea", description: "Help growing businesses present themselves with more clarity and confidence online." },
  { year: "2021", title: "Expanded into full website systems", description: "Moved from one-off pages to complete digital experiences built for trust and conversion." },
  { year: "2023", title: "Supported 100+ launches", description: "Delivered websites for service firms, startups, and teams that needed a stronger first impression." },
  { year: "2025", title: "Focused on measurable outcomes", description: "Continued refining our process around speed, clarity, and business impact." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(180deg,_rgba(15,23,42,0.96)_0%,_rgba(15,23,42,0.88)_100%)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">About our company</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            We build websites that help serious businesses look the part and win the right clients.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Our work starts with a simple belief: a website should make your value obvious, your credibility visible,
            and your next step easy. We combine strategy, design, and development to create a polished online presence
            that supports growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Talk to our team</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Founded to solve a familiar problem."
              description="Too many strong businesses lose opportunities because their website feels generic, confusing, or outdated. We started to change that."
            />
            <div className="mt-8 space-y-4 text-slate-600">
              <p>
                We began by helping founders and service teams who were great at what they did but struggled to explain it
                clearly online. Their websites had the basics, but not the structure, messaging, or visual polish needed to
                build trust quickly.
              </p>
              <p>
                Over time, that work evolved into a focused process for creating websites that are both beautiful and
                effective. Today, we help clients launch with confidence, communicate value faster, and create a better
                experience for every visitor.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">What we believe</h2>
            <div className="mt-6 grid gap-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-secondary)] text-lg font-semibold text-white">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The team"
            title="Experienced people who care about the details."
            description="We bring together strategy, design, content, and engineering so the final result feels cohesive from first impression to final click."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.number} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Milestones"
          title="A steady track record of growth."
          description="We measure progress by the quality of the work, the strength of the relationships, and the results our clients see after launch."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[var(--color-primary)]">{milestone.year}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{milestone.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <CTABanner
          headline="Want to work with a team that values clarity and craft?"
          description="We’d love to learn about your goals and show you how a better website can support them."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}