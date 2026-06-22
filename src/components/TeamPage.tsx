/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data';
import { Linkedin, Twitter, Instagram, Mail, ArrowLeft } from 'lucide-react';

interface TeamPageProps {
  onBackToHome: () => void;
}

export default function TeamPage({ onBackToHome }: TeamPageProps) {
  return (
    <div id="team-page-root" className="pt-28 pb-24 bg-slate-50 relative overflow-hidden min-h-screen text-left">
      {/* Dynamic graphic spheres decorative mimicry of Martex */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-purple/5 blur-[125px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-coral/5 blur-[125px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back Anchor */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-coral transition-colors mb-10 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </button>

        {/* Team Section Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-coral/5 border border-brand-coral/20 text-brand-coral text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 font-mono">
            Our Crew
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.1] mb-6">
            Meet the Digital Architects
          </h1>
          <p className="text-slate-600 font-light leading-relaxed text-base">
            We are a highly integrated collective of graphic designers, web programmers, media producers, and metrics-focused paid advertising managers based in Addis Ababa. Click below to view individual pathways.
          </p>
        </div>

        {/* Team Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => {
            return (
              <motion.div
                id={`team-member-card-${member.id}`}
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/60 shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl hover:border-brand-coral/25 transition-all duration-300"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-square sm:aspect-[4/3] bg-slate-100">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    {/* Social links overlaid or embedded directly */}
                    <div className="flex gap-2">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="no-referrer"
                          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white text-white hover:text-brand-purple flex items-center justify-center backdrop-blur-md transition-all"
                          aria-label={`${member.name} LinkedIn Profile Link`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="no-referrer"
                          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white text-white hover:text-brand-purple flex items-center justify-center backdrop-blur-md transition-all"
                          aria-label={`${member.name} Twitter Profile Link`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="no-referrer"
                          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white text-white hover:text-brand-purple flex items-center justify-center backdrop-blur-md transition-all"
                          aria-label={`${member.name} Instagram Profile Link`}
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white text-white hover:text-brand-coral flex items-center justify-center backdrop-blur-md transition-all"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 sm:p-8 space-y-3.5 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-coral tracking-widest uppercase font-mono block">
                      {member.department}
                    </span>
                    <h3 className="text-xl font-bold font-display text-slate-900 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 font-mono">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Inline contacts fallback */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-400">CONTACT INFO</span>
                    <span className="text-[10px] font-mono font-medium text-slate-600">{member.socials.email || 'info@siltawi.com'}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
