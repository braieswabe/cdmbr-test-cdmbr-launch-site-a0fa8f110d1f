import { FC } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export const PricingCard: FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{price}</p>
      <ul className="mt-4">
        {features.map((feature, index) => (
          <li key={index} className="mt-2">- {feature}</li>
        ))}
      </ul>
    </div>
  );
};