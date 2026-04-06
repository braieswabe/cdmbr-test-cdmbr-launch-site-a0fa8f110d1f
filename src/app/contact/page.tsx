'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <Hero title="Get in Touch" subtitle="We'd love to hear from you!" />
      <ContactForm onSubmit={handleSubmit} onChange={handleInputChange} formData={formData} />
      <div className="mt-8">
        <h2 className="text-xl font-bold">Our Location</h2>
        <p className="mt-2">123 Business Rd, Suite 100, City, State, 12345</p>
        <p>Office Hours: Mon-Fri 9 AM - 5 PM</p>
        <p>
          <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a> | 
          <a href="mailto:info@example.com" className="text-blue-600"> info@example.com</a>
        </p>
        <div className="mt-4 w-full h-64">
          <Map />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;