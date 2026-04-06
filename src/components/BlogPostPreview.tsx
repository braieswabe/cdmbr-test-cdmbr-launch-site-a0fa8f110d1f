import { FC } from 'react';

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const BlogPostPreview: FC<BlogPostPreviewProps> = ({ title, excerpt, date, link }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{excerpt}</p>
      <p className="mt-1 text-gray-400 text-sm">{date}</p>
      <a href={link} className="mt-4 text-primary font-semibold">Read More</a>
    </div>
  );
};

export default BlogPostPreview;