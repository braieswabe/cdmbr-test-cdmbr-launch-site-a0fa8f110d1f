"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export type NewsletterSignupProps = {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  privacyNote?: string;
  onSubmit?: (email: string) => Promise<void> | void;
  className?: string;
};

export function NewsletterSignup({
  title = "Get practical insights that help you grow with confidence",
  description = "Join our newsletter for concise strategy tips, product updates, and proven ways to improve conversion, clarity, and customer trust.",
  placeholder = "Enter your email address",
  buttonLabel = "Subscribe",
  privacyNote = "No spam. Unsubscribe anytime.",
  onSubmit,
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      await onSubmit?.(email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 shadow-sm",
        className
      )}
      aria-labelledby="newsletter-signup-heading"
    >
      <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-10 lg:py-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 ring-1 ring-inset ring-blue-100">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Newsletter
          </div>

          <h2
            id="newsletter-signup-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-slate-600">
            {description}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              Actionable advice you can use right away
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              Clear updates on services, pricing, and best practices
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium text-slate-900">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "success" ? "Subscribed" : buttonLabel}
              {status === "success" ? (
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>

          {error ? (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}

          {status === "success" ? (
            <p className="mt-3 text-sm font-medium text-emerald-700" role="status">
              Thanks for subscribing — check your inbox for the next update.
            </p>
          ) : null}

          <p className="mt-3 text-xs leading-5 text-slate-500">{privacyNote}</p>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignup;
