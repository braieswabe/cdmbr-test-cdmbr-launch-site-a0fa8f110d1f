import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn more about blog",
};

import { BlogPostCard, NavBar, Footer, Hero } from '@/components';

const BlogPage = () => {
  const posts = [
    {
      title: 'Understanding the Basics of SaaS',
      excerpt: 'Explore the fundamental concepts of Software as a Service and how it can benefit your business.',
      date: 'October 10, 2023',
      category: 'SaaS',
      image: '/images/saas-basics.jpg',
    },
    {
      title: 'Top 5 Trends in Web Development',
      excerpt: 'Stay ahead of the curve with these emerging trends in web development for 2024.',
      date: 'October 15, 2023',
      category: 'Web Development',
      image: '/images/web-development-trends.jpg',
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Our Blog" subtitle="Insights, tips, and updates." />
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts.map(post => (
            <BlogPostCard
              key={post.title}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              image={post.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;