import { FC } from 'react';
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md backdrop-blur-lg p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Professional Website</h1>
        <div className="hidden md:flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog", "Portfolio", "Frequently Asked Questions", "Testimonials", "Careers"].map((link) => (
            <Link key={link} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}>
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { NavBar };

export function NavBar() {
  return <div>NavBar</div>;
}

export default NavBar;
