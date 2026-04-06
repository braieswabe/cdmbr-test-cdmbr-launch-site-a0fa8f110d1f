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
        title="Transform Your Business with Our Solutions"
        subtitle="Innovative tools designed to streamline your operations."
        cta1Text="Get Started"
        cta1Link="/signup"
        cta2Text="Learn More"
        cta2Link="/services"
      />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="User-Friendly Interface" description="Navigate seamlessly with our intuitive design." />
          <FeatureCard title="Real-Time Analytics" description="Make informed decisions with up-to-date data." />
          <FeatureCard title="24/7 Support" description="We're here for you anytime, day or night." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard name="Jane Doe" quote="This service has transformed how we operate!" />
          <TestimonialCard name="John Smith" quote="Exceptional support and results-driven solutions." />
          <TestimonialCard name="Emily Johnson" quote="Highly recommend for any business looking to grow." />
        </div>
      </section>
      <CTABanner
        title="Ready to Elevate Your Business?"
        subtitle="Join us today and experience the difference."
        ctaText="Sign Up Now"
        ctaLink="/signup"
      />
    </main>
  );
};

export default HomePage;