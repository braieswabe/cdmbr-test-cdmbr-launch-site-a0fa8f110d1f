```typescript
import { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{subtitle}</p>
      <a href={ctaLink} className="bg-[#f59e0b] text-black py-2 px-4 rounded hover:bg-opacity-80 transition">
        {ctaText}
      </a>
    </section>
  );
};
```