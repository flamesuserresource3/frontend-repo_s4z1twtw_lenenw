import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Users, Bell, Settings } from 'lucide-react';

const cardClasses = "rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-4";

function Metric({ label, value, delta }) {
  const positive = (delta || 0) >= 0;
  return (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-xs text-neutral-400">{label}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
      <span className={`text-xs ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>{positive ? '+' : ''}{delta}%</span>
    </div>
  );
}

export default function InteractiveDashboardDemo() {
  const [draggable, setDraggable] = useState(false);

  useEffect(() => {
    const update = () => setDraggable(window.matchMedia('(min-width: 768px)').matches);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section id="dashboard" className="relative bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Interactive dashboard builder</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">Drag and arrange modules to create a personalized analytics feed. This live preview is just a taste of the experience inside.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition" aria-label="Customize dashboard">
            <Settings size={16} /> Customize
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div 
            className={`md:col-span-7 ${cardClasses} ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
            drag={draggable}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: draggable ? 1.01 : 1 }}
            whileTap={{ scale: draggable ? 0.99 : 1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-emerald-500/10 text-emerald-400"><LineChart size={16} /></div>
                <h3 className="font-medium">Projected growth</h3>
              </div>
              <span className="text-xs text-neutral-400">30d projection</span>
            </div>
            <div className="mt-4 h-40 w-full">
              <svg viewBox="0 0 400 160" className="h-full w-full" aria-hidden>
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline fill="url(#grad)" stroke="#34d399" strokeWidth="2" points="0,120 30,110 60,105 90,95 120,100 150,85 180,80 210,70 240,74 270,60 300,62 330,48 360,52 400,40 400,160 0,160" />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Metric label="Followers" value="+12,450" delta={8.6} />
              <Metric label="Views" value="3.2M" delta={12.4} />
              <Metric label="Engagement" value="5.1%" delta={0.9} />
            </div>
          </motion.div>

          <motion.div 
            className={`md:col-span-5 ${cardClasses} ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
            drag={draggable}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: draggable ? 1.01 : 1 }}
            whileTap={{ scale: draggable ? 0.99 : 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-sky-500/10 text-sky-400"><Users size={16} /></div>
              <h3 className="font-medium">Benchmarking</h3>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { name: 'You', score: 86 },
                { name: 'Peer A', score: 78 },
                { name: 'Peer B', score: 71 },
                { name: 'Peer C', score: 64 },
              ].map((row) => (
                <div key={row.name} className="">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-300">{row.name}</span>
                    <span className="text-white font-medium">{row.score}</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded bg-white/10 overflow-hidden">
                    <div className="h-full rounded bg-gradient-to-r from-emerald-400 to-sky-400" style={{ width: `${row.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={`md:col-span-4 ${cardClasses} ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
            drag={draggable}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: draggable ? 1.01 : 1 }}
            whileTap={{ scale: draggable ? 0.99 : 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-amber-500/10 text-amber-400"><Bell size={16} /></div>
              <h3 className="font-medium">Competitor alerts</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2 text-neutral-300"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> @creatorX posted a viral short (+1.2M views)</li>
              <li className="flex items-start gap-2 text-neutral-300"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" /> @brandY shifted to tutorial content (+23% CTR)</li>
              <li className="flex items-start gap-2 text-neutral-300"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" /> @studioZ lost momentum (-18% weekly)</li>
            </ul>
          </motion.div>

          <motion.div 
            className={`md:col-span-8 ${cardClasses} ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
            drag={draggable}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: draggable ? 1.01 : 1 }}
            whileTap={{ scale: draggable ? 0.99 : 1 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">What-if simulator</h3>
              <span className="text-xs text-neutral-400">Scenario: Post 1 Short/day</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-xs text-neutral-400">Expected 30d subs</p>
                <p className="text-xl font-semibold text-white">+24,300</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-xs text-neutral-400">Projected RPM</p>
                <p className="text-xl font-semibold text-white">$2.85</p>
              </div>
            </div>
            <div className="mt-3 h-28 rounded-lg bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-amber-500/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
