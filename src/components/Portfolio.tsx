/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { Tag, Calendar, User, Eye, X, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden text-center">
      {/* Background radial blobs to mimic Martex */}
      <div className="absolute top-[30%] left-[-15%] w-[45%] h-[45%] rounded-full bg-brand-coral/5 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45%] h-[45%] rounded-full bg-brand-purple/5 blur-[130px] -z-10 pointer-events-none" />

      <div id="portfolio-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Portfolio Section Header Block - Centered Layout */}
        <div id="portfolio-header" className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.12]">
            Our Work
          </h2>
          <p className="mt-4 text-slate-600 font-light leading-relaxed text-base sm:text-lg">
            Explore how we build customized web systems, organize local and international search structures, and run creative campaigns to double our clients’ bottom line.
          </p>
        </div>

        {/* Portfolio Items Grid Display Layout (No Filters) */}
        <motion.div
          id="portfolio-items-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <motion.div
              id={`portfolio-item-card-${item.id}`}
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(item)}
            >
              {/* Image with high fidelity Overlay on Hover */}
              <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-slate-100 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay: Service provided & short summary/description of what we achieved */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-305 flex flex-col justify-end p-6 text-left">
                  <span className="text-[10px] uppercase font-bold text-brand-gold font-mono tracking-widest mb-1.5">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-white text-base font-bold font-display leading-snug mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <div className="flex justify-between items-center text-[11px] text-slate-450 border-t border-white/10 pt-3">
                    <span className="font-mono text-slate-300">Year: {item.year}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Company/Client Name Underneath Card */}
              <div className="p-4 text-left">
                <span className="text-[10px] font-extrabold text-brand-coral uppercase tracking-widest font-mono">
                  {item.client}
                </span>
                <h3 className="font-bold text-slate-800 font-display text-sm sm:text-base leading-snug mt-1 group-hover:text-brand-purple transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Case Study Pop-up Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-details-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur background clickable pane */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
              />

              {/* Main Modal body sheet */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.45 }}
                className="relative bg-white border border-slate-100 shadow-2xl rounded-[36px] max-w-3xl w-full max-h-[92vh] overflow-y-auto text-left z-10"
              >
                {/* Floating dismiss button */}
                <button
                  id="close-project-modal"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/85 hover:bg-slate-100 text-slate-650 hover:text-slate-900 shadow-sm backdrop-blur-sm border border-slate-100 cursor-pointer"
                  aria-label="Dismiss case study view"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Cover High Res Project Photo */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-mono font-bold bg-brand-gradient text-white px-3 py-1 uppercase rounded-xl tracking-wider mb-2 inline-block">
                      {selectedProject.categoryLabel}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Case Study Metadata Pane & Narrative */}
                <div id="case-study-grid" className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column Narrative */}
                  <div className="md:col-span-8 space-y-5">
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-1.5">
                        Overview & Challenge
                      </h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="pt-3">
                      <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-2.5">
                        Scope and Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-full text-xs text-slate-600 font-medium font-mono">
                            <Tag className="w-3 h-3 text-brand-coral" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Structured Stats Block */}
                  <div className="md:col-span-4 space-y-4 bg-slate-50 border border-slate-100 p-5 rounded-3xl h-fit">
                    <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold pb-2 border-b border-slate-200">
                      Client Engagement Details
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <User className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="font-semibold block truncate">Client: {selectedProject.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Year: {selectedProject.year}</span>
                      </div>
                    </div>

                    {/* Highly stylized case metric block */}
                    {selectedProject.stats && (
                      <div className="pt-4 border-t border-slate-200 mt-4 text-left">
                        <span className="text-[9px] font-mono tracking-wider text-brand-coral uppercase font-bold block mb-1">
                          Campaign Outcome
                        </span>
                        <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-inner">
                          <span className="text-2xl font-black font-display text-slate-900 block leading-tight">
                            {selectedProject.stats.value}
                          </span>
                          <span className="text-[10px] text-slate-500 leading-normal block font-medium">
                            {selectedProject.stats.label}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-3 p-6 border-t border-slate-100">
                  <button
                    id="case-modal-dismiss"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 cursor-pointer"
                  >
                    Close Sheet
                  </button>
                  <a
                    id="case-modal-cta"
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center gap-1 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-gradient hover:bg-brand-gradient-hover rounded-xl shadow-md shadow-brand/20 transition-all cursor-pointer"
                  >
                    Inquire Similar Strategy
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
