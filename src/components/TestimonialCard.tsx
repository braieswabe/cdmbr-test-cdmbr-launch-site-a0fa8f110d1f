import { FC } from 'react';

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({ name, title, testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <p className="italic">"{testimonial}"</p>
      <h4 className="font-semibold mt-2">{name}</h4>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};