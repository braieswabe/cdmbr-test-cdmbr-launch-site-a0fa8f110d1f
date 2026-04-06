import { FC } from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-accent text-white">
      <h2 className="text-3xl font-bold">{headline}</h2>
      <p className="mt-2 text-lg">{description}</p>
      <a href={buttonLink} className="mt-4 px-4 py-2 bg-white text-accent font-semibold rounded hover:bg-gray-200 transition">
        {buttonText}
      </a>
    </div>
  );
};

export default CTABanner;