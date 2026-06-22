/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code2, Heart, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigateToContact: () => void;
  onNavigateToServices: () => void;
}

export default function Hero({ onNavigateToContact, onNavigateToServices }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-slate-50/30"
    >
      {/* Background Decorative Glow Blobs */}
      <div id="hero-glow-1" className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/10 blur-[130px] -z-10 pointer-events-none" />
      <div id="hero-glow-2" className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-coral/10 blur-[130px] -z-10 pointer-events-none" />
      <div id="hero-glow-3" className="absolute top-[30%] left-[40%] w-[20%] h-[20%] rounded-full bg-brand-gold/10 blur-[110px] -z-10 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div
        id="hero-grid-pattern"
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 -z-10"
      />

      <div id="hero-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div id="hero-row" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Content Grid Column */}
          <div id="hero-text-col" className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              id="hero-tagline-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-2 px-4 py-1.5 bg-brand-coral/5 border border-brand-coral/15 text-brand-purple text-[10px] uppercase font-bold tracking-widest rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-coral animate-pulse" />
              Creative Agency • Addis Ababa
            </motion.div>

            {/* Display Headings */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] pb-3 mb-4 tracking-tighter text-slate-900"
            >
              Empowering<br/>
              <span className="text-brand-gradient">Digital Growth</span>
              <span className="text-brand-coral italic">.</span>
            </motion.h1>

            {/* Sub-headline Description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 max-w-md text-sm leading-relaxed"
            >
              We help businesses grow their online presence through branding, social media marketing, and world-class digital solutions.
            </motion.p>

            {/* Call to Actions Buttons */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-cta-contact"
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-gradient hover:bg-brand-gradient-hover shadow-xl shadow-brand/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-cta-services"
                onClick={onNavigateToServices}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 transition-all border border-slate-200 duration-300 cursor-pointer text-sm"
              >
                Our Story
              </button>
            </motion.div>


          </div>

          {/* Interactive Canvas/Mockup Grid Column */}
          <div id="hero-media-col" className="lg:col-span-5 relative">
            <motion.div
              id="hero-visual-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none shadow-2xl rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-4 aspect-[4/3] flex flex-col justify-between select-none"
            >
              {/* Decorative browser dots */}
              <div id="visual-browser-header" className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                <div id="browser-dots" className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div id="browser-address" className="text-[10px] text-slate-500 font-mono bg-slate-950/80 px-4 py-1 rounded-md border border-slate-800/60">
                  siltawi.com/analytics
                </div>
                <div className="w-4 h-4 rounded-full bg-slate-800/80" />
              </div>

              {/* Main Illustration Area simulating custom analytics dashboard */}
              <div id="visual-grid" className="grid grid-cols-12 gap-3 flex-1">
                {/* Visual Left pane - stats cards */}
                <div id="visual-stats-panel" className="col-span-5 flex flex-col gap-3">
                  <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl flex flex-col justify-between">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono font-bold">Total Reach</span>
                    <span className="text-lg font-bold font-display text-teal-400 mt-1">+248.3%</span>
                    <div className="w-full bg-slate-800/50 h-1.5 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="bg-teal-400 h-full rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-purple" />
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono font-bold">Ad ROI</span>
                    </div>
                    <span className="text-lg font-bold font-display text-brand-purple mt-1">4.82x</span>
                    <span className="text-[8px] text-slate-500 block mt-1">Ethio campaigns standard</span>
                  </div>
                </div>

                {/* Visual Main chart frame */}
                <div id="visual-chart-panel" className="col-span-7 bg-slate-950 border border-slate-800 p-3 rounded-2xl flex flex-col justify-between">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-purple/20">
                    <div className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-[9px] uppercase tracking-wider text-slate-300 font-mono font-bold">Web Conversion</span>
                    </div>
                    <span className="text-[8px] bg-brand-purple/20 text-brand-coral px-1.5 py-0.5 rounded font-mono font-bold">LIVE</span>
                  </div>

                  {/* Simulated SVG Wave Chart */}
                  <div className="h-24 flex items-end justify-center py-2 relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                      <path
                        d="M 0,35 Q 20,5 40,25 T 80,10 T 100,5"
                        fill="none"
                        stroke="url(#gradient-line)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#872675" />
                          <stop offset="50%" stopColor="#F05253" />
                          <stop offset="100%" stopColor="#F8D424" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Pulsing focal point */}
                    <div className="absolute right-[10%] top-[45%] flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-coral" />
                    </div>
                  </div>

                  <div className="flex gap-2 justify-between text-[8px] text-slate-500 font-mono">
                    <span>JAN</span>
                    <span>MAR</span>
                    <span>MAY</span>
                    <span>JUN</span>
                  </div>
                </div>
              </div>

              {/* Lower Section interactive look */}
              <div id="visual-footer" className="mt-3 bg-brand-purple/10 border border-brand-purple/20 p-2.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-coral/20 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-brand-coral fill-brand-coral/20" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-200 font-medium">Customer Engagement</span>
                    <span className="text-[8px] text-brand-coral font-semibold font-mono">98.2% Direct Score</span>
                  </div>
                </div>
                <span className="text-[9px] text-slate-400 font-mono">Addis HQ Studio</span>
              </div>
            </motion.div>

            {/* Accent Absolute elements - 23 founded badge & chat bubble */}
            <motion.div
              id="hero-floating-since"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-5 z-20 bg-white border border-slate-100 shadow-xl px-4 py-3 rounded-2xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center font-bold text-white font-mono text-sm leading-none">
                23
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800">Founded 2023</span>
                <span className="text-[10px] font-medium text-slate-500 leading-none">Addis Ababa, ET</span>
              </div>
            </motion.div>

            <motion.div
              id="hero-floating-certified"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-4 z-20 bg-slate-900 shadow-xl px-4 py-3 rounded-2xl flex items-center gap-2 border border-slate-800"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-brand-coral animate-pulse" />
              <span className="text-xs font-mono font-semibold text-brand-coral tracking-wide uppercase">
                Active Client Growth
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
