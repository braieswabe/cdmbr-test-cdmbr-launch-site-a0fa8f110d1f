import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Insights",
  description: "Learn more about our insights",
};

import { BlogPostPreview, NavBar, Footer } from '@/components';

const BlogPage = () => {
  const posts = [
    {
      title: 'Understanding the Basics of SaaS',
      excerpt: 'Explore the fundamental concepts of Software as a Service and how it can benefit your business.',
      date: 'October 1, 2023',
      category: 'SaaS',
      image: '/images/saas-basics.jpg',
    },
    {
      title: 'Top 5 Trends in Technology',
      excerpt: 'Stay ahead of the curve with these emerging technology trends that are shaping the future.',
      date: 'September 15, 2023',
      category: 'Technology',
      image: '/images/tech-trends.jpg',
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Insights</h1>
          <p className="mt-4 text-lg">Latest updates and articles from our team.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <span className="bg-gray-200 px-3 py-1 rounded">SaaS</span>
            <span className="bg-gray-200 px-3 py-1 rounded">Technology</span>
            <span className="bg-gray-200 px-3 py-1 rounded">Business</span>
            {/* Add more categories as needed */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;