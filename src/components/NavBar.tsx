"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              TEST CDMBR Launch Site
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200">Home</Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200">Services</Link>
            <Link href="/case-studies" className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200">Case Studies</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors duration-200">Contact</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
              Get Started
            </Link>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-gray-100">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/case-studies" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setOpen(false)}>Case Studies</Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact" className="block mx-3 mt-3 bg-[var(--color-primary)] text-white text-center px-4 py-2.5 rounded-lg font-semibold text-sm" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
