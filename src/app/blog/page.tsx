import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Insights",
  description: "Learn more about our insights",
};

import { BlogPostCard, NavBar, Footer, CTABanner } from '@/components';

const BlogPage = () => {
  const recentPosts = [
    {
      title: 'Understanding SaaS: The Future of Software',
      excerpt: 'Explore the benefits of Software as a Service and how it’s transforming industries.',
      date: 'October 10, 2023',
      category: 'Industry Insights',
      imageUrl: '/images/saas-future.jpg',
    },
    {
      title: '5 Tips for Effective Remote Team Management',
      excerpt: 'Learn how to manage your remote team effectively with these actionable tips.',
      date: 'September 15, 2023',
      category: 'Management',
      imageUrl: '/images/remote-management.jpg',
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Insights</h1>
        <p className="text-lg text-center mb-4">
          Stay updated with our latest articles and insights on industry trends and best practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default BlogPage;