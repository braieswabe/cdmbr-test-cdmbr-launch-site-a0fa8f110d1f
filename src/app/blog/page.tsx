import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Learn more about our blog",
};

```typescript
import NavBar from '@/components/NavBar';
import BlogCard from '@/components/BlogCard';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const BlogPage = () => {
  const articles = [
    {
      title: 'Understanding the Future of SaaS',
      excerpt: 'Explore the trends shaping the future of Software as a Service.',
      date: 'March 10, 2023',
      category: 'Industry Insights',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Maximizing Your Productivity with SaaS Tools',
      excerpt: 'Learn how to leverage SaaS tools to boost your productivity.',
      date: 'February 5, 2023',
      category: 'Productivity',
      image: '/images/blog2.jpg',
    },
    // Add more articles as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-4 text-lg">
            Stay updated with the latest trends and insights in the industry.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <BlogCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              category={article.category}
              image={article.image}
            />
          ))}
        </section>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default BlogPage;
```