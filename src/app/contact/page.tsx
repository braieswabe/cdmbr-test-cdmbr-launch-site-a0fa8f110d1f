"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-black/5 bg-gradient-to-b from-[var(--secondary)]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-4 py-1 text-sm font-medium text-[var(--primary)]">
                Let’s start the conversation
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Tell us what you need, and we’ll point you in the right direction.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">
                Whether you need a new website, a faster launch plan, or help
                improving conversions, our team makes it easy to get a clear
                answer quickly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Call us", value: "+1 (555) 014-2024", href: "tel:+15550142024" },
                { icon: Mail, label: "Email us", value: "hello@studioforge.co", href: "mailto:hello@studioforge.co" },
                { icon: MapPin, label: "Visit us", value: "120 Market Street, Suite 400", href: "#location" },
                { icon: Clock3, label: "Hours", value: "Mon–Fri, 9:00 AM–6:00 PM", href: "#hours" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <item.icon className="h-5 w-5 text-[var(--primary)]" />
                  <p className="mt-4 text-sm font-medium text-black/50">{item.label}</p>
                  <p className="mt-1 font-semibold text-black transition group-hover:text-[var(--primary)]">
                    {item.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact options"
              title="Choose the fastest way to reach us."
              description="Use the form for project inquiries, email for quick questions, or call if you need a same-day response."
            />

            <div className="grid gap-4">
              {[
                {
                  title: "Project inquiries",
                  description: "Share your goals, timeline, and budget so we can recommend the right next step.",
                },
                {
                  title: "Existing clients",
                  description: "Need support, updates, or a quick check-in? We prioritize active client requests.",
                },
                {
                  title: "Partnerships",
                  description: "If you’re exploring a collaboration, we’d love to hear what you’re building.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-black/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeading
              eyebrow="Send a message"
              title="Tell us about your project."
              description="A few details help us respond with a useful answer, not a generic reply."
            />

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium">Phone</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                  placeholder="Optional"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                  placeholder="Tell us what you’re looking for, your timeline, and any details that matter."
                />
              </label>

              <Button type="submit" className="w-full justify-center">
                Send inquiry
                <Send className="h-4 w-4" />
              </Button>

              <p className="text-sm text-black/60">
                By submitting this form, you agree to be contacted about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="hours" className="border-y border-black/5 bg-black/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Response time</h2>
            <p className="mt-2 text-sm leading-7 text-black/70">
              We typically reply within one business day. Urgent requests are prioritized during business hours.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Support hours</h2>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Monday through Friday, 9:00 AM to 6:00 PM local time. Weekend messages are answered the next business day.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Booking availability</h2>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Discovery calls are available throughout the week. Use the form or email us to request a time that works for you.
            </p>
          </div>
        </div>
      </section>

      <section id="location" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Office location"
              title="Meet us in the city."
              description="Our office is set up for strategy sessions, workshops, and in-person project reviews."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-black/70">
              <p className="font-medium text-black">Studio Forge</p>
              <p>120 Market Street, Suite 400</p>
              <p>San Francisco, CA 94105</p>
              <p>United States</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
            <div className="border-b border-black/5 px-6 py-4">
              <h2 className="text-lg font-semibold">Map</h2>
              <p className="text-sm text-black/60">Placeholder for an embedded map or directions module.</p>
            </div>
            <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-[var(--secondary)]/10 via-white to-[var(--primary)]/10">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-[var(--primary)]" />
                <p className="mt-4 text-sm font-medium text-black/70">Interactive map placeholder</p>
                <p className="mt-1 text-sm text-black/50">Add your preferred map embed here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quick answers"
          title="Common questions before you reach out."
          description="A few helpful details to make the process smoother."
        />
        <div className="mt-8">
          <FAQAccordion
            items={[
              {
                question: "How quickly will you respond?",
                answer:
                  "We usually reply within one business day, and often sooner for straightforward project inquiries.",
              },
              {
                question: "Can I book a call directly?",
                answer:
                  "Yes. Send a message with your preferred times and we’ll confirm the best available slot.",
              },
              {
                question: "Do you work with small teams?",
                answer:
                  "Absolutely. We regularly support founders, startups, and growing businesses that need a polished web presence.",
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Ready to move forward?"
        description="Send us a note and we’ll help you choose the right next step."
        buttonLabel="Explore services"
        buttonHref="/services"
      />
    </main>
  );
}