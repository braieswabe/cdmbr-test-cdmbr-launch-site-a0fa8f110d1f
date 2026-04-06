import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Learn more about features",
};

import { Hero } from '@/components/Hero';
import { CTABanner } from '@/components/CTABanner';
import { FeatureCard } from '@/components/FeatureCard';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero title="Explore Our Features" subtitle="Discover how our software can transform your workflow!" />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Feature Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our software is designed with you in mind. Here’s a closer look at the powerful features that set us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Real-Time Collaboration" description="Work together with your team in real-time, no matter where you are." />
            <FeatureCard title="Advanced Analytics" description="Gain insights into your data with our powerful analytics tools." />
            <FeatureCard title="Customizable Dashboards" description="Tailor your dashboard to fit your unique workflow and preferences." />
            <FeatureCard title="Seamless Integrations" description="Connect with your favorite tools and streamline your processes." />
            <FeatureCard title="Robust Security" description="Keep your data safe with our industry-leading security measures." />
            <FeatureCard title="24/7 Support" description="Our dedicated support team is here to help you whenever you need it." />
          </div>
        </div>
      </section>

      <CTABanner title="Ready to experience our features?" buttonText="Get Started" buttonLink="#" />

      <Footer />
    </div>
  );
};

export default FeaturesPage;