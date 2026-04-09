"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type ContactFormProps = {
  className?: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm({ className }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Tell us a little about your project.";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "Please add a bit more detail so we can help.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8",
        className
      )}
      noValidate
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-900">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={cn(
              "w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4",
              errors.name
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
            )}
            placeholder="Jordan Lee"
          />
          {errors.name ? (
            <p className="text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-900">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={cn(
              "w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4",
              errors.email
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
            )}
            placeholder="jordan@company.com"
          />
          {errors.email ? (
            <p className="text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-900">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="Northstar Studio"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-900">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={cn(
              "w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4",
              errors.message
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
            )}
            placeholder="Tell us what you’re building, your timeline, and what success looks like."
          />
          {errors.message ? (
            <p className="text-sm text-red-600">{errors.message}</p>
          ) : null}
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Thanks — your message is in. We’ll respond within one business day.
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
