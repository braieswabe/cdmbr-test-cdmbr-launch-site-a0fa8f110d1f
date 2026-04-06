import { FC } from 'react';

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

export const BlogPostPreview: FC<BlogPostPreviewProps> = ({ title, excerpt, date, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{excerpt}</p>
      <p className="mt-1 text-gray-400 text-sm">{date}</p>
      <a href={link} className="mt-4 inline-block text-accent hover:underline">
        Read More
      </a>
    </div>
  );
};

export default BlogPostPreview;
