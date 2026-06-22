/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Eye, Compass, ShieldCheck, Zap, Sliders, Trophy, ArrowLeft, Building, Sparkles } from 'lucide-react';

interface AboutUsPageProps {
  onBackToHome: () => void;
}

export default function AboutUsPage({ onBackToHome }: AboutUsPageProps) {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const coreValues = [
    { title: 'Innovation', icon: Zap, desc: 'Pioneering latest marketing technologies to stay ahead.' },
    { title: 'Creativity', icon: Sliders, desc: 'Designing brand languages that turn simple scrolls into conversions.' },
    { title: 'Transparency', icon: ShieldCheck, desc: 'Clear metrics, fair budgets, and weekly analytical dashboards.' },
    { title: 'Excellence', icon: Trophy, desc: 'Committed to superior quality in code, content, and strategy.' },
  ];

  return (
    <div id="about-us-page-root" className="pt-28 pb-24 bg-white relative overflow-hidden min-h-screen text-left">
      {/* Visual background atmospheric effects */}
      <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-coral/5 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-purple/5 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Return Hook */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-coral transition-colors mb-10 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </button>

        {/* Corporate Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-coral/5 border border-brand-coral/20 text-brand-coral text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 font-mono">
            Company Story
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.1] mb-6">
            A Leading Ethiopian Force in Graphic Design, Web Development, and Digital Strategy.
          </h1>
          <p className="text-slate-650 text-slate-600 font-light leading-relaxed text-lg">
            Founded in 2023 in Addis Ababa, Siltawi Digital Marketing represents a dedicated team of multi-discipline digital craftspeople. We work hand-in-hand with startups, local restaurants, educational academies, real estate agencies, and NGOs to transform simple brand visibility into rich client engagement.
          </p>
        </div>

        {/* Brand Narrative Detail Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-slate-600 font-light leading-relaxed text-sm">
            <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-brand-coral" />
              Crafting Excellence from Addis Ababa
            </h3>
            <p>
              In today's fast world, just "being online" is no longer enough. Your storefront is digital, your metrics are competitive, and your brand's narrative must command instant authority. That is where we step in.
            </p>
            <p>
              We don't believe in generic templates or standard social posts. Every brand identity guidelines document we draft is customized, every website line of code we write is optimized, and every advertising Birr we launch is hyper-targeted to deliver actual local or regional client traction.
            </p>
            <p>
              Over the last few years, we've successfully delivered over 100 digital projects, helping local firms scale operations and establish stable revenue.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-[32px] space-y-4">
            <span className="text-[10px] font-bold text-brand-coral uppercase tracking-widest font-mono block">
              Quick Highlights
            </span>
            <div className="space-y-3 font-sans text-xs">
              <div className="flex justify-between py-2.5 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium font-sans">Established</span>
                <span className="text-slate-900 font-bold font-mono">2023</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium font-sans">Primary Hub</span>
                <span className="text-slate-900 font-bold font-display">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium font-sans">Fields of Focus</span>
                <span className="text-slate-900 font-bold font-display text-right max-w-[200px]">Design, Web dev, Paid Ads, SEO</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 font-medium font-sans">Client Focus</span>
                <span className="text-slate-900 font-bold font-mono">100% Results-First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Foundations Block */}
        <div id="about-tabs-row" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-12 border-t border-slate-100">
          
          {/* Tabs Selector Side Pane */}
          <div id="about-tabs-pane" className="lg:col-span-4 flex flex-col justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4 font-mono">
                Corporate Foundations
              </span>
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-left transition-all duration-200 cursor-pointer ${
                  activeTab === 'mission'
                    ? 'bg-brand-gradient text-white shadow-md shadow-brand/20'
                    : 'bg-white border border-slate-200/60 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Target className="w-5 h-5" />
                Mission Statement
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-left transition-all duration-200 cursor-pointer ${
                  activeTab === 'vision'
                    ? 'bg-brand-gradient text-white shadow-md shadow-brand/20'
                    : 'bg-white border border-slate-200/60 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Eye className="w-5 h-5" />
                Vision Statement
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-left transition-all duration-200 cursor-pointer ${
                  activeTab === 'values'
                    ? 'bg-brand-gradient text-white shadow-md shadow-brand/20'
                    : 'bg-white border border-slate-200/60 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <Compass className="w-5 h-5" />
                Core Brand Values
              </button>
            </div>
            <div className="pt-6 border-t border-slate-250 mt-6 hidden lg:block">
              <p className="text-xs text-slate-400 font-mono">
                Siltawi plc • Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Tab Screen Content display with micro transitions */}
          <div id="about-tabs-content" className="lg:col-span-8 bg-slate-50/50 rounded-3xl border border-slate-100 p-8 flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === 'mission' && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-coral/10 flex items-center justify-center text-brand-coral border border-brand-coral/20 mb-2">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Empowering through Digital Innovation
                  </h3>
                  <p className="text-slate-605 text-slate-600 font-light leading-relaxed">
                    "To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections across Ethiopia and expanding regions."
                  </p>
                </motion.div>
              )}

              {activeTab === 'vision' && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-coral/10 flex items-center justify-center text-brand-coral border border-brand-coral/20 mb-2">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-slate-900">
                    Leading Africa's Digital Frontier
                  </h4>
                  <p className="text-slate-605 text-slate-600 font-light leading-relaxed">
                    "To become one of Africa's leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions that redefine brand strategies in emerging economies."
                  </p>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left font-mono"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-coral/10 flex items-center justify-center text-brand-coral border border-brand-coral/20 mb-2">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">
                    The Pillars of Siltawi
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {coreValues.map((val) => {
                      const ValIcon = val.icon;
                      return (
                        <div key={val.title} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex gap-3">
                          <div className="w-9 h-9 rounded-lg bg-brand-coral/10 flex items-center justify-center text-brand-coral shrink-0">
                            <ValIcon className="w-4 h-4" />
                          </div>
                          <div className="text-left font-sans">
                            <h4 className="font-semibold text-slate-900 text-sm font-display">{val.title}</h4>
                            <p className="text-xs text-slate-500 mt-1">{val.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
