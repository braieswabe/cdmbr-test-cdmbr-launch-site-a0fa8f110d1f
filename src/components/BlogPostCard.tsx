import { FC } from 'react';

interface BlogPostCardProps {
  title: string;
  summary: string;
  date: string;
}

export const BlogPostCard: FC<BlogPostCardProps> = ({ title, summary, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{summary}</p>
      <p className="mt-4 text-gray-500">{date}</p>
    </div>
  );
};