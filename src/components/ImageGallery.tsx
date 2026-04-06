import { FC } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow">
          <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};