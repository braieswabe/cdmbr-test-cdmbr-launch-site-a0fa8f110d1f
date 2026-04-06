import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

import { FC } from 'react';
import { NavBar, Footer, TestimonialCard, CTABanner } from '@/components';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The team was incredibly professional and delivered on time. Highly recommend!',
    rating: 5,
  },
  {
    name: 'John Smith',
    feedback: 'Great experience! They understood my needs and provided excellent solutions.',
    rating: 4,
  },
  {
    name: 'Emily Johnson',
    feedback: 'A fantastic team that goes above and beyond. I am very satisfied with the results.',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    feedback: 'Professional and reliable. I would definitely work with them again.',
    rating: 4,
  },
  {
    name: 'Sarah Wilson',
    feedback: 'They transformed my ideas into reality. Truly impressed with their work!',
    rating: 5,
  },
  {
    name: 'David Lee',
    feedback: 'Excellent service and support throughout the project. Highly recommend!',
    rating: 4,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-10 px-4 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Our Happy Clients</h3>
        <CTABanner />
      </section>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;