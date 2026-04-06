"use client";

import { useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    description: 'Join our dynamic team to build responsive and engaging user interfaces. Experience with React and TypeScript is a plus.',
  },
  {
    title: 'Backend Developer',
    description: 'We are looking for a skilled backend developer to help us scale our applications. Proficiency in Node.js and database management is required.',
  },
  {
    title: 'Product Manager',
    description: 'Lead our product development efforts and collaborate with cross-functional teams to deliver exceptional products.',
  },
];

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero title="Join Our Team" subtitle="Explore exciting career opportunities with us!" />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Current Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <FeatureCard key={index} title={job.title} description={job.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Company Culture</h2>
          <p className="text-lg mb-4">
            At our company, we believe in fostering a collaborative and inclusive environment. Our team is passionate about innovation and creativity, and we value every voice.
          </p>
          <p className="text-lg">
            We offer flexible working hours, remote work options, and a comprehensive benefits package to ensure our employees feel valued and supported.
          </p>
        </div>
      </section>

      <CTABanner 
        title="Ready to make an impact?" 
        subtitle="Apply now and start your journey with us!" 
        buttonText="View Openings" 
        buttonLink="/careers" 
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have questions about a position or our company? We'd love to hear from you!
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;