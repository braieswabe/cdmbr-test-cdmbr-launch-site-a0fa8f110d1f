import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import { NavBar } from '@/components/NavBar';
import { FeatureCard } from '@/components/FeatureCard';
import { CTABanner } from '@/components/CTABanner';
import { Footer } from '@/components/Footer';

const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <p className="mb-8">We offer a range of services designed to help your business succeed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Consulting" description="Expert advice to optimize your business strategy." />
            <FeatureCard title="Software Development" description="Custom software solutions tailored to your needs." />
            <FeatureCard title="Digital Marketing" description="Boost your online presence with our marketing strategies." />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How We Work</h2>
          <ol className="list-decimal pl-5 mb-8">
            <li className="mb-2">Understand your needs through consultation.</li>
            <li className="mb-2">Develop a tailored strategy for your business.</li>
            <li className="mb-2">Implement solutions with our expert team.</li>
            <li className="mb-2">Monitor progress and optimize as needed.</li>
            <li className="mb-2">Provide ongoing support and updates.</li>
          </ol>
          <p>If you’re interested in learning more about our services, feel free to reach out!</p>
        </div>
      </section>
      <CTABanner 
        title="Get in Touch"
        description="Ready to take the next step? Contact us today!"
        ctaText="Contact Us"
        ctaLink="/contact"
      />
      <Footer />
    </>
  );
};

export default ServicesPage;