import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";

const ServicesPage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero title="Our Services" />
      <section className="py-12 px-4 max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Consulting" description="Expert advice to guide your business strategy." />
          <FeatureCard title="Development" description="Custom software solutions tailored to your needs." />
          <FeatureCard title="Support" description="Ongoing support to ensure your success." />
          <FeatureCard title="Training" description="Empower your team with our training programs." />
          <FeatureCard title="Integration" description="Seamless integration with existing systems." />
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
        <p className="mb-4">
          Discover how we've helped businesses like yours achieve their goals through our tailored services.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for case studies */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Alpha</h3>
            <p>Increased efficiency by 30% for a leading retail brand.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Beta</h3>
            <p>Streamlined operations for a tech startup, reducing costs by 20%.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Gamma</h3>
            <p>Enhanced customer engagement for a service provider, boosting sales by 50%.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;