
import React, { useState } from 'react';
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
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const LOGO_URL = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/image.png";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full bg-[#0A0F1D] border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between gap-4 md:gap-8">
          
          {/* Logo - Left */}
          <div onClick={onHomeClick} className="flex items-center cursor-pointer flex-shrink-0">
            <img 
              src={LOGO_URL} 
              alt="Maya Nokshi Ghor" 
              className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Search - Middle Left */}
          <div className="hidden lg:flex flex-1 max-w-md relative group">
            <div className={`absolute inset-y-0 left-3 flex items-center pointer-events-none transition-colors ${isSearchFocused ? 'text-[#C5A059]' : 'text-stone-500'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search products..." 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Right Section: Track, Signup, Cart, Settings */}
          <div className="flex items-center space-x-2 md:space-x-6 flex-shrink-0">
            
            {/* Nav Links */}
            <nav className="hidden xl:flex items-center space-x-6 border-r border-white/10 pr-6">
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-colors">
                Track Order
              </button>
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-white transition-colors">
                Sign Up
              </button>
            </nav>

            {/* Cart */}
            <button className="relative p-2 group">
               <svg className="w-5 h-5 text-stone-300 group-hover:text-[#C5A059] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C5A059] text-[8px] font-bold text-black flex items-center justify-center rounded-full">0</span>
            </button>

            {/* Location Indicator & Currency Dropdown */}
            <div className="hidden md:flex items-center space-x-4 bg-white/5 px-4 py-2 rounded-sm border border-white/5">
              <div className="flex items-center space-x-2 border-r border-white/10 pr-4">
                <svg className="w-3.5 h-3.5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-[9px] uppercase tracking-widest font-bold text-stone-300">{currency === 'BDT' ? 'Bangladesh' : 'Global'}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => { setCurrency('USD'); setLanguage('EN'); }}
                  className={`text-[9px] uppercase tracking-widest font-bold ${currency === 'USD' ? 'text-[#C5A059]' : 'text-stone-500 hover:text-stone-300'}`}
                >
                  USD
                </button>
                <span className="text-stone-700 text-[9px]">|</span>
                <button 
                  onClick={() => { setCurrency('BDT'); setLanguage('BN'); }}
                  className={`text-[9px] uppercase tracking-widest font-bold ${currency === 'BDT' ? 'text-[#C5A059]' : 'text-stone-500 hover:text-stone-300'}`}
                >
                  BDT
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-stone-300 hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm z-[101] bg-[#0A0F1D] text-white transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <img src={LOGO_URL} alt="Logo" className="h-12 w-auto" />
            <button onClick={closeMenu} className="p-2 text-stone-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-8 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#C5A059]/50 transition-all"
            />
          </div>

          <nav className="flex-1 space-y-8 overflow-y-auto">
            <div className="space-y-6">
              <button 
                onClick={() => { onExploreClick(); closeMenu(); }}
                className="block w-full text-left text-lg font-serif italic hover:text-[#C5A059] transition-colors"
              >
                {t.allProducts}
              </button>
              <button onClick={() => { onCategoryClick('Quilts'); closeMenu(); }} className="block w-full text-left text-sm uppercase tracking-widest text-stone-400">Quilts</button>
              <button onClick={() => { onCategoryClick('Cushions'); closeMenu(); }} className="block w-full text-left text-sm uppercase tracking-widest text-stone-400">Cushions</button>
              <button onClick={() => { onCategoryClick('Wall Art'); closeMenu(); }} className="block w-full text-left text-sm uppercase tracking-widest text-stone-400">Wall Art</button>
            </div>

            <hr className="border-white/10" />

            <div className="space-y-6">
              <button className="block w-full text-left text-sm uppercase tracking-widest text-stone-300 font-bold">Track Order</button>
              <button className="block w-full text-left text-sm uppercase tracking-widest text-stone-300 font-bold">Sign Up / Login</button>
              <button className="block w-full text-left text-sm uppercase tracking-widest text-stone-300 font-bold">{t.about}</button>
            </div>
          </nav>

          <div className="pt-8 border-t border-white/10 space-y-8">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Region & Currency</span>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => { setCurrency('USD'); setLanguage('EN'); }}
                  className={`text-xs font-bold tracking-widest ${currency === 'USD' ? 'text-[#C5A059]' : 'text-stone-400'}`}
                >
                  GLOBAL (USD)
                </button>
                <button 
                  onClick={() => { setCurrency('BDT'); setLanguage('BN'); }}
                  className={`text-xs font-bold tracking-widest ${currency === 'BDT' ? 'text-[#C5A059]' : 'text-stone-400'}`}
                >
                  বাংলাদেশ (BDT)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
