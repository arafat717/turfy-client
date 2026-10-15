import React from "react";
import Image from "next/image";
import soccerNetImg from "../../../public/images/offer-img-1.png"; // Replace with your image path

// Feature Cards Data
const offers = [
  {
    title: "Premium Court Booking",
    description:
      "Real-time availability. Instant confirmation. Book 5-aside, 7-aside, or full 11-aside pitches across premium venues.",
    icon: (
      /* Football Pitch Icon */
      <svg className="w-6 h-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "TOURNAMENTS",
    description:
      "Register teams for weekly leagues and knockout cups. Track brackets, standings, and top scorers in real-time.",
    icon: (
      /* Trophy Icon */
      <svg className="w-6 h-6 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V18H8v2h8v-2h-3v-2.1c1.93-.35 3.5-1.92 3.91-3.86C19.38 11.73 21 9.65 21 7V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
      </svg>
    ),
  },
  {
    title: "PRO COACHES",
    description:
      "Discover and book UEFA/AFC certified coaches specialising development, goalkeeping, tactics, more.",
    icon: (
      /* Coach / Whistle Icon */
      <svg className="w-6 h-6 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
      </svg>
    ),
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative w-full bg-[#111111] text-white border-t-5 border-b-5 border-[#9ecc00] overflow-hidden py-26">
      
      {/* --- REPEATING DARK GEOMETRIC PATTERN BACKDROP --- */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#222 1px, transparent 1px), linear-gradient(135deg, #181818 25%, transparent 25%), linear-gradient(225deg, #181818 25%, transparent 25%)`,
          backgroundSize: '20px 20px, 40px 40px, 40px 40px'
        }}
      />

      {/* --- RIGHT-SIDE SOCCER BALL & NET OVERLAY --- */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] pointer-events-none z-10 opacity-90">
        <Image
          src={soccerNetImg.src}
          alt="Football hitting soccer net"
          className="w-full h-auto object-contain translate-x-12 sm:translate-x-20"
          width={1000}
          height={1000}
        />
      </div>

      {/* --- INNER CONTENT CONTAINER --- */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Title Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[4px] w-7 bg-[#9ecc00]" />
            <span className="text-[18px] font-bold tracking-widest text-[#9ecc00] uppercase">
              WHAT WE OFFER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            BUILT FOR THE <span className="text-slate-500">BEAUTIFUL</span> GAME
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl lg:max-w-5xl">
          {offers.map((item, index) => (
            <div
              key={index}
              className="bg-[#181818]/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 group"
            >
              <div>
                {/* Glowing Icon Circle */}
                <div className="relative mb-6 flex items-center justify-center h-14 w-14 rounded-full bg-[#9ecc00] shadow-[0_0_20px_rgba(158,204,0,0.35)] group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}