```tsx
'use client';

import { useState } from 'react';
import { Hero, CTABanner, ServiceCard, FAQSection } from '@/components';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'Basic',
      priceMonthly: 19,
      priceAnnual: 199,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      recommended: false,
    },
    {
      name: 'Pro',
      priceMonthly: 39,
      priceAnnual: 399,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      recommended: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: 79,
      priceAnnual: 799,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      recommended: false,
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-100 to-white">
      <Hero title="Transparent Pricing" subtitle="Choose the plan that fits your needs." />
      <section className="container mx-auto py-10">
        <div className="flex justify-center mb-6">
          <button onClick={() => setIsAnnual(false)} className={`px-4 py-2 ${!isAnnual ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Monthly
          </button>
          <button onClick={() => setIsAnnual(true)} className={`px-4 py-2 ${isAnnual ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Annual
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <ServiceCard
              key={plan.name}
              name={plan.name}
              price={isAnnual ? plan.priceAnnual : plan.priceMonthly}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>
      </section>
      <FAQSection />
      <CTABanner title="Ready to get started?" buttonText="Sign Up Now" />
    </main>
  );
};

export default PricingPage;
```