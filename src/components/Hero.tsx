import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-primary to-secondary text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{subtitle}</p>
      <a href={ctaLink} className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        {ctaText}
      </a>
    </section>
  );
};