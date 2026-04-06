import { FC } from 'react';

interface TestimonialCardProps {
  icon: JSX.Element;
  name: string;
  testimonial: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({ icon, name, testimonial }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 italic">"{testimonial}"</p>
    </div>
  );
};