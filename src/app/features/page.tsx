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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero title="Explore Our Features" subtitle="Discover how our product can transform your workflow." />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Feature List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Real-Time Collaboration" 
              description="Work together with your team in real-time, no matter where you are." 
            />
            <FeatureCard 
              title="Advanced Analytics" 
              description="Gain insights into your performance with our comprehensive analytics dashboard." 
            />
            <FeatureCard 
              title="Customizable Workflows" 
              description="Tailor your workflows to fit your unique processes and needs." 
            />
            <FeatureCard 
              title="Secure Cloud Storage" 
              description="Keep your data safe with our top-tier cloud storage solutions." 
            />
            <FeatureCard 
              title="24/7 Customer Support" 
              description="Get help whenever you need it with our dedicated support team." 
            />
            <FeatureCard 
              title="Mobile Accessibility" 
              description="Access your projects on the go with our mobile-friendly platform." 
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">User Benefits</h2>
          <p className="mb-4">
            Our features are designed with you in mind. By leveraging our platform, you can enhance productivity, streamline communication, and make informed decisions based on real-time data. 
          </p>
          <p>
            Experience the freedom of working smarter, not harder, and watch your projects thrive with our innovative solutions.
          </p>
        </div>
      </section>
      <CTABanner 
        title="Transform Your Workflow Today!" 
        subtitle="Start your free trial and experience our features firsthand." 
        buttonText="Get Started" 
        buttonLink="/signup" 
      />
      <Footer />
    </div>
  );
};

export default FeaturesPage;