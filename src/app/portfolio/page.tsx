import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

```typescript
import { FC } from 'react';
import { Hero, FeatureCard, CTABanner, NavBar, Footer } from '@/components';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform that enhances user experience.',
    tags: ['E-commerce', 'Web Development'],
    image: '/images/ecommerce.jpg',
  },
  {
    title: 'Corporate Branding',
    description: 'Comprehensive branding solutions for a corporate client.',
    tags: ['Branding', 'Design'],
    image: '/images/branding.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'An intuitive mobile application for a local business.',
    tags: ['Mobile', 'App Development'],
    image: '/images/mobile-app.jpg',
  },
  {
    title: 'Portfolio Website',
    description: 'A stunning portfolio site for a creative professional.',
    tags: ['Web Design', 'Portfolio'],
    image: '/images/portfolio.jpg',
  },
  {
    title: 'Blog Platform',
    description: 'A user-friendly blog platform with SEO optimization.',
    tags: ['Blog', 'SEO'],
    image: '/images/blog.jpg',
  },
  {
    title: 'Landing Page',
    description: 'An engaging landing page that converts visitors into leads.',
    tags: ['Landing Page', 'Marketing'],
    image: '/images/landing-page.jpg',
  },
];

const PortfolioPage: FC = () => {
  return (
    <main className="bg-gray-50">
      <NavBar />
      <Hero title="Our Work" subtitle="Showcasing successful projects that drive results." />
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FeatureCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} />
          ))}
        </div>
      </section>
      <CTABanner title="Ready to start your project?" description="Contact us today to discuss your ideas!" />
      <Footer />
    </main>
  );
};

export default PortfolioPage;
```