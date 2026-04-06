import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold mb-2">Professional Website</h4>
          <p>Your partner in innovative solutions.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul>
            {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "FAQ", "Testimonials", "Careers"].map(link => (
              <li key={link}>
                <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Newsletter Signup</h4>
          <form>
            <input type="email" placeholder="Your Email" className="border p-2 mb-2 w-full" required />
            <button type="submit" className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Professional Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;