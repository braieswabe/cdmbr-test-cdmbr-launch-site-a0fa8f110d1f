import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn more about careers",
};

import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Clock3, HeartHandshake, Laptop2, Users2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { RoleListing } from "@/components/RoleListing";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsStrip } from "@/components/StatsStrip";
import { TeamMemberCard } from "@/components/TeamMemberCard";

const roles = [
  {
    title: "Senior Product Designer",
    description:
      "Shape intuitive experiences that help customers move faster, understand value quickly, and complete key tasks with confidence.",
    href: "/careers/senior-product-designer",
    location: "Remote",
    employmentType: "Full-time",
    department: "Design",
  },
  {
    title: "Full-Stack Engineer",
    description:
      "Build reliable, high-performance web experiences with a focus on clean architecture, measurable impact, and smooth delivery.",
    href: "/careers/full-stack-engineer",
    location: "Remote",
    employmentType: "Full-time",
    department: "Engineering",
  },
  {
    title: "Client Success Manager",
    description:
      "Guide clients from kickoff to launch with clear communication, proactive support, and a strong focus on outcomes.",
    href: "/careers/client-success-manager",
    location: "Hybrid",
    employmentType: "Full-time",
    department: "Customer Success",
  },
];

const benefits = [
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Competitive compensation",
    description: "Fair pay, transparent reviews, and a package designed to reward strong ownership and consistent results.",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: "Flexible work rhythm",
    description: "Remote-first collaboration with room for deep work, focused delivery, and a schedule that supports life outside work.",
  },
  {
    icon: <Laptop2 className="h-5 w-5" />,
    title: "Modern tools and systems",
    description: "A streamlined stack, clear processes, and the support you need to do your best work without unnecessary friction.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Growth with mentorship",
    description: "Regular feedback, learning opportunities, and leaders who invest in your development and long-term success.",
  },
];

const cultureCards = [
  {
    icon: <Users2 className="h-5 w-5" />,
    title: "Collaborative by default",
    description:
      "We work in small, cross-functional teams that value clarity, accountability, and thoughtful feedback. Everyone has a voice, and good ideas can come from anywhere.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "High standards, low ego",
    description:
      "We care about quality, but we keep the process human. You’ll find direct communication, practical decision-making, and a team that respects your time.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Work that matters",
    description:
      "Our projects are built to create measurable value for clients and meaningful progress for the people doing the work. That makes the day-to-day feel purposeful.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
        <Hero
          title="Build meaningful work with a team that values clarity, craft, and momentum"
          subtitle="Join a professional, supportive environment where great work is recognized, growth is encouraged, and your impact is visible from day one."
          ctaLabel="View open roles"
          ctaHref="#open-roles"
          secondaryLabel="Learn about our culture"
          secondaryHref="#culture"
        />

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} className="mb-8" />
          <StatsStrip
            stats={[
              { label: "Average response time", value: "24h" },
              { label: "Remote-friendly team", value: "100%" },
              { label: "Learning budget", value: "$1,500" },
              { label: "Weekly focus time", value: "10+ hrs" },
            ]}
          />
        </section>

        <section id="culture" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Culture"
            title="A workplace built for strong execution and sustainable pace"
            description="We believe the best teams combine high standards with trust, flexibility, and clear expectations. That means less noise, better collaboration, and more room to do your best work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cultureCards.map((card) => (
              <TeamMemberCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </section>

        <section id="open-roles" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Open roles"
            title="Current opportunities"
            description="We’re hiring people who care about quality, communicate clearly, and want to make a measurable difference."
          />
          <div className="mt-10 grid gap-5">
            {roles.map((role) => (
              <RoleListing key={role.title} {...role} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="Support that helps you do your best work"
            description="Our benefits are designed to reduce friction, support growth, and make it easier to stay focused on meaningful outcomes."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <CTABanner
            headline="Ready to do your best work with a team that moves with purpose?"
            description="If you want clear goals, thoughtful collaboration, and the chance to create real impact, we’d love to hear from you."
            buttonLabel="Apply now"
            buttonHref="/contact"
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-xl sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Why people join</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A team that values reliability, responsiveness, and real outcomes</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  We keep communication clear, expectations realistic, and delivery focused. That creates a workplace where people can contribute confidently and see the impact of their work.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Start your application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}