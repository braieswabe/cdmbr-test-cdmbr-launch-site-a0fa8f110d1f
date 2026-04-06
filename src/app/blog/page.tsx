import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Learn more about our blog",
};

import { BlogPost } from '@/components';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Understanding the Future of SaaS',
      excerpt: 'Explore the trends shaping the future of Software as a Service...',
      date: 'October 1, 2023',
      category: 'SaaS',
    },
    {
      id: 2,
      title: '5 Tips for Effective Remote Work',
      excerpt: 'Remote work is here to stay. Here are five tips to enhance productivity...',
      date: 'September 15, 2023',
      category: 'Productivity',
    },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <p className="text-lg text-center mb-12">
        Stay updated with our latest insights and articles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-12">Categories</h2>
      <div className="flex flex-wrap mt-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2">SaaS</span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2">Productivity</span>
        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default BlogPage;