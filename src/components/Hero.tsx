import { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary p-10 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-6">{subtitle}</p>
      <a href={ctaLink} className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        {ctaText}
      </a>
    </section>
  );
};