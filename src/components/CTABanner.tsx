import { FC } from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-accent-color text-white text-center p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-2">{headline}</h2>
      <p className="mb-4">{description}</p>
      <a href={buttonLink} className="bg-white text-accent-color px-4 py-2 rounded-lg shadow hover:shadow-md transition">
        {buttonText}
      </a>
    </div>
  );
};

export default CTABanner;
export { CTABanner };
export { CTABanner };
export { CTABanner };
export { CTABanner };
