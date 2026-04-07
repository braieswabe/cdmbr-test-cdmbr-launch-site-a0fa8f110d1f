"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          </div>
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="Contact"
                title="Talk to a team that responds quickly and follows through."
                description="Whether you need a quote, have a support question, or want to explore a new project, we make it easy to reach the right person and get a clear next step."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Send a message
                </Link>
                <Link
                  href="tel:+1-555-0142"
                  className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                >
                  Call now
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Phone, label: "Phone", value: "+1 (555) 014-2000", href: "tel:+15550142000" },
                  { icon: Mail, label: "Email", value: "hello@northstarstudio.com", href: "mailto:hello@northstarstudio.com" },
                  { icon: MapPin, label: "Office", value: "1200 Market Street, Suite 400, San Francisco, CA", href: "#location" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00 AM–5:30 PM PT", href: "#hours" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <item.icon className="h-5 w-5 text-sky-600" />
                    <p className="mt-3 text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div id="contact-form" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-sky-100 p-2 text-sky-700">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Send us a message</h2>
                  <p className="text-sm text-slate-600">We usually reply within one business day.</p>
                </div>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  <h3 className="mt-3 text-lg font-semibold">Thanks — we received your message.</h3>
                  <p className="mt-2 text-sm leading-6">
                    A member of our team will review your request and follow up with the next best step, usually within one business day.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                      <input
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        placeholder="Your full name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
                    <input
                      required
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      placeholder="(555) 014-2000"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      placeholder="Tell us what you need help with, your timeline, and any details that will help us respond faster."
                    />
                  </label>
                  <p className="text-sm text-slate-500">
                    By submitting this form, you agree to be contacted about your inquiry. We never share your information.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                  >
                    Submit inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Direct contact"
            title="Reach us the way that works best for you."
            description="For urgent support, a quick call is often the fastest route. For project inquiries, email or the form above gives us the context we need to respond well."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Phone className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-slate-600">Speak with our team during business hours.</p>
              <Link href="tel:+15550142000" className="mt-4 inline-block text-sm font-semibold text-sky-700 hover:text-sky-800">
                +1 (555) 014-2000
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Mail className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 text-lg font-semibold">Email</h3>
              <p className="mt-2 text-sm text-slate-600">Best for detailed questions and project briefs.</p>
              <Link href="mailto:hello@northstarstudio.com" className="mt-4 inline-block text-sm font-semibold text-sky-700 hover:text-sky-800">
                hello@northstarstudio.com
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Clock className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 text-lg font-semibold">Hours</h3>
              <p className="mt-2 text-sm text-slate-600">We respond promptly during the work week.</p>
              <p className="mt-4 text-sm font-semibold text-slate-700">Monday–Friday, 9:00 AM–5:30 PM PT</p>
            </div>
          </div>
        </section>

        <section id="location" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="Location"
                title="Visit our office in downtown San Francisco."
                description="We welcome scheduled meetings and local clients by appointment. The office is easy to reach by transit, rideshare, and nearby parking."
              />
              <div id="hours" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Office details</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Northstar Studio
                  <br />
                  1200 Market Street, Suite 400
                  <br />
                  San Francisco, CA 94102
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Monday–Friday: 9:00 AM–5:30 PM PT
                  <br />
                  Saturday–Sunday: Closed
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-slate-100 via-white to-sky-50 p-8 text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-sky-600" />
                  <h3 className="mt-4 text-xl font-semibold">Map placeholder</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Embed your preferred map provider here to help visitors find the office, plan their route, and estimate travel time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What happens next"
            title="Clear expectations from the first message."
            description="We keep the process simple so you know what to expect after you reach out."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. We review your message",
                description: "We read the details you send and route it to the right person, whether it’s sales, support, or a custom request.",
              },
              {
                title: "2. We respond with next steps",
                description: "You’ll hear back with a direct answer, a few clarifying questions, or a suggested time to talk.",
              },
              {
                title: "3. We move forward quickly",
                description: "If it’s a fit, we’ll outline the process, timeline, and what we need from you to get started.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          headline="Prefer to talk it through first?"
          description="Call us or send a message and we’ll help you choose the right next step."
          buttonLabel="Contact us now"
          buttonHref="#contact-form"
        />
      </main>
      <Footer />
    </div>
  );
}