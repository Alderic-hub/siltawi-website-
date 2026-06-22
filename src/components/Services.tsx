/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Megaphone, Globe, Palette, Video, TrendingUp, ChevronRight, Check } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Megaphone,
  Globe,
  Palette,
  Video,
  TrendingUp,
};

// Map each service ID to a highly relevant and descriptive professional image
const serviceImages: { [key: string]: string } = {
  'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500', // Charts and dynamic analytics
  'website-development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500', // Modern IDE development workspace
  'branding-design': 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=500', // Visually striking packaging and brand guides
  'content-creation': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500', // Camera setup & high-end multimedia capture equipment
  'seo-services': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=500', // Direct web visibility growth metrics
};

interface ServicesProps {
  onNavigatePage: (page: 'home' | 'about-us' | 'team' | 'faq' | 'service-details', serviceId?: string) => void;
}

export default function Services({ onNavigatePage }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-slate-50/30 relative overflow-hidden">
      {/* Background radial gradient blobs for subtle depth styling */}
      <div className="absolute top-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-purple/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-coral/5 blur-[120px] -z-10 pointer-events-none" />

      <div id="services-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Centered Text */}
        <div id="services-header" className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.12]">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600 font-light leading-relaxed text-base sm:text-lg">
            We don’t just offer generic packages. Siltawi Digital designs data-backed creative experiences that establish lasting corporate authority, streamline transaction collections, and generate direct customer pipelines.
          </p>
        </div>

        {/* Fully responsive CSS Grid. Eliminates hardcoded math so the cards scale perfectly to any viewport width. */}
        <div 
          id="services-responsive-grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Globe;
            const cardImage = serviceImages[srv.id] || serviceImages['website-development'];

            return (
              <motion.div
                id={`service-card-${srv.id}`}
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                // If the item lies alone in the 3rd column of the 2nd row (4th and 5th items), 
                // we keep it beautifully unified or can optionally span md grids. 
                className="relative bg-white border-2 border-slate-200/70 hover:border-brand-coral rounded-[32px] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-brand-coral/5 hover:bg-brand-coral/[0.015] w-full"
              >
                {/* Visual Header containing OPTION badge and beautiful descriptive image */}
                <div className="relative h-48 sm:h-52 overflow-hidden w-full bg-slate-100">
                  <img
                    src={cardImage}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Visual gradient filter overlaid above the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top-left Option badge mimicking the infographic exact layout */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-brand-coral text-white font-display text-[9px] font-extrabold tracking-widest rounded-full uppercase shadow-md select-none z-10">
                    SERVICE 0{idx + 1}
                  </div>
                </div>

                {/* Card Content Interior Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  
                  {/* Floating Action Button-Style Icon Box */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 bg-brand-coral/5 border border-brand-coral/10 rounded-2xl text-brand-coral transition-colors duration-300 group-hover:bg-brand-coral/10">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-extrabold font-display text-slate-900 group-hover:text-brand-coral transition-colors tracking-tight text-left">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Description text */}
                  <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-6 text-left">
                    {srv.brief}
                  </p>

                  {/* Sub-features listed with custom brand checkbox icons */}
                  <ul className="space-y-3 w-full mt-auto mb-2">
                    {srv.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium text-left">
                        <Check className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card Action footer (fully aligned at base of interior card structure) */}
                <div className="px-6 py-5 sm:px-8 border-t border-slate-100 flex items-center justify-between w-full bg-slate-50/50">
                  <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">Capabilities Matrix</span>
                  <button
                    onClick={() => {
                      onNavigatePage('service-details', srv.id);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="text-xs font-bold text-brand-coral hover:text-brand-purple uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer group/btn"
                  >
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
