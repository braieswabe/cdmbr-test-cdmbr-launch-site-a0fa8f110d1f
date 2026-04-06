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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg">We'd love to hear from you!</p>
        </section>

        <section className="mb-12">
          <ContactForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <p className="mt-4">123 Business Rd, Business City, BC 12345</p>
          <p className="mt-2">Office Hours: Mon-Fri 9am - 5pm</p>
          <p className="mt-2">
            <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a> | 
            <a href="mailto:info@business.com" className="text-blue-600 ml-2">info@business.com</a>
          </p>
          <div className="mt-6 h-64 bg-gray-200 rounded">[Map Placeholder]</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;