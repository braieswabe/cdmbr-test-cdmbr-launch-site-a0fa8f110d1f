import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/services" className="hover:underline">Services</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
        <li><a href="/faq" className="hover:underline">FAQ</a></li>
        <li><a href="/pricing" className="hover:underline">Pricing</a></li>
        <li><a href="/testimonials" className="hover:underline">Testimonials</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;