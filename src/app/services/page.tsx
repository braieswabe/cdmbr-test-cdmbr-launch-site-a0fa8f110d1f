import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { Hero } from '@/components/Hero';
import { CTABanner } from '@/components/CTABanner';
import { FeatureCard } from '@/components/FeatureCard';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const services = [
  { title: 'Consulting', description: 'Expert advice to help you navigate your business challenges.', icon: '🧑‍💼' },
  { title: 'Development', description: 'Custom software solutions tailored to your needs.', icon: '💻' },
  { title: 'Marketing', description: 'Strategies to boost your online presence and engagement.', icon: '📈' },
];

const OurServicesPage = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero 
        headline="Our Services"
        subtitle="Discover how we can help you succeed."
      />
      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <FeatureCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </section>
      <section className="my-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Our Process</h2>
        <ol className="list-decimal list-inside mt-4">
          <li>Consultation: We understand your needs and goals.</li>
          <li>Planning: We create a tailored strategy for your project.</li>
          <li>Execution: Our team implements the plan with precision.</li>
          <li>Review: We assess the outcomes and make necessary adjustments.</li>
          <li>Support: We provide ongoing support to ensure success.</li>
        </ol>
      </section>
      <CTABanner 
        title="Interested in our services?"
        cta="Contact Us"
      />
      <Footer />
    </main>
  );
};

export default OurServicesPage;