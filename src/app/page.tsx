import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const features = [
  { title: "User-Friendly Interface", description: "Intuitive design that enhances user experience.", icon: "🖥️" },
  { title: "24/7 Support", description: "We're here to help you anytime, day or night.", icon: "📞" },
  { title: "Secure Transactions", description: "Your data is safe with us, guaranteed.", icon: "🔒" },
];

const testimonials = [
  { name: "Jane Doe", quote: "This service transformed my business!", photo: "/images/jane.jpg" },
  { name: "John Smith", quote: "Incredible support and easy to use.", photo: "/images/john.jpg" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Hero 
        title="Empower Your Business with Our Solutions" 
        subtitle="Transforming ideas into reality with cutting-edge technology." 
        cta1="Get Started" 
        cta2="Learn More" 
      />
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Our Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </section>
      <section className="py-10 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="flex flex-col items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} quote={testimonial.quote} photo={testimonial.photo} />
          ))}
        </div>
      </section>
      <CTABanner 
        title="Ready to take your business to the next level?" 
        cta="Join Us Today" 
      />
      <Footer />
    </main>
  );
}