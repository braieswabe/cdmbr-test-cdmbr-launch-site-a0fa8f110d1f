"use client";

import { ArrowRight, Mail } from "lucide-react";
import type { ReactNode } from "react";

export type NewsletterSignupProps = {
  eyebrow?: string;
  title: string;
  description: string;
  placeholder?: string;
  buttonLabel?: string;
  note?: string;
  onSubmit?: (email: string) => void | Promise<void>;
  footer?: ReactNode;
  className?: string;
};

export function NewsletterSignup({
  eyebrow = "Newsletter",
  title,
  description,
  placeholder = "Enter your email address",
  buttonLabel = "Subscribe",
  note = "Join 5,000+ founders, operators, and marketers who get practical growth insights every month.",
  onSubmit,
  footer,
  className = "",
}: NewsletterSignupProps) {
  return (
    <section
      className={[
        "rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-primary/5 p-6 shadow-sm sm:p-8",
        className,
      ].join(" ")}
    >
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <Mail className="h-3.5 w-3.5" />
          {eyebrow}
        </div>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>

        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
            const email = emailInput?.value.trim();

            if (!email) return;
            void onSubmit?.(email);
            form.reset();
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="relative flex-1">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={placeholder}
              className="w-full rounded-full border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-4 text-sm leading-6 text-slate-500">{note}</p>
        {footer ? <div className="mt-4">{footer}</div> : null}
      </div>
    </section>
  );
}

export default NewsletterSignup;
