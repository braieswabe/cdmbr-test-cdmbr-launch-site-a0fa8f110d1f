"use client";

import { useState } from 'react';
import { Hero, CTABanner, PricingCard, FAQSection, NavBar, Footer } from '@/components';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricingPlan = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
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
    <div className="flex flex-col">
      <NavBar />
      <Hero title="Transparent Pricing" subtitle="Choose the plan that fits your needs." />
      <section className="py-10">
        <div className="flex justify-center mb-6">
          <button onClick={togglePricingPlan} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            {isAnnual ? 'Switch to Monthly' : 'Switch to Annual'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard
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
      <CTABanner />
      <Footer />
    </div>
  );
};

export default PricingPage;