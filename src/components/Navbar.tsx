/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronDown, BookOpen, Users, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentPage: 'home' | 'about-us' | 'team' | 'faq' | 'service-details';
  onNavigatePage: (page: 'home' | 'about-us' | 'team' | 'faq' | 'service-details') => void;
}

export default function Navbar({ activeSection, onNavigate, currentPage, onNavigatePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-set mobile about expansion based on current page when menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileAboutOpen(['about-us', 'team', 'faq'].includes(currentPage));
    }
  }, [isMobileMenuOpen, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    onNavigatePage('home');
    onNavigate('home');
  };

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    onNavigatePage('home');
    onNavigate(id);
  };

  const handleDropdownPageClick = (page: 'about-us' | 'team' | 'faq') => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const aboutSubMenu = [
    { label: 'About Us', page: 'about-us' as const, icon: BookOpen, desc: 'Our background and mission foundations.' },
    { label: 'Our Team', page: 'team' as const, icon: Users, desc: 'Meet our talented Addis Ababa crew.' },
    { label: 'FAQs', page: 'faq' as const, icon: HelpCircle, desc: 'Immediate clarifications on key operations.' }
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div id="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="navbar-row" className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            id="navbar-logo-btn"
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer focus-visible:outline-none h-11"
          >
            <img
              src="/siltawi_logo.svg"
              alt="Siltawi"
              className="h-9 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Navigation Link Items */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <button
              id="nav-link-home"
              onClick={() => {
                onNavigatePage('home');
                onNavigate('home');
              }}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-200 ${
                currentPage === 'home' && activeSection === 'home'
                  ? 'text-brand-coral'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {currentPage === 'home' && activeSection === 'home' && (
                <motion.span
                  id="nav-active-pill-home"
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-brand-coral/10 -z-10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Home
            </button>

            {/* About Dropdown Trigger */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                id="nav-link-about-trigger"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className={`relative px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-200 flex items-center gap-1 ${
                  ['about-us', 'team', 'faq'].includes(currentPage)
                    ? 'text-brand-coral'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {['about-us', 'team', 'faq'].includes(currentPage) && (
                  <motion.span
                    id="nav-active-pill-about"
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-brand-coral/10 -z-10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                About
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Submenu Dropdown panel */}
              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    id="about-submenu-dropdown"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl p-3 z-50 text-left"
                  >
                    <div className="space-y-1">
                      {aboutSubMenu.map((sub, sIdx) => {
                        const SubIcon = sub.icon;
                        const isSubActive = currentPage === sub.page;
                        return (
                          <button
                            key={sIdx}
                            onClick={() => handleDropdownPageClick(sub.page)}
                            className={`flex items-start gap-3 w-full p-2.5 rounded-xl text-left cursor-pointer transition-colors ${
                              isSubActive
                                ? 'bg-brand-coral/5 text-brand-coral'
                                : 'hover:bg-slate-55 hover:bg-slate-50/60 text-slate-700'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                              isSubActive ? 'bg-brand-coral/10 text-brand-coral' : 'bg-slate-100 text-slate-500'
                            }`}>
                              <SubIcon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="font-bold text-xs font-display leading-tight">{sub.label}</h4>
                              <p className="text-[10px] text-slate-400 font-light leading-normal">{sub.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services */}
            <button
              id="nav-link-services"
              onClick={() => handleLinkClick('services')}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-200 ${
                currentPage === 'home' && activeSection === 'services'
                  ? 'text-brand-coral'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {currentPage === 'home' && activeSection === 'services' && (
                <motion.span
                  id="nav-active-pill-services"
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-brand-coral/10 -z-10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Services
            </button>

            {/* Our Work (replaces portfolio) */}
            <button
              id="nav-link-portfolio"
              onClick={() => handleLinkClick('portfolio')}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-200 ${
                currentPage === 'home' && activeSection === 'portfolio'
                  ? 'text-brand-coral'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {currentPage === 'home' && activeSection === 'portfolio' && (
                <motion.span
                  id="nav-active-pill-portfolio"
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-brand-coral/10 -z-10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Our Work
            </button>

            {/* Testimonials */}
            <button
              id="nav-link-testimonials"
              onClick={() => handleLinkClick('testimonials')}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-200 ${
                currentPage === 'home' && activeSection === 'testimonials'
                  ? 'text-brand-coral'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {currentPage === 'home' && activeSection === 'testimonials' && (
                <motion.span
                  id="nav-active-pill-testimonials"
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-brand-coral/10 -z-10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Testimonials
            </button>

            {/* Contact Us */}
            <button
              id="nav-link-contact"
              onClick={() => handleLinkClick('contact')}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-200 ${
                currentPage === 'home' && activeSection === 'contact'
                  ? 'text-brand-coral'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {currentPage === 'home' && activeSection === 'contact' && (
                <motion.span
                  id="nav-active-pill-contact"
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-brand-coral/10 -z-10 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Contact Us
            </button>
          </nav>

          {/* Actions & Hamburg Menu */}
          <div id="navbar-actions" className="flex items-center gap-3">
            <button
              id="nav-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-gradient hover:-translate-y-[1px] rounded-full transition-all duration-200 shadow-md shadow-brand/20 cursor-pointer animate-fade-in"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Burger Trigger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden text-left"
          >
            <div id="mobile-nav-box" className="px-4 pt-2 pb-6 space-y-1">
              
              {/* Home */}
              <button
                id="mobile-link-home"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigatePage('home');
                  onNavigate('home');
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'bg-brand-coral/10 text-brand-coral font-extrabold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Home
              </button>

              {/* Collapsible About Dropdown */}
              <div className="space-y-1">
                <div id="mobile-about-button-group" className="flex items-center justify-between w-full rounded-xl overflow-hidden border border-transparent">
                  <button
                    id="mobile-link-about"
                    onClick={() => handleLinkClick('about')}
                    className={`flex-1 text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-l-xl transition-all ${
                      (currentPage === 'home' && activeSection === 'about') || ['about-us', 'team', 'faq'].includes(currentPage)
                        ? 'bg-brand-coral/10 text-brand-coral font-extrabold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    About
                  </button>
                  <button
                    id="mobile-link-about-arrow"
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className={`px-4 py-3 rounded-r-xl transition-all flex items-center justify-center border-l ${
                      (currentPage === 'home' && activeSection === 'about') || ['about-us', 'team', 'faq'].includes(currentPage)
                        ? 'bg-brand-coral/10 text-brand-coral border-brand-coral/10'
                        : 'text-slate-600 hover:bg-slate-50 border-slate-100'
                    }`}
                    aria-label="Toggle About Submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isMobileAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isMobileAboutOpen && (
                    <motion.div
                      id="mobile-about-submenu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden pl-4 pr-1 space-y-1 border-l border-slate-100 ml-5 mt-1"
                    >
                      {aboutSubMenu.map((sub, sIdx) => {
                        const isSubActive = currentPage === sub.page;
                        return (
                          <button
                            key={sIdx}
                            onClick={() => handleDropdownPageClick(sub.page)}
                            className={`block w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                              isSubActive
                                ? 'bg-brand-coral/10 text-brand-coral'
                                : 'text-slate-500 hover:bg-slate-50'
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <button
                id="mobile-link-services"
                onClick={() => handleLinkClick('services')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                  currentPage === 'home' && activeSection === 'services'
                    ? 'bg-brand-coral/10 text-brand-coral font-extrabold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Services
              </button>

              {/* Our Work */}
              <button
                id="mobile-link-portfolio"
                onClick={() => handleLinkClick('portfolio')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                  currentPage === 'home' && activeSection === 'portfolio'
                    ? 'bg-brand-coral/10 text-brand-coral font-extrabold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Our Work
              </button>

              {/* Testimonials */}
              <button
                id="mobile-link-testimonials"
                onClick={() => handleLinkClick('testimonials')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                  currentPage === 'home' && activeSection === 'testimonials'
                    ? 'bg-brand-coral/10 text-brand-coral font-extrabold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Testimonials
              </button>

              {/* Contact Us */}
              <button
                id="mobile-link-contact"
                onClick={() => handleLinkClick('contact')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                  currentPage === 'home' && activeSection === 'contact'
                    ? 'bg-brand-coral/10 text-brand-coral font-extrabold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Contact Us
              </button>

              <div id="mobile-cta-box" className="pt-4 border-t border-slate-100 px-4">
                <button
                  id="mobile-cta-btn"
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center gap-1 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-brand-gradient hover:bg-brand-gradient-hover rounded-xl shadow-md cursor-pointer"
                >
                  Start Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
