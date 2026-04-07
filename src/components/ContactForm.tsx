export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            placeholder="you@company.com"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Subject
        <input
          type="text"
          placeholder="How can we help?"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          rows={5}
          placeholder="Tell us a little about your goals, timeline, and what success looks like."
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
