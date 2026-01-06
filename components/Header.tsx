
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
  const LOGO_URL = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/image.png";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1D]/90 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-28 flex items-center justify-between">
          
          {/* Desktop Left Nav */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <button 
              onClick={onExploreClick}
              className="text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-300 hover:text-[#C5A059] transition-colors"
            >
              {t.exploreBtn}
            </button>
            <button className="text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-300 hover:text-[#C5A059] transition-colors">
              {t.about}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden flex-1">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-stone-300 hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>

          {/* Center Logo */}
          <div onClick={() => { onHomeClick(); closeMenu(); }} className="flex items-center justify-center h-full py-2 cursor-pointer flex-shrink-0">
            <img 
              src={LOGO_URL} 
              alt="Maya Nokshi Ghor Logo" 
              className="h-14 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Desktop Right Settings */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest font-bold border-r border-white/10 pr-6">
              <button 
                onClick={() => setLanguage('EN')}
                className={`hover:text-[#C5A059] transition-colors ${language === 'EN' ? 'text-[#C5A059]' : 'text-stone-500'}`}
              >
                EN
              </button>
              <span className="text-stone-700">/</span>
              <button 
                onClick={() => setLanguage('BN')}
                className={`hover:text-[#C5A059] transition-colors ${language === 'BN' ? 'text-[#C5A059]' : 'text-stone-500'}`}
              >
                BN
              </button>
            </div>

            <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest font-bold">
              <button 
                onClick={() => setCurrency('USD')}
                className={`hover:text-[#C5A059] transition-colors ${currency === 'USD' ? 'text-[#C5A059]' : 'text-stone-500'}`}
              >
                USD
              </button>
              <span className="text-stone-700">/</span>
              <button 
                onClick={() => setCurrency('BDT')}
                className={`hover:text-[#C5A059] transition-colors ${currency === 'BDT' ? 'text-[#C5A059]' : 'text-stone-500'}`}
              >
                BDT
              </button>
            </div>
            
            <button className="relative p-2 group">
               <svg className="w-5 h-5 text-stone-300 group-hover:text-[#C5A059] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <span className="absolute top-1 right-1 w-2 h-2 bg-[#C5A059] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
            </button>
          </div>

          {/* Mobile Right Icon */}
          <div className="flex md:hidden flex-1 justify-end">
             <button className="p-2 text-stone-300 hover:text-[#C5A059] transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
          <div className="flex items-center justify-between mb-16">
            <img src={LOGO_URL} alt="Logo" className="h-12 w-auto" />
            <button onClick={closeMenu} className="p-2 text-stone-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
              <button className="block w-full text-left text-sm uppercase tracking-widest text-stone-300 font-bold">{t.about}</button>
              <button className="block w-full text-left text-sm uppercase tracking-widest text-stone-300 font-bold">{t.contact}</button>
              <button className="block w-full text-left text-sm uppercase tracking-widest text-stone-300 font-bold">{t.careGuide}</button>
            </div>
          </nav>

          <div className="pt-8 border-t border-white/10 space-y-8">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">{t.languageLabel}</span>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`text-xs font-bold tracking-widest ${language === 'EN' ? 'text-[#C5A059]' : 'text-stone-400'}`}
                >
                  ENGLISH
                </button>
                <button 
                  onClick={() => setLanguage('BN')}
                  className={`text-xs font-bold tracking-widest ${language === 'BN' ? 'text-[#C5A059]' : 'text-stone-400'}`}
                >
                  বাংলা
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">{t.currencyLabel}</span>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`text-xs font-bold tracking-widest ${currency === 'USD' ? 'text-[#C5A059]' : 'text-stone-400'}`}
                >
                  USD
                </button>
                <button 
                  onClick={() => setCurrency('BDT')}
                  className={`text-xs font-bold tracking-widest ${currency === 'BDT' ? 'text-[#C5A059]' : 'text-stone-400'}`}
                >
                  BDT
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
