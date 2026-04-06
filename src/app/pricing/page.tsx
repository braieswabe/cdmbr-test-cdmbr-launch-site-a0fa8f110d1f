'use client';

import { useState } from 'react';
import { CTABanner, PricingTable, FAQSection } from '@/components';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricingPlan = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Transparent Pricing Plans</h1>
      <p className="text-lg text-center mb-12">
        Choose a plan that fits your needs. Our pricing is designed to be straightforward and value-driven.
      </p>
      <PricingTable isAnnual={isAnnual} togglePricingPlan={togglePricingPlan} />
      <FAQSection />
      <CTABanner />
    </div>
  );
};

export default PricingPage;