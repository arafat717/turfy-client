import React from 'react';

const Footer = () => {
  return (
    <footer className="group relative bg-[#020d1a] text-white pt-16 overflow-hidden font-sans select-none">
      
      {/* Top Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info & Contact Cards (4 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Brand Logo */}
            <a href="#" className="inline-flex items-center space-x-2">
              <div className="relative flex items-center justify-center">
                <svg className="w-9 h-9 text-[#83c400]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" stroke="#83c400" strokeWidth="2" fill="#000" />
                  <path d="M12 7l2.5 3.5h-5L12 7z" fill="#83c400" />
                  <path d="M7 10.5l-2.5 2 1.5 3h3L7 10.5z" fill="#83c400" />
                  <path d="M17 10.5l2.5 2-1.5 3h-3L17 10.5z" fill="#83c400" />
                  <path d="M9.5 15.5l2.5 2 2.5-2-1-3h-3l-1 3z" fill="#83c400" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white uppercase italic">
                  Dream<span className="text-[#83c400]">Sports</span>
                </span>
                <span className="text-[10px] text-[#83c400] font-semibold tracking-wider uppercase -mt-1 self-end pr-1">
                  Football
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              The premier destination for serious football players. Book premium courts, train with elite coaches, and compete in competitive tournaments.
            </p>

            {/* Contact Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {/* Call Us */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#08203a] flex items-center justify-center text-[#83c400]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Call Us</span>
                  <a href="tel:+15456954521" className="text-sm font-bold text-white hover:text-[#83c400] transition-colors">
                    +1 54569 54521
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#08203a] flex items-center justify-center text-[#83c400]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email Us</span>
                  <a href="mailto:info@example.com" className="text-sm font-bold text-white hover:text-[#83c400] transition-colors">
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-white text-base font-bold tracking-wide flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#83c400]"></span>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-4.5 text-sm text-slate-300">
              {['Home', 'About Us', 'Services', 'Pricing', 'Faq'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#83c400] transition-colors flex items-center space-x-1.5">
                    <span className="text-slate-500">-</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-white text-base font-bold tracking-wide flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#83c400]"></span>
              <span>Explore</span>
            </h3>
            <ul className="space-y-4.5 text-sm text-slate-300">
              {['Courts', 'Coaches', 'Tournaments', 'Score Cards', 'Contact US'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#83c400] transition-colors flex items-center space-x-1.5">
                    <span className="text-slate-500">-</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations (3 Cols) */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-white text-base font-bold tracking-wide flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#83c400]"></span>
              <span>Locations</span>
            </h3>
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-bold text-white">USA - Newyork</h4>
                <p className="text-slate-400 text-xs mt-0.5">350 Fifth Avenue, New York, USA</p>
              </div>
              <div>
                <h4 className="font-bold text-white">USA - California</h4>
                <p className="text-slate-400 text-xs mt-0.5">1001 Rose Bowl Drive, Pasadena, USA</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-slate-800/80 relative z-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2">
          <p>© 2026 Dreamsports. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Football Field Area with Hover Animated Ball */}
      <div className=" relative w-full h-[320px] sm:h-[280px] lg:h-[380px] overflow-hidden cursor-pointer">
        
        {/* Field Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url('https://dreamsports.dreamstechnologies.com/html/assets/img/bg/footer-bg.png')` }}
        />

        {/* Animated Football */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-2000 ease-linear 
                        /* Default position (away/small in goal area) */
                        top-[22%] scale-15 opacity-90
                        /* Hover position (comes towards screen to center field) */
                        group-hover:top-[78%] group-hover:scale-100 group-hover:opacity-100"
        >
          <img 
            src="https://dreamsports.dreamstechnologies.com/html/assets/img/icons/football.svg" 
            alt="Football"
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] transition-transform duration-4000 ease-in-out group-hover:rotate-[360deg]" 
          />
        </div>

      </div> 

    </footer>
  );
};

export default Footer;