import React from 'react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, excerpt, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
      <span className="text-gray-400">{date}</span>
    </div>
  );
};