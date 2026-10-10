"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import player from '../../../public/images/banner-1.png';
import Image from 'next/image';

const Hero = () => {
  // State for tracking mouse offset for inverted parallax movement
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Handle mouse move over hero section
  const handleMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate mouse position relative to center (-1 to 1)
    const offsetX = (clientX - innerWidth / 2) / (innerWidth / 2);
    const offsetY = (clientY - innerHeight / 2) / (innerHeight / 2);
    setMouseOffset({
      x: -offsetX * 25,
      y: -offsetY * 25,
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] lg:min-h-[90vh] w-full bg-cover bg-center overflow-hidden flex items-center justify-center font-sans select-none"
     style={{ backgroundImage: "url('/images/banner-bg (1).jpg')" }}
    >
      {/* Background Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 min-h-[75vh]">
          
          {/* Left Column: Big Bold Typography & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left z-20">
            <div className="leading-none tracking-tight">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-wider block">
                OWN
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-[#83c400] tracking-wider block">
                THE
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-transparent stroke-white tracking-wider block"
                  style={{ WebkitTextStroke: '2px #ffffff' }}>
                PITCH
              </h1>
            </div>

            <p className="text-slate-200 text-sm sm:text-base max-w-md leading-relaxed font-normal pt-2">
              Book premium football courts, connect with <strong className="text-white font-bold">certified coaches</strong>, track every goal with live scorecards, and compete in city-wide tournaments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Book a Court Button */}
              <a
                href="#book-court"
                className="inline-flex items-center space-x-3 bg-[#83c400] hover:bg-[#92dc00] text-[#020d1a] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg hover:scale-105"
              >
                <span>Book a Court</span>
                <span className="flex items-center justify-center w-6 h-6 bg-[#6ca300] rounded-xl text-white">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              {/* View Tournaments Button */}
              <a
                href="#tournaments"
                className="inline-flex items-center space-x-3 bg-white/90 hover:bg-white text-[#020d1a] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg hover:scale-105"
              >
                <span>View Tournaments</span>
                <span className="flex items-center justify-center w-6 h-6 bg-[#020d1a] rounded-xl text-white">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Center Column: Animated Player & Spreading Head Radar Effect */}
          <div className="lg:col-span-4 relative flex items-center justify-center h-[450px] sm:h-[550px] lg:h-[650px]">
            
            {/* Concentric Spreading Pulse Aura behind Head */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
              <div className="relative flex items-center justify-center w-48 h-48">
                <span className="absolute inline-flex w-32 h-32 rounded-full bg-white/10 animate-ping" />
                <span className="absolute inline-flex w-48 h-48 rounded-full border border-white/20 animate-pulse" />
                <span className="absolute inline-flex w-64 h-64 rounded-full border border-white/10 animate-ping duration-1000" />
                <span className="absolute inline-flex w-80 h-80 rounded-full border border-white/5" />
              </div>
            </div>

            {/* Player Image with Inverted Parallax Movement */}
            <div
              className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
            >
              <Image
                src={player}
                alt="Soccer Player"
                className="max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Column: Floating Stat Cards */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-end z-20">
            {/* Stat Card 1 */}
            <div className="w-full sm:w-48 lg:w-52 bg-[#041527]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 text-center shadow-xl hover:border-[#83c400]/50 transition-all">
              <h3 className="text-3xl sm:text-4xl font-black text-[#83c400]">48</h3>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-1">Premium Courts</p>
            </div>

            {/* Stat Card 2 */}
            <div className="w-full sm:w-48 lg:w-52 bg-[#041527]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 text-center shadow-xl hover:border-[#83c400]/50 transition-all">
              <h3 className="text-3xl sm:text-4xl font-black text-[#83c400]">89+</h3>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-1">Verified Coaches</p>
            </div>

            {/* Stat Card 3 */}
            <div className="w-full sm:w-48 lg:w-52 bg-[#041527]/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 text-center shadow-xl hover:border-[#83c400]/50 transition-all">
              <h3 className="text-3xl sm:text-4xl font-black text-[#83c400]">12+</h3>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-1">Active Players</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;