import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero, CTABanner, FeatureCard, TestimonialCard } from '@/components';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero 
        title="Transform Your Business with Our Solutions" 
        subtitle="Empowering you to achieve more with innovative technology."
        cta1Text="Get Started"
        cta1Link="/contact"
        cta2Text="Learn More"
        cta2Link="/services"
      />
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Our Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="User-Friendly Interface" description="Intuitive design that simplifies your workflow." />
          <FeatureCard title="24/7 Support" description="We're here to help you anytime, anywhere." />
          <FeatureCard title="Secure & Reliable" description="Your data is safe with our top-notch security." />
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Jane Doe" 
            testimonial="This service has transformed the way we operate. Highly recommend!" 
          />
          <TestimonialCard 
            name="John Smith" 
            testimonial="Exceptional support and a fantastic product. A game changer for us!" 
          />
          <TestimonialCard 
            name="Emily Johnson" 
            testimonial="The best decision we've made for our business. Thank you!" 
          />
        </div>
      </section>
      <CTABanner 
        title="Ready to Elevate Your Business?" 
        ctaText="Contact Us Today" 
        ctaLink="/contact" 
      />
    </main>
  );
};

export default HomePage;