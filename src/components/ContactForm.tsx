"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  onSubmit: (data: any) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input {...register('name')} placeholder="Your Name" className="border p-2 mb-4 w-full" required />
      <input {...register('email')} placeholder="Your Email" className="border p-2 mb-4 w-full" required />
      <textarea {...register('message')} placeholder="Your Message" className="border p-2 mb-4 w-full" required />
      <button type="submit" className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;