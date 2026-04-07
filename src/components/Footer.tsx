import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Features", href: "/features" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Page", href: "/page" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "X", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">
                P
              </span>
              <div>
                <p className="text-lg font-bold text-white">Professional website</p>
                <p className="text-sm text-slate-400">Strategy. Design. Results.</p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              We help ambitious teams present their services clearly, build trust
              faster, and convert more qualified visitors into real business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pages
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Stay in the loop
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Get practical insights on positioning, conversion, and client
              experience—delivered with clarity and no fluff.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
              />
              <button
                type="submit"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              By subscribing, you agree to receive occasional updates. Unsubscribe
              anytime.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Professional website. All rights reserved.</p>
          <p>Built for teams that want a sharper online presence and better leads.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
