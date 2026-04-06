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
        title="Empower Your Business with Our Solutions"
        subtitle="Innovative tools designed to elevate your success."
        cta1Text="Get Started"
        cta1Link="/contact"
        cta2Text="Learn More"
        cta2Link="/services"
      />
      <section className="py-12 px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="User-Friendly Interface" description="Intuitive design that anyone can navigate." />
          <FeatureCard title="24/7 Support" description="We're here for you, day or night." />
          <FeatureCard title="Robust Security" description="Your data is safe with us." />
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Jane Doe"
            testimonial="This service transformed our workflow and increased our productivity!"
          />
          <TestimonialCard
            name="John Smith"
            testimonial="Exceptional support and a fantastic product. Highly recommend!"
          />
          <TestimonialCard
            name="Emily Johnson"
            testimonial="A game changer for our business. The team is amazing!"
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Take the Next Step?"
        subtitle="Join us today and unlock your potential."
        ctaText="Sign Up Now"
        ctaLink="/contact"
      />
    </main>
  );
};

export default HomePage;