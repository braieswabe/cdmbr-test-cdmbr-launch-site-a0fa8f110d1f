import { FC } from 'react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ name, testimonial }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
      <p className="italic mb-2">"{testimonial}"</p>
      <h4 className="font-semibold">{name}</h4>
    </div>
  );
};

export default TestimonialCard;
export { TestimonialCard };
export { TestimonialCard };
