"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
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
  "Features",
  "Home"
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          Professional website
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((label, index) => (
            <Link
              key={`${label}-${index}`}
              href={label === "Home" && index === 0 ? "/" : `/${label.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-[var(--color-primary)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="grid gap-3">
            {links.map((label, index) => (
              <Link
                key={`${label}-${index}`}
                href={label === "Home" && index === 0 ? "/" : `/${label.toLowerCase()}`}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default NavBar;
