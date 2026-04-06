import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn more about blog",
};

import Hero from '@/components/Hero';
import BlogPostCard from '@/components/BlogPostCard';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Understanding the Future of SaaS',
      excerpt: 'Explore the latest trends and predictions in the SaaS industry.',
      date: 'October 10, 2023',
      category: 'SaaS',
      image: '/images/blog1.jpg',
    },
    {
      title: '5 Tips for Effective Remote Work',
      excerpt: 'Learn how to maximize productivity while working from home.',
      date: 'October 5, 2023',
      category: 'Productivity',
      image: '/images/blog2.jpg',
    },
    // Add more blog posts as needed
  ];

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <Hero title="Our Insights" subtitle="Stay updated with the latest articles." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogPosts.map((post, index) => (
          <BlogPostCard 
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            category={post.category}
            image={post.image}
          />
        ))}
      </div>
      <aside className="mt-6 w-full md:w-1/4">
        <h2 className="text-lg font-bold">Categories</h2>
        <ul className="mt-2">
          <li><a href="#" className="text-blue-600">SaaS</a></li>
          <li><a href="#" className="text-blue-600">Productivity</a></li>
          <li><a href="#" className="text-blue-600">Technology</a></li>
        </ul>
      </aside>
    </main>
  );
};

export default BlogPage;