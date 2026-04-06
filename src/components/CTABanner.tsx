import { FC } from 'react';

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: FC<CTABannerProps> = ({ headline, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-accent text-white p-6 rounded-lg text-center">
      <h2 className="text-2xl font-semibold">{headline}</h2>
      <p className="mt-2">{description}</p>
      <a href={buttonLink} className="mt-4 inline-block bg-white text-accent py-2 px-4 rounded-lg hover:bg-gray-200 transition">
        {buttonText}
      </a>
    </div>
  );
};

export default CTABanner;
export { CTABanner };
