import { FC } from 'react';

interface TestimonialCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-4xl text-primary">{icon}</div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
};

export default TestimonialCard;