import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A team built to make your business look credible and feel easy to choose",
  description: "Learn more about a team built to make your business look credible and feel easy to choose",
};

import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import {
  Award,
  Compass,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const team = [
  {
    number: "01",
    icon: <Users className="h-5 w-5" />,
    title: "Maya Chen — Founder & Strategy Lead",
    description:
      "Maya helps clients clarify positioning, sharpen messaging, and make confident decisions that support long-term growth.",
    className: "",
  },
  {
    number: "02",
    icon: <Workflow className="h-5 w-5" />,
    title: "Jordan Patel — Design Director",
    description:
      "Jordan turns complex ideas into clean, modern interfaces that feel polished, intuitive, and easy to trust.",
    className: "",
  },
  {
    number: "03",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Elena Brooks — Delivery Manager",
    description:
      "Elena keeps projects organized, timelines realistic, and communication clear from kickoff through launch.",
    className: "",
  },
  {
    number: "04",
    icon: <Rocket className="h-5 w-5" />,
    title: "Sam Rivera — Growth Specialist",
    description:
      "Sam focuses on conversion, analytics, and practical improvements that help websites perform after launch.",
    className: "",
  },
];

const values = [
  {
    number: "01",
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Partnership first",
    description:
      "We work like an extension of your team, with honest feedback, clear expectations, and shared accountability.",
  },
  {
    number: "02",
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Clarity over complexity",
    description:
      "We keep the process simple and the messaging sharp so your audience can understand your value quickly.",
  },
  {
    number: "03",
    icon: <Award className="h-5 w-5" />,
    title: "Quality that lasts",
    description:
      "We build with care, attention to detail, and a focus on work that continues to perform over time.",
  },
  {
    number: "04",
    icon: <Compass className="h-5 w-5" />,
    title: "Guided by outcomes",
    description:
      "Every recommendation is tied to a business result, not just aesthetics or trends.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <div className="mt-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">About our company</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                A team built to make your business look credible and feel easy to choose
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We help growing businesses present themselves with confidence through thoughtful strategy, refined
                design, and a process that respects your time.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Our story"
            title="Founded to bring clarity to busy teams"
            description="We started with a simple observation: many great businesses struggle to explain their value online. We built our company to solve that problem with practical, high-quality web experiences."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">How it began</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Our first projects came from referrals — businesses that needed a website partner who could combine
                strategy, design, and execution without adding complexity. That focus still shapes how we work today.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Over time, we refined a process that helps clients move faster, communicate better, and launch with a
                stronger sense of direction.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold">What we believe</h3>
              <ul className="mt-5 space-y-3 text-white/90">
                <li>Good websites should make decisions easier, not harder.</li>
                <li>Clear communication is as important as great design.</li>
                <li>Trust is built through consistency, not just visuals.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <SectionHeading
              eyebrow="Mission and values"
              title="We care about the work and the relationship"
              description="Our values shape how we plan, communicate, and deliver — so clients know what to expect at every step."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <FeatureCard key={value.number} {...value} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Team"
            title="Experienced people who keep projects moving"
            description="You’ll work with specialists who understand strategy, design, delivery, and growth."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.number} {...member} />
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <SectionHeading
              eyebrow="Why clients choose us"
              title="A practical partner with a polished standard"
              description="We combine strategic thinking, responsive communication, and a high bar for quality."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Fast to understand",
                  text: "We quickly identify what matters most and turn it into a clear plan.",
                },
                {
                  title: "Easy to work with",
                  text: "You get a calm, organized process with straightforward communication.",
                },
                {
                  title: "Built for business impact",
                  text: "We focus on the outcomes that matter: trust, leads, and momentum.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Want to work with a team that values clarity and quality?"
          description="Explore our services or reach out to start a conversation about your goals, timeline, and next steps."
          buttonLabel="Explore services"
          buttonHref="/services"
        />
      </main>
      <Footer />
    </div>
  );
}