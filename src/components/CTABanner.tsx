import React from 'react';

export type CTABannerProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const CTABanner: React.FC<CTABannerProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="cta-banner">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{description}</p>
      <a href={buttonLink} className="btn">
        {buttonText}
      </a>
    </div>
  );
};

export default CTABanner;