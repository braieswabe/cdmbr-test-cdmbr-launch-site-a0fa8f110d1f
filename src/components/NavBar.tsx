import { FC } from 'react';
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Professional Website</h1>
        <ul className="flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog", "Portfolio", "Frequently Asked Questions", "Testimonials", "Careers"].map(link => (
            <li key={link}>
              <Link href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-primary-color transition">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
export { NavBar };
export { NavBar };
export { NavBar };
