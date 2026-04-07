export function NewsletterSignup() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-950">Get practical insights in your inbox</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Monthly guidance on strategy, operations, and client experience — written for busy teams
          that want clear next steps, not noise.
        </p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
          />
          <button
            type="submit"
            className="rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignup;
