import { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-primary-color to-secondary-color text-white text-center p-8">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-8">{subtitle}</p>
      <a href={ctaLink} className="bg-accent-color text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition">
        {ctaText}
      </a>
    </section>
  );
};

export default Hero;
export { Hero };
export { Hero };
export { Hero };
export { Hero };
