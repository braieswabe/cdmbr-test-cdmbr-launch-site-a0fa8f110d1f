import { FC } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export const PricingCard: FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{price}</p>
      <ul className="list-disc pl-5">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};