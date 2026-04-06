import { FC } from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const CTABanner: FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-accent text-white p-6 text-center rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold">{headline}</h2>
      <p className="mt-2">{description}</p>
      <a href={buttonLink} className="mt-4 inline-block bg-white text-accent py-2 px-4 rounded hover:bg-opacity-80 transition">
        {buttonText}
      </a>
    </div>
  );
};