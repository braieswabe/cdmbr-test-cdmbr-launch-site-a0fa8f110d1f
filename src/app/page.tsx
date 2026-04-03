import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

```typescript
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const features = [
  { title: "Seamless Integration", description: "Easily integrate with your existing tools and workflows.", icon: "🔗" },
  { title: "Real-Time Analytics", description: "Gain insights into your performance with live data.", icon: "📊" },
  { title: "24/7 Support", description: "Our team is here to help you anytime, anywhere.", icon: "🛠️" },
];

const testimonials = [
  { name: "Jane Doe", feedback: "This service transformed our business! Highly recommend.", rating: 5 },
  { name: "John Smith", feedback: "Exceptional support and features that truly deliver.", rating: 4 },
];

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero
        title="Empower Your Business with Our Solutions"
        subtitle="Unlock your potential with our innovative tools designed to streamline your operations."
        cta1Text="Get Started"
        cta1Link="/contact"
        cta2Text="Learn More"
        cta2Link="/features"
      />
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="mt-8 space-y-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} name={testimonial.name} feedback={testimonial.feedback} rating={testimonial.rating} />
          ))}
        </div>
      </section>
      <CTABanner
        title="Ready to Transform Your Business?"
        ctaText="Contact Us Today"
        ctaLink="/contact"
      />
      <Footer />
    </div>
  );
}
```