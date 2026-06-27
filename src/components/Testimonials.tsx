/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Semi-autoplay structure to slowly transition testimonials
  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0
    })
  };

  const activeTestimonial1 = TESTIMONIALS[currentIndex];
  const activeTestimonial2 = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden text-center">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-5 w-64 h-64 bg-brand-purple/5 rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-64 h-64 bg-brand-coral/5 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div id="testimonials-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Testimonials Header - Centered */}
        <div id="testimonials-header" className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.12]">
            Testimonials
          </h2>
          <p className="mt-4 text-slate-600 font-light leading-relaxed text-base max-w-2xl mx-auto">
            See what leading businesses and healthcare centers say about partnering with Siltawi.
          </p>
        </div>

        {/* Carousel Block Wrapper with 2 cards display on desktop */}
        <div id="testimonials-carousel" className="relative min-h-[420px] flex items-center justify-center p-2 sm:p-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              id={`testimonial-slide-${currentIndex}`}
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Card 1 */}
              <div
                id={`testimonial-card-1-${activeTestimonial1.id}`}
                className="w-full bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between items-center relative text-center"
              >
                {/* Floating Quote graphic watermark */}
                <div className="absolute -top-5 right-10 w-11 h-11 bg-brand-coral hover:scale-105 text-white flex items-center justify-center rounded-xl transition-all shadow-md">
                  <Quote className="w-5 h-5 rotate-180 fill-white" />
                </div>

                <div className="w-full">
                  <div className="text-xs font-bold tracking-widest text-brand-coral uppercase mb-5">
                    {activeTestimonial1.company}
                  </div>
                  <div className="min-h-[120px] flex items-center justify-center">
                    <p className="text-base font-light text-slate-800 leading-relaxed italic">
                      "{activeTestimonial1.quote}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-200/60 w-full justify-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-slate-200">
                    <img
                      src={activeTestimonial1.avatarUrl}
                      alt={activeTestimonial1.author}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left leading-normal">
                    <span className="font-bold text-slate-900 font-display text-xs sm:text-sm block">
                      {activeTestimonial1.author}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">
                      {activeTestimonial1.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 (Desktop only) */}
              <div
                id={`testimonial-card-2-${activeTestimonial2.id}`}
                className="hidden md:flex w-full bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between items-center relative text-center"
              >
                {/* Floating Quote graphic watermark */}
                <div className="absolute -top-5 right-10 w-11 h-11 bg-brand-coral hover:scale-105 text-white flex items-center justify-center rounded-xl transition-all shadow-md">
                  <Quote className="w-5 h-5 rotate-180 fill-white" />
                </div>

                <div className="w-full">
                  <div className="text-xs font-bold tracking-widest text-brand-coral uppercase mb-5">
                    {activeTestimonial2.company}
                  </div>
                  <div className="min-h-[120px] flex items-center justify-center">
                    <p className="text-base font-light text-slate-800 leading-relaxed italic">
                      "{activeTestimonial2.quote}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-200/60 w-full justify-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-slate-200">
                    <img
                      src={activeTestimonial2.avatarUrl}
                      alt={activeTestimonial2.author}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left leading-normal">
                    <span className="font-bold text-slate-900 font-display text-xs sm:text-sm block">
                      {activeTestimonial2.author}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">
                      {activeTestimonial2.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Controls & indicators dots */}
        <div id="testimonials-controls" className="flex items-center justify-between mt-8 max-w-[240px] mx-auto">
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Previous client testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicators Dots */}
          <div id="testimonials-indicators" className="flex gap-1.5">
            {TESTIMONIALS.map((_, dotIdx) => (
              <button
                id={`testimonial-dot-${dotIdx}`}
                key={dotIdx}
                onClick={() => {
                  setDirection(dotIdx > currentIndex ? 'right' : 'left');
                  setCurrentIndex(dotIdx);
                }}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-350 ${
                  dotIdx === currentIndex ? 'bg-brand-coral w-6' : 'bg-slate-200 hover:bg-slate-350'
                }`}
                aria-label={`Show testimonial slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 shadow-sm flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Next client testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
