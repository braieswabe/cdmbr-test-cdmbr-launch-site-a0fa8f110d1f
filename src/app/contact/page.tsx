import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Learn more about contact us",
};

```typescript
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </section>
        <section className="mb-12">
          <ContactForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Our Location</h2>
          <p className="mt-2">123 Main Street, Anytown, USA</p>
          <p className="mt-1">Office Hours: Mon-Fri, 9 AM - 5 PM</p>
          <div className="mt-4 h-64 bg-gray-200 rounded">[Map Placeholder]</div>
          <p className="mt-4">
            <a href="tel:+1234567890" className="text-blue-600">Call Us: (123) 456-7890</a>
          </p>
          <p className="mt-1">
            <a href="mailto:info@example.com" className="text-blue-600">Email: info@example.com</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
```