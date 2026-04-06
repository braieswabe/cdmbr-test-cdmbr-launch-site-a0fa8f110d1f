```typescript
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h4 className="font-bold">Professional Website</h4>
          <p>Your trusted partner for professional services.</p>
        </div>
        <div className="mb-4">
          <h5 className="font-bold">Links</h5>
          <ul>
            {["Home", "About Us", "Our Services", "Pricing", "Contact Us", "Blog", "Portfolio", "Frequently Asked Questions", "Testimonials", "Careers"].map(link => (
              <li key={link}>
                <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="font-bold">Follow Us</h5>
          <p>Social Media Links Here</p>
        </div>
        <div className="mb-4">
          <h5 className="font-bold">Newsletter Signup</h5>
          <form>
            <input type="email" placeholder="Your email" className="border rounded py-2 px-3" />
            <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Professional Website. All rights reserved.</p>
      </div>
    </footer>
  );
};