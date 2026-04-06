import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Our Clients Say",
  description: "Learn more about what our clients say",
};

import { FC } from 'react';
import { TestimonialCard, CTABanner, NavBar, Footer } from '@/components';

const testimonials = [
  {
    author: 'Jane Doe',
    feedback: 'The team was professional and delivered beyond our expectations. Highly recommend!',
    rating: 5,
  },
  {
    author: 'John Smith',
    feedback: 'Great experience! They understood our needs and provided excellent solutions.',
    rating: 4,
  },
  {
    author: 'Alice Johnson',
    feedback: 'Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
  },
  {
    author: 'Bob Brown',
    feedback: 'A reliable partner for our projects. We will definitely work with them again.',
    rating: 4,
  },
  {
    author: 'Charlie White',
    feedback: 'Professional, responsive, and results-driven. A pleasure to work with.',
    rating: 5,
  },
  {
    author: 'Diana Green',
    feedback: 'They transformed our ideas into reality. Truly impressed with their work!',
    rating: 5,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <section className="w-full p-6">
        <h1 className="text-3xl font-bold mb-4">What Our Clients Say</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              author={testimonial.author}
              feedback={testimonial.feedback}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </section>
      <CTABanner
        title="Join our satisfied clients!"
        subtitle="Get in touch to start your project today."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <Footer />
    </main>
  );
};

export default TestimonialsPage;