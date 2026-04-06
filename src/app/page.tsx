import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero
        title="Empowering Your Business with Innovative Solutions"
        subtitle="Transforming ideas into reality with our expert services."
        cta1Text="Get Started"
        cta1Link="/contact"
        cta2Text="Learn More"
        cta2Link="/services"
      />
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Custom Solutions" description="Tailored services to meet your unique needs." />
          <FeatureCard title="Expert Team" description="A dedicated team of professionals at your service." />
          <FeatureCard title="24/7 Support" description="Always here to assist you, day or night." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard quote="This team transformed our business!" author="Jane Doe, CEO of TechCorp" />
          <TestimonialCard quote="Exceptional service and support." author="John Smith, Founder of StartUp" />
          <TestimonialCard quote="Highly recommend their services!" author="Emily Johnson, Marketing Director" />
        </div>
      </section>
      <CTABanner
        title="Ready to Elevate Your Business?"
        subtitle="Join us today and start your journey."
        ctaText="Sign Up Now"
        ctaLink="/contact"
      />
    </main>
  );
};

export default HomePage;