import React from 'react';
import { TranslationStrings } from '../types';

interface CollectionsProps {
  t: TranslationStrings;
  onCategoryClick: (cat: string) => void;
  isHome?: boolean;
  activeCategory?: string;
}

const Collections: React.FC<CollectionsProps> = ({ t, onCategoryClick, isHome = true, activeCategory }) => {
  const categories = [
    { title: 'Quilts', bnTitle: 'নকশী কাঁথা' },
    { title: 'Cushions', bnTitle: 'কুশন' },
    { title: 'Wall Art', bnTitle: 'ওয়াল আর্ট' },
    { title: 'Table Decor', bnTitle: 'টেবিল সাজসজ্জা' },
    { title: 'New Arrivals', bnTitle: 'নতুন কালেকশন' },
    { title: 'Hand-woven', bnTitle: 'হাতে বোনা' },
    { title: 'Best Sellers', bnTitle: 'সেরা পণ্য' },
    { title: 'Limited Edition', bnTitle: 'সীমিত সংস্করণ' }
  ];

  return (
    <section className={`bg-white border-b border-stone-100 transition-all duration-300 ${isHome ? 'py-6 md:py-8' : 'py-2 md:py-3 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto space-x-6 md:space-x-10 no-scrollbar snap-x scroll-smooth items-center">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.title;
            return (
              <button 
                key={idx} 
                onClick={() => onCategoryClick(cat.title)}
                className={`flex-shrink-0 group relative snap-start transition-all duration-300 ${isHome ? 'py-2' : 'py-1'}`}
              >
                <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#0A0F1D]' : 'text-stone-400 group-hover:text-stone-900'
                }`}>
                  {cat.title}
                </span>
                <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </button>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Collections;