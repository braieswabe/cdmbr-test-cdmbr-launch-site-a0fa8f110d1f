```typescript
import React from 'react';

interface TestimonialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <p>{description}</p>
    </div>
  );
};