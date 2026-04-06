import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <p className="italic">"{quote}"</p>
      <p className="mt-2 font-semibold">- {author}</p>
    </div>
  );
};

export default TestimonialCard;