import { FC } from 'react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  position: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ name, testimonial, position }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <p className="italic mb-2">"{testimonial}"</p>
      <h4 className="font-semibold">{name}</h4>
      <span className="text-gray-500">{position}</span>
    </div>
  );
};

export default TestimonialCard;