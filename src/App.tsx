/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBusinesses from './components/TrustedBusinesses';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatsBanner from './components/StatsBanner';

// Subpage Components
import AboutUsPage from './components/AboutUsPage';
import TeamPage from './components/TeamPage';
import FaqPage from './components/FaqPage';
import ServiceDetailPage from './components/ServiceDetailPage';

import { SERVICES } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about-us' | 'team' | 'faq' | 'service-details'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Switch routing helper
  const handleNavigatePage = (page: 'home' | 'about-us' | 'team' | 'faq' | 'service-details', serviceId?: string) => {
    setCurrentPage(page);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Interactive IntersectionObserver targeting precise homepage sections
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Triggers midway through active viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [currentPage]);

  const handleNavigate = (sectionId: string) => {
    // If we click a section link on a dedicated details sub-page, return home first cleanly
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string, attempts = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Compensates for the fixed header height context
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    } else if (attempts < 5) {
      setTimeout(() => {
        scrollToSection(sectionId, attempts + 1);
      }, 80);
    }
  };

  const selectedServiceObj = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div id="siltawi-root-layout" className="min-h-screen text-slate-800 bg-white selection:bg-brand-coral selection:text-white pb-0">
      
      {/* Sticky Header Navigation bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        onNavigatePage={(page) => handleNavigatePage(page)}
      />

      {/* Main Structural Rendering Switch */}
      <main id="siltawi-main-content">
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section */}
            <Hero
              onNavigateToContact={() => handleNavigate('contact')}
              onNavigateToServices={() => handleNavigate('services')}
            />

            {/* 2. Trusted by Businesses Section (Scrolling marquee format) */}
            <TrustedBusinesses />

            {/* 3. About Us Section & 4. Projects/Achievements (Simple highlights statistics) */}
            <About onNavigatePage={handleNavigatePage} />

            {/* 5. Services Section (Grid displaying 5 boxes of equal heights) */}
            <Services onNavigatePage={handleNavigatePage} />

            {/* 6. Our Work Section (Portfolio custom overlay with centered heading) */}
            <Portfolio />

            {/* Siltawi by the numbers stats row */}
            <StatsBanner />

            {/* 7. Testimonials Section (Company name on top, quote inside, speaker on bottom) */}
            <Testimonials />

            {/* 8. Contact Section (Form + Location map only) */}
            <Contact />
          </>
        ) : currentPage === 'about-us' ? (
          <AboutUsPage onBackToHome={() => handleNavigatePage('home')} />
        ) : currentPage === 'team' ? (
          <TeamPage onBackToHome={() => handleNavigatePage('home')} />
        ) : currentPage === 'faq' ? (
          <FaqPage onBackToHome={() => handleNavigatePage('home')} />
        ) : currentPage === 'service-details' && selectedServiceObj ? (
          <ServiceDetailPage
            service={selectedServiceObj}
            onBackToHome={() => handleNavigatePage('home')}
          />
        ) : (
          <div className="pt-32 pb-24 text-center">
            <h2 className="text-xl font-bold font-display">Page Not Found</h2>
            <button
              onClick={() => handleNavigatePage('home')}
              className="mt-4 px-6 py-2.5 bg-brand-gradient text-white rounded-full text-xs font-bold uppercase transition-all"
            >
              Return Home
            </button>
          </div>
        )}
      </main>

      {/* Brand Sitemap Footer (Injects location details and social blocks) */}
      <Footer
        onNavigate={handleNavigate}
        onNavigatePage={(page) => handleNavigatePage(page)}
      />

    </div>
  );
}
