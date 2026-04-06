import { FC } from 'react';

interface PricingTableProps {
  planName: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingTable: FC<PricingTableProps> = ({ planName, price, features, highlighted }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${highlighted ? 'border-2 border-accent' : ''}`}>
      <h3 className="text-xl font-semibold mb-2">{planName}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <button className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingTable;