import React from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-accent text-white text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-2">{headline}</h2>
      <p className="mb-4">{description}</p>
      <a href={buttonLink} className="bg-white text-accent py-2 px-4 rounded hover:bg-opacity-80 transition">
        {buttonText}
      </a>
    </div>
  );
};