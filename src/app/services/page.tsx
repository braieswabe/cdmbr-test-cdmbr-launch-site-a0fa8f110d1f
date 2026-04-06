import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { Hero, FeatureCard, CTABanner, Footer, NavBar } from '@/components';
import { FC } from 'react';

const ServicesPage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Our Services" subtitle="Discover how we can help you succeed." />
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Consulting" description="Expert advice tailored to your business needs." />
          <FeatureCard title="Development" description="Custom software solutions that drive results." />
          <FeatureCard title="Support" description="Ongoing assistance to ensure your success." />
        </div>
      </section>
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Our Process</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Initial Consultation</li>
          <li>Project Planning</li>
          <li>Development Phase</li>
          <li>Testing & Quality Assurance</li>
          <li>Launch & Support</li>
        </ol>
      </section>
      <CTABanner 
        title="Interested in our services?" 
        description="Contact us today to discuss your project." 
        cta="Get in Touch" 
      />
      <Footer />
    </main>
  );
};

export default ServicesPage;