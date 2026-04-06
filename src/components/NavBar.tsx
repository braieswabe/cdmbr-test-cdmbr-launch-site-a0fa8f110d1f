import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/about" className="text-white">About</a></li>
        <li><a href="/services" className="text-white">Services</a></li>
        <li><a href="/portfolio" className="text-white">Portfolio</a></li>
        <li><a href="/pricing" className="text-white">Pricing</a></li>
        <li><a href="/contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;