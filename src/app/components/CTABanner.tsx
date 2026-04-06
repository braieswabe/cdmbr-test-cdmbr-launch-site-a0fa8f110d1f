import React from 'react';

const CTABanner = ({ title, cta }) => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition">
        {cta}
      </button>
    </div>
  );
};

export default CTABanner;