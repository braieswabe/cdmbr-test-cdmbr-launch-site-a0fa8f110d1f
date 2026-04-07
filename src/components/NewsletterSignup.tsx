export function NewsletterSignup() {
  return (
    <form className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)]"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
  );
}

export default NewsletterSignup;
