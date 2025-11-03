import React from 'react';
import { Activity, Bell, LineChart, Sparkles, Users, Trophy, BarChart3, Clock, Target } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-driven content insight',
    desc: 'Actionable recommendations on best times, content types, captions, and collabs using trend analysis and competitor gaps.'
  },
  {
    icon: Activity,
    title: 'Real-time content audit',
    desc: 'Live grading for thumbnails, titles, bios, and engagement signals — before and after publishing.'
  },
  {
    icon: LineChart,
    title: 'Growth simulation',
    desc: 'Run what-if scenarios and visualize projected impact with interactive graphs and milestones.'
  },
  {
    icon: Users,
    title: 'Community benchmarking',
    desc: 'See how you rank within custom peer groups by niche, country, and growth style. Get tailored goals.'
  },
  {
    icon: BarChart3,
    title: 'Interactive dashboards',
    desc: 'Drag-and-drop modules, heatmaps, and story-based stats. Build your perfect analytics workspace.'
  },
  {
    icon: Trophy,
    title: 'Leaderboards',
    desc: 'Create public or private leaderboards, share highlights, and track progress over time.'
  },
  {
    icon: Bell,
    title: 'Competitor alerts',
    desc: 'Instant notifications on viral spikes, strategy shifts, and rapid growth in your space.'
  },
  {
    icon: Clock,
    title: 'Projections & history',
    desc: 'All the standard tracking you expect — historical growth, platform ranks, and future projections.'
  },
  {
    icon: Target,
    title: 'Monetization-ready',
    desc: 'Freemium access with affordable unlocks for advanced tools designed for teams and agencies.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Built for creators, brands, and analysts</h2>
          <p className="mt-3 text-neutral-300">Everything you need to understand, optimize, and scale your content across platforms — all in one place.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
