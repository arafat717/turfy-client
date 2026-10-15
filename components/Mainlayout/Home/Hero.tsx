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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center gap-8 lg:gap-4 min-h-[75vh] w-full">
          
          {/* Left Column: Big Bold Typography & CTA */}
          <div className="lg:col-span-4 space-y-6 text-center md:text-left z-20">
            <h1 className="sm:hidden whitespace-nowrap text-[clamp(1.25rem,8vw,3rem)] font-bold uppercase tracking-[0.08em]">
              <span className="text-white">OWN</span>{' '}
              <span className="text-[#83c400]">THE</span>{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #ffffff' }}>PITCH</span>
            </h1>
            <div className="hidden sm:block leading-none tracking-tight">
              <h1 className="text-5xl sm:text-6xl md:text-9xl  lg:text-[150px] font-bold uppercase text-white tracking-wider block">
                OWN
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-9xl lg:text-[150px] font-bold uppercase text-[#83c400] tracking-wider block">
                THE
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[150px] font-bold uppercase text-transparent stroke-white tracking-wider block"
                  style={{ WebkitTextStroke: '2px #ffffff' }}>
                PITCH
              </h1>
            </div>

            <p className="text-slate-200 text-sm sm:text-[22px] mx-auto font-semibold md:mx-0 leading-relaxed font-normal pt-2">
              Discover the best football turfs near you, check available time slots, and book your next game in just a few clicks. Less planning, more playing.
            </p>

            
          </div>

          {/* Center Column: Animated Player & Spreading Head Radar Effect */}
          <div className="hidden sm:flex lg:col-span-4 relative items-center justify-center h-80 sm:h-[400px] md:h-[450px] lg:h-[650px]">
            {/* Keep the aura anchored to the player so it stays behind his head. */}
            <div
              className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
            >
              {/* Concentric Spreading Pulse Aura behind Head */}
              <div
                className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              >
                <div className="relative flex items-center justify-center w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                  <span className="absolute inline-flex w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 animate-ping" />
                  <span className="absolute inline-flex w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border border-white/20 animate-pulse" />
                  <span className="absolute inline-flex w-48 h-48 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full border border-white/10 animate-ping duration-1000" />
                  <span className="absolute inline-flex w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-white/5" />
                </div>
              </div>

              <Image
                src={player}
                alt="Soccer Player"
                className="max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* Right column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 lg:col-span-4 lg:flex lg:flex-col gap-4 justify-center items-stretch lg:items-end z-20">
            {/* Stat Card 1 */}
            <div className="w-full sm:w-auto lg:w-52 bg-gray-400/10 backdrop-blur-xs border-r-2 border-b-2 border-[#83c400] rounded-xl p-4 sm:p-6 lg:p-10 text-center shadow-xl hover:border-[#83c400]/50 transition-all">
              <h3 className="text-3xl sm:text-5xl font-black text-[#83c400]">48</h3>
              <p className="text-[12px] font-bold text-white uppercase mt-1">Premium Courts</p>
            </div>

            {/* Stat Card 2 */}
            <div className="w-full sm:w-auto lg:w-52 bg-gray-400/10 backdrop-blur-xs border-r-2 border-b-2 border-[#83c400] rounded-xl p-4 sm:p-6 lg:p-10 text-center shadow-xl hover:border-[#83c400]/50 transition-all">
              <h3 className="text-3xl sm:text-4xl font-black text-[#83c400]">89+</h3>
              <p className="text-[12px] font-bold text-white uppercase tracking-wider mt-1">Verified Coaches</p>
            </div>

            {/* Stat Card 3 */}
            <div className="w-full sm:w-auto lg:w-52 bg-gray-400/10 backdrop-blur-xs border-r-2 border-b-2 border-[#83c400] rounded-xl p-4 sm:p-6 lg:p-10 text-center shadow-xl hover:border-[#83c400]/50 transition-all">
              <h3 className="text-3xl sm:text-4xl font-black text-[#83c400]">12+</h3>
              <p className="text-[12px] font-bold text-white uppercase tracking-wider mt-1">Active Players</p>
            </div>
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                  <a
                href="#book-court"
                className="inline-flex w-full sm:w-auto lg:w-52 items-center justify-center lg:justify-start space-x-3 bg-[#83c400] hover:bg-[#92dc00] text-[#020d1a] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg hover:scale-105"
              >
                <span>Book a Court</span>
                <span className="flex items-center justify-center w-6 h-6 bg-[#6ca300] rounded-xl text-white">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;