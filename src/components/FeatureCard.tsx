import { FC } from 'react';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};