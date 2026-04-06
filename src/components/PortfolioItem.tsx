import { FC } from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1">{description}</p>
        <a href={link} className="mt-4 text-accent font-semibold">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;