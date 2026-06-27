/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Service } from '../types';
import { PORTFOLIO_ITEMS } from '../data';
import { ArrowLeft, Check, Sparkles, Megaphone, Globe, Palette, Video, TrendingUp, HelpCircle } from 'lucide-react';

interface ServiceDetailPageProps {
  service: Service;
  onBackToHome: () => void;
}

const iconMap: { [key: string]: any } = {
  Megaphone,
  Globe,
  Palette,
  Video,
  TrendingUp,
};

export default function ServiceDetailPage({ service, onBackToHome }: ServiceDetailPageProps) {
  const IconComponent = iconMap[service.iconName] || HelpCircle;

  // Filter portfolio achievements matching this selected service's category
  const relatedProjects = PORTFOLIO_ITEMS.filter(
    (item) => item.category === service.category || (service.id === 'website-development' && item.category === 'webdev')
  );

  return (
    <div id="service-detail-root" className="pt-28 pb-24 bg-white relative overflow-hidden min-h-screen text-left">
      {/* Background ambient radial circles mimicking Martex Layout */}
      <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-coral/5 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-purple/5 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Return Hook */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-coral transition-colors mb-10 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </button>

        {/* Header Block Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-coral/5 border border-brand-coral/20 text-brand-coral text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 font-mono">
            <IconComponent className="w-3.5 h-3.5 text-brand-coral shrink-0" />
            Active Service Details
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.1] mb-6">
            {service.title}
          </h1>
          <p className="text-slate-600 font-light leading-relaxed text-lg sm:text-xl">
            {service.description}
          </p>
        </div>

        {/* Content Columns Structure */}
        <div id="service-columns" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Sub-Services Matrix Capabilities */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-coral" />
                Capabilities Breakdown
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                We design specialized, data-backed processes that guarantee real results. Read our exact fields of execution below:
              </p>
            </div>

            {/* Custom Grid showing Sub-services highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.subServices.map((sub, sIdx) => {
                return (
                  <div
                    key={sIdx}
                    className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:border-brand-coral/20 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-bold font-display text-slate-900 text-sm sm:text-base">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Features Checklist Highlights card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold font-display text-slate-900">
              Core Deliverables Checklist
            </h3>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              {service.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-slate-700 font-medium font-sans">
                  <div className="w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Related Case Studies Grid Section */}
        {relatedProjects.length > 0 && (
          <div className="pt-16 border-t border-slate-100">
            <div className="max-w-3xl mb-10 text-left">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono block mb-2">
                Proven Output
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Previous Projects in {service.title}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light mt-2 max-w-xl">
                See direct business applications of this capability delivered to ambitious enterprises based both locally and internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => {
                return (
                  <div
                    key={proj.id}
                    className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all"
                  >
                    <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shrink-0">
                      <img
                        src={proj.imageUrl}
                        alt={proj.client}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-between text-left space-y-2">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-brand-coral tracking-widest uppercase font-mono block">
                          {proj.client}
                        </span>
                        <h4 className="font-bold text-slate-900 text-base font-display">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">
                          {proj.summary}
                        </p>
                      </div>
                      {proj.stats && (
                        <div className="text-xs">
                          <span className="font-mono text-emerald-600 font-bold">{proj.stats.value} </span>
                          <span className="text-slate-500 font-sans">{proj.stats.label}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
