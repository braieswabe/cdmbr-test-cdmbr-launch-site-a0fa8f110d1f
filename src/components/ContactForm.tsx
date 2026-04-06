"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  onSubmit: (data: any) => void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input {...register('name')} className="mt-1 block w-full border rounded-md p-2" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input {...register('email')} type="email" className="mt-1 block w-full border rounded-md p-2" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea {...register('message')} className="mt-1 block w-full border rounded-md p-2" required />
      </div>
      <button type="submit" className="bg-accent text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
