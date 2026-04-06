import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

import { NavBar, TestimonialCard, CTABanner, Footer } from '@/components';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    feedback: 'The team was fantastic! They delivered on time and exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    feedback: 'Professional and dedicated. Highly recommend their services!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'A wonderful experience from start to finish. Will work with them again!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Bob Brown',
    feedback: 'Great communication and results. They truly care about their clients.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emily White',
    feedback: 'Their expertise made a huge difference in our project’s success.',
    rating: 4,
  },
  {
    id: 6,
    name: 'Michael Green',
    feedback: 'I was impressed by their creativity and attention to detail.',
    rating: 5,
  },
];

const TestimonialsPage = () => {
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="text-center mb-6">
          <p className="text-lg">Average Rating: {averageRating.toFixed(1)} ⭐</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <CTABanner 
        title="Join Our Happy Clients!" 
        description="Contact us to start your project today!" 
        buttonText="Get Started" 
        buttonLink="/contact" 
      />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;