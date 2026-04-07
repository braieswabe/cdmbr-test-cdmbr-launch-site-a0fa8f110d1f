import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We build websites that help good businesses look as credible as they are.",
  description: "Learn more about we build websites that help good businesses look as credible as they are.",
};

import { Award, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      number: "01",
      title: "Clarity first",
      description: "We make complex ideas easy to understand so your audience can act with confidence.",
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      number: "02",
      title: "Partnership over process",
      description: "We communicate clearly, stay responsive, and work like an extension of your team.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      number: "03",
      title: "Quality that lasts",
      description: "We build websites that are polished today and practical to maintain long term.",
    },
  ];

  const team = [
    {
      icon: <Users className="h-5 w-5" />,
      number: "01",
      title: "Avery Chen — Founder & Strategy Lead",
      description: "Helps clients define positioning, messaging, and the right path to conversion.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      number: "02",
      title: "Morgan Patel — Design Director",
      description: "Shapes clean, modern interfaces that feel premium and easy to navigate.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      number: "03",
      title: "Sam Rivera — Lead Developer",
      description: "Builds fast, accessible websites with careful attention to performance and detail.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      number: "04",
      title: "Taylor Brooks — Client Success",
      description: "Keeps projects organized, communication clear, and launches on track.",
    },
  ];

  const milestones = [
    { year: "2019", title: "Started with a simple goal", text: "Help small teams present themselves with more clarity and confidence online." },
    { year: "2021", title: "Expanded into full website builds", text: "Added design, development, and launch support under one collaborative process." },
    { year: "2023", title: "Refined our conversion approach", text: "Focused on practical messaging and user experience that supports real business outcomes." },
    { year: "2025", title: "Trusted by growing brands", text: "Now partnering with organizations that want a website to do more than just look good." },
  ];

  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 px-6 py-16 text-white shadow-2xl sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            We build websites that help good businesses look as credible as they are.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Our team combines strategy, design, and development to create clear, trustworthy digital experiences for organizations that care about quality and results.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Our story"
          title="Founded on the belief that clarity drives growth"
          description="We started by helping teams who had strong services but a website that didn’t reflect their value. That gap became our focus."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              From the beginning, our work has centered on one idea: when people understand what you do and trust what they see, they are far more likely to take the next step. That means every project starts with listening, not assumptions.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              We care about practical outcomes — more qualified inquiries, better engagement, and a site your team can confidently share. The result is a process that feels collaborative, calm, and focused on what matters most.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              To help organizations present themselves with clarity and professionalism so their websites become a reliable driver of trust and growth.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.number} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The team"
          title="Experienced people who care about the details"
          description="We bring together strategy, design, development, and client support so projects stay aligned from start to finish."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <TeamMemberCard key={member.number} {...member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Milestones"
          title="A steady path of growth"
          description="A few moments that shaped how we work and the standards we hold ourselves to."
        />
        <div className="grid gap-4">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-6">
              <div className="min-w-24 text-sm font-semibold text-sky-600">{milestone.year}</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{milestone.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}