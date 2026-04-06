import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{price}</p>
      <ul className="list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};