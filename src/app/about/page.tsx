import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import Link from "next/link";
import { Award, Compass, HeartHandshake, Lightbulb, Users, Target } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";

export default function AboutPage() {
  const values = [
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Clarity first",
      description:
        "We make complex ideas easy to understand so your audience can quickly see the value in what you offer.",
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Partnership over transactions",
      description:
        "We work like an extension of your team, with honest communication and practical recommendations at every step.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Outcomes that matter",
      description:
        "Every decision is tied to a business goal, whether that means more qualified leads, stronger trust, or better retention.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Thoughtful problem solving",
      description:
        "We look for the simplest effective solution and refine the details that make the biggest difference.",
    },
  ];

  const team = [
    {
      name: "Avery Brooks",
      role: "Founder & Strategy Lead",
      bio: "Avery helps teams sharpen their message, define priorities, and build websites that support real business goals.",
    },
    {
      name: "Nina Shah",
      role: "Design Director",
      bio: "Nina creates polished, user-friendly interfaces that feel modern, credible, and easy to navigate on any device.",
    },
    {
      name: "Marcus Lee",
      role: "Lead Developer",
      bio: "Marcus turns designs into fast, accessible, and reliable experiences with careful attention to performance.",
    },
    {
      name: "Elena Torres",
      role: "Client Success Manager",
      bio: "Elena keeps projects organized, communication clear, and timelines on track from kickoff to launch.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Started with a simple goal",
      description: "We began by helping small businesses replace confusing websites with clear, credible ones that convert better.",
    },
    {
      year: "2020",
      title: "Expanded our process",
      description: "As demand grew, we refined our strategy, design, and delivery workflow to support more complex projects.",
    },
    {
      year: "2023",
      title: "Built for measurable outcomes",
      description: "We focused on proof points, conversion structure, and search-friendly content to help clients see stronger results.",
    },
    {
      year: "Today",
      title: "A trusted partner for growing teams",
      description: "We continue to help organizations launch websites and digital experiences that are clear, polished, and effective.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <Hero
        title="About our company"
        subtitle="We help businesses present themselves with clarity and confidence. Our work combines strategic thinking, thoughtful design, and dependable execution so your website feels credible from the first click."
        ctaLabel="Book a Call"
        ctaHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Founded to make professional websites easier to trust and easier to use"
              description="We saw too many businesses with strong services and weak websites. The message was buried, the proof was hard to find, and the next step was unclear. We built our company to solve that problem with a process that is practical, collaborative, and focused on outcomes."
            />
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-6 text-slate-600">
              <p>
                From the beginning, our goal has been simple: help clients show up online with the same level of professionalism they bring to their work. That means better structure, better copy, and better experiences for the people they want to reach.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              To help organizations communicate clearly, build trust quickly, and turn more visitors into qualified opportunities.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <FeatureCard key={value.title} {...value} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Milestones"
            title="A steady evolution shaped by client results"
            description="Our work has grown through referrals, repeat partnerships, and a consistent focus on delivering useful, measurable outcomes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-primary-600">{item.year}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Team"
          title="A small, experienced team that stays close to the work"
          description="You get direct communication, thoughtful recommendations, and people who care about the details that affect your results."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary-600">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading
          eyebrow="Why clients choose us"
          title="Credibility, consistency, and a process built around your goals"
          description="We combine strategic thinking with practical execution so you can move forward with confidence."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Award className="h-5 w-5" />,
              title: "Proven delivery",
              description: "Projects are scoped clearly, managed carefully, and delivered with attention to quality.",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "Human-centered collaboration",
              description: "We listen closely, explain decisions plainly, and keep the process easy to follow.",
            },
            {
              icon: <Target className="h-5 w-5" />,
              title: "Business-focused thinking",
              description: "Every recommendation is tied to a practical outcome, not just visual polish.",
            },
          ].map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <CTABanner
        headline="Want to work with a team that values clarity and results?"
        description="Let’s talk about your goals and see how we can help you move forward."
        buttonLabel="Get Started"
        buttonHref="/contact"
      />
    </main>
  );
}