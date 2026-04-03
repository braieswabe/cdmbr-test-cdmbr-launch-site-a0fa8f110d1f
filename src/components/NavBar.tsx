```typescript
import { FC } from 'react';
import Link from 'next/link';

export const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Professional Website</div>
        <div className="hidden md:flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog", "Our Work", "Frequently Asked Questions", "Client Testimonials", "Careers", "Product Features"].map((link) => (
            <Link key={link} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-[#2563eb] transition">
              {link}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile Hamburger Menu Placeholder */}
          <button className="focus:outline-none">☰</button>
        </div>
      </div>
    </nav>
  );
};
```