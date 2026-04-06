import { FC } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl mt-2">{price}</p>
      <ul className="mt-4">
        {features.map((feature, index) => (
          <li key={index} className="mt-1">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export { PricingCard };

export function PricingCard() {
  return <div>PricingCard</div>;
}

export default PricingCard;
