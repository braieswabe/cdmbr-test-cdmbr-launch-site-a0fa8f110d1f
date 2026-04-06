import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { FC } from 'react';
import { Hero, ProjectCard, CTABanner, NavBar, Footer } from '@/components';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with integrated payment solutions.',
    tags: ['E-commerce', 'Web Development'],
    image: '/images/ecommerce.png',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing creative work and projects.',
    tags: ['Design', 'Web Development'],
    image: '/images/portfolio.png',
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with user-friendly features and SEO optimization.',
    tags: ['Blog', 'Content Management'],
    image: '/images/blog.png',
  },
  {
    title: 'Corporate Website',
    description: 'A corporate site designed for a tech startup with a focus on user experience.',
    tags: ['Corporate', 'Web Design'],
    image: '/images/corporate.png',
  },
  {
    title: 'Mobile App',
    description: 'A mobile application providing seamless user interaction and functionality.',
    tags: ['Mobile', 'App Development'],
    image: '/images/mobile-app.png',
  },
  {
    title: 'Landing Page',
    description: 'A high-converting landing page designed for a marketing campaign.',
    tags: ['Marketing', 'Web Design'],
    image: '/images/landing-page.png',
  },
];

const PortfolioPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Our Portfolio" subtitle="Showcasing our best work" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      <CTABanner title="Ready to start your project?" buttonText="Contact Us" />
      <Footer />
    </main>
  );
};

export default PortfolioPage;