import { FC } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">- {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;