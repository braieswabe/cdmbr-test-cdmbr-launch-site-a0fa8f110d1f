```typescript
import { FC } from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  link: string;
}

export const BlogCard: FC<BlogCardProps> = ({ title, excerpt, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{excerpt}</p>
      <a href={link} className="text-blue-600 hover:underline">Read more</a>
    </div>
  );
};
```