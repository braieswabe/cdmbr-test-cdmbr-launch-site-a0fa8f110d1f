import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Learn more about testimonials",
};

```typescript
import { Hero, TestimonialCard, CTABanner } from "@/components";

const testimonials = [
  {
    name: "John Doe",
    feedback: "The team was incredibly professional and delivered beyond our expectations!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Their attention to detail and customer service is unmatched.",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    feedback: "I highly recommend them for any web development needs.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    feedback: "A fantastic experience from start to finish. Will work with them again!",
    rating: 5,
  },
  {
    name: "Sarah Davis",
    feedback: "Professional, timely, and effective. A great partner for our project.",
    rating: 4,
  },
  {
    name: "Chris Wilson",
    feedback: "They transformed our online presence and helped us grow our business.",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Client Testimonials" subtitle="What Our Clients Say" />
      <section className="w-full p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Client Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} feedback={testimonial.feedback} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <section className="w-full p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Happy Clients!</h3>
        <p>Contact us today to see how we can help your business thrive.</p>
      </section>
      <CTABanner title="Ready to Transform Your Business?" subtitle="Get in touch with us!" />
    </main>
  );
};

export default TestimonialsPage;
```