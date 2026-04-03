"use client";

import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold">
            <Link href="/">Brand</Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            Menu
          </button>
          <div className={`md:flex ${open ? "block" : "hidden"}`}>
            <Link href="/services" className="px-4 py-2">Services</Link>
            <Link href="/case-studies" className="px-4 py-2">Case Studies</Link>
            <Link href="/contact" className="px-4 py-2">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}