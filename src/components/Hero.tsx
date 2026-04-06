import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta1Text, cta1Link, cta2Text, cta2Link }) => {
  return (
    <div className="bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2">{subtitle}</p>
      <div className="mt-4">
        {cta1Text && cta1Link && (
          <a href={cta1Link} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            {cta1Text}
          </a>
        )}
        {cta2Text && cta2Link && (
          <a href={cta2Link} className="bg-gray-500 text-white px-4 py-2 rounded">
            {cta2Text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;