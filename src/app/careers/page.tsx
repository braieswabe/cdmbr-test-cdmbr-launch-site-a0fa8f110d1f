"use client";

import { useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import FeatureCard from '@/components/FeatureCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    description: 'Join our dynamic team to create engaging user interfaces and enhance user experiences. Proficiency in React and TypeScript is a must.',
  },
  {
    title: 'Backend Developer',
    description: 'We are looking for a Backend Developer to build robust server-side applications. Experience with Node.js and RESTful APIs is essential.',
  },
  {
    title: 'UI/UX Designer',
    description: 'Help us design intuitive and beautiful interfaces. A strong portfolio and experience with design tools are required.',
  },
];

const CareersPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Join Our Team" subtitle="Where innovation meets collaboration" />
      
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, index) => (
            <FeatureCard key={index} title={job.title} description={job.description} />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
        <p className="mb-4">
          At our company, we believe in fostering a collaborative and inclusive environment. Our team thrives on creativity, innovation, and mutual respect.
        </p>
        <p>
          We offer flexible working hours, remote work options, and a strong focus on work-life balance. Join us to be part of a community that values your contributions.
        </p>
      </section>

      <CTABanner 
        title="Ready to make an impact?" 
        subtitle="Apply now and start your journey with us!" 
        buttonText="View Openings" 
        buttonLink="/careers" 
      />

      <Footer />
    </div>
  );
};

export default CareersPage;