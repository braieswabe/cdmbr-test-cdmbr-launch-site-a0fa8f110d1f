"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Fast replies. Clear next steps.
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Talk to a team that responds quickly and follows through.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you need a quote, want to book a call, or have a support question, we’ll get you to the right person and
              reply with clear next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact-form"
                className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Send a message
              </Link>
              <Link
                href="tel:+15551234567"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Call now
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Typical response", value: "Within 1 business day" },
                { label: "Phone support", value: "Mon–Fri, 9am–5pm" },
                { label: "Project start", value: "As soon as next week" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-1 font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <p className="font-medium text-slate-900">Your message goes straight to our client team.</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We review every inquiry carefully and route it to the right specialist so you get a useful answer, not a generic reply.
            </p>
            <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <p className="font-medium text-slate-900">Response expectations</p>
                  <p className="text-sm text-slate-600">Most messages receive a reply within one business day.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <p className="font-medium text-slate-900">Prefer to talk?</p>
                  <Link href="tel:+15551234567" className="text-sm text-sky-700 hover:underline">
                    +1 (555) 123-4567
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <p className="font-medium text-slate-900">Email us</p>
                  <Link href="mailto:hello@northstarstudio.com" className="text-sm text-sky-700 hover:underline">
                    hello@northstarstudio.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact form"
          title="Tell us what you need."
          description="Share a few details and we’ll recommend the best next step, whether that’s a call, a quote, or a support follow-up."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    placeholder="Jordan Lee"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    placeholder="jordan@company.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  placeholder="+1 (555) 123-4567"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  placeholder="Tell us about your goals, timeline, and any questions you have."
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
              >
                Submit inquiry
              </button>
              {submitted && (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Thanks — your message has been received. We’ll be in touch soon.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-950">Direct contact</h2>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">Office address</p>
                    <p>1200 Market Street, Suite 400, San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <Link href="tel:+15551234567" className="hover:text-sky-700">
                      +1 (555) 123-4567
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <Link href="mailto:hello@northstarstudio.com" className="hover:text-sky-700">
                      hello@northstarstudio.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-sky-600" />
                  <div>
                    <p className="font-medium text-slate-900">Business hours</p>
                    <p>Monday–Friday, 9:00 AM–5:00 PM PT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-xl font-semibold text-slate-950">Find us</h2>
                <p className="mt-1 text-sm text-slate-600">Serving clients locally and remotely across the U.S.</p>
              </div>
              <div className="h-72 bg-[linear-gradient(135deg,#dbeafe_0%,#eff6ff_45%,#f8fafc_100%)] p-6">
                <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-sky-300 bg-white/70 text-center">
                  <div>
                    <MapPin className="mx-auto h-8 w-8 text-sky-600" />
                    <p className="mt-3 font-medium text-slate-900">Map placeholder</p>
                    <p className="mt-1 text-sm text-slate-600">Embed your Google Map or location image here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title="Quick answers before you reach out."
            description="A few details to help you decide the fastest way to connect."
          />
          <div className="mt-10">
            <FAQAccordion
              items={[
                {
                  question: "How quickly do you respond?",
                  answer: "Most inquiries receive a response within one business day, often sooner during business hours.",
                },
                {
                  question: "Can I book a call instead of using the form?",
                  answer: "Yes. Use the call button above or mention your preferred time in the message and we’ll coordinate.",
                },
                {
                  question: "Do you work with remote clients?",
                  answer: "Absolutely. We support local and remote clients and can meet by phone or video.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to get started?"
          description="Send your details now and we’ll help you choose the right next step."
          buttonLabel="Book a call"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}