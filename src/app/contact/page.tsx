import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Learn more about get in touch",
};

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you!</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <ContactForm onChange={handleChange} onSubmit={handleSubmit} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="bg-gray-200 rounded-lg p-4 shadow">
            <p className="font-medium">123 Business Rd, Suite 100</p>
            <p>Business City, BC 12345</p>
            <p className="mt-2">Office Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
            <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
            <br />
            <a href="mailto:info@business.com" className="text-blue-500">info@business.com</a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Find Us on the Map</h2>
          <div className="bg-gray-200 rounded-lg h-64 shadow">
            {/* Placeholder for map */}
            <p className="text-center pt-28 text-gray-500">Map Placeholder</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;