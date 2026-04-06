import React from 'react';

interface TestimonialCardProps {
  name: string;
  feedback: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, feedback, rating }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="font-semibold">{name}</h3>
      <p>{feedback}</p>
      <p className="text-yellow-500">Rating: {rating} ★</p>
    </div>
  );
};

export default TestimonialCard;