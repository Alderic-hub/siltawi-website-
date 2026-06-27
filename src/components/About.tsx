/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface AboutProps {
  onNavigatePage: (page: 'home' | 'about-us' | 'team' | 'faq' | 'service-details') => void;
}

export default function About({ onNavigatePage }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial gradient glow spheres to mimic Martex */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-coral/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-purple/5 blur-[120px] -z-10 pointer-events-none" />

      <div id="about-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="about-asymmetric-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left: Descriptive workspace image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1/1] xl:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Siltawi Creative Coding Space"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle visual gradient edge built inside image overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Soft decorative visual background backdrops */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-coral/15 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-purple/15 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right: Layered overlay text card (sitting partially on top on lg screen, partially in white space) */}
          <div className="lg:col-span-6 lg:-ml-20 xl:-ml-28 z-20 relative">
            <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl p-8 sm:p-12 rounded-2xl space-y-6">
              <div id="about-agency-badge-wrapper" className="flex justify-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-coral/5 border border-brand-coral/20 text-brand-coral text-[10px] font-bold uppercase tracking-widest rounded-full">
                  About Our Agency
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.12] text-center">
                We turn brands into digital experiences people can’t ignore.
              </h2>
              
              <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                From our creative studio in Addis Ababa, we help businesses transform their ideas into powerful digital experiences that attract attention, build trust, and drive growth. Through strategic campaigns, high-performance websites, and distinctive brand identities, we create digital solutions that go beyond visibility — helping you establish authority, stand out in your industry, and become impossible to ignore.
              </p>
              
              <div className="pt-2">
                <button
                  id="more-about-us-btn"
                  onClick={() => {
                    onNavigatePage('about-us');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-gradient hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 shadow-lg shadow-brand/20 cursor-pointer w-full sm:w-auto text-center"
                >
                  More About Us
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
