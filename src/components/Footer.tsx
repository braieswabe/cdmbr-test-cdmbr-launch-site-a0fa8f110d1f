```typescript
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Professional Website</h2>
          <p>Your partner in innovative solutions.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Quick Links</h3>
          <ul>
            {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog"].map((link) => (
              <li key={link}>
                <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Follow Us</h3>
          <p>Social Media Links Placeholder</p>
        </div>
        <div>
          <h3 className="font-semibold">Newsletter Signup</h3>
          <form>
            <input type="email" placeholder="Your Email" className="border rounded-lg p-2" />
            <button type="submit" className="bg-[#2563eb] text-white py-2 px-4 rounded hover:bg-opacity-80 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Professional Website. All rights reserved.</p>
      </div>
    </footer>
  );
};
```