"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Professional website
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((label) => (
            <Link
              key={label}
              href={`/${label === "Home" ? "" : label.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-[var(--color-primary)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-3">
            {links.map((label) => (
              <Link
                key={label}
                href={`/${label === "Home" ? "" : label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--color-primary)]"
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
