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
      <div>
        <label className="block mb-2">Name</label>
        <input {...register('name')} className="border rounded w-full p-2" required />
      </div>
      <div className="mt-4">
        <label className="block mb-2">Email</label>
        <input {...register('email')} type="email" className="border rounded w-full p-2" required />
      </div>
      <div className="mt-4">
        <label className="block mb-2">Message</label>
        <textarea {...register('message')} className="border rounded w-full p-2" required />
      </div>
      <button type="submit" className="mt-4 bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        Send Message
      </button>
    </form>
  );
};