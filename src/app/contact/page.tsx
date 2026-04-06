'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import CTABanner from '@/components/CTABanner';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="space-y-10">
      <Hero title="Contact Us" subtitle="We'd love to hear from you!" />
      <ContactForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitted={submitted}
      />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Our Office</h2>
        <p className="mt-2">123 Business Rd, Suite 100</p>
        <p>Business City, BC 12345</p>
        <p className="mt-2">Hours: Mon-Fri, 9 AM - 5 PM</p>
        <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
        <a href="mailto:info@business.com" className="block text-blue-600 hover:underline">info@business.com</a>
        <div className="mt-4 h-64 bg-gray-300 rounded-lg">Map Placeholder</div>
      </div>
      <CTABanner />
    </div>
  );
};

export default ContactPage;