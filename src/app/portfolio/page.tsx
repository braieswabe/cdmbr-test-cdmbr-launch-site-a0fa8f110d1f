import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Learn more about portfolio",
};

import { FC } from 'react';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import CTABanner from '@/components/CTABanner';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with integrated payment solutions.',
    tags: ['E-commerce', 'Web Development', 'React'],
    imageUrl: '/images/ecommerce-project.jpg',
  },
  {
    title: 'Portfolio Site',
    description: 'A personal portfolio showcasing design and development skills.',
    tags: ['Portfolio', 'Web Design', 'Next.js'],
    imageUrl: '/images/portfolio-project.jpg',
  },
  {
    title: 'Blog Platform',
    description: 'A dynamic blog platform with user authentication and commenting features.',
    tags: ['Blog', 'Full Stack', 'Node.js'],
    imageUrl: '/images/blog-project.jpg',
  },
  {
    title: 'Corporate Website',
    description: 'A modern corporate website with a focus on user experience.',
    tags: ['Corporate', 'Web Development', 'UX/UI'],
    imageUrl: '/images/corporate-project.jpg',
  },
  {
    title: 'Social Media App',
    description: 'A social media application with real-time chat functionality.',
    tags: ['Social Media', 'React', 'Firebase'],
    imageUrl: '/images/social-media-project.jpg',
  },
  {
    title: 'Fitness Tracker',
    description: 'An application to track fitness goals and progress.',
    tags: ['Health', 'Mobile App', 'React Native'],
    imageUrl: '/images/fitness-project.jpg',
  },
];

const PortfolioPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Our Portfolio" subtitle="Showcasing our best work" />
      <section className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative rounded-lg shadow-lg overflow-hidden group">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <p className="mt-2 text-sm text-gray-300">{project.tags.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABanner 
        title="Ready to start your project?" 
        subtitle="Contact us today to discuss your ideas!" 
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
};

export default PortfolioPage;