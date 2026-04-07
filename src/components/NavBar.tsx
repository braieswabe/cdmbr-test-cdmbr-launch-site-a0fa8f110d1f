"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
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

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            PW
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Professional
            </span>
            <span className="text-lg font-semibold text-slate-950">
              Website Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            Book a Call
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            View Pricing
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden ${
          isOpen ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden border-t border-[var(--border)] bg-white/95 transition-all duration-300`}
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[var(--border)] bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm"
            >
              Book a Call
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
