import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold">Professional Website</h2>
          <p>Your partner in innovative solutions.</p>
        </div>
        <div>
          <h3 className="font-semibold">Links</h3>
          <ul>
            {["Home", "About Us", "Our Services", "Pricing Plans", "Contact Us", "Blog", "Portfolio", "Frequently Asked Questions", "Testimonials", "Careers"].map((link) => (
              <li key={link}>
                <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Stay Connected</h3>
          <form className="mt-4">
            <input type="email" placeholder="Your Email" className="border rounded-lg p-2 w-full" />
            <button type="submit" className="mt-2 bg-accent text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-sm mt-4">© 2023 Professional Website. All rights reserved.</p>
    </footer>
  );
};

export { Footer };

export function Footer() {
  return <div>Footer</div>;
}

export default Footer;
