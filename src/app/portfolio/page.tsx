"use client";

import { useState } from 'react';
import { Hero, ProjectCard, CTABanner, NavBar, Footer } from '@/components';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A robust e-commerce solution that increased sales by 30%.',
    image: '/images/ecommerce.jpg',
    tags: ['E-commerce', 'Web Development', 'React'],
  },
  {
    id: 2,
    title: 'Mobile App for Fitness',
    description: 'A user-friendly mobile app that promotes healthy living.',
    image: '/images/fitness-app.jpg',
    tags: ['Mobile', 'App Development', 'Health'],
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'A modern corporate website that showcases company values.',
    image: '/images/corporate-website.jpg',
    tags: ['Web Design', 'Corporate', 'Branding'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A stunning portfolio site that highlights creative work.',
    image: '/images/portfolio.jpg',
    tags: ['Web Design', 'Creative', 'Portfolio'],
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A customizable blog platform for content creators.',
    image: '/images/blog-platform.jpg',
    tags: ['Web Development', 'Blog', 'CMS'],
  },
  {
    id: 6,
    title: 'Real Estate Application',
    description: 'An interactive platform for real estate listings.',
    image: '/images/real-estate.jpg',
    tags: ['Web Development', 'Real Estate', 'React'],
  },
];

const PortfolioPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Our Portfolio" subtitle="Showcasing Our Best Work" />
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <CTABanner 
        title="Ready to Start Your Project?" 
        description="Contact us today to discuss your ideas and get started!" 
        buttonText="Get in Touch" 
        buttonLink="/contact" 
      />
      <Footer />
    </div>
  );
};

export default PortfolioPage;