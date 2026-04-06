import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Learn more about our blog",
};

import { BlogPostPreview } from '@/components/BlogPostPreview';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const BlogPage = () => {
  const posts = [
    {
      title: 'Understanding the Future of SaaS',
      excerpt: 'Explore the trends shaping the future of Software as a Service...',
      date: 'October 1, 2023',
      category: 'SaaS',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Maximizing Productivity with Remote Work',
      excerpt: 'Learn how to enhance productivity while working remotely...',
      date: 'September 15, 2023',
      category: 'Productivity',
      image: '/images/blog2.jpg',
    },
    {
      title: 'The Importance of User Experience',
      excerpt: 'Discover why user experience is crucial for your product...',
      date: 'September 5, 2023',
      category: 'UX Design',
      image: '/images/blog3.jpg',
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights, updates, and stories from our industry.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogPostPreview
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              image={post.image}
            />
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">SaaS</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded">Productivity</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">UX Design</span>
            {/* Add more categories as needed */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;