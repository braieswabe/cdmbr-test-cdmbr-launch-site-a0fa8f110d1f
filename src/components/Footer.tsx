import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-bold">Professional Website</h2>
          <p className="mt-2">Your trusted partner in professional services.</p>
        </div>
        <div>
          <h3 className="font-semibold">Links</h3>
          <ul className="mt-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Stay Connected</h3>
          <form className="mt-2">
            <input type="email" placeholder="Your email" className="border rounded p-2 w-full" />
            <button type="submit" className="mt-2 bg-accent text-white py-2 px-4 rounded hover:bg-yellow-600 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        &copy; {new Date().getFullYear()} Professional Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
