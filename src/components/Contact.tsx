/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  // Form input states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'webdev',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating API call to verify submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: 'webdev',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden text-left font-sans">
      {/* Background radial blobs mimicking Martex style */}
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-coral/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-purple/5 blur-[120px] -z-10 pointer-events-none" />

      <div id="contact-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Us Section Header */}
        <div id="contact-header" className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.12]">
            Contact Us
          </h2>
          <p className="mt-4 text-slate-600 font-light leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Ready to scale your leads? Send us a brief outline, and our client partner team based in Addis Ababa will connect back with you within 12 hours.
          </p>
        </div>

        {/* Info Grid and Form Pane Row container */}
        <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Google Map Section */}
          <div id="contact-map-panel" className="lg:col-span-5 h-full flex flex-col justify-between order-last">
            <div id="google-map-container" className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md h-full min-h-[350px] relative bg-slate-50">
              <iframe
                id="siltawi-embed-map"
                title="Google Map location highlighting Siltawi Bole HQ Addis Ababa"
                src="https://maps.google.com/maps?q=Airport%20Road,%20Addis%20Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Interactive Form Panel with validation & sub states */}
          <div id="contact-form-panel" className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-10 order-first">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  id="siltawi-contact-form"
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-205">
                    <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      Corporate Project RFP
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="firstName" className="text-xs font-bold font-mono text-slate-600 uppercase">First Name *</label>
                      <input
                        id="form-firstName"
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none"
                        placeholder="Yared"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="lastName" className="text-xs font-bold font-mono text-slate-600 uppercase">Last Name *</label>
                      <input
                        id="form-lastName"
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none"
                        placeholder="Solomon"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-bold font-mono text-slate-600 uppercase">Email Address *</label>
                      <input
                        id="form-email"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none"
                        placeholder="yared@company.com"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold font-mono text-slate-600 uppercase">Mobile Phone *</label>
                      <div className="relative flex items-center w-full">
                        <span className="absolute left-4 text-xs font-semibold text-slate-400 border-r border-slate-200 pr-2 font-mono">
                          +251
                        </span>
                        <input
                          id="form-phone"
                          required
                          type="tel"
                          name="phone"
                          pattern="[0-9]{9}"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-16 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none font-mono"
                          placeholder="934567890"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="text-xs font-bold font-mono text-slate-600 uppercase">Company Name</label>
                      <input
                        id="form-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none"
                        placeholder="E.g., Abyssinia plc"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="service" className="text-xs font-bold font-mono text-slate-600 uppercase">Service Required *</label>
                      <select
                        id="form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none cursor-pointer"
                      >
                        <option value="marketing">Digital Marketing Campaign</option>
                        <option value="webdev">Website Development (Next.js/React)</option>
                        <option value="branding">Branding & Logo Design</option>
                        <option value="content">Video Promotion & Copywriting</option>
                        <option value="seo">SEO Search Positioning</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-bold font-mono text-slate-600 uppercase">Project Summary *</label>
                    <textarea
                      id="form-message"
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all outline-none resize-none"
                      placeholder="Briefly state your campaign parameters, expected launches, or target audiences..."
                    />
                  </div>

                  <button
                    id="submit-contact-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4.5 bg-brand-gradient hover:opacity-95 hover:scale-[1.01] text-white font-bold uppercase text-xs tracking-wider rounded-xl shadow-lg shadow-brand-purple/15 transition-all cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        Submit Alignment Briefing
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  id="contact-form-success"
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-brand-coral/10 flex items-center justify-center text-brand-coral border border-brand-coral/20"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-bold font-mono tracking-widest text-brand-coral uppercase">
                      Briefing Transmitted
                    </span>
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      Amesegenalehu! (Thank You)
                    </h3>
                    <p className="text-sm text-slate-500 font-light max-w-md mx-auto leading-relaxed text-slate-600 font-light">
                      We have successfully queued your parameters. Helina Kebede (Campaigns Manager) or CEO Henok Tsegaye will reach out to you via email within <strong className="font-semibold text-slate-800">12 business hours</strong> to schedule an online video-sync session.
                    </p>
                  </div>

                  <button
                    id="reset-form-btn"
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
