import React from 'react';
import groundImg from "../../../public/images/video-bg.jpg";

export default function ParallaxBanner() {
  return (
    <div className="w-full pt-20 pb-18">
      {/* 
        Full-width Parallax Banner (w-full)
      */}
      <div 
        className="relative w-full h-[380px] md:h-[680px] rounded-[2rem] overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${groundImg.src}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* 
          Centered Content Container capped at max-w-[1400px] 
        */}
        <div className="relative z-10 w-full max-w-[1400px] h-full mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left-Side Typography and CTA Button */}
          <div className="flex flex-col justify-center max-w-2xl select-none">
            <h2 className="text-4xl sm:text-5xl md:text-[110px] font-extrabold uppercase leading-none tracking-tight">
              {/* White First Line */}
              <span className="block text-white">COMPLETE</span>
              {/* Lime Green Second Line */}
              <span className="block text-[#9ecc00]">SOLUTION</span>
              {/* Outlined Custom Bottom Line */}
              <span 
                className="block text-transparent uppercase"
                style={{
                  WebkitTextStroke: '2px #ffffff',
                }}
              >
                WITH TEAM.
              </span>
            </h2>

            {/* Pill CTA Contact Button */} 
            <button className="mt-6 self-start cursor-pointer flex items-center gap-2 bg-white/90 hover:bg-white text-[20px] font-black uppercase text-neutral-800 px-5 py-3 rounded-2xl shadow transition-all duration-200">
              <span>Contact Us</span>
              <span className="flex items-center justify-center h-7 w-7 rounded-full bg-neutral-800 text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Bottom-Right "PLAY VIDEO" circular badge inside 1400px grid */}
          {/* <button className="absolute right-6 md:right-12 bottom-8 md:bottom-12 z-10 h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-center transition-transform hover:scale-105 active:scale-95 duration-200">
            <span className="text-[8px] md:text-[9px] font-extrabold tracking-widest text-white uppercase leading-tight px-1">
              PLAY VIDEO
            </span>
          </button> */}

        </div>
      </div>
    </div>
  );
}