"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  onSubmit: (data: any) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" {...register('name')} placeholder="Your Name" className="border rounded-lg p-2 w-full" required />
      <input type="email" {...register('email')} placeholder="Your Email" className="border rounded-lg p-2 w-full" required />
      <textarea {...register('message')} placeholder="Your Message" className="border rounded-lg p-2 w-full" required />
      <button type="submit" className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
export { ContactForm };
