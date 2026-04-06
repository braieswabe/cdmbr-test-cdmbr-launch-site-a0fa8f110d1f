import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold text-lg">Professional Website</h2>
          <p>Your trusted partner for professional solutions.</p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Stay Connected</h3>
          <form>
            <input type="email" placeholder="Your Email" className="border rounded p-2 mb-2 w-full" />
            <button type="submit" className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Professional Website. All rights reserved.</p>
      </div>
    </footer>
  );
};