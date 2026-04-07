import Link from "next/link";

const pageLinks = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact",
  "Blog",
  "Portfolio",
  "Gallery",
  "FAQ",
  "Testimonials",
  "Careers",
  "Features"
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight">Professional website</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
            A polished, conversion-oriented foundation for service businesses that need to build
            trust quickly, explain value clearly, and turn interest into action.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Pages
          </h3>
          <ul className="mt-4 space-y-3">
            {pageLinks.map((label) => (
              <li key={label}>
                <Link
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Stay connected
          </h3>
          <div className="mt-4 flex gap-3">
            <Link href="#" className="text-sm text-white/75 transition hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-white/75 transition hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-white/75 transition hover:text-white">
              X
            </Link>
          </div>
          <form className="mt-6 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Professional website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
