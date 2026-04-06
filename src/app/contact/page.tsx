```tsx
'use client';

import { useState } from 'react';
import { Hero, ContactForm, CTABanner } from '@/components';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <main className="bg-gradient-to-b from-gray-100 to-white">
      <Hero title="Get in Touch" subtitle="We'd love to hear from you!" />
      <section className="container mx-auto py-10">
        <ContactForm onChange={handleChange} onSubmit={handleSubmit} />
      </section>
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <p className="mb-2">123 Main St, Suite 100</p>
        <p className="mb-2">Anytown, USA</p>
        <p className="mb-2">Office Hours: Mon-Fri 9am - 5pm</p>
        <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
        <br />
        <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
        <div className="mt-4 h-64 bg-gray-300">[Map Placeholder]</div>
      </section>
      <CTABanner title="Have more questions?" buttonText="Contact Us" />
    </main>
  );
};

export default ContactPage;
```