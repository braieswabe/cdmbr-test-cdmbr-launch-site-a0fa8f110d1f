```tsx
import { Hero, CTABanner, FeatureCard, TestimonialCard, NavBar, Footer } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Our Professional Services',
  description: 'Providing top-notch solutions tailored to your needs.',
};

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Hero
        title="Transform Your Business with Our Expertise"
        subtitle="Innovative solutions designed to elevate your success."
        cta1Text="Get Started"
        cta1Link="/contact"
        cta2Text="Learn More"
        cta2Link="/services"
      />
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard title="Expert Team" description="Our team consists of industry leaders." />
          <FeatureCard title="Tailored Solutions" description="Custom solutions for every business." />
          <FeatureCard title="24/7 Support" description="We're here for you, day and night." />
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex flex-col items-center">
          <TestimonialCard
            name="Jane Doe"
            quote="This service transformed our operations!"
            image="/images/jane.jpg"
          />
          <TestimonialCard
            name="John Smith"
            quote="Exceptional quality and support throughout."
            image="/images/john.jpg"
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Elevate Your Business?"
        description="Join us today and start your journey towards success."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
      <Footer />
    </main>
  );
};

export default HomePage;
```