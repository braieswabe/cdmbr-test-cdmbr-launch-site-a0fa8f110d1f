import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing Plans",
  description: "Learn more about transparent pricing plans",
};

```typescript
import { useState } from 'react';
import CTABanner from '@/components/CTABanner';
import PricingCard from '@/components/PricingCard';
import FAQSection from '@/components/FAQSection';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Transparent Pricing Plans</h1>
          <p className="mt-4 text-lg">
            Choose a plan that fits your needs. No hidden fees, just straightforward pricing.
          </p>
          <button
            onClick={togglePricing}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Switch to {isAnnual ? 'Monthly' : 'Annual'} Billing
          </button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Basic Plan"
            price={isAnnual ? 120 : 12}
            features={['Feature 1', 'Feature 2', 'Feature 3']}
            recommended={false}
          />
          <PricingCard
            title="Pro Plan"
            price={isAnnual ? 240 : 24}
            features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}
            recommended={true}
          />
          <PricingCard
            title="Enterprise Plan"
            price={isAnnual ? 480 : 48}
            features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']}
            recommended={false}
          />
        </section>
        <FAQSection />
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default PricingPage;
```