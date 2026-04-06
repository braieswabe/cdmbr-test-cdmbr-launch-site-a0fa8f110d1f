import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero, Footer, NavBar } from '@/components';
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="About Us" subtitle="Learn more about our mission and values." />
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg">
          Founded in 2020, we set out to revolutionize the tech industry with innovative solutions that empower businesses to thrive.
        </p>
      </section>
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          Our mission is to provide cutting-edge technology solutions that drive efficiency and growth for our clients.
        </p>
      </section>
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Integrity</h3>
            <p>We uphold the highest standards of honesty and transparency.</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p>We embrace change and continuously seek new ways to improve.</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <p>We believe in the power of teamwork and collective success.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Placeholder for team member profiles */}
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <img src="/images/team1.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p>CEO</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <img src="/images/team2.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold">Bob Lee</h3>
            <p>CTO</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <img src="/images/team3.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold">Cathy Brown</h3>
            <p>CMO</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <img src="/images/team4.jpg" alt="Team Member" className="rounded-full w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold">David Wilson</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;