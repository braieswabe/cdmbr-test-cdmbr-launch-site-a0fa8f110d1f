import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn more about blog",
};

```tsx
import { Hero, BlogPostCard, CTABanner } from '@/components';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Understanding SaaS: A Comprehensive Guide',
      excerpt: 'Dive into the world of Software as a Service and learn how it can benefit your business.',
      date: 'October 1, 2023',
      category: 'SaaS',
      image: '/images/saas-guide.jpg',
    },
    {
      title: '10 Tips for Effective Remote Work',
      excerpt: 'Maximize your productivity while working from home with these essential tips.',
      date: 'September 15, 2023',
      category: 'Productivity',
      image: '/images/remote-work.jpg',
    },
    {
      title: 'The Future of Cloud Computing',
      excerpt: 'Explore the trends and predictions shaping the future of cloud technology.',
      date: 'September 5, 2023',
      category: 'Cloud',
      image: '/images/cloud-computing.jpg',
    },
    // Add more blog posts as needed
  ];

  return (
    <main className="bg-gradient-to-b from-gray-100 to-white">
      <Hero title="Our Blog" subtitle="Insights and Updates" />
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
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
      <CTABanner title="Want to learn more?" buttonText="Subscribe to our Newsletter" />
    </main>
  );
};

export default BlogPage;
```