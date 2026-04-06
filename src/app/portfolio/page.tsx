import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { FC } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import FeatureCard from '@/components/FeatureCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application that streamlines business processes.',
    tags: ['Web Development', 'SaaS'],
    imageUrl: '/images/project-alpha.jpg',
  },
  {
    title: 'Project Beta',
    description: 'An innovative mobile app designed for productivity.',
    tags: ['Mobile Development', 'Productivity'],
    imageUrl: '/images/project-beta.jpg',
  },
  {
    title: 'Project Gamma',
    description: 'A robust e-commerce platform with seamless user experience.',
    tags: ['E-commerce', 'UX/UI'],
    imageUrl: '/images/project-gamma.jpg',
  },
  {
    title: 'Project Delta',
    description: 'A data analytics tool that provides actionable insights.',
    tags: ['Data Science', 'Analytics'],
    imageUrl: '/images/project-delta.jpg',
  },
  {
    title: 'Project Epsilon',
    description: 'A social networking site that connects like-minded individuals.',
    tags: ['Social Media', 'Community'],
    imageUrl: '/images/project-epsilon.jpg',
  },
  {
    title: 'Project Zeta',
    description: 'A comprehensive learning management system for educational institutions.',
    tags: ['Education', 'E-learning'],
    imageUrl: '/images/project-zeta.jpg',
  },
];

const PortfolioPage: FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Our Portfolio" subtitle="Showcasing our successful projects" />
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FeatureCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} tags={project.tags} />
          ))}
        </div>
      </section>
      <CTABanner title="Ready to start your project?" subtitle="Contact us today to discuss your needs." />
      <Footer />
    </div>
  );
};

export default PortfolioPage;