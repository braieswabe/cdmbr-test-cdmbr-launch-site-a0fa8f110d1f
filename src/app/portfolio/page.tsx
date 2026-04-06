import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { FC } from 'react';
import { Hero, CTABanner, FeatureCard, NavBar, Footer } from '@/components';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform with integrated payment solutions.',
    tags: ['E-commerce', 'Web Development'],
    image: '/images/ecommerce-platform.png',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing creative work and projects.',
    tags: ['Web Design', 'Portfolio'],
    image: '/images/portfolio-website.png',
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with user-friendly interface and SEO optimization.',
    tags: ['Blog', 'Web Development'],
    image: '/images/blog-platform.png',
  },
  {
    title: 'Corporate Website',
    description: 'A sleek corporate website designed for a leading tech company.',
    tags: ['Corporate', 'Web Design'],
    image: '/images/corporate-website.png',
  },
  {
    title: 'Mobile App',
    description: 'A cross-platform mobile application for managing tasks and projects.',
    tags: ['Mobile', 'App Development'],
    image: '/images/mobile-app.png',
  },
  {
    title: 'Landing Page',
    description: 'An engaging landing page for a new product launch.',
    tags: ['Landing Page', 'Marketing'],
    image: '/images/landing-page.png',
  },
];

const PortfolioPage: FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Our Work" subtitle="Showcasing our achievements and projects." />
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, index) => (
            <FeatureCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} />
          ))}
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-5">Notable Clients</h2>
        <div className="flex justify-center space-x-4">
          <img src="/images/client1.png" alt="Client 1" className="h-16" />
          <img src="/images/client2.png" alt="Client 2" className="h-16" />
          <img src="/images/client3.png" alt="Client 3" className="h-16" />
          <img src="/images/client4.png" alt="Client 4" className="h-16" />
        </div>
      </section>
      <CTABanner title="Ready to start your project?" buttonText="Contact Us" />
      <Footer />
    </div>
  );
};

export default PortfolioPage;