import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-bold">Professional Website</h2>
          <p>Your trusted partner in modern SaaS solutions.</p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul>
            {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "FAQ", "Testimonials", "Careers"].map((link) => (
              <li key={link}>
                <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Newsletter Signup</h3>
          <form className="mt-4">
            <input type="email" placeholder="Your email" className="border rounded w-full p-2" />
            <button type="submit" className="mt-2 bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Professional Website. All rights reserved.</p>
      </div>
    </footer>
  );
};