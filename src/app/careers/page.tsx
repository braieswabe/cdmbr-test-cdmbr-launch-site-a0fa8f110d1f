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
    description: 'Join our dynamic team to create engaging user interfaces and enhance user experiences. Proficiency in React and TypeScript is required.',
  },
  {
    title: 'Backend Developer',
    description: 'We are looking for a Backend Developer to build and maintain our server-side applications. Experience with Node.js and database management is a must.',
  },
  {
    title: 'Product Designer',
    description: 'Help us design intuitive and beautiful products. We seek a creative mind with a strong portfolio and experience in UX/UI design.',
  },
];

const CareersPage = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Join Our Team" subtitle="Explore exciting career opportunities" />

      <section className="max-w-4xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Current Job Openings</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <FeatureCard key={index} title={job.title} description={job.description} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl px-4 py-12 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Our Company Culture</h2>
        <p className="mb-4">
          At our company, we believe in fostering an inclusive and collaborative environment. We value creativity, innovation, and teamwork. Our team enjoys flexible working hours, remote work options, and regular team-building activities.
        </p>
        <p>
          We prioritize professional development and offer opportunities for continuous learning through workshops and training sessions. Join us and be part of a culture that values your growth!
        </p>
      </section>

      <CTABanner
        title="Ready to take the next step?"
        subtitle="Apply now and join a team that values your skills and creativity."
        buttonText="View Job Openings"
        buttonLink="/careers"
      />

      <Footer />
    </main>
  );
};

export default CareersPage;