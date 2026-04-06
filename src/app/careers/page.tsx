import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn more about careers",
};

```typescript
import { useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import ServiceCard from '@/components/ServiceCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    description: 'Join our dynamic team to create user-friendly web applications using React and Next.js.',
  },
  {
    title: 'Backend Developer',
    description: 'Help us build robust server-side applications and APIs using Node.js and TypeScript.',
  },
  {
    title: 'UI/UX Designer',
    description: 'Design intuitive interfaces and enhance user experiences across our platforms.',
  },
];

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero title="Join Our Team" subtitle="We're looking for talented individuals!" />
      
      <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, index) => (
            <ServiceCard key={index} title={job.title} description={job.description} />
          ))}
        </div>
      </section>

      <section className="py-12 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-4">Our Company Culture</h2>
        <p className="max-w-2xl mx-auto text-center mb-6">
          At our company, we believe in fostering a collaborative and inclusive environment. 
          We value creativity, innovation, and the well-being of our team members. 
          Join us for team-building activities, flexible work hours, and a commitment to professional growth.
        </p>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">Why Work With Us?</h2>
        <p className="max-w-2xl mx-auto text-center mb-6">
          We offer competitive salaries, comprehensive benefits, and opportunities for advancement. 
          Our team is passionate about technology and dedicated to making a positive impact in our industry.
        </p>
      </section>

      <CTABanner 
        title="Ready to take the next step in your career?"
        buttonText="Apply Now"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default CareersPage;
```