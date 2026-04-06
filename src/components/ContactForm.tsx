"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input {...register('name')} placeholder="Your Name" className="border p-2 rounded" />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      <input {...register('email')} placeholder="Your Email" className="border p-2 rounded" />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      <textarea {...register('message')} placeholder="Your Message" className="border p-2 rounded" />
      {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      <button type="submit" className="bg-primary-color text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
export { ContactForm };
export { ContactForm };
export { ContactForm };
export { ContactForm };
