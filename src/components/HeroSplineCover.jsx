import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSplineCover() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays to improve text contrast; they don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 h-full flex flex-col items-start justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live analytics and AI insights
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          The next generation of social & content analytics
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
          Go beyond vanity metrics. Audit, predict, and simulate growth across YouTube, Instagram, X, and TikTok — all in one interactive workspace.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#dashboard" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-400 transition">Launch Interactive Demo</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Explore Features</a>
        </div>
      </div>
    </section>
  );
}
