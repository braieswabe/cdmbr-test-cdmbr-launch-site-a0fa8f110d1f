import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero } from '@/components/Hero';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero 
        headline="About Us"
        subtitle="Learn more about our mission and values."
      />
      <section className="my-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Our History</h2>
        <p className="mt-4">
          Founded in 2020, we set out to revolutionize the way businesses operate online. Our journey began with a simple idea: to create a platform that empowers users to achieve their goals effortlessly.
        </p>
      </section>
      <section className="my-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Our Mission</h2>
        <p className="mt-4">
          Our mission is to provide innovative solutions that enhance productivity and foster collaboration. We believe in transparency, integrity, and putting our customers first.
        </p>
      </section>
      <section className="my-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Our Values</h2>
        <ul className="mt-4 list-disc list-inside">
          <li>Integrity: We uphold the highest standards of honesty and accountability.</li>
          <li>Innovation: We continuously strive to improve and innovate.</li>
          <li>Customer Focus: Our customers are at the heart of everything we do.</li>
        </ul>
      </section>
      <section className="my-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {/* Placeholder for team member profiles */}
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">Alice Johnson</h3>
            <p>CEO</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">Bob Smith</h3>
            <p>CTO</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">Charlie Brown</h3>
            <p>CMO</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">Diana Prince</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;