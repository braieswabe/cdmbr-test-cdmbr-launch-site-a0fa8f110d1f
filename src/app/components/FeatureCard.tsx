import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-4 border rounded shadow">
      <div className="text-4xl">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;