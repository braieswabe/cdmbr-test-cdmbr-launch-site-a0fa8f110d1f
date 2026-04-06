import React from 'react';

const PricingCard = ({ title, price, features, recommended }) => {
  return (
    <div className={`p-6 border rounded shadow ${recommended ? 'border-blue-600' : ''}`}>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-2xl font-semibold">${price} {recommended && <span className="text-sm text-green-500">(Recommended)</span>}</p>
      <ul className="mt-4">
        {features.map((feature, index) => (
          <li key={index} className="list-disc list-inside">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;