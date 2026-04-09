import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build thoughtful digital experiences with a team that values clarity and craft.",
  description: "Learn more about build thoughtful digital experiences with a team that values clarity and craft.",
};

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";

const openRoles = [
  {
    title: "Senior Next.js Developer",
    summary:
      "Build fast, polished websites with a strong eye for performance, accessibility, and conversion-focused UX.",
    location: "Remote / Hybrid",
    type: "Full-time",
  },
  {
    title: "Content Strategist",
    summary:
      "Shape clear messaging systems, page structures, and editorial plans that help brands explain their value.",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UI Designer",
    summary:
      "Design modern interfaces that feel premium, readable, and easy to navigate across every screen size.",
    location: "Remote / Hybrid",
    type: "Contract",
  },
];

const benefits = [
  {
    title: "Meaningful work",
    description:
      "Work on websites and content systems that directly support growth for real businesses.",
    icon: Sparkles,
  },
  {
    title: "Flexible environment",
    description:
      "Remote-friendly collaboration with clear expectations, focused meetings, and room for deep work.",
    icon: HeartHandshake,
  },
  {
    title: "Growth and ownership",
    description:
      "Take on visible responsibility, learn from experienced teammates, and shape how we build.",
    icon: Rocket,
  },
  {
    title: "Strong standards",
    description:
      "We care about quality, accessibility, and thoughtful execution — from copy to code.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  "Intro call: We learn about your background, interests, and the kind of work you want to do next.",
  "Role conversation: You meet the hiring manager to discuss the role, expectations, and team fit.",
  "Practical review: We look at relevant work samples or a short exercise tied to the actual job.",
  "Decision and offer: We move quickly, share feedback, and keep the process transparent throughout.",
];

export default function CareersPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] px-6 py-16 text-white shadow-xl sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
              <BriefcaseBusiness className="h-4 w-4" />
              Careers
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Build thoughtful digital experiences with a team that values clarity and craft.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
              We help businesses communicate better online, and we do it with a team that cares
              about quality, ownership, and practical outcomes. If you like solving real problems
              and shipping work that matters, you’ll fit right in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-white text-[var(--primary)] hover:bg-white/90">
                <Link href="#open-roles">View open roles</Link>
              </Button>
              <Button asChild variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                <Link href="/contact">Introduce yourself</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Culture"
          title="A team built on trust, momentum, and high standards"
          description="We keep things simple: clear goals, honest feedback, and enough structure to move quickly without losing quality."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:col-span-2">
            <p className="text-base leading-8 text-black/75">
              Our work sits at the intersection of strategy, design, and development. That means
              we value people who can think clearly, communicate well, and collaborate across
              disciplines. We believe great work comes from focused teams, not noisy processes.
            </p>
            <p className="mt-4 text-base leading-8 text-black/75">
              You’ll have room to own your craft, contribute ideas, and see the impact of your work
              quickly. We care about the details that users notice: fast pages, readable layouts,
              useful content, and a smooth experience from first click to final conversion.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-[var(--accent)]/10 p-6 shadow-sm">
            <p className="text-sm font-medium text-[var(--primary)]">What we value</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-black/75">
              <li>• Clear communication</li>
              <li>• Ownership and follow-through</li>
              <li>• Strong design judgment</li>
              <li>• Practical problem solving</li>
              <li>• Respect for users and teammates</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="open-roles" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open roles"
          title="Join us where your skills can make a visible difference"
          description="We’re looking for people who care about quality, move with intention, and want to help build better digital experiences."
        />
        <div className="mt-10 grid gap-6">
          {openRoles.map((role) => (
            <article
              key={role.title}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:flex-row md:items-center"
            >
              <div>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-black/55">
                  <span className="rounded-full bg-black/5 px-3 py-1">{role.location}</span>
                  <span className="rounded-full bg-black/5 px-3 py-1">{role.type}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{role.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-black/70">{role.summary}</p>
              </div>
              <Button asChild className="shrink-0">
                <Link href="/contact">
                  Apply now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benefits"
          title="Support that helps you do your best work"
          description="We invest in the basics that make a team sustainable: flexibility, growth, and a healthy pace."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[var(--primary)]/10 p-3 text-[var(--primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/70">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hiring process"
          title="A straightforward process with fast feedback"
          description="We keep the experience respectful and efficient so you always know what to expect next."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)]/15 font-semibold text-[var(--primary)]">
                0{index + 1}
              </div>
              <p className="text-sm leading-7 text-black/75">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTABanner
          headline="Think you’d be a great fit?"
          description="Send us your resume, portfolio, or a short note about the kind of work you want to do. We’d love to hear from you."
          buttonLabel="Apply or say hello"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}