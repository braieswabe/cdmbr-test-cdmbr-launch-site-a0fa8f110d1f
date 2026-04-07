"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactItems = [
    {
      icon: Phone,
      title: "Call us",
      description: "Speak with a project specialist for quick answers and next steps.",
      value: "(555) 014-8821",
      href: "tel:+15550148821",
    },
    {
      icon: Mail,
      title: "Email us",
      description: "Send project details, timelines, or questions anytime.",
      value: "hello@claritystudio.com",
      href: "mailto:hello@claritystudio.com",
    },
    {
      icon: MapPin,
      title: "Visit us",
      description: "Meet in person at our downtown office by appointment.",
      value: "1200 Market Street, Suite 400, San Francisco, CA 94102",
      href: "https://maps.google.com/?q=1200+Market+Street+Suite+400+San+Francisco+CA+94102",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I hear back?",
      answer:
        "We respond to all inquiries within one business day, and most requests receive a same-day reply during business hours.",
    },
    {
      question: "What information should I include?",
      answer:
        "Share your goals, timeline, budget range, and any links or files that help us understand the project. The more context you provide, the faster we can recommend the right path.",
    },
    {
      question: "Do you work with small teams?",
      answer:
        "Yes. We regularly support founders, growing teams, and established businesses that need clear communication and dependable delivery.",
    },
  ];

  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  return (
    <main className="bg-white text-slate-900">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      />

      <Hero
        title="Start the conversation with a team that responds quickly"
        subtitle="Tell us what you’re building, and we’ll reply with clear next steps, a realistic timeline, and the best way to move forward."
        ctaLabel="Request a Quote"
        ctaHref="#contact-form"
        secondaryLabel="Book a Call"
        secondaryHref="tel:+15550148821"
      />

      <section id="contact-form" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <SectionHeading
              eyebrow="Contact form"
              title="Share the details that matter most"
              description="Use the form below to tell us about your goals, timeline, and what success looks like. We’ll follow up with a clear recommendation."
              className="mb-8"
            />
            <ContactForm
              title="Request a quote"
              description="Share a few details about your project and we’ll recommend the best path forward, timeline, and investment range."
              submitLabel="Request a quote"
            />
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
                <p>
                  We typically reply within one business day with next steps, relevant examples, and a recommended
                  approach.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionHeading
                eyebrow="Direct contact"
                title="Reach us the way that works best"
                description="Whether you prefer a call, email, or an in-person meeting, we make it easy to connect."
                className="mb-6"
              />
              <div className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      <div className="rounded-xl bg-slate-900 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                        <p className="mt-2 font-medium text-slate-900 group-hover:text-slate-700">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold">Business hours</h3>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>Monday–Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
                <p className="font-medium text-white">Need a faster response?</p>
                <p className="mt-1">Call us directly for urgent requests or time-sensitive project questions.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Office location"
            title="Meet us in downtown San Francisco"
            description="Our office is easy to reach by transit, rideshare, or car. Appointments are available for project reviews and planning sessions."
            className="mb-8"
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-80 bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_50%,#38bdf8_100%)] p-8 text-white">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Map preview</p>
                    <h3 className="mt-3 text-2xl font-semibold">1200 Market Street, Suite 400</h3>
                    <p className="mt-3 max-w-md text-sm text-slate-100">
                      Central location for client meetings, discovery sessions, and project kickoffs.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm text-slate-100">
                      Embedded map placeholder — connect your preferred map provider here for directions and local
                      context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900">What to expect when you reach out</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                  A quick reply with a clear next step
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                  A practical recommendation based on your goals
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                  A transparent estimate for scope, timing, and investment
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="#contact-form">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FAQAccordion
          title="Quick answers before you reach out"
          description="These are the most common questions we hear from new clients before a first conversation."
          items={faqs}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-xl sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Ready to talk through your project?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send a message, book a call, or visit our office. We’ll make the next step simple and specific.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="#contact-form">Request a Quote</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="tel:+15550148821">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}