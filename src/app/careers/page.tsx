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
    location: 'Remote',
    description: 'Join our team to create stunning user interfaces and enhance user experience.',
    link: '#apply-frontend',
  },
  {
    title: 'Backend Developer',
    location: 'On-site - New York',
    description: 'Work on our backend systems and APIs to support our growing applications.',
    link: '#apply-backend',
  },
  {
    title: 'Product Manager',
    location: 'Remote',
    description: 'Lead product development and strategy to drive our vision forward.',
    link: '#apply-product-manager',
  },
];

export default function CareersPage() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Join Our Team" subtitle="We're looking for talented individuals to help us grow." />
      
      <section className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-semibold mb-4">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job) => (
            <FeatureCard key={job.title} title={job.title} description={job.description} link={job.link} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Our Company Culture</h2>
        <p className="mb-4">
          At our company, we foster a collaborative and innovative environment where every team member's voice is heard. 
          We believe in work-life balance, continuous learning, and celebrating our successes together.
        </p>
        <p>
          We offer competitive salaries, flexible working hours, and opportunities for professional growth. 
          Join us to be part of a team that values creativity and teamwork!
        </p>
      </section>

      <CTABanner 
        title="Ready to take the next step in your career?" 
        subtitle="Apply now and become part of our dynamic team!" 
        buttonText="View Job Openings" 
        buttonLink="#job-openings" 
      />

      <section className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}