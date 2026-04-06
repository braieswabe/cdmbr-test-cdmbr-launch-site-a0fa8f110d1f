import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Our Clients Say",
  description: "Learn more about what our clients say",
};

import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABanner } from "@/components/CTABanner";

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "The team was incredibly professional and delivered on time. Highly recommend!",
    rating: 5,
  },
  {
    name: "John Smith",
    feedback: "Amazing experience! They transformed our website beyond our expectations.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    feedback: "Great communication and support throughout the project. Will work with them again!",
    rating: 4,
  },
  {
    name: "Michael Brown",
    feedback: "Professional, reliable, and very skilled. Our project was a success!",
    rating: 5,
  },
  {
    name: "Sarah Davis",
    feedback: "Fantastic results! The team understood our needs perfectly.",
    rating: 5,
  },
  {
    name: "David Wilson",
    feedback: "Very satisfied with the service and the final product. Thank you!",
    rating: 4,
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">What Our Clients Say</h1>
      <section className="w-full max-w-6xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} feedback={testimonial.feedback} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <CTABanner title="Join Our Happy Clients!" subtitle="Contact us to start your project today." />
    </main>
  );
}