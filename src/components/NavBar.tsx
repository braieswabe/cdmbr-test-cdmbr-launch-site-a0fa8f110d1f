"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
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

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            P
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-slate-500">
              Professional website
            </p>
            <p className="text-base font-bold text-slate-900">
              Strategy. Design. Results.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} border-t border-slate-200/70 bg-white/95 backdrop-blur-xl`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
