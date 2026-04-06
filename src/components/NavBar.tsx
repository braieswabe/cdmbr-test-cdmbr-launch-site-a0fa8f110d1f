import { FC } from 'react';
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Professional Website</h1>
        <ul className="hidden md:flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "FAQ", "Testimonials", "Careers"].map((link) => (
            <li key={link}>
              <Link href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-700 hover:text-primary transition">{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;