import React from 'react';

interface MapProps {
  location: string;
}

export const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};