import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Learn more about features",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero title="Discover Our Unique Features" subtitle="Transforming the way you work with innovative solutions!" />

      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Feature Overview</h2>
        <p className="text-lg text-gray-700 mb-6">Our product is designed with you in mind. Each feature is crafted to enhance productivity, streamline processes, and deliver exceptional results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with our real-time collaboration tools that keep your team connected." />
          <FeatureCard title="Advanced Analytics" description="Gain insights into your performance with our powerful analytics dashboard." />
          <FeatureCard title="Customizable Workflows" description="Tailor your workflows to fit your unique needs and preferences." />
        </div>
      </section>

      <section className="bg-gray-100 w-full py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6">Our commitment to quality and customer satisfaction sets us apart. We continuously innovate to ensure our product meets your evolving needs.</p>
          <p className="text-lg text-gray-700">Join thousands of satisfied customers who have transformed their workflows with our solution.</p>
        </div>
      </section>

      <CTABanner title="Experience the Difference!" subtitle="Start your free trial today and see the benefits for yourself!" buttonText="Get Started" buttonLink="/signup" />
      <Footer />
    </main>
  );
};

export default FeaturesPage;