import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { Hero, CTABanner, FeatureCard } from '@/components';
import { FC } from 'react';

const ServicesPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Our Services" subtitle="Discover how we can help you." />
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-10">Service Overview</h2>
        <p className="text-lg mb-6">
          We offer a range of services designed to meet the unique needs of your business. 
          Our solutions are tailored to help you succeed in a competitive landscape.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Consulting" description="Expert advice to guide your strategy." />
          <FeatureCard title="Development" description="Custom software solutions tailored to your needs." />
          <FeatureCard title="Marketing" description="Comprehensive strategies to boost your visibility." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold mb-10">Our Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Discovery: Understanding your needs and goals.</li>
          <li>Planning: Crafting a tailored strategy for success.</li>
          <li>Execution: Implementing the plan with precision.</li>
          <li>Review: Analyzing results and optimizing for improvement.</li>
          <li>Support: Ongoing assistance to ensure your success.</li>
        </ol>
      </section>
      <CTABanner 
        title="Ready to Get Started?" 
        ctaText="Contact Us" 
        ctaLink="/contact" 
      />
    </main>
  );
};

export default ServicesPage;