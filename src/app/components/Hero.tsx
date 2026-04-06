import React from 'react';

const Hero = ({ headline, subtitle }) => {
  return (
    <div className="bg-gray-200 p-6 text-center">
      <h1 className="text-3xl font-bold">{headline}</h1>
      <p className="mt-2">{subtitle}</p>
    </div>
  );
};

export default Hero;