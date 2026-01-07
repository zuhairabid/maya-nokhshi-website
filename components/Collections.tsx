import React from 'react';
import { TranslationStrings } from '../types';

interface CollectionsProps {
  t: TranslationStrings;
  onCategoryClick: (cat: string) => void;
}

const Collections: React.FC<CollectionsProps> = ({ t, onCategoryClick }) => {
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
    <section className="py-6 md:py-8 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto space-x-6 md:space-x-10 no-scrollbar snap-x scroll-smooth items-center">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => onCategoryClick(cat.title)}
              className="flex-shrink-0 group py-2 relative snap-start"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors whitespace-nowrap">
                {cat.title}
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#C5A059] group-hover:w-full transition-all duration-300"></div>
            </button>
          ))}
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