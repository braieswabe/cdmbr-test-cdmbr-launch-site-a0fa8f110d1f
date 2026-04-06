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
    feedback: 'The team was incredibly professional and delivered beyond our expectations!',
    rating: 5,
  },
  {
    name: 'John Smith',
    feedback: 'Their attention to detail and customer service is unmatched.',
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
    name: 'Emily Davis',
    feedback: 'They took my ideas and turned them into reality. Truly talented!',
    rating: 4,
  },
  {
    name: 'Michael Wilson',
    feedback: 'Professional, timely, and great results. I will definitely work with them again.',
    rating: 5,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Client Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} feedback={testimonial.feedback} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <section className="py-10 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
        <p className="text-lg">Join our satisfied clients and experience the difference!</p>
      </section>
      <CTABanner title="Ready to work with us?" buttonText="Get Started" />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;