import { FC } from 'react';
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Professional Website</div>
        <div className="hidden md:flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "FAQ", "Testimonials", "Careers"].map(link => (
            <Link key={link} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-800 hover:text-accent transition">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;