import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Our Clients Say",
  description: "Learn more about what our clients say",
};

import { FC } from 'react';
import { NavBar, TestimonialCard, CTABanner, Footer } from '@/components';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The team was incredibly professional and delivered on time. Highly recommend!',
    rating: 5,
  },
  {
    name: 'John Smith',
    feedback: 'Fantastic experience! They understood my needs and exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    feedback: 'Great service and support throughout the project. Will work with them again!',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    feedback: 'Professional and reliable. They brought my vision to life beautifully.',
    rating: 5,
  },
  {
    name: 'Sarah Davis',
    feedback: 'Excellent communication and results. I couldn’t be happier with the outcome.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    feedback: 'A wonderful team that truly cares about their clients. Highly recommend!',
    rating: 5,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <h1 className="text-3xl font-bold my-8">What Our Clients Say</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </section>
      <CTABanner title="Join our satisfied clients!" buttonText="Get Started" />
      <Footer />
    </main>
  );
};

export default TestimonialsPage;