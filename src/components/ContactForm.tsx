export function ContactForm() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">First name</span>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Jordan"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Last name</span>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Lee"
            />
          </label>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="jordan@company.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Company</span>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Acme Studio"
            />
          </label>
        </div>
        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-medium text-slate-700">How can we help?</span>
          <textarea
            rows={5}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            placeholder="Tell us about your goals, timeline, and what success looks like."
          />
        </label>
        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:brightness-110"
        >
          Send inquiry
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
