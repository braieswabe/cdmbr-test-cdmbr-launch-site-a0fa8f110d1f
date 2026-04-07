import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Features", href: "/features" },
  { label: "Careers", href: "/careers" },
  { label: "Gallery", href: "/gallery" }
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" }
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                PW
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Professional
                </span>
                <span className="text-lg font-semibold text-white">Website Studio</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              We design polished, conversion-focused websites that help professional teams
              build trust, communicate value clearly, and turn interest into action.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Explore
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Newsletter
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Get practical insights on positioning, conversion, and website strategy.
            </p>

            <form className="mt-5 space-y-3">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <div className="flex rounded-2xl border border-white/10 bg-white/5 p-1">
                <Mail className="ml-3 mt-3 h-4 w-4 shrink-0 text-slate-400" />
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Professional Website Studio. All rights reserved.</p>
          <p>Built for clarity, credibility, and conversion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
