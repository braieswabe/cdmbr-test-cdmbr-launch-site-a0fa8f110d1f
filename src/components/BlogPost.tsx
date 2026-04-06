import { FC } from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const BlogPost: FC<BlogPostProps> = ({ title, excerpt, date, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{excerpt}</p>
      <span className="text-gray-500">{date}</span>
      <a href={link} className="text-accent hover:underline">Read more</a>
    </div>
  );
};

export default BlogPost;