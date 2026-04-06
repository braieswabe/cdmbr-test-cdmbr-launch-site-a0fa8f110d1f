'use client';

import { useState } from 'react';
import { CTABanner } from '@/components/CTABanner';
import { PricingCard } from '@/components/PricingCard';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Transparent Pricing</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your needs. No hidden fees, just clear value.
          </p>
          <button
            onClick={togglePricing}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {isAnnual ? 'Switch to Monthly' : 'Switch to Annual'}
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Basic Plan"
            price={isAnnual ? '$120/year' : '$12/month'}
            features={['Feature 1', 'Feature 2', 'Feature 3']}
            recommended={false}
          />
          <PricingCard
            title="Pro Plan"
            price={isAnnual ? '$240/year' : '$24/month'}
            features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}
            recommended={true}
          />
          <PricingCard
            title="Enterprise Plan"
            price={isAnnual ? '$480/year' : '$48/month'}
            features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']}
            recommended={false}
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">What is included in each plan?</h3>
              <p className="text-gray-600">Each plan includes access to our core features, with varying levels of support and additional features.</p>
            </div>
            <div>
              <h3 className="font-medium">Can I change my plan later?</h3>
              <p className="text-gray-600">Absolutely! You can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h3 className="font-medium">Is there a free trial available?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day free trial for all new users.</p>
            </div>
          </div>
        </section>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
};

export default PricingPage;