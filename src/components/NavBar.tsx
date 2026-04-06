import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="text-2xl">Company Logo</h1>
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/careers">Careers</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;