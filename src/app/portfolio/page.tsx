import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { FC } from 'react';
import { Hero, CTABanner, PortfolioItem, NavBar, Footer } from '@/components';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with integrated payment solutions.',
    tags: ['E-commerce', 'Web Development', 'React'],
    imageUrl: '/images/ecommerce.jpg',
  },
  {
    title: 'Social Media App',
    description: 'A social media application that connects users with similar interests.',
    tags: ['Mobile App', 'React Native', 'Social Networking'],
    imageUrl: '/images/social-media.jpg',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing creative work and projects.',
    tags: ['Web Design', 'Personal Branding', 'HTML/CSS'],
    imageUrl: '/images/portfolio.jpg',
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform with user-generated content and community features.',
    tags: ['Content Management', 'Web Development', 'Node.js'],
    imageUrl: '/images/blog.jpg',
  },
  {
    title: 'Corporate Intranet',
    description: 'An internal communication platform for corporate teams.',
    tags: ['Intranet', 'Web Development', 'Collaboration'],
    imageUrl: '/images/intranet.jpg',
  },
  {
    title: 'Online Learning System',
    description: 'A comprehensive online learning management system for educational institutions.',
    tags: ['E-learning', 'Web Development', 'Education'],
    imageUrl: '/images/learning.jpg',
  },
];

const PortfolioPage: FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Our Portfolio" subtitle="Showcasing our success stories" />
      <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default PortfolioPage;