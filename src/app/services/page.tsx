import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";

const ServicesPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero
        title="Our Services"
        subtitle="Discover how we can help you achieve your goals."
      />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Consulting" description="Expert advice to guide your business strategy." />
          <FeatureCard title="Development" description="Custom software solutions tailored to your needs." />
          <FeatureCard title="Marketing" description="Effective strategies to boost your online presence." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case studies would be here */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Alpha</h3>
            <p className="text-sm">A comprehensive solution that increased efficiency by 30%.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Beta</h3>
            <p className="text-sm">Revamped branding that led to a 50% increase in engagement.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Gamma</h3>
            <p className="text-sm">Implemented a new CRM system that improved customer satisfaction.</p>
          </div>
        </div>
      </section>
      <CTABanner
        title="Interested in Our Services?"
        subtitle="Contact us today to discuss your needs."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </main>
  );
};

export default ServicesPage;