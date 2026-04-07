"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

export type FormFieldValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type FormFieldProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
  className?: string;
};

type FieldErrors = Partial<Record<keyof FormFieldValues, string>>;

const initialValues: FormFieldValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function FormField({
  title = "Start a conversation",
  description = "Tell us what you’re building and we’ll respond with clear next steps within one business day.",
  submitLabel = "Send inquiry",
  className = "",
}: FormFieldProps) {
  const [values, setValues] = useState<FormFieldValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function validate(nextValues: FormFieldValues) {
    const nextErrors: FieldErrors = {};

    if (!nextValues.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!nextValues.company.trim()) nextErrors.company = "Company name is required.";
    if (nextValues.message.trim().length < 20) {
      nextErrors.message = "Please share a few details about your goals.";
    }

    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
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
    setValues(initialValues);
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Full name</span>
              <input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Jordan Lee"
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-sm text-red-600">
                  {errors.name}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Work email</span>
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="jordan@company.com"
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Company</span>
            <input
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              className={fieldClass}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
              placeholder="Northstar Studio"
            />
            {errors.company ? (
              <p id="company-error" className="mt-2 text-sm text-red-600">
                {errors.company}
              </p>
            ) : null}
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Project details</span>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              rows={5}
              className={fieldClass}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Share your goals, timeline, and any must-have features."
            />
            {errors.message ? (
              <p id="message-error" className="mt-2 text-sm text-red-600">
                {errors.message}
              </p>
            ) : null}
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              We respect your inbox. No spam, just a thoughtful reply with practical next steps.
            </p>
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
              {isSubmitting ? "Sending..." : submitLabel}
            </Button>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Thanks — your message has been sent. We’ll be in touch soon.
            </div>
          ) : null}

          {hasErrors ? (
            <p className="text-sm text-slate-500">Please review the highlighted fields and try again.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default FormField;
