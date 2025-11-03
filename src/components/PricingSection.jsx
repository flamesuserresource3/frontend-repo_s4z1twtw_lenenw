import React from 'react';
import { Rocket, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    highlight: 'Perfect to get started',
    features: [
      'Cross-platform profile lookup',
      'Basic dashboards',
      'Historical growth charts',
      'Community leaderboards',
    ],
    cta: 'Start Free'
  },
  {
    name: 'Pro',
    price: '$12/mo',
    highlight: 'Advanced tools for creators',
    featured: true,
    features: [
      'AI content insights & grading',
      'What-if growth simulator',
      'Competitor alerts',
      'Custom dashboards & exports',
    ],
    cta: 'Upgrade to Pro'
  },
  {
    name: 'Agency',
    price: '$39/mo',
    highlight: 'Scale across portfolios',
    features: [
      'Team workspaces',
      'Client sharing & white-label',
      'Bulk tracking & automation',
      'Priority support',
    ],
    cta: 'Contact Sales'
  }
];

export default function PricingSection() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            <Rocket size={14} /> Freemium model
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-neutral-300">Keep the essentials free. Unlock advanced insights and simulations when you need them.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-xl border ${plan.featured ? 'border-emerald-400/40 bg-emerald-500/[0.06]' : 'border-white/10 bg-white/[0.03]'} p-6`}> 
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{plan.name}</h3>
                {plan.featured && (
                  <span className="text-emerald-400 text-xs font-medium">Most popular</span>
                )}
              </div>
              <p className="mt-2 text-neutral-300 text-sm">{plan.highlight}</p>
              <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium transition ${plan.featured ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400">
          <Shield size={14} /> Cancel anytime • Secure payments • No hidden fees
        </div>
      </div>
    </section>
  );
}
