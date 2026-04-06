"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  onSubmit: (data: any) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input type="text" {...register('name')} placeholder="Your Name" className="p-2 border rounded" required />
      <input type="email" {...register('email')} placeholder="Your Email" className="p-2 border rounded" required />
      <textarea {...register('message')} placeholder="Your Message" className="p-2 border rounded" required />
      <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition">Send Message</button>
    </form>
  );
};

export default ContactForm;