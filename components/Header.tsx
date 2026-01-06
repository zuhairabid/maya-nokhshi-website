import React, { useState, useRef, useEffect } from 'react';
import { Language, Currency, TranslationStrings } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  t: TranslationStrings;
  onHomeClick: () => void;
  onExploreClick: () => void;
  onCategoryClick: (cat: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  language, setLanguage, currency, setCurrency, t, onHomeClick, onExploreClick, onCategoryClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'loc' | 'curr' | 'mobLoc' | 'mobCurr' | null>(null);
  
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const LOGO_URL = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/image.png";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full bg-[#0A0F1D] border-b border-white/5 transition-all duration-300 relative z-[80]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* --- DESKTOP HEADER --- */}
          <div className="hidden lg:flex h-24 items-center justify-between gap-8">
            <div onClick={onHomeClick} className="flex items-center cursor-pointer flex-shrink-0">
              <img src={LOGO_URL} alt="Logo" className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex-1 max-w-sm relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <input type="text" placeholder="Search product..." className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/10 transition-all" />
            </div>

            <div className="flex items-center space-x-6 flex-shrink-0" ref={desktopDropdownRef}>
              <nav className="flex items-center space-x-6 border-r border-white/10 pr-6">
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-colors">Track Order</button>
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-colors">Signup</button>
              </nav>

              <button className="relative p-2 group">
                <svg className="w-5 h-5 text-stone-300 group-hover:text-[#C5A059] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C5A059] text-[8px] font-bold text-black flex items-center justify-center rounded-full">0</span>
              </button>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button onClick={() => setActiveDropdown(activeDropdown === 'loc' ? null : 'loc')} className="flex items-center space-x-1.5 text-[9px] uppercase tracking-widest font-bold text-stone-300">
                    <svg className="w-3.5 h-3.5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    <span>{currency === 'BDT' ? 'Bangladesh' : 'Global'}</span>
                  </button>
                  {activeDropdown === 'loc' && (
                    <div className="absolute top-full right-0 mt-4 w-40 bg-[#161B29] border border-white/10 rounded-sm shadow-2xl py-2">
                      <button onClick={() => { setCurrency('BDT'); setLanguage('BN'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-[9px] text-stone-300 hover:text-[#C5A059]">Bangladesh</button>
                      <button onClick={() => { setCurrency('USD'); setLanguage('EN'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-[9px] text-stone-300 hover:text-[#C5A059]">Global</button>
                    </div>
                  )}
                </div>
                <div className="relative border-l border-white/10 pl-4">
                  <button onClick={() => setActiveDropdown(activeDropdown === 'curr' ? null : 'curr')} className="text-[9px] uppercase tracking-widest font-bold text-stone-300">{currency}</button>
                  {activeDropdown === 'curr' && (
                    <div className="absolute top-full right-0 mt-4 w-28 bg-[#161B29] border border-white/10 rounded-sm shadow-2xl py-2">
                      <button onClick={() => { setCurrency('USD'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-[9px] text-stone-300 hover:text-[#C5A059]">USD ($)</button>
                      <button onClick={() => { setCurrency('BDT'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-[9px] text-stone-300 hover:text-[#C5A059]">BDT (৳)</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- MOBILE HEADER --- */}
          <div className="lg:hidden flex flex-col w-full py-3" ref={mobileDropdownRef}>
            <div className="flex items-center justify-between gap-4">
              {/* Left: Nav & Logo */}
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsMenuOpen(true)} className="p-1.5 text-stone-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" /></svg>
                </button>
                <div onClick={onHomeClick} className="cursor-pointer">
                  <img src={LOGO_URL} alt="Logo" className="h-10 w-auto object-contain" />
                </div>
              </div>

              {/* Right: Icons (Account, Loc, Curr, Search, Cart) */}
              <div className="flex items-center space-x-1 sm:space-x-3">
                {/* Account */}
                <button className="p-1.5 text-stone-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </button>
                
                {/* Location */}
                <div className="relative">
                  <button onClick={() => setActiveDropdown(activeDropdown === 'mobLoc' ? null : 'mobLoc')} className="p-1.5 text-stone-400 hover:text-[#C5A059] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </button>
                  {activeDropdown === 'mobLoc' && (
                    <div className="absolute top-full right-0 mt-3 w-40 bg-[#161B29] border border-white/10 rounded-sm shadow-2xl py-2 z-[90]">
                      <button onClick={() => { setCurrency('BDT'); setLanguage('BN'); setActiveDropdown(null); }} className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-bold text-stone-300 hover:text-[#C5A059]">Bangladesh</button>
                      <button onClick={() => { setCurrency('USD'); setLanguage('EN'); setActiveDropdown(null); }} className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-bold text-stone-300 hover:text-[#C5A059]">Global</button>
                    </div>
                  )}
                </div>

                {/* Currency */}
                <div className="relative">
                  <button onClick={() => setActiveDropdown(activeDropdown === 'mobCurr' ? null : 'mobCurr')} className="p-1.5 text-stone-400 hover:text-[#C5A059] transition-colors font-bold text-[10px]">
                    {currency === 'BDT' ? '৳' : '$'}
                  </button>
                  {activeDropdown === 'mobCurr' && (
                    <div className="absolute top-full right-0 mt-3 w-32 bg-[#161B29] border border-white/10 rounded-sm shadow-2xl py-2 z-[90]">
                      <button onClick={() => { setCurrency('USD'); setActiveDropdown(null); }} className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-bold text-stone-300 hover:text-[#C5A059]">USD ($)</button>
                      <button onClick={() => { setCurrency('BDT'); setActiveDropdown(null); }} className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-bold text-stone-300 hover:text-[#C5A059]">BDT (৳)</button>
                    </div>
                  )}
                </div>

                {/* Search Toggle */}
                <button onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)} className={`p-1.5 transition-colors ${isMobileSearchOpen ? 'text-[#C5A059]' : 'text-stone-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>

                {/* Cart */}
                <button className="relative p-1.5 text-stone-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#C5A059] text-[7px] font-bold text-black flex items-center justify-center rounded-full">0</span>
                </button>
              </div>
            </div>

            {/* Mobile Row 2: Search Box */}
            <div className={`overflow-hidden transition-all duration-300 ${isMobileSearchOpen ? 'max-h-20 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <input type="text" placeholder="Search product..." className="w-full bg-white/5 border border-white/10 rounded-sm py-3.5 pl-11 pr-4 text-xs text-stone-200 focus:outline-none focus:border-[#C5A059]/50" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div className={`fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu} />
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-sm z-[101] bg-[#0A0F1D] text-white transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-16">
            <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
            <button onClick={closeMenu} className="p-2 text-stone-400 hover:text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <nav className="flex-1 space-y-12">
            <div className="space-y-10">
              <button className="block w-full text-left text-sm uppercase tracking-[0.3em] text-white font-bold hover:text-[#C5A059] transition-colors">Track Order</button>
              <button className="block w-full text-left text-sm uppercase tracking-[0.3em] text-white font-bold hover:text-[#C5A059] transition-colors">Signup / Login</button>
            </div>
          </nav>

          <div className="pt-8 border-t border-white/5 opacity-30">
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold">Maya Nokshi Ghor Studio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
