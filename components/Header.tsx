
import React from 'react';
import { Language, Currency, TranslationStrings } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  t: TranslationStrings;
  onHomeClick: () => void;
  onExploreClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, currency, setCurrency, t, onHomeClick, onExploreClick }) => {
  const LOGO_URL = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/image.png";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1D]/90 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <button 
            onClick={onExploreClick}
            className="text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-300 hover:text-[#C5A059] transition-colors hidden md:block"
          >
            {t.exploreBtn}
          </button>
          <button className="text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-300 hover:text-[#C5A059] transition-colors hidden md:block">
            {t.about}
          </button>
        </div>

        <div onClick={onHomeClick} className="flex items-center justify-center h-full py-2 cursor-pointer">
          <img 
            src={LOGO_URL} 
            alt="Maya Nokshi Ghor Logo" 
            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest font-bold border-r border-white/10 pr-6 hidden sm:flex">
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
      </div>
    </header>
  );
};

export default Header;
