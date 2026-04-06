import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-xl font-bold">Professional Website</h2>
          <p>Your trusted partner in SaaS solutions.</p>
        </div>
        <div className="flex space-x-4">
          {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog", "Portfolio", "Frequently Asked Questions", "Testimonials", "Careers"].map(link => (
            <a key={link} href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-accent-color transition">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <form className="flex space-x-2">
          <input type="email" placeholder="Subscribe to our newsletter" className="p-2 rounded" />
          <button className="bg-accent-color text-white px-4 py-2 rounded">Subscribe</button>
        </form>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Professional Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };
export { Footer };
