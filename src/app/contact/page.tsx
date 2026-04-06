'use client';

import { useState } from 'react';
import { ContactForm, NavBar, Footer } from '@/components';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-lg text-center mb-4">
          We’d love to hear from you! Reach out with any questions or inquiries.
        </p>
        <ContactForm onChange={handleChange} onSubmit={handleSubmit} />
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <p className="mt-2">123 Business Rd, Suite 100</p>
          <p>Business City, BC 12345</p>
          <p className="mt-2">Mon-Fri: 9 AM - 5 PM</p>
          <p className="mt-2">
            <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a>
          </p>
          <p className="mt-2">
            <a href="mailto:info@business.com" className="text-blue-600">info@business.com</a>
          </p>
          <div className="mt-4 h-64 bg-gray-200 rounded-lg">
            {/* Placeholder for map */}
            <p className="text-gray-500 text-center pt-28">Map Placeholder</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;