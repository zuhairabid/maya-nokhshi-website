import React, { useMemo } from 'react';
import { TranslationStrings } from '../types';

interface CollectionsProps {
  t: TranslationStrings;
  onCategoryClick: (cat: string) => void;
  activeCategory?: string;
}

const Collections: React.FC<CollectionsProps> = ({ t, onCategoryClick, activeCategory }) => {
  const baseCategories = [
    { title: 'Quilts', bnTitle: 'নকশী কাঁথা' },
    { title: 'Cushions', bnTitle: 'কুশন' },
    { title: 'Wall Art', bnTitle: 'ওয়াল আর্ট' },
    { title: 'Table Decor', bnTitle: 'টেবিল সাজসজ্জা' },
    { title: 'New Arrivals', bnTitle: 'নতুন কালেকশন' },
    { title: 'Hand-woven', bnTitle: 'হাতে বোনা' },
    { title: 'Best Sellers', bnTitle: 'সেরা পণ্য' },
    { title: 'Limited Edition', bnTitle: 'সীমিত সংস্করণ' }
  ];

  // Reorder categories so the active one is shown first
  const sortedCategories = useMemo(() => {
    if (!activeCategory) return baseCategories;
    const activeIndex = baseCategories.findIndex(c => c.title === activeCategory);
    if (activeIndex === -1) return baseCategories;
    
    const others = [...baseCategories];
    const [selected] = others.splice(activeIndex, 1);
    return [selected, ...others];
  }, [activeCategory]);

  return (
    <section className="py-4 md:py-6 bg-white border-b border-stone-100 shadow-sm sticky top-[97px] z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto space-x-8 md:space-x-12 no-scrollbar snap-x scroll-smooth items-center">
          {sortedCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.title;
            return (
              <button 
                key={idx} 
                onClick={() => onCategoryClick(cat.title)}
                className={`flex-shrink-0 group py-1.5 relative snap-start transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
              >
                <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.35em] transition-all duration-300 whitespace-nowrap ${
                  isActive 
                  ? 'font-black text-stone-900' 
                  : 'font-bold text-stone-400 group-hover:text-stone-700'
                }`}>
                  {cat.title}
                </span>
                {/* Underline for active category */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A059] transition-all duration-500 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
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