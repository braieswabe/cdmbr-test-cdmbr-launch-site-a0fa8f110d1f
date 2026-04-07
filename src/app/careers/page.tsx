import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn more about careers",
};

import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, HeartHandshake, Users } from "lucide-react";
import {
  Hero,
  SectionHeading,
  FeatureCard,
  TeamMemberCard,
  CTABanner,
} from "@/components";

const openRoles = [
  {
    icon: BriefcaseBusiness,
    number: "01",
    title: "Senior Product Designer",
    description:
      "Shape intuitive, conversion-focused experiences across our marketing site and client platforms. You’ll collaborate closely with strategy, content, and engineering to turn complex ideas into clear, elegant interfaces.",
  },
  {
    icon: Users,
    number: "02",
    title: "Full-Stack Engineer",
    description:
      "Build fast, reliable web experiences with a strong focus on quality, accessibility, and maintainability. We value thoughtful implementation, clean systems, and a steady pace of delivery.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Client Success Manager",
    description:
      "Own relationships from kickoff through launch and beyond. You’ll help clients feel informed, supported, and confident while keeping projects moving smoothly and on schedule.",
  },
];

const cultureValues = [
  {
    icon: BadgeCheck,
    number: "01",
    title: "Clear expectations",
    description:
      "We keep goals, timelines, and responsibilities visible so everyone can do their best work without guesswork.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Respectful collaboration",
    description:
      "We give direct feedback, listen carefully, and treat each other like trusted partners—internally and with clients.",
  },
  {
    icon: Users,
    number: "03",
    title: "Room to grow",
    description:
      "You’ll get meaningful ownership, regular feedback, and opportunities to deepen your craft through real projects.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero
        title="Build thoughtful work with a team that values clarity, craft, and momentum."
        subtitle="We’re looking for people who care about outcomes, communicate well, and enjoy making complex things feel simple. If you want meaningful ownership and a supportive team, you’ll fit right in."
        ctaLabel="View open roles"
        ctaHref="#open-roles"
        secondaryCtaLabel="Learn about our culture"
        secondaryCtaHref="#culture"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why join us"
          title="A workplace built for strong work and steady growth"
          description="We offer the structure, trust, and feedback loops people need to do their best work without unnecessary friction."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={BadgeCheck}
            number="01"
            title="Meaningful ownership"
            description="You’ll own real projects, not just tasks. We trust people to make decisions and follow through."
          />
          <FeatureCard
            icon={Users}
            number="02"
            title="Growth that’s practical"
            description="We support learning through mentorship, project variety, and regular performance conversations that actually help."
          />
          <FeatureCard
            icon={HeartHandshake}
            number="03"
            title="A team that has your back"
            description="We work collaboratively, share context early, and keep communication open so work feels manageable and focused."
          />
        </div>
      </section>

      <section id="open-roles" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Open roles"
            title="Current opportunities"
            description="We’re hiring for a few key roles right now. If you don’t see a perfect match, we still encourage you to reach out."
          />
          <div className="mt-10 grid gap-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      {role.number}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{role.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{role.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Apply now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Culture"
          title="Professional, supportive, and refreshingly direct"
          description="We keep the environment calm, collaborative, and focused on doing excellent work without unnecessary drama."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cultureValues.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">What the day-to-day feels like</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              You’ll work with people who are prepared, responsive, and respectful of your time. Meetings are purposeful,
              feedback is specific, and progress is measured by outcomes—not noise.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <TeamMemberCard
              icon={Users}
              number="01"
              title="Small, collaborative teams"
              description="You’ll know who to ask, what’s happening, and where your work fits."
            />
            <TeamMemberCard
              icon={BadgeCheck}
              number="02"
              title="High standards, low ego"
              description="We care about quality and keep the process grounded and human."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <CTABanner
            headline="Interested in joining us?"
            description="Apply to one of our open roles or send a general introduction. We review every application carefully and respond with clear next steps."
            buttonLabel="Start your application"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}