import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, HeartHandshake, MapPin, Rocket, Users } from "lucide-react";
import {
  CTABanner,
  Hero,
  SectionHeading,
  SocialProofBanner,
  StatsStrip,
} from "@/components";

export const metadata: Metadata = {
  title: "Careers | Professional Website",
  description:
    "Join a team that values clear communication, thoughtful design, and measurable outcomes for every client.",
};

const benefits = [
  {
    icon: Rocket,
    title: "Meaningful ownership",
    description:
      "Take responsibility for work that matters, with clear goals, supportive feedback, and room to shape the outcome.",
  },
  {
    icon: Users,
    title: "Collaborative team",
    description:
      "Work with people who communicate well, share context early, and make it easy to do your best work.",
  },
  {
    icon: BadgeCheck,
    title: "Growth with structure",
    description:
      "Learn through real projects, regular reviews, and a culture that values improvement over perfection.",
  },
  {
    icon: HeartHandshake,
    title: "Healthy pace",
    description:
      "We plan carefully, set realistic timelines, and respect the focus it takes to deliver quality work consistently.",
  },
];

const roles = [
  {
    title: "Senior Frontend Developer",
    location: "Remote / North America",
    summary:
      "Build fast, accessible interfaces for client websites and product experiences using Next.js, React, and TypeScript.",
    href: "/contact",
  },
  {
    title: "Content Strategist",
    location: "Hybrid / New York",
    summary:
      "Shape clear messaging, page structure, and conversion-focused copy that helps brands explain value simply.",
    href: "/contact",
  },
  {
    title: "Project Manager",
    location: "Remote / Flexible",
    summary:
      "Keep projects moving with organized timelines, proactive communication, and a strong eye for client outcomes.",
    href: "/contact",
  },
];

const stats = [
  { value: "4.9/5", label: "candidate experience rating" },
  { value: "92%", label: "team retention over 2 years" },
  { value: "1 business day", label: "average response time" },
];

const process = [
  {
    step: "01",
    title: "Apply online",
    description:
      "Send your resume, portfolio, or LinkedIn profile. We review every application carefully and respond with next steps.",
  },
  {
    step: "02",
    title: "Intro conversation",
    description:
      "Meet with our team to discuss your experience, interests, and the kind of work environment where you do your best work.",
  },
  {
    step: "03",
    title: "Role-specific interview",
    description:
      "We’ll explore practical skills, collaboration style, and how you approach quality, communication, and problem-solving.",
  },
  {
    step: "04",
    title: "Offer and onboarding",
    description:
      "If it’s a fit, we move quickly with a clear offer, transparent expectations, and a thoughtful onboarding plan.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero
        title="Build work you can be proud of, with people who value clarity"
        subtitle="We’re looking for thoughtful, reliable people who care about outcomes, communicate well, and want to help clients grow."
        ctaLabel="View Open Roles"
        ctaHref="#open-roles"
        secondaryLabel="Book a Call"
        secondaryHref="/contact"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SocialProofBanner
          title="A team built on trust, craft, and follow-through"
          stats={stats}
        />
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why join us"
            title="A place to do your best work"
            description="We combine strong standards with a supportive environment so people can grow, contribute, and stay energized."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open roles"
          title="Current opportunities"
          description="We’re hiring people who care about quality, communication, and measurable results."
        />
        <div className="mt-10 grid gap-6">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4" />
                    {role.location}
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{role.summary}</p>
                </div>
                <Link
                  href={role.href}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                >
                  Apply now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Culture"
            title="Clear expectations, honest feedback, and real support"
            description="We keep communication direct and respectful, celebrate strong work, and make space for people to learn as they go."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                What it feels like to work here
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                You’ll join a team that values thoughtful planning, clean execution, and a calm,
                collaborative pace. We believe great work comes from clear priorities, mutual respect,
                and a shared commitment to outcomes.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Weekly planning and feedback",
                  "Flexible work arrangements",
                  "Transparent project goals",
                  "Room to grow your skills",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <BriefcaseBusiness className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Diverse team collaborating around a table in a bright office"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hiring process"
          title="A simple process with clear next steps"
          description="We keep the experience efficient and respectful of your time, with communication at every stage."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <article
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-indigo-600">{item.step}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <CTABanner
            headline="Think you’d be a great fit?"
            description="Send your application today and tell us what kind of work you want to do next."
            buttonLabel="Get Started"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}