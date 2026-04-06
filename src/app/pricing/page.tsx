'use client';

import { useState } from 'react';
import { CTABanner, PricingCard, NavBar, Footer } from '@/components';

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
          <h1 className="text-4xl font-bold">Transparent Pricing</h1>
          <p className="mt-4 text-lg">Choose a plan that fits your needs.</p>
          <button
            onClick={togglePricing}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Switch to {isAnnual ? 'Monthly' : 'Annual'} Billing
          </button>
        </section>
        
        <section className="grid gap-6 md:grid-cols-3">
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

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">What payment methods do you accept?</h3>
              <p>We accept all major credit cards and PayPal.</p>
            </div>
            <div>
              <h3 className="font-medium">Can I cancel my subscription anytime?</h3>
              <p>Yes, you can cancel your subscription at any time without any penalties.</p>
            </div>
            <div>
              <h3 className="font-medium">Is there a free trial available?</h3>
              <p>Yes, we offer a 14-day free trial for all new users.</p>
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