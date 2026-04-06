import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

import { FC } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
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
    feedback: 'Their attention to detail and commitment to quality is unmatched.',
    rating: 4,
  },
  {
    name: 'Alice Johnson',
    feedback: 'I loved working with them! They made the process so easy and enjoyable.',
    rating: 5,
  },
  {
    name: 'Bob Brown',
    feedback: 'A fantastic experience from start to finish. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Charlie Green',
    feedback: 'They took our ideas and turned them into a reality. Amazing work!',
    rating: 4,
  },
  {
    name: 'Diana White',
    feedback: 'Professional, responsive, and talented. Couldn’t ask for more!',
    rating: 5,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} feedback={testimonial.feedback} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <CTABanner title="Join our happy clients!" subtitle="Get in touch today!" />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;