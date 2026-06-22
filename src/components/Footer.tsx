/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'about-us' | 'team' | 'faq' | 'service-details') => void;
}

export default function Footer({ onNavigate, onNavigatePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { label: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { label: 'Instagram', icon: Instagram, url: 'https://instagram.com' }
  ];

  const quickNav = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Inquire Brief' }
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    onNavigatePage('home');
    onNavigate(id);
  };

  return (
    <footer id="siltawi-footer" className="bg-slate-950 text-slate-350 border-t border-slate-900 pt-16 pb-12 relative text-left">
      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns row */}
        <div id="footer-columns-row" className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1 - Brand Summary */}
          <div className="md:col-span-4 flex flex-col space-y-5">
            <div className="flex items-center">
              <img
                src="/siltawi_logo.svg"
                alt="Siltawi Logo"
                className="h-9 w-auto object-contain select-none filter brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Ethiopia's premier results-driven digital marketing and advertising studio. We deploy high-converting campaign structures, design stunning enterprise portals, and sculpt timeless brand identities.
            </p>

            {/* Social Handles Icons */}
            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    id={`footer-social-${soc.label.toLowerCase()}`}
                    key={soc.label}
                    href={soc.url}
                    target="_blank"
                    rel="no-referrer"
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-coral text-slate-400 hover:text-white flex items-center justify-center transition-all"
                    aria-label={`Visit Siltawi on ${soc.label}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Category Quick links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-5">
              Enterprise Map
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickNav.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Dedicated Sub-Pages Routing Links */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => { onNavigatePage('about-us'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigatePage('team'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Core Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigatePage('faq'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Help & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Detailed Office Coordinates */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-1">
              Siltawi Office Hub
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">
                  Airport Road, Bole District, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-coral shrink-0" />
                <span className="font-mono">+251 900 000 000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-coral shrink-0" />
                <span className="font-mono">info@siltawi.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                <span className="font-light leading-normal">
                  Mon - Fri: 8:30 AM - 5:30 PM (EAT)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar with Back To Top trigger */}
        <div id="footer-bottom-row" className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-xs text-slate-500 font-light">
              &copy; {currentYear} Siltawi Digital Marketing plc. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 font-mono">
              Designed & Developed in Addis Ababa, Ethiopia • Founded 2023
            </p>
          </div>

          <button
            id="back-to-top-btn"
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-400 hover:text-white transition-all shadow-lg cursor-pointer max-w-fit"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
