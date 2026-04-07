"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.company.trim()) errors.company = "Please share your company or organization.";
  if (!values.message.trim()) errors.message = "Please tell us what you need help with.";
  else if (values.message.trim().length < 20) {
    errors.message = "Please add a little more detail so we can respond helpfully.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setSubmitted(true);
    setValues(initialState);
  }

  const inputClass =
    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4";
  const normalBorder = "border-slate-200 focus:border-[#2563eb] focus:ring-blue-100";
  const errorBorder = "border-red-300 focus:border-red-500 focus:ring-red-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Let’s talk about your next project
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Share a few details and we’ll respond with a clear next step, usually within one business day.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thanks — your message has been sent. We’ll be in touch shortly.
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Full name</span>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`${inputClass} ${errors.name ? errorBorder : normalBorder}`}
            placeholder="Jordan Lee"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Work email</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={`${inputClass} ${errors.email ? errorBorder : normalBorder}`}
            placeholder="jordan@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700">Company</span>
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className={`${inputClass} ${errors.company ? errorBorder : normalBorder}`}
            placeholder="Northstar Studio"
            aria-invalid={Boolean(errors.company)}
          />
          {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company}</p>}
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700">Project details</span>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            className={`${inputClass} ${errors.message ? errorBorder : normalBorder} resize-none`}
            placeholder="Tell us what you’re building, your timeline, and what success looks like."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">
          By submitting, you agree to be contacted about your inquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
