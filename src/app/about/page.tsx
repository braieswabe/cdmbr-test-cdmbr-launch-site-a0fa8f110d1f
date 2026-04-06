import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero, CTABanner } from '@/components';
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="About Us" subtitle="Learn more about our mission and values." />
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg">
          Founded in 2020, our company was born out of a passion for innovation and a desire to help businesses thrive in a digital world. 
          Our mission is to provide cutting-edge solutions that empower our clients to achieve their goals.
        </p>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🌟</span>
            <p>Integrity: We believe in doing the right thing, always.</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl mr-4">🤝</span>
            <p>Collaboration: Together, we can achieve more.</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl mr-4">🚀</span>
            <p>Innovation: We embrace change and strive for excellence.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Placeholder for team member profiles */}
          <div className="flex flex-col items-center">
            <img src="/images/team-member1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="font-semibold">Alice Brown</h3>
            <p>CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team-member2.jpg" alt="Team Member 2" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="font-semibold">Bob White</h3>
            <p>CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team-member3.jpg" alt="Team Member 3" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="font-semibold">Charlie Green</h3>
            <p>CMO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/team-member4.jpg" alt="Team Member 4" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="font-semibold">Diana Blue</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
      <CTABanner 
        title="Join Us in Our Journey" 
        ctaText="Explore Opportunities" 
        ctaLink="/careers" 
      />
    </main>
  );
};

export default AboutPage;