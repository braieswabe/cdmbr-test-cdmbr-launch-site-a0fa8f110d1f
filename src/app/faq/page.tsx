"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, MessageCircleQuestion, PhoneCall } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

type FAQItem = {
  question: string;
  answer: string;
  topic: string;
};

const faqItems: FAQItem[] = [
  {
    topic: "Getting started",
    question: "How quickly can we get started?",
    answer:
      "Most projects begin within 5–10 business days after scope approval. If you have a tighter deadline, we can often prioritize kickoff and phase the work to match your launch date.",
  },
  {
    topic: "Getting started",
    question: "What do you need from us before kickoff?",
    answer:
      "We usually need your goals, any existing brand or product assets, access to relevant stakeholders, and a point of contact for approvals. If you do not have everything ready, we can help organize the essentials.",
  },
  {
    topic: "Services",
    question: "Do you offer one-off projects or ongoing support?",
    answer:
      "Both. Some clients come to us for a single website, campaign, or audit. Others keep us on retainer for continuous improvements, content updates, and performance optimization.",
  },
  {
    topic: "Services",
    question: "Can you work with our existing website or design system?",
    answer:
      "Yes. We regularly improve existing sites, refine design systems, and extend established brand guidelines. We focus on making the current experience faster, clearer, and easier to manage.",
  },
  {
    topic: "Pricing",
    question: "How is pricing structured?",
    answer:
      "Pricing depends on scope, timeline, and complexity. We provide clear estimates with defined deliverables so you know exactly what is included before work begins.",
  },
  {
    topic: "Pricing",
    question: "Do you offer fixed pricing?",
    answer:
      "For well-defined projects, yes. For larger or evolving engagements, we recommend a phased approach or monthly support plan to keep priorities flexible and budgets predictable.",
  },
  {
    topic: "Process",
    question: "How do you keep projects on schedule?",
    answer:
      "We use a structured process with milestones, review checkpoints, and clear ownership. That keeps feedback focused and reduces delays caused by unclear handoffs.",
  },
  {
    topic: "Process",
    question: "How many revisions are included?",
    answer:
      "Revision rounds vary by project type, but we always define them up front. Our goal is to keep the process collaborative without creating unnecessary back-and-forth.",
  },
  {
    topic: "Support",
    question: "Will we be able to update the site ourselves?",
    answer:
      "Yes. We build with maintainability in mind and can provide handoff guidance so your team can update content, images, and common page sections confidently.",
  },
  {
    topic: "Support",
    question: "What happens after launch?",
    answer:
      "After launch, we can stay involved with monitoring, improvements, and support. Many clients choose a post-launch care plan to keep performance strong and issues resolved quickly.",
  },
];

const groupedTopics = [
  "All topics",
  "Getting started",
  "Services",
  "Pricing",
  "Process",
  "Support",
];

export default function FAQPage() {
  const [activeTopic, setActiveTopic] = useState("All topics");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesTopic = activeTopic === "All topics" || item.topic === activeTopic;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.topic.toLowerCase().includes(query);
      return matchesTopic && matchesSearch;
    });
  }, [activeTopic, search]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "FAQ", href: "/faq" },
              ]}
            />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                <MessageCircleQuestion className="mr-2 h-4 w-4" />
                Answers that reduce uncertainty
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Frequently asked questions
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Clear answers to common questions about process, pricing, support, and timelines.
                If you are evaluating us, this is the fastest way to understand how we work.
              </p>
              <div className="mt-8">
                <ButtonGroup
                  primaryLabel="Book a call"
                  primaryHref="/contact"
                  secondaryLabel="Explore services"
                  secondaryHref="/services"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-50 p-3 text-sky-700">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-950">Find an answer fast</h2>
                  <p className="text-sm text-slate-600">Search by topic, keyword, or question.</p>
                </div>
              </div>

              <label className="mt-6 block">
                <span className="sr-only">Search FAQs</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search questions"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </label>

              <div className="mt-5 flex flex-wrap gap-2">
                {groupedTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                      activeTopic === topic
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-950">Need a faster answer?</p>
                <p className="mt-1 text-sm text-slate-600">
                  Call us at{" "}
                  <Link href="/contact" className="font-medium text-sky-700 hover:text-sky-800">
                    request a callback
                  </Link>{" "}
                  and we will point you to the right next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions grouped by topic"
            description="Browse the answers below to get clarity on scope, pricing, process, and support."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <details
                    key={`${item.topic}-${item.question}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                          {item.topic}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.question}</h3>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                  </details>
                ))
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <p className="text-lg font-semibold text-slate-950">No matching questions found.</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Try a different keyword or reset the filters to see all questions.
                  </p>
                </div>
              )}
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <h2 className="text-lg font-semibold">Still unsure?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  If your question is not covered here, we are happy to help with a quick call or
                  a written response.
                </p>
                <div className="mt-5 space-y-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Contact support
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore services
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-950">Popular next steps</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>• Review pricing to compare options and scope.</li>
                  <li>• Read testimonials to see real client outcomes.</li>
                  <li>• Book a call if you want a tailored recommendation.</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <CTABanner
          headline="Need a question answered directly?"
          description="Send us the details and we will respond with a clear recommendation, not a canned reply."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}