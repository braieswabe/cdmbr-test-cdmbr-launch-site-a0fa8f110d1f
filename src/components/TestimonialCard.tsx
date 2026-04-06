import { FC } from 'react';

interface TestimonialCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ icon, title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
    </div>
  );
};

export { TestimonialCard };

export function TestimonialCard() {
  return <div>TestimonialCard</div>;
}

export default TestimonialCard;
