import { FC } from 'react';

interface PricingCardProps {
  icon: JSX.Element;
  title: string;
  price: string;
  description: string;
}

export const PricingCard: FC<PricingCardProps> = ({ icon, title, price, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{price}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default PricingCard;
