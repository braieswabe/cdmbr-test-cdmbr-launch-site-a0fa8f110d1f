import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Professional Website</h2>
          <p>Your trusted partner for modern solutions.</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog", "Our Work", "Frequently Asked Questions", "Testimonials", "Careers", "Features"].map((link) => (
            <a key={link} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-accent transition">
              {link}
            </a>
          ))}
        </div>
        <div>
          <h3 className="font-bold">Newsletter Signup</h3>
          <form className="flex">
            <input type="email" placeholder="Your Email" className="border rounded-l p-2" />
            <button type="submit" className="bg-accent text-white rounded-r p-2 hover:bg-opacity-80 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400">© {new Date().getFullYear()} Professional Website. All rights reserved.</div>
    </footer>
  );
};