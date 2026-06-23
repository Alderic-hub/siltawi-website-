/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Shield, Compass, Sparkles, Box, ShoppingBag, Globe, Zap } from 'lucide-react';

export default function TrustedBusinesses() {
  const businesses = [
    { name: 'Abyssinia Brew', icon: Flame, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Zemen Tech', icon: Shield, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Lucy Logistics', icon: Box, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Awash Apparel', icon: Compass, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Sheger Express', icon: Sparkles, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Habesha Market', icon: ShoppingBag, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Nile FinTech', icon: Zap, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
    { name: 'Saba Creative', icon: Globe, color: 'text-slate-450 text-slate-400/80', hoverColor: 'group-hover:text-brand-purple' },
  ];

  // Duplicating brands multiple times to ensure continuous seamless CSS slide
  const duplicatedBusinesses = [...businesses, ...businesses, ...businesses, ...businesses];

  return (
    <section id="trusted-businesses" className="py-7 sm:py-9 bg-slate-50/50 border-y border-slate-100 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-slate-800 block mb-1">
          Trusted By
        </span>
        <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-slate-400 uppercase">
          Ethiopian Leaders and Brands
        </h3>
      </div>

      {/* Marquee viewport wrapper */}
      <div className="relative w-full overflow-hidden py-1">
        {/* Subtle radial overlay fades to hide edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center">
          {duplicatedBusinesses.map((biz, index) => {
            const IconComponent = biz.icon;
            return (
              <div
                id={`trusted-marquee-brand-${index}`}
                key={index}
                className="group flex items-center gap-2.5 px-6 sm:px-10 shrink-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`${biz.color} filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors duration-300 ${biz.hoverColor}`}>
                  <IconComponent className="w-5.5 h-5.5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-extrabold font-display text-slate-600 text-xs sm:text-sm tracking-wide group-hover:text-slate-900 transition-colors duration-300 uppercase">
                  {biz.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
