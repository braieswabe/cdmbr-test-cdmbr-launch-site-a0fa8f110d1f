```typescript
import { FC } from 'react';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```