import { FC } from 'react';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-4xl text-primary">{icon}</div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

export function FeatureCard() {
  return <div className="max-w-7xl mx-auto px-4 py-6">FeatureCard</div>;
}
