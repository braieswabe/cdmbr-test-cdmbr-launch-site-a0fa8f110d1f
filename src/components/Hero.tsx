import { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-primary to-secondary">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="mt-4 text-lg text-white">{subtitle}</p>
      <a href={ctaLink} className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-accent rounded hover:bg-yellow-600 transition">
        {ctaText}
      </a>
    </section>
  );
};

export default Hero;

export function Hero() {
  return <div className="max-w-7xl mx-auto px-4 py-6">Hero</div>;
}
