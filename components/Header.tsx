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
  const [activeDropdown, setActiveDropdown] = useState<'loc' | 'curr' | 'mobileLoc' | 'mobileCurr' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  
  const LOGO_URL = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/image.png";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const SearchBar = ({ className = "" }: { className?: string }) => (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>
      <input 
        type="text" 
        placeholder="Search product..." 
        className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/10 transition-all"
      />
    </div>
  );

  return (
    <>
      <header className="w-full bg-[#0A0F1D] border-b border-white/5 transition-all duration-300 relative z-[70]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Navigation Row */}
          <div className="h-20 md:h-24 flex items-center justify-between gap-6 md:gap-8">
            
            {/* Desktop: Logo Left */}
            <div className="hidden lg:flex items-center space-x-12 flex-1">
              <div onClick={onHomeClick} className="flex-shrink-0 cursor-pointer">
                <img src={LOGO_URL} alt="Logo" className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <SearchBar className="flex-1 max-w-[300px]" />
            </div>

            {/* Mobile: Hamburger Left, Logo Center, Cart Right */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-stone-300 hover:text-[#C5A059] transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" /></svg>
              </button>
              
              <div onClick={onHomeClick} className="cursor-pointer">
                <img src={LOGO_URL} alt="Logo" className="h-12 w-auto object-contain" />
              </div>

              <button className="relative p-2 group">
                <svg className="w-6 h-6 text-stone-300 group-hover:text-[#C5A059] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#C5A059] text-[8px] font-bold text-black flex items-center justify-center rounded-full">0</span>
              </button>
            </div>

            {/* Desktop: Right Actions */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-colors">Track Order</button>
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-colors">Signup</button>
              </nav>

              <button className="relative p-2 group border-l border-white/10 pl-8">
                <svg className="w-5 h-5 text-stone-300 group-hover:text-[#C5A059] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A059] text-[8px] font-bold text-black flex items-center justify-center rounded-full">0</span>
              </button>

              <div className="flex items-center space-x-4 ml-4" ref={dropdownRef}>
                {/* Location Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'loc' ? null : 'loc')}
                    className="flex items-center space-x-2 text-[9px] uppercase tracking-widest font-bold text-stone-300 hover:text-white transition-colors py-2"
                  >
                    <svg className="w-3.5 h-3.5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    <span>{currency === 'BDT' ? 'Bangladesh' : 'Global'}</span>
                    <svg className={`w-2 h-2 transition-transform ${activeDropdown === 'loc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {activeDropdown === 'loc' && (
                    <div className="absolute top-full right-0 mt-2 w-44 bg-[#161B29] border border-white/10 shadow-2xl rounded-sm py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <button onClick={() => { setCurrency('BDT'); setLanguage('BN'); setActiveDropdown(null); }} className={`w-full text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${currency === 'BDT' ? 'text-[#C5A059] bg-white/5' : 'text-stone-400 hover:text-white'}`}>Bangladesh</button>
                      <button onClick={() => { setCurrency('USD'); setLanguage('EN'); setActiveDropdown(null); }} className={`w-full text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${currency === 'USD' ? 'text-[#C5A059] bg-white/5' : 'text-stone-400 hover:text-white'}`}>Global (International)</button>
                    </div>
                  )}
                </div>

                {/* Currency Dropdown */}
                <div className="relative border-l border-white/10 pl-4">
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'curr' ? null : 'curr')}
                    className="flex items-center space-x-2 text-[9px] uppercase tracking-widest font-bold text-stone-300 hover:text-white transition-colors py-2"
                  >
                    <span>{currency}</span>
                    <svg className={`w-2 h-2 transition-transform ${activeDropdown === 'curr' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {activeDropdown === 'curr' && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-[#161B29] border border-white/10 shadow-2xl rounded-sm py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <button onClick={() => { setCurrency('USD'); setActiveDropdown(null); }} className={`w-full text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${currency === 'USD' ? 'text-[#C5A059] bg-white/5' : 'text-stone-400 hover:text-white'}`}>USD ($)</button>
                      <button onClick={() => { setCurrency('BDT'); setActiveDropdown(null); }} className={`w-full text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${currency === 'BDT' ? 'text-[#C5A059] bg-white/5' : 'text-stone-400 hover:text-white'}`}>BDT (৳)</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Second Row: Search Bar */}
          <div className="lg:hidden pb-5 pt-1">
            <SearchBar className="w-full" />
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm z-[101] bg-[#0A0F1D] text-white transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
            <button onClick={closeMenu} className="p-2 text-stone-400 hover:text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <nav className="flex-1 space-y-10 overflow-y-auto pr-2">
            {/* Primary Nav Links */}
            <div className="space-y-8">
              <button className="block w-full text-left text-[11px] uppercase tracking-[0.3em] text-white font-bold hover:text-[#C5A059] transition-colors">
                Track Your Order
              </button>
              <button className="block w-full text-left text-[11px] uppercase tracking-[0.3em] text-white font-bold hover:text-[#C5A059] transition-colors">
                Create Account / Signup
              </button>
            </div>

            <hr className="border-white/5" />

            {/* Dropdown Selectors for Location & Currency */}
            <div className="space-y-8" ref={mobileDropdownRef}>
              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-[0.4em] text-stone-600 font-bold">Region</span>
                <div className="relative">
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'mobileLoc' ? null : 'mobileLoc')}
                    className="w-full flex items-center justify-between px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-[10px] uppercase tracking-widest font-bold"
                  >
                    <span>{currency === 'BDT' ? 'Bangladesh' : 'Global'}</span>
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'mobileLoc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {activeDropdown === 'mobileLoc' && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-[#161B29] border border-white/10 rounded-sm z-10">
                      <button onClick={() => { setCurrency('BDT'); setLanguage('BN'); setActiveDropdown(null); }} className="w-full text-left px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[#C5A059]">Bangladesh</button>
                      <button onClick={() => { setCurrency('USD'); setLanguage('EN'); setActiveDropdown(null); }} className="w-full text-left px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[#C5A059]">Global</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-[0.4em] text-stone-600 font-bold">Currency</span>
                <div className="relative">
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'mobileCurr' ? null : 'mobileCurr')}
                    className="w-full flex items-center justify-between px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-[10px] uppercase tracking-widest font-bold"
                  >
                    <span>{currency}</span>
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'mobileCurr' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  {activeDropdown === 'mobileCurr' && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-[#161B29] border border-white/10 rounded-sm z-10">
                      <button onClick={() => { setCurrency('USD'); setActiveDropdown(null); }} className="w-full text-left px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[#C5A059]">USD ($)</button>
                      <button onClick={() => { setCurrency('BDT'); setActiveDropdown(null); }} className="w-full text-left px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[#C5A059]">BDT (৳)</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <div className="pt-8 border-t border-white/5 opacity-40">
            <p className="text-[8px] uppercase tracking-[0.5em] font-bold">Maya Nokshi Ghor Studio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;