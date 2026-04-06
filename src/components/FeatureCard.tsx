import { FC } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};