import { FC } from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-accent text-white text-center py-10">
      <h2 className="text-2xl font-bold mb-2">{headline}</h2>
      <p className="mb-4">{description}</p>
      <a href={buttonLink} className="bg-white text-accent py-2 px-4 rounded hover:bg-gray-200 transition">
        {buttonText}
      </a>
    </div>
  );
};

export default CTABanner;