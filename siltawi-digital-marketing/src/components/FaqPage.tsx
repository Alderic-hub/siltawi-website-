/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, Sparkles, ArrowLeft } from 'lucide-react';

interface FaqPageProps {
  onBackToHome: () => void;
}

export default function FaqPage({ onBackToHome }: FaqPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div id="faq-page-root" className="pt-28 pb-24 bg-white relative overflow-hidden min-h-screen text-left">
      {/* Background glow structures mimicking Martex elements */}
      <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-coral/5 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-purple/5 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Return to homepage link */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-coral transition-colors mb-10 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </button>

        {/* Header Block Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-coral/5 border border-brand-coral/20 text-brand-coral text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 font-mono">
            Support Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.1] mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 font-light leading-relaxed text-base">
            Find immediate answers regarding delivery timescales, custom API web security platforms, paid target structures, and continuing maintenance support details.
          </p>
        </div>

        {/* FAQs Accordion segment */}
        <div id="faq-accordion-rows" className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                id={`faq-accordion-${faq.id}`}
                key={faq.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100/60 cursor-pointer transition-colors"
                >
                  <span className="font-bold text-slate-900 font-display text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-slate-800' : ''
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-pane-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-205"
                    >
                      <p className="p-6 text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Post-FAQ Call-To-Action Block */}
        <div className="mt-16 p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-display text-slate-900">Still have inquiries?</h4>
            <p className="text-xs text-slate-500 font-light font-sans">We're glad to discuss custom features or scale estimates for your firms.</p>
          </div>
          <button
            onClick={onBackToHome}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-gradient hover:-translate-y-0.5 cursor-pointer transition-all shadow-md shadow-brand/20"
          >
            Submit Project Brief
          </button>
        </div>

      </div>
    </div>
  );
}
