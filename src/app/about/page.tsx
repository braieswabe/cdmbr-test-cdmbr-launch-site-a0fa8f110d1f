import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero
        title="About Us"
        subtitle="Learn more about our mission and values."
      />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-lg text-center">
          Founded in 2020, we set out to revolutionize the industry with innovative solutions that empower businesses to thrive. Our commitment to excellence drives everything we do.
        </p>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Integrity" description="We uphold the highest standards of integrity in all our actions." />
          <FeatureCard title="Innovation" description="We strive to innovate and improve continuously." />
          <FeatureCard title="Customer Focus" description="Our customers are at the heart of everything we do." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team member profiles would be here */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">Alice Brown</h3>
            <p className="text-sm">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">Bob White</h3>
            <p className="text-sm">CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">Charlie Green</h3>
            <p className="text-sm">CMO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
            <h3 className="font-semibold">Diana Blue</h3>
            <p className="text-sm">CFO</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;