import React from 'react';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, recommended }) => {
  return (
    <div className={`border rounded-lg p-4 shadow-md ${recommended ? 'border-blue-500' : ''}`}>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-xl font-bold">${price}</p>
      <ul className="mt-2">
        {features.map((feature, index) => (
          <li key={index} className="list-disc pl-5">{feature}</li>
        ))}
      </ul>
      {recommended && <p className="text-blue-500 mt-2">Recommended</p>}
    </div>
  );
};

export default PricingCard;