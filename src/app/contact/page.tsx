'use client';

import { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Reach out with any questions or inquiries.
          </p>
        </section>

        <section className="mb-12">
          <ContactForm onChange={handleChange} onSubmit={handleSubmit} />
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <p className="mt-4 text-lg text-gray-600">123 Business Rd, Suite 100, City, State, 12345</p>
          <p className="mt-2">Office Hours: Mon-Fri 9 AM - 5 PM</p>
          <p className="mt-2">
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a> | 
            <a href="mailto:info@business.com" className="text-blue-600 hover:underline"> info@business.com</a>
          </p>
          <div className="mt-4 h-64 bg-gray-200 rounded">[Map Placeholder]</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;