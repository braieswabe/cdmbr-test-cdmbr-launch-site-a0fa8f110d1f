"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock3, Send, CheckCircle2, MessageSquareText } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <MessageSquareText className="h-4 w-4" />
                Let’s talk about what you want to improve
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Contact us for a clear, low-friction next step
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us what you’re working on and we’ll respond with practical guidance, a realistic timeline, and a
                straightforward recommendation. Most inquiries receive a reply within one business day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Call now
                </Link>
                <Link
                  href="mailto:hello@yourcompany.com"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Email us
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-900 p-6 text-white shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
                  { icon: Mail, label: "Email", value: "hello@yourcompany.com", href: "mailto:hello@yourcompany.com" },
                  { icon: MapPin, label: "Office", value: "120 Market Street, Suite 400, Austin, TX", href: "#" },
                  { icon: Clock3, label: "Hours", value: "Mon–Fri, 9:00 AM–5:00 PM", href: "#" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl bg-white/10 p-2">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">{item.label}</p>
                          <p className="mt-1 text-sm font-medium leading-6">{item.value}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <SectionHeading
                eyebrow="Contact form"
                title="Send a message and we’ll take it from there"
                description="Use this form for project inquiries, quotes, consultations, or general questions. Keep it brief — we’ll ask follow-up questions if needed."
              />

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5" />
                    <div>
                      <p className="font-semibold">Message received</p>
                      <p className="mt-1 text-sm leading-6">
                        Thanks for reaching out. We’ll review your message and get back to you within one business day.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Name</span>
                    <input
                      required
                      type="text"
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Email</span>
                    <input
                      required
                      type="email"
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Phone</span>
                    <input
                      type="tel"
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      placeholder="(555) 123-4567"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Subject</span>
                    <input
                      type="text"
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      placeholder="Website project, quote, or support"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    required
                    rows={6}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Tell us what you need, your timeline, and any details that will help us respond well."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            </div>

            <div className="grid gap-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading
                  eyebrow="Direct contact"
                  title="Reach us the way that works best for you"
                  description="We keep communication simple and responsive so you can get answers quickly."
                />
                <div className="mt-8 grid gap-4">
                  <a href="tel:+15551234567" className="rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100">
                    <p className="text-sm font-medium text-slate-500">Phone</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">(555) 123-4567</p>
                  </a>
                  <a href="mailto:hello@yourcompany.com" className="rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100">
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">hello@yourcompany.com</p>
                  </a>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-500">Office address</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">120 Market Street, Suite 400, Austin, TX 78701</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-500">Hours</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Monday–Friday, 9:00 AM–5:00 PM CT</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading
                  eyebrow="Service area"
                  title="Available locally and remotely"
                  description="We work with clients in Austin and beyond, with a process built for smooth remote collaboration."
                />
                <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-100 p-6">
                  <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 text-center">
                    <div>
                      <MapPin className="mx-auto h-8 w-8 text-slate-600" />
                      <p className="mt-3 text-sm font-medium text-slate-700">Map placeholder</p>
                      <p className="mt-1 max-w-sm text-sm leading-6 text-slate-600">
                        Embed your map here or replace this panel with a service area graphic, directions, or nearby landmarks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}