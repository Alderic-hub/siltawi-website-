/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { COMPANY_STATS } from '../data';

export default function StatsBanner() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const timers: any[] = [];
    COMPANY_STATS.forEach((stat) => {
      let start = 0;
      const end = stat.value;
      const steps = Math.min(end, 50);
      const duration = 1500; // 1.5 seconds total animation
      const stepDuration = duration / steps;
      const increment = end / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts((prev) => ({ ...prev, [stat.id]: end }));
        } else {
          setCounts((prev) => ({ ...prev, [stat.id]: Math.round(increment * currentStep) }));
        }
      }, stepDuration);
      timers.push(timer);
    });

    return () => {
      timers.forEach((t) => clearInterval(t));
    };
  }, [hasAnimated]);

  return (
    <section id="stats-banner-section" className="py-20 bg-slate-50 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-brand-purple/5 blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          id="animated-stats-banner" 
          className="bg-gradient-to-br from-slate-900 to-brand-purple/50 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col justify-center"
        >
          <div id="banner-mesh" className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,#F05253_15%,transparent_75%)] opacity-30 pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Siltawi by the Numbers
            </h3>
          </div>

          <div id="stats-banner-row" className="grid grid-cols-2 lg:grid-cols-5 gap-8 relative z-10 text-center">
            {COMPANY_STATS.map((stat) => (
              <div id={`stat-col-${stat.id}`} key={stat.id} className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-extrabold font-display bg-gradient-to-r from-brand-coral to-brand-gold bg-clip-text text-transparent mb-2">
                  {counts[stat.id] !== undefined ? counts[stat.id] : 0}
                  {stat.suffix}
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wide text-white block uppercase opacity-90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
