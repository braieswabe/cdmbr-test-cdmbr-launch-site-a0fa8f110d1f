import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;