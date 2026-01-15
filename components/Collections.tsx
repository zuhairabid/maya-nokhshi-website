
import React, { memo } from 'react';
import { TranslationStrings } from '../types';

interface CollectionsProps {
  t: TranslationStrings;
  onCategoryClick: (cat: string) => void;
  isHome?: boolean;
  activeCategory?: string;
}

const Collections: React.FC<CollectionsProps> = ({ t, onCategoryClick, isHome = true, activeCategory }) => {
  const categories = [
    { title: t.allProducts, isAll: true },
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
    <section className={`bg-white border-b border-stone-100 transition-all duration-300 sticky top-[97px] z-40 ${isHome ? 'py-3 md:py-4' : 'py-1.5 md:py-2 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto space-x-3 md:space-x-4 no-scrollbar snap-x scroll-smooth items-center">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.title || (cat.isAll && !activeCategory);
            return (
              <button 
                key={idx} 
                onClick={() => onCategoryClick(cat.title)}
                className={`flex-shrink-0 px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 snap-start whitespace-nowrap border ${
                  isActive 
                  ? 'bg-[#0A0F1D] text-white border-[#0A0F1D] shadow-md shadow-black/10 scale-105' 
                  : 'bg-stone-100 text-stone-500 border-stone-100 hover:bg-stone-200 hover:text-stone-800 hover:border-stone-200'
                }`}
              >
                {cat.title}
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

export default memo(Collections);
