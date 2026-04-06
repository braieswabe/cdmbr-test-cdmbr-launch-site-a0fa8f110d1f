import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero } from "@/components/Hero";

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="About Us" />
      <section className="py-12 px-4 max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2010, we started with a vision to simplify technology for businesses. Our mission is to empower organizations with tools that enhance productivity and foster growth.
        </p>
        <h3 className="text-xl font-semibold mb-2">Mission & Values</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center">
            <span className="text-4xl mr-4">🌟</span>
            <p>Innovation: We thrive on creativity and new ideas.</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl mr-4">🤝</span>
            <p>Integrity: We believe in honesty and transparency.</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl mr-4">💼</span>
            <p>Excellence: We strive for the highest quality in everything we do.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Placeholder images for team members */}
          <div className="text-center">
            <img src="/images/team1.jpg" alt="Team Member" className="rounded-full mb-2" />
            <h3 className="font-semibold">Alice Brown</h3>
            <p>CEO</p>
          </div>
          <div className="text-center">
            <img src="/images/team2.jpg" alt="Team Member" className="rounded-full mb-2" />
            <h3 className="font-semibold">Bob White</h3>
            <p>CTO</p>
          </div>
          <div className="text-center">
            <img src="/images/team3.jpg" alt="Team Member" className="rounded-full mb-2" />
            <h3 className="font-semibold">Charlie Green</h3>
            <p>CMO</p>
          </div>
          <div className="text-center">
            <img src="/images/team4.jpg" alt="Team Member" className="rounded-full mb-2" />
            <h3 className="font-semibold">Diana Blue</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;