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

const features = [
  { title: 'User-Friendly Interface', description: 'Our platform is designed with the user in mind, making it easy for anyone to navigate and utilize.', icon: '🖥️' },
  { title: '24/7 Support', description: 'We offer round-the-clock support to ensure you have help whenever you need it.', icon: '📞' },
  { title: 'Affordable Pricing', description: 'Our pricing plans are transparent and designed to fit any budget.', icon: '💰' },
];

const testimonials = [
  { quote: 'This service transformed our business!', name: 'Jane Doe', rating: 5 },
  { quote: 'Highly recommend for anyone looking to improve their workflow.', name: 'John Smith', rating: 4 },
];

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero 
        headline="Transform Your Business Today"
        subtitle="Join thousands of satisfied customers who trust us."
        cta1="Get Started"
        cta2="Learn More"
      />
      <section className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
        ))}
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-bold text-center">What Our Customers Say</h2>
        <div className="flex flex-col items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <CTABanner 
        title="Ready to take the next step?"
        cta="Sign Up Now"
      />
      <Footer />
    </main>
  );
};

export default HomePage;