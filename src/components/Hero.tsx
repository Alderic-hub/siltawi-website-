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
      className="relative z-0 min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-slate-50/30"
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
            
            {/* Display Headings */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] pb-3 mb-4 tracking-tighter text-slate-900"
            >
              Empowering<br/>
              <span className="text-brand-gradient pb-[10px] inline-block">Digital Growth</span>
              <span className="text-brand-coral italic">.</span>
            </motion.h1>

            {/* Sub-headline Description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 max-w-xl text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-4"
              style={{ textShadow: '0 1px 4px rgba(255, 255, 255, 0.8)' }}
            >
              We help businesses grow their online presence through branding, social media marketing, and world-class digital solutions.
            </motion.p>

            {/* Call to Actions Buttons */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                id="hero-cta-contact"
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-gradient hover:bg-brand-gradient-hover shadow-xl shadow-brand/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-cta-services"
                onClick={onNavigateToServices}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 transition-all border border-slate-200 duration-300 cursor-pointer"
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
              className="relative mx-auto max-w-[420px] lg:max-w-none shadow-2xl rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-4 aspect-[4/3] flex flex-col justify-between select-none group"
            >
              {/* Decorative browser dots & URL */}
              <div id="visual-browser-header" className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2 z-10">
                <div id="browser-dots" className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div id="browser-address" className="text-[9px] text-slate-400 font-mono bg-slate-950/80 px-4 py-0.5 rounded border border-slate-800/60">
                  siltawi.com/executive-dashboard
                </div>
                <div className="w-3.5 h-3.5 rounded-full bg-slate-800/80" />
              </div>

              {/* Main dashboard content background structure */}
              <div className="absolute inset-0 top-[45px] z-0 bg-slate-950/40" />

              {/* Overlaid Modern Metrics Cards */}
              <div id="visual-overlay-content" className="grid grid-cols-12 gap-3 flex-1 z-10 items-end pb-2 opacity-90">
                
                {/* Left stat: Reach details with custom glow */}
                <div className="col-span-5 flex flex-col gap-2.5">
                  <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/40 p-3 rounded-2xl flex flex-col justify-between shadow-lg">
                    <span className="text-[8.5px] uppercase tracking-wider text-slate-400 font-mono font-bold">Total Reach</span>
                    <span className="text-xl sm:text-2xl font-extrabold font-display text-brand-coral mt-1 drop-shadow-sm">+248.3%</span>
                    <div className="w-full bg-slate-800/60 h-1.5 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="bg-brand-coral h-full rounded-full shadow-[0_0_8px_rgba(240,82,83,0.5)]" 
                      />
                    </div>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/40 p-3 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-purple" />
                      <span className="text-[8.5px] uppercase tracking-wider text-slate-400 font-mono font-bold">Ad ROI</span>
                    </div>
                    <span className="text-lg font-bold font-display text-brand-purple mt-1">4.82x</span>
                    <span className="text-[7.5px] text-slate-400 block mt-1 leading-snug">ET Campaigns verified</span>
                  </div>
                </div>

                {/* Right stat: Live Conversion Frame */}
                <div className="col-span-7 bg-slate-900/65 backdrop-blur-md border border-slate-700/40 p-3 rounded-2xl flex flex-col justify-between h-full shadow-lg">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-[9px] uppercase tracking-wider text-slate-200 font-mono font-bold">Leads Generated</span>
                    </div>
                    <span className="text-[8px] bg-brand-purple/20 text-brand-coral px-1.5 py-0.5 rounded-full font-mono font-bold tracking-wider animate-pulse">LIVE</span>
                  </div>

                  <div className="py-2.5">
                    <div className="text-xs text-slate-400 font-mono">Current Run Status</div>
                    <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-1 font-display">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                      Active Performance
                    </div>
                    <p className="text-[9px] text-slate-400 font-light mt-1 leading-relaxed">
                      Transforming campaigns into authentic client transactions real-time.
                    </p>
                  </div>

                  <div className="flex gap-2 justify-between text-[8px] text-slate-400 font-mono border-t border-white/5 pt-1.5">
                    <span>Q1 METRICS</span>
                    <span className="text-brand-gold font-bold">100% SECURE</span>
                  </div>
                </div>

              </div>

              {/* Lower Section footer with custom micro glassmorphism layout */}
              <div id="visual-footer" className="mt-2.5 bg-slate-900/60 backdrop-blur-md border border-slate-700/40 p-2.5 rounded-2xl flex items-center justify-between z-10 shadow-md opacity-90">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-coral/15 flex items-center justify-center border border-brand-coral/20">
                    <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral/20" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-300 font-medium tracking-tight">Customer Engagement Score</span>
                    <span className="text-[8px] text-brand-coral font-bold font-mono">98.2% Direct Pipeline</span>
                  </div>
                </div>
                <span className="text-[8.5px] text-slate-400 font-mono tracking-wider">ADDIS HQ PORTAL</span>
              </div>
            </motion.div>

            {/* Accent Absolute elements - 23 founded badge & active client indicator */}
            <motion.div
              id="hero-floating-since"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-5 z-20 bg-white border border-slate-200 shadow-xl px-4 py-3 rounded-2xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center font-bold text-white font-mono text-sm leading-none">
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
              className="absolute -bottom-6 -left-4 z-20 bg-slate-900 shadow-2xl px-4 py-3 rounded-2xl flex items-center gap-2 border border-slate-800"
            >
              <div className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
              <span className="text-[10px] font-mono font-bold text-brand-coral tracking-wider uppercase">
                Active Client Growth
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Full-width premium background of the creative office interior, fading seamlessly to the left */}
      <div 
        id="hero-ambient-office-bg"
        className="absolute inset-y-0 right-0 w-full sm:w-[85%] md:w-[70%] lg:w-[60%] pointer-events-none -z-20 overflow-hidden opacity-[0.2] sm:opacity-[0.35] md:opacity-[0.55] transition-opacity duration-350"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1) 100%)'
        }}
      >
        <img
          src="/hero_office_purple.jpg"
          alt="Siltawi premium creative agency office with purple lighting"
          className="w-full h-full object-cover object-right lg:object-center-right scale-[1.03] filter brightness-105 contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

    </section>
  );
}
