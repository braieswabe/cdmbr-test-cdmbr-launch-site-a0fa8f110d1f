import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A professional website partner focused on clarity, trust, and measurable growth",
  description: "Learn more about a professional website partner focused on clarity, trust, and measurable growth",
};

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, Sparkles, Target, Users } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      icon: "A",
      title: "Avery Chen — Founder & Strategy Lead",
      description:
        "Guides positioning, messaging, and project direction to keep every engagement focused on outcomes that matter.",
    },
    {
      icon: "M",
      title: "Maya Patel — Design Lead",
      description:
        "Shapes the visual system, interaction details, and page hierarchy so the experience feels polished and easy to use.",
    },
    {
      icon: "J",
      title: "Jordan Reed — Development Lead",
      description:
        "Builds fast, responsive interfaces with careful attention to accessibility, performance, and maintainability.",
    },
    {
      icon: "S",
      title: "Sofia Alvarez — Client Success",
      description:
        "Keeps communication clear, timelines on track, and deliverables aligned with your goals from kickoff to launch.",
    },
  ];

  return (
    <main className="bg-zinc-50 text-zinc-900">
      <NavBar />
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-8 py-16 text-white shadow-2xl sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">About our company</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A professional website partner focused on clarity, trust, and measurable growth
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We help businesses present their value clearly, earn trust faster, and convert more of the right visitors
            into qualified opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Company story"
          title="Built to make professional websites feel simpler and more effective"
          description="We started with a straightforward belief: a website should do more than look good. It should help people understand what you do, why it matters, and how to take the next step."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">Why we exist</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              Too many businesses lose opportunities because their site is unclear, slow to load, or difficult to trust.
              We created a service that brings strategy, design, and execution together so your online presence supports
              real business goals.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">What we believe</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              Strong websites are built on concise messaging, thoughtful design, and dependable delivery. When those
              pieces work together, visitors feel confident and teams see better results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Mission & values"
            title="Principles that keep every project focused and reliable"
            description="Our work is guided by a small set of standards that shape how we communicate, design, and deliver."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              icon={<Target className="h-5 w-5" />}
              number="01"
              title="Outcome-driven"
              description="We prioritize the business result, not just the deliverable, so every decision supports growth."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              number="02"
              title="Clear communication"
              description="We keep updates concise, expectations visible, and next steps easy to understand."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5" />}
              number="03"
              title="Dependable delivery"
              description="We respect timelines, follow through on commitments, and keep projects moving without surprises."
            />
            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              number="04"
              title="Human approach"
              description="We work like a partner, not a vendor, with practical guidance and responsive support."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Team overview"
          title="A small, experienced team with a shared standard for quality"
          description="Each project gets direct attention from people who care about the details and the outcome."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <TeamMemberCard
              key={member.title}
              icon={member.icon}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="A practical partner for businesses that need confidence and momentum"
          description="We combine strategy, design, and execution so your website feels credible, performs well, and supports growth."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Fast, focused delivery",
              description:
                "We move quickly without sacrificing quality, helping you launch sooner and start learning from real user behavior.",
            },
            {
              title: "Messaging that resonates",
              description:
                "We translate your expertise into clear, benefit-led language that helps visitors understand your value immediately.",
            },
            {
              title: "Support you can count on",
              description:
                "We stay responsive, organized, and easy to work with so you always know what’s happening and what comes next.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}