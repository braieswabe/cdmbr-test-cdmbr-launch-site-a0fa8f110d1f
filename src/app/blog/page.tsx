import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn more about blog",
};

import Hero from '@/components/Hero';
import BlogPostPreview from '@/components/BlogPostPreview';
import CTABanner from '@/components/CTABanner';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Understanding SaaS: A Comprehensive Guide',
      excerpt: 'Explore the ins and outs of Software as a Service and how it can benefit your business.',
      date: 'October 1, 2023',
      category: 'SaaS',
      image: '/images/saas-guide.jpg',
    },
    {
      title: 'Top 10 Tips for Effective Remote Work',
      excerpt: 'Maximize your productivity while working from home with these essential tips.',
      date: 'September 15, 2023',
      category: 'Remote Work',
      image: '/images/remote-work-tips.jpg',
    },
    {
      title: 'The Future of Technology: Trends to Watch',
      excerpt: 'Stay ahead of the curve by understanding the upcoming trends in technology.',
      date: 'September 5, 2023',
      category: 'Technology',
      image: '/images/technology-trends.jpg',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="space-y-10">
      <Hero title="Our Blog" subtitle="Insights and updates from our team." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostPreview
            key={post.title}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            category={post.category}
            image={post.image}
          />
        ))}
      </div>
      <CTABanner />
    </div>
  );
};

export default BlogPage;