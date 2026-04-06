```typescript
import React from 'react';
import Link from 'next/link';

export const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md backdrop-blur-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Professional Website</div>
        <div className="hidden md:flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "Frequently Asked Questions", "Testimonials", "Careers"].map(link => (
            <Link key={link} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-primary transition">
              {link}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};