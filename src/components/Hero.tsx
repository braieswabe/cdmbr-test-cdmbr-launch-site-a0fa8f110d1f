import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="hero bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2">{subtitle}</p>
      {ctaText && ctaLink && (
        <a href={ctaLink} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          {ctaText}
        </a>
      )}
    </div>
  );
};

export default Hero;