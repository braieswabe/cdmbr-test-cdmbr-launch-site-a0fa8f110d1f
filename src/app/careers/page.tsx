import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn more about careers",
};

import { ButtonGroup } from "@/components/ButtonGroup";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { RoleCard } from "@/components/RoleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { BriefcaseBusiness, HeartHandshake, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";

const openRoles = [
  {
    number: "01",
    icon: <Rocket className="h-5 w-5" />,
    title: "Senior Full-Stack Engineer",
    description:
      "Build polished web experiences for clients who expect speed, reliability, and measurable results. You’ll work across Next.js, design systems, and performance-focused delivery.",
  },
  {
    number: "02",
    icon: <Users className="h-5 w-5" />,
    title: "Client Success Manager",
    description:
      "Own onboarding, communication, and long-term satisfaction. You’ll help clients stay aligned, informed, and confident from kickoff through launch.",
  },
  {
    number: "03",
    icon: <Sparkles className="h-5 w-5" />,
    title: "Brand Designer",
    description:
      "Shape visual identities and conversion-ready interfaces that feel modern, clear, and memorable across web, pitch decks, and campaign assets.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      <NavBar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />

      <Hero
        title="Build work you’re proud to ship."
        subtitle="Join a team that values thoughtful craft, clear communication, and outcomes that matter. We move quickly, collaborate closely, and give people real ownership."
        primaryCtaLabel="Apply now"
        primaryCtaHref="#open-roles"
        secondaryCtaLabel="View benefits"
        secondaryCtaHref="#benefits"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Culture"
          title="A focused team with room to do your best work."
          description="We keep the environment calm, collaborative, and high-trust. That means fewer meetings, clearer priorities, and more time spent on meaningful work."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            number="01"
            icon={<HeartHandshake className="h-5 w-5" />}
            title="Respectful collaboration"
            description="We share context early, give direct feedback, and make decisions with the team in mind."
          />
          <FeatureCard
            number="02"
            icon={<ShieldCheck className="h-5 w-5" />}
            title="High standards, low ego"
            description="We care about quality, but we keep the process practical and supportive."
          />
          <FeatureCard
            number="03"
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            title="Ownership from day one"
            description="You’ll have clear responsibilities, visible impact, and the autonomy to improve how we work."
          />
        </div>
      </section>

      <section id="benefits" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="Support that helps you grow."
            description="We invest in people with competitive compensation, flexibility, and development opportunities that make a difference over time."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard number="01" icon={<ShieldCheck className="h-5 w-5" />} title="Competitive pay" description="Fair compensation aligned with experience, scope, and impact." />
            <FeatureCard number="02" icon={<Sparkles className="h-5 w-5" />} title="Flexible schedule" description="Work in a way that supports focus, balance, and dependable delivery." />
            <FeatureCard number="03" icon={<Users className="h-5 w-5" />} title="Learning budget" description="Use dedicated support for courses, conferences, books, and certifications." />
            <FeatureCard number="04" icon={<HeartHandshake className="h-5 w-5" />} title="Strong team support" description="Collaborate with people who care about quality, clarity, and follow-through." />
          </div>
        </div>
      </section>

      <section id="open-roles" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Open roles"
          title="Current opportunities"
          description="If you’re excited by thoughtful execution and visible client impact, we’d love to hear from you."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {openRoles.map((role) => (
            <RoleCard key={role.title} {...role} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Hiring process"
            title="Clear steps, no guesswork."
            description="We keep the process straightforward so you know what to expect at every stage."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <TeamMemberCard
              number="01"
              icon={<Users className="h-5 w-5" />}
              title="Intro call"
              description="A short conversation to learn about your background, goals, and the role."
            />
            <TeamMemberCard
              number="02"
              icon={<Sparkles className="h-5 w-5" />}
              title="Skills review"
              description="A practical discussion or exercise focused on the work you’d actually do."
            />
            <TeamMemberCard
              number="03"
              icon={<BriefcaseBusiness className="h-5 w-5" />}
              title="Team interview"
              description="Meet the people you’d collaborate with and ask detailed questions about the team."
            />
            <TeamMemberCard
              number="04"
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Offer and onboarding"
              description="If it’s a fit, we move quickly and set you up for a confident start."
            />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Think you’d be a great fit?"
        description="Apply now or send a general interest note if you don’t see the exact role you want."
        buttonLabel="Apply now"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}