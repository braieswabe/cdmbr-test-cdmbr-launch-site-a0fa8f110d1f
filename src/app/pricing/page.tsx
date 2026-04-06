'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import PricingCard from '@/components/PricingCard';
import FAQ from '@/components/FAQ';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      title: 'Basic Plan',
      priceMonthly: '$19',
      priceAnnual: '$199',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      recommended: false,
    },
    {
      title: 'Pro Plan',
      priceMonthly: '$39',
      priceAnnual: '$399',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      recommended: true,
    },
    {
      title: 'Enterprise Plan',
      priceMonthly: '$99',
      priceAnnual: '$999',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      recommended: false,
    },
  ];

  return (
    <div className="space-y-10">
      <Hero title="Transparent Pricing Plans" subtitle="Choose the plan that fits your needs." />
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <button
            className={`py-2 px-4 rounded-lg ${!isAnnual ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${isAnnual ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={isAnnual ? plan.priceAnnual : plan.priceMonthly}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>
      </div>
      <FAQ />
      <CTABanner />
    </div>
  );
};

export default PricingPage;