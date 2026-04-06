"use client";

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { CTABanner } from '@/components/CTABanner';
import { FeatureCard } from '@/components/FeatureCard';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    description: 'Join our dynamic team to create stunning user interfaces and enhance user experience.',
    requirements: 'Proficient in React, TypeScript, and Tailwind CSS.',
  },
  {
    title: 'Backend Developer',
    description: 'Help us build robust server-side applications and APIs that power our platform.',
    requirements: 'Experience with Node.js and database management.',
  },
  {
    title: 'Product Designer',
    description: 'Shape the future of our products by designing intuitive and engaging user experiences.',
    requirements: 'Strong portfolio showcasing design skills and user-centered design principles.',
  },
];

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero 
        title="Join Our Team" 
        subtitle="Explore exciting career opportunities with us." 
      />
      
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, index) => (
            <FeatureCard key={index} title={job.title} description={job.description} />
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Company Culture</h2>
          <p className="text-lg mb-4">
            At our company, we foster a culture of collaboration, innovation, and respect. We believe in empowering our employees to take ownership of their work and contribute to our mission.
          </p>
          <p className="text-lg">
            We offer flexible work arrangements, continuous learning opportunities, and a supportive environment that encourages personal and professional growth.
          </p>
        </div>
      </section>

      <CTABanner 
        title="Ready to take the next step in your career?"
        description="Apply now and become a part of our amazing team!"
        buttonText="View Openings"
        buttonLink="/careers"
      />

      <Footer />
    </div>
  );
};

export default CareersPage;