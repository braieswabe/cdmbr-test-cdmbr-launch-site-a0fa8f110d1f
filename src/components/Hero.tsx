import { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white p-10 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg">{subtitle}</p>
      <a href={ctaLink} className="mt-6 inline-block bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
        {ctaText}
      </a>
    </section>
  );
};