import { FC } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/careers', label: 'Careers' },
  { href: '/features', label: 'Features' },
];

export const NavBar: FC = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Professional Website</h1>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-700 hover:text-primary transition">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile Hamburger Menu Placeholder */}
          <button className="text-gray-700">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
