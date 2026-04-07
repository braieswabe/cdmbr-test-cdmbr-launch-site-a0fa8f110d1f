import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const links = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact",
  "FAQ",
  "Testimonials",
  "Blog",
  "Portfolio",
  "Features",
  "Careers",
  "Gallery",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="text-lg font-bold text-slate-900">Professional website</div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            A polished digital presence designed to build trust, explain your value clearly,
            and help more visitors become qualified leads.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Pages
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-600">
            {links.map((label) => (
              <li key={label}>
                <Link
                  href={`/${label === "Home" ? "" : label.toLowerCase()}`}
                  className="transition hover:text-[var(--color-primary)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Social
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>X / Twitter</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Newsletter
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Get practical insights on positioning, conversion, and modern web strategy.
          </p>
          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Professional website. All rights reserved.</p>
          <p>Built for clarity, credibility, and conversion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
