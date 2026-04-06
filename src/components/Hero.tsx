import React from 'react';

export type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="hero">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg">{subtitle}</p>
      <a href={ctaLink} className="btn">
        {ctaText}
      </a>
    </div>
  );
};

export default Hero;