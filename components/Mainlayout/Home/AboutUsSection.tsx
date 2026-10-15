/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

// Ticker items for the bottom auto-scrolling bar
const tickerItems = [
  "Train Like Champions",
  "Easy Turf Booking",
  "Premium Playing Experience",
  "Train Like Champions",
  "Easy Turf Booking",
  "Premium Playing Experience",
  "Train Like Champions",
  "Easy Turf Booking",
  "Premium Playing Experience",
  "Train Like Champions",
  "Easy Turf Booking",
  "Premium Playing Experience",
];

// 3x3 Green Grid Icon component
function GreenGridIcon() {
  return (
    <div className="mx-8 grid grid-cols-3 gap-1 shrink-0">
      {[...Array(9)].map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#9ecc00]" />
      ))}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-neutral-900 pt-16 pb-8 overflow-hidden">
      {/* Dynamic Keyframe Styles for Infinite Auto-Scroll */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: marquee 160s linear infinite;
        }
      `}</style>

      {/* --- TOP ABOUT US CONTENT SECTION --- */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline with Subtitle Line */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[3px] w-8 bg-[#9ecc00]" />
            <span className="text-[18px] font-bold tracking-widest text-neutral-800 uppercase">
              ABOUT US
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-neutral-800 leading-snug max-w-[1400px]">
            With high-quality turf grounds, easy online booking, flexible time slots,
            and a strong football community,{" "}
            <span className="text-slate-400">
              we create the perfect environment for players
            </span>{" "}
            to compete, connect, and grow.
          </h2>
        </div>

        {/* Content & Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-20">
          {/* Left Side: Description Text & Button */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-xs sm:text-[20px] text-neutral-500 font-semibold leading-relaxed max-w-7xl">
              We believe football is more than just a sport it's teamwork, energy,
              discipline, and unforgettable moments. We are dedicated to bringing
              football lovers together through professionally managed turf facilities,
              competitive matches, training sessions, and a vibrant sports culture.
            </p>

            {/* Lime Green CTA Button */}
            <button className="group inline-flex items-center justify-between gap-3 bg-[#9ecc00] hover:bg-[#8ebb00] transition-colors text-xs font-black uppercase text-neutral-900 py-3 px-5 rounded-full shadow-sm">
              <span>Join & Experience Us</span>
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-neutral-900/10 group-hover:bg-neutral-900/20 transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Side: Dual Image Cards */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop"
                alt="Soccer ball on turf ground"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800&auto=format&fit=crop"
                alt="Sunny football field with turf"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM INFINITE AUTO-SCROLL TICKER --- */}
      <div className="w-full md:pb-14 md:pt-8 overflow-hidden select-none">
        <div className="flex w-max animate-ticker whitespace-nowrap hover:[animation-play-state:paused]">
          {/* First Copy */}
          <div className="flex items-center">
            {tickerItems.map((item, index) => (
              <div key={`set1-${index}`} className="flex items-center">
                <GreenGridIcon />
                <span className="text-xl md:text-2xl lg:text-5xl font-black uppercase text-slate-400 tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate Copy for Seamless Continuous Loop */}
          <div className="flex items-center">
            {tickerItems.map((item, index) => (
              <div key={`set2-${index}`} className="flex items-center">
                <GreenGridIcon />
                <span className="text-xl md:text-2xl lg:text-3xl font-black uppercase text-slate-400 tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}