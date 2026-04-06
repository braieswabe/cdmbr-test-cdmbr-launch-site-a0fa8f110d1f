import { FC } from 'react';

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

export const BlogPostPreview: FC<BlogPostPreviewProps> = ({ title, excerpt, date, link }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
      <p className="text-gray-400 text-sm">{date}</p>
      <a href={link} className="text-primary hover:underline">Read more</a>
    </div>
  );
};