import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { FC } from 'react';
import { Hero, ProjectCard, CTABanner, NavBar, Footer } from '@/components';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A comprehensive solution for managing tasks efficiently.',
    tags: ['Productivity', 'Web App'],
    image: '/images/project-alpha.jpg',
  },
  {
    title: 'Project Beta',
    description: 'An innovative platform for connecting freelancers with clients.',
    tags: ['Marketplace', 'Web App'],
    image: '/images/project-beta.jpg',
  },
  {
    title: 'Project Gamma',
    description: 'A cutting-edge e-commerce website that boosts sales.',
    tags: ['E-commerce', 'Web App'],
    image: '/images/project-gamma.jpg',
  },
  {
    title: 'Project Delta',
    description: 'A mobile app designed to enhance user engagement.',
    tags: ['Mobile', 'App'],
    image: '/images/project-delta.jpg',
  },
  {
    title: 'Project Epsilon',
    description: 'A robust CRM system tailored for small businesses.',
    tags: ['CRM', 'Web App'],
    image: '/images/project-epsilon.jpg',
  },
  {
    title: 'Project Zeta',
    description: 'An educational platform that makes learning fun.',
    tags: ['Education', 'Web App'],
    image: '/images/project-zeta.jpg',
  },
];

const PortfolioPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Our Portfolio" subtitle="Showcasing our successful projects" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </section>
      <CTABanner
        title="Ready to start your project?"
        subtitle="Contact us today to discuss your needs."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
      <Footer />
    </main>
  );
};

export default PortfolioPage;