import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Learn more about our blog",
};

import BlogPostPreview from '@/components/BlogPostPreview';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const BlogPage = () => {
  const posts = [
    {
      title: 'Understanding the Basics of SaaS',
      excerpt: 'Explore the fundamental concepts of Software as a Service and how it can benefit your business.',
      date: 'September 15, 2023',
      category: 'SaaS',
      image: '/images/saas-basics.jpg',
    },
    {
      title: 'Maximizing Your Productivity with Tools',
      excerpt: 'Learn about the best tools to enhance your productivity and streamline your workflow.',
      date: 'September 10, 2023',
      category: 'Productivity',
      image: '/images/productivity-tools.jpg',
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600">Insights and knowledge from our experts.</p>
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
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li><a href="/blog/saas" className="text-blue-500 hover:underline">SaaS</a></li>
            <li><a href="/blog/productivity" className="text-blue-500 hover:underline">Productivity</a></li>
            <li><a href="/blog/technology" className="text-blue-500 hover:underline">Technology</a></li>
            {/* Add more categories as needed */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;