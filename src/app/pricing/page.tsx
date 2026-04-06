"use client";

import { useState } from 'react';
import { CTABanner, PricingTable, FAQSection, NavBar, Footer } from '@/components';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Transparent Pricing Plans</h1>
        <p className="text-lg text-center mb-4">
          Choose a plan that fits your needs. Our pricing is clear and straightforward, with no hidden fees.
        </p>
        <button
          onClick={togglePricing}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          {isAnnual ? 'Switch to Monthly Pricing' : 'Switch to Annual Pricing'}
        </button>
        <PricingTable isAnnual={isAnnual} />
        <FAQSection />
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default PricingPage;