"use client";
import { useEffect, useRef, useState } from 'react';
import logo from "../../../public/images/football.png";
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeMenuOnOutsideTap = (event: PointerEvent) => {
      if (!navbarRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeMenuOnOutsideTap);
    return () => document.removeEventListener('pointerdown', closeMenuOnOutsideTap);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: 'Home', href: '#home', active: true },
    { title: 'Coaches', href: '#coaches' },
    { title: 'User', href: '#user' },
    { title: 'Pages', href: '#pages' },
    { title: 'Blog', href: '#blog' },
    { title: 'Contact Us', href: '#contact' },
  ];

  return (
    <header ref={navbarRef} className="w-full bg-[#001428] border-b border-slate-800 text-white sticky top-0 z-50 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="#" className="flex-shrink-0 flex items-center space-x-2">
            <div className="relative flex items-center justify-center">
              <Image src={logo} width={50} height={50} alt="Turfy Logo" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-white uppercase italic">
                  Turfy
                </span>
              </div>
              <span className="text-[10px] text-[#83c400] font-semibold tracking-wider uppercase -mt-1 self-end pr-1">
                Sports
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-sm font-extrabold uppercase tracking-wider transition-colors duration-200 ${
                  link.active
                    ? 'text-[#83c400]'
                    : 'text-white hover:text-[#83c400]'
                }`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Right Action Button (Get Started) */}
          <div className="hidden sm:flex items-center">
            <a
              href="#get-started"
              className="inline-flex items-center space-x-3 bg-[#83c400] hover:bg-[#92dc00] text-[#020d1a] font-black text-sm uppercase tracking-wider px-5 py-2.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#83c400]/20 hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <span className="flex items-center justify-center w-7 h-7 bg-[#6ca300] rounded-xl text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#08203a] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#041527] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 transition-all">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-sm font-bold uppercase tracking-wider border-b border-slate-800/60 ${
                link.active ? 'text-[#83c400]' : 'text-slate-200 hover:text-[#83c400]'
              }`}
            >
              {link.title}
            </a>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-4">
            <a
              href="#get-started"
              className="w-full flex items-center justify-center space-x-3 bg-[#83c400] hover:bg-[#92dc00] text-[#020d1a] font-black text-sm uppercase tracking-wider px-5 py-3 rounded-2xl transition-all"
            >
              <span>Get Started</span>
              <span className="flex items-center justify-center w-6 h-6 bg-[#6ca300] rounded-lg text-white">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;