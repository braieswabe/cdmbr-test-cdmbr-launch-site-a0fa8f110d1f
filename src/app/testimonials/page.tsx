import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

import { FC } from 'react';
import Hero from '@/components/Hero';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The team was incredibly professional and delivered beyond our expectations!',
    rating: 5,
  },
  {
    name: 'John Smith',
    feedback: 'I was impressed with their attention to detail and commitment to quality.',
    rating: 4,
  },
  {
    name: 'Emily Johnson',
    feedback: 'A fantastic experience from start to finish. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    feedback: 'They transformed our website and helped us increase our sales significantly.',
    rating: 5,
  },
  {
    name: 'Sarah Davis',
    feedback: 'Great communication and support throughout the project. Very satisfied!',
    rating: 4,
  },
  {
    name: 'Chris Wilson',
    feedback: 'Professional, reliable, and results-driven. Would work with them again!',
    rating: 5,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Client Testimonials" subtitle="What our clients say" />
      <section className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-bold mb-4">Client Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              name={testimonial.name} 
              feedback={testimonial.feedback} 
              rating={testimonial.rating} 
            />
          ))}
        </div>
      </section>
      <section className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
        <p className="mb-4">Our clients have seen remarkable transformations in their businesses. Here are some highlights:</p>
        <CTABanner 
          title="Join our satisfied clients!" 
          subtitle="Contact us to start your journey." 
          buttonText="Get Started"
          buttonLink="/contact"
        />
      </section>
    </main>
  );
};

export default TestimonialsPage;