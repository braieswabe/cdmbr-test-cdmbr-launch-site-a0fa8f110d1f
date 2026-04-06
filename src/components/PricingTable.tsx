import { FC } from 'react';

interface PricingTableProps {
  planName: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingTable: FC<PricingTableProps> = ({ planName, price, features, isHighlighted }) => {
  return (
    <div className={`border rounded-lg p-6 shadow-lg transition ${isHighlighted ? 'bg-accent-color text-white' : 'bg-white text-gray-800'}`}>
      <h3 className="text-2xl font-bold mb-4">{planName}</h3>
      <p className="text-xl mb-4">{price}</p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <button className={`px-4 py-2 rounded-lg ${isHighlighted ? 'bg-white text-accent-color' : 'bg-primary-color text-white'} shadow hover:shadow-md transition`}>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingTable;
export { PricingTable };
