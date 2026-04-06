```tsx
import { Hero, ServiceCard, CTABanner, NavBar, Footer } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the range of services we offer.',
};

const ServicesPage = () => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Hero title="Our Services" />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard title="Consulting" description="Expert advice to guide your business decisions." />
          <ServiceCard title="Development" description="Custom software solutions tailored to your needs." />
          <ServiceCard title="Marketing" description="Strategies to enhance your brand visibility." />
          <ServiceCard title="Support" description="Ongoing assistance to keep your operations running smoothly." />
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <p className="max-w-2xl mx-auto text-center mb-8">
          Discover how we have helped our clients achieve their goals through our services.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for case study examples */}
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Project Alpha</h3>
            <p>Implemented a comprehensive solution that increased efficiency by 30%.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Project Beta</h3>
            <p>Developed a marketing strategy that doubled client engagement.</p>
          </div>
        </div>
      </section>
      <CTABanner
        title="Interested in Our Services?"
        description="Get in touch with us to discuss how we can help you."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
      <Footer />
    </main>
  );
};

export default ServicesPage;
```