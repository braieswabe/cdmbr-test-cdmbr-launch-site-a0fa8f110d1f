import React from 'react';

const TestimonialCard = ({ name, feedback, rating }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">{name}</h3>
      <p>{feedback}</p>
      <p className="text-yellow-500">Rating: {rating} ⭐</p>
    </div>
  );
};

export default TestimonialCard;