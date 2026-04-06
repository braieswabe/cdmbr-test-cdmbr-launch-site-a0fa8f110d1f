import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero } from '@/components/Hero';
import { CTABanner } from '@/components/CTABanner';
import { FeatureCard } from '@/components/FeatureCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero 
        headline="Transform Your Business Today"
        subtitle="Join us in revolutionizing your workflow with our innovative solutions."
        cta1Text="Get Started"
        cta1Link="/contact"
        cta2Text="Learn More"
        cta2Link="/services"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="User-Friendly Interface" description="Navigate effortlessly with our intuitive design." />
            <FeatureCard title="Robust Security" description="Your data is safe with our top-notch security protocols." />
            <FeatureCard title="24/7 Support" description="Our team is here to assist you anytime, anywhere." />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Jane Doe"
              position="CEO, Company A"
              testimonial="This service has transformed our operations. Highly recommend!"
              image="/images/jane.jpg"
            />
            <TestimonialCard 
              name="John Smith"
              position="CTO, Company B"
              testimonial="Exceptional quality and support. A game changer for our team."
              image="/images/john.jpg"
            />
            <TestimonialCard 
              name="Emily Johnson"
              position="Marketing Director, Company C"
              testimonial="The results speak for themselves. We couldn't be happier!"
              image="/images/emily.jpg"
            />
          </div>
        </div>
      </section>
      <CTABanner 
        title="Ready to Elevate Your Business?"
        description="Join us today and see the difference."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
      <Footer />
    </>
  );
};

export default HomePage;