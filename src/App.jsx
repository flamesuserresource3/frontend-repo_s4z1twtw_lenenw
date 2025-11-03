import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import FeaturesGrid from './components/FeaturesGrid';
import InteractiveDashboardDemo from './components/InteractiveDashboardDemo';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSplineCover />
      <FeaturesGrid />
      <InteractiveDashboardDemo />
      <PricingSection />
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Flux Metrics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#dashboard" className="hover:text-white transition">Demo</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
