import { FC } from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const CTABanner: FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-accent text-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">{headline}</h2>
      <p className="mb-4">{description}</p>
      <a href={buttonLink} className="bg-white text-accent py-2 px-4 rounded hover:bg-opacity-80 transition">
        {buttonText}
      </a>
    </div>
  );
};