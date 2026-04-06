import React from 'react';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-blue-500 text-white p-6 text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mb-4">{description}</p>
      {buttonText && buttonLink && (
        <a href={buttonLink} className="bg-white text-blue-500 px-4 py-2 rounded">
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default CTABanner;