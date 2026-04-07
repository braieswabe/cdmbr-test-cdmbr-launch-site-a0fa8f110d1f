"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export type ContactFormProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
  className?: string;
};

type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

export function ContactForm({
  title = "Request a quote",
  description = "Share a few details about your project and we’ll recommend the best path forward, timeline, and investment range.",
  submitLabel = "Request a quote",
  className = "",
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function validate(nextValues: ContactFormValues) {
    const nextErrors: ContactErrors = {};

    if (!nextValues.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!nextValues.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!nextValues.company.trim()) nextErrors.company = "Company name is required.";
    if (!nextValues.service.trim()) nextErrors.service = "Please select a service.";
    if (!nextValues.budget.trim()) nextErrors.budget = "Please select a budget range.";
    if (nextValues.message.trim().length < 30) {
      nextErrors.message = "Please include a few more details about your project.";
    }

    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    setValues(initialValues);
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-100";

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Let’s talk
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">First name</span>
              <input
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                placeholder="Jordan"
              />
              {errors.firstName ? (
                <p id="firstName-error" className="mt-2 text-sm text-red-600">
                  {errors.firstName}
                </p>
              ) : null}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Last name</span>
              <input
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                placeholder="Lee"
              />
              {errors.lastName ? (
                <p id="lastName-error" className="mt-2 text-sm text-red-600">
                  {errors.lastName}
                </p>
              ) : null}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
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

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Phone</span>
              <input
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                className={fieldClass}
                placeholder="+1 (555) 123-4567"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
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
              <span className="text-sm font-medium text-slate-700">Service needed</span>
              <select
                name="service"
                value={values.service}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">Select a service</option>
                <option value="Website design">Website design</option>
                <option value="Web development">Web development</option>
                <option value="Brand refresh">Brand refresh</option>
                <option value="Ongoing support">Ongoing support</option>
              </select>
              {errors.service ? (
                <p id="service-error" className="mt-2 text-sm text-red-600">
                  {errors.service}
                </p>
              ) : null}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Budget range</span>
              <select
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className={fieldClass}
                aria-invalid={Boolean(errors.budget)}
                aria-describedby={errors.budget ? "budget-error" : undefined}
              >
                <option value="">Select a budget</option>
                <option value="$5k-$10k">$5k-$10k</option>
                <option value="$10k-$25k">$10k-$25k</option>
                <option value="$25k-$50k">$25k-$50k</option>
                <option value="$50k+">$50k+</option>
              </select>
              {errors.budget ? (
                <p id="budget-error" className="mt-2 text-sm text-red-600">
                  {errors.budget}
                </p>
              ) : null}
            </label>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
              <p className="font-semibold text-slate-900">What happens next?</p>
              <p className="mt-2">
                We’ll review your goals, confirm fit, and send a concise proposal with timeline,
                scope, and next steps.
              </p>
            </div>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Project details</span>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              rows={6}
              className={fieldClass}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell us about your goals, timeline, audience, and anything that would help us prepare."
            />
            {errors.message ? (
              <p id="message-error" className="mt-2 text-sm text-red-600">
                {errors.message}
              </p>
            ) : null}
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              By submitting this form, you agree to be contacted about your project.
            </p>
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
              {isSubmitting ? "Submitting..." : submitLabel}
            </Button>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Thanks — we received your request and will follow up shortly with a tailored response.
            </div>
          ) : null}

          {hasErrors ? (
            <p className="text-sm text-slate-500">Please fix the highlighted fields to continue.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
