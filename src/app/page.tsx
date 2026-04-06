import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero, CTABanner, FeatureCard, TestimonialCard, Footer, NavBar } from '@/components';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero 
        title="Transform Your Business with Our Solutions" 
        subtitle="Empowering you to achieve more with innovative technology." 
        cta1="Get Started" 
        cta2="Learn More" 
      />
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="User-Friendly" description="Intuitive design that enhances user experience." />
          <FeatureCard title="Scalable Solutions" description="Easily adapt to your growing business needs." />
          <FeatureCard title="24/7 Support" description="We're here to help you anytime, anywhere." />
        </div>
      </section>
      <section className="py-16 px-4 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex flex-col items-center">
          <TestimonialCard 
            name="Jane Doe" 
            feedback="This service transformed our workflow and increased our productivity!" 
          />
          <TestimonialCard 
            name="John Smith" 
            feedback="Exceptional support and a fantastic product!" 
          />
        </div>
      </section>
      <CTABanner 
        title="Ready to elevate your business?" 
        description="Join us today and start your journey towards success." 
        cta="Sign Up Now" 
      />
      <Footer />
    </main>
  );
};

export default HomePage;