import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

```typescript
import { FC } from 'react';
import { TestimonialCard, NavBar, Footer, CTABanner } from '@/components';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'The team was incredibly professional and delivered beyond our expectations!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    feedback: 'A fantastic experience from start to finish. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    feedback: 'They transformed our online presence and helped us reach new customers.',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    feedback: 'Professional, timely, and effective. Couldn’t ask for more!',
    rating: 5,
  },
  {
    name: 'Sarah Davis',
    feedback: 'Their attention to detail and customer service is unmatched.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    feedback: 'Great results and a pleasure to work with. Will definitely return!',
    rating: 4,
  },
];

const TestimonialsPage: FC = () => {
  return (
    <main className="bg-gray-50">
      <NavBar />
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} feedback={testimonial.feedback} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <CTABanner title="Join our satisfied clients!" description="Contact us today to start your journey!" />
      <Footer />
    </main>
  );
};

export default TestimonialsPage;
```