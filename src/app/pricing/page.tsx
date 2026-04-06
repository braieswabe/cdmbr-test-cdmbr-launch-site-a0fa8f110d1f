import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Learn more about pricing",
};

import { useState } from 'react';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import PricingCard from '@/components/PricingCard';
import FAQ from '@/components/FAQ';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricingPlan = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <Hero title="Transparent Pricing Plans" subtitle="Choose the plan that fits your needs." />
      <div className="mt-8">
        <button
          onClick={togglePricingPlan}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          {isAnnual ? 'Switch to Monthly' : 'Switch to Annual'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
      </div>
      <FAQ />
      <CTABanner title="Ready to get started?" subtitle="Choose your plan and join us today!" />
    </main>
  );
};

export default PricingPage;