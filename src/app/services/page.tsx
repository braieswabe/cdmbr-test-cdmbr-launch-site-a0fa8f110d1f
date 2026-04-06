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
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Web Development" description="Building responsive and user-friendly websites." />
          <FeatureCard title="Mobile App Development" description="Creating intuitive mobile applications." />
          <FeatureCard title="Digital Marketing" description="Boosting your online presence through effective strategies." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">E-commerce Platform</h3>
            <p>Developed a fully functional e-commerce platform that increased sales by 30%.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Mobile App for Fitness</h3>
            <p>Created a mobile app that helped users track their fitness goals effectively.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">SEO Optimization</h3>
            <p>Implemented SEO strategies that improved website traffic by 50%.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;