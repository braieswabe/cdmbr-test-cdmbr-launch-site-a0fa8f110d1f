"use client";

import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">Brand</Link>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? "Close" : "Menu"}
          </button>
          <div className={`md:flex ${open ? "block" : "hidden"}`}>
            <Link href="/services" className="px-4 py-2 text-gray-700">Services</Link>
            <Link href="/case-studies" className="px-4 py-2 text-gray-700">Case Studies</Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}