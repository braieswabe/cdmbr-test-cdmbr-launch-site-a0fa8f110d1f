'use client';

import { useState } from 'react';
import { ContactForm } from '@/components';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
      <p className="text-lg text-center mb-12">
        We’d love to hear from you! Reach out with any questions or inquiries.
      </p>
      <ContactForm formData={formData} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <p className="text-lg">123 Business Rd, Suite 100, City, State, 12345</p>
        <p className="text-lg">Mon-Fri: 9 AM - 5 PM</p>
        <div className="mt-4">
          <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
          <span className="mx-2">|</span>
          <a href="mailto:info@business.com" className="text-blue-500">info@business.com</a>
        </div>
        <div className="mt-8 h-64 bg-gray-200 rounded-lg">Map Placeholder</div>
      </div>
    </div>
  );
};

export default ContactPage;