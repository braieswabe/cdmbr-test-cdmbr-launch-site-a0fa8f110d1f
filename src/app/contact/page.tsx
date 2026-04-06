'use client';

import { useState } from 'react';
import { ContactForm, Map, NavBar, Footer } from '@/components';

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
  };

  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-10">
        <h1 className="text-3xl font-bold text-center">Get in Touch</h1>
        <p className="text-center mt-2">We'd love to hear from you!</p>
      </section>
      <ContactForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center">Our Location</h2>
        <p className="text-center mt-2">123 Business Rd, Business City, BC 12345</p>
        <p className="text-center">Office Hours: Mon-Fri, 9 AM - 5 PM</p>
        <p className="text-center">
          <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a> | 
          <a href="mailto:info@business.com" className="text-blue-500"> info@business.com</a>
        </p>
        <div className="mt-6">
          <Map />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;