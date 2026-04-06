import React from 'react';

export type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="feature-card border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;