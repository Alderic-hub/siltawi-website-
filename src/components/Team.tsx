/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TEAM_MEMBERS } from '../data';
import { Linkedin, Twitter, Mail, Instagram, ShieldAlert } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial blobs to mimic Martex */}
      <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-purple/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-coral/5 blur-[120px] -z-10 pointer-events-none" />

      <div id="team-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Section Header Block with Martex Pill Badge */}
        <div id="team-header" className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-coral/5 border border-brand-coral/20 text-brand-coral text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 font-mono">
            Behind the Screens
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.12]">
            Meet the Digital Architects
          </h2>
          <p className="mt-4 text-slate-605 text-slate-600 font-light leading-relaxed text-base">
            Siltawi Digital is fueled by a specialized crew of visual storytellers, software engineers, search geeks, and analytical marketers aligned under Henok’s strategic leadership in Addis Ababa.
          </p>
        </div>

        {/* Team Grid Layout */}
        <div id="team-members-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              id={`team-card-${member.id}`}
              key={member.id}
              className="bg-white border border-slate-200/60 rounded-[32px] p-6 flex flex-col justify-between hover:border-brand-coral/20 transition-all hover:shadow-xl duration-300 group"
            >
              <div>
                {/* Member Avatar Container with hovering reveal blur effects */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-inner">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  
                  {/* Floating Department tag */}
                  <span className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest bg-slate-950/80 text-white font-bold uppercase px-3 py-1 rounded-full backdrop-blur-md">
                    {member.department}
                  </span>
                </div>

                {/* Name, Role & Bio details */}
                <div className="text-left space-y-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-brand-purple transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-brand-coral uppercase tracking-wide block font-mono">
                    {member.role}
                  </span>
                  <p className="text-xs text-slate-500 font-light leading-relaxed pt-2 border-t border-slate-100 mt-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Dynamic Social Contact Links tray */}
              <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100/80">
                {member.socials.linkedin && (
                  <a
                    id={`team-${member.id}-linkedin`}
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-brand-coral/10 border border-slate-100 hover:border-brand-coral/20 text-slate-400 hover:text-brand-coral flex items-center justify-center transition-all"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    id={`team-${member.id}-twitter`}
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-100 text-slate-400 hover:text-sky-500 flex items-center justify-center transition-all"
                    aria-label={`${member.name} Twitter Profile`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    id={`team-${member.id}-instagram`}
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-100 text-slate-400 hover:text-rose-500 flex items-center justify-center transition-all"
                    aria-label={`${member.name} Instagram Profile`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    id={`team-${member.id}-email`}
                    href={`mailto:${member.socials.email}`}
                    className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-brand-coral/10 border border-slate-100 hover:border-brand-coral/20 text-slate-400 hover:text-brand-coral flex items-center justify-center transition-all"
                    aria-label={`Mail ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
