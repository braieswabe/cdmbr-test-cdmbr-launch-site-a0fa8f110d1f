import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Professional Website</h2>
          <p>Your trusted partner in professional services.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "FAQ", "Testimonials", "Careers"].map((link) => (
              <li key={link}>
                <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Follow Us</h3>
          <p>Social media links here.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Newsletter</h3>
          <form className="flex flex-col">
            <input type="email" placeholder="Your Email" className="p-2 rounded" />
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Professional Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;