import { FC } from 'react';

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  link: string;
}

const BlogPostPreview: FC<BlogPostPreviewProps> = ({ title, excerpt, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{excerpt}</p>
      <a href={link} className="mt-4 inline-block text-accent hover:underline">
        Read More
      </a>
    </div>
  );
};

export { BlogPostPreview };

export function BlogPostPreview() {
  return <div>BlogPostPreview</div>;
}

export default BlogPostPreview;
