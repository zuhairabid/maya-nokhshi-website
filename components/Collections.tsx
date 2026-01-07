import React from 'react';
import { TranslationStrings } from '../types';

interface CollectionsProps {
  t: TranslationStrings;
  onCategoryClick: (cat: string) => void;
}

const Collections: React.FC<CollectionsProps> = ({ t, onCategoryClick }) => {
  const IMG_BASE = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/";
  
  const collections = [
    { title: 'Quilts', bnTitle: 'নকশী কাঁথা', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.02%20AM%20%281%29.jpeg` },
    { title: 'Cushions', bnTitle: 'কুশন', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.04%20AM%20%281%29.jpeg` },
    { title: 'Wall Art', bnTitle: 'ওয়াল আর্ট', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.05%20AM.jpeg` },
    { title: 'Table Decor', bnTitle: 'টেবিল সাজসজ্জা', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.06%20AM.jpeg` },
    { title: 'New Arrivals', bnTitle: 'নতুন কালেকশন', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.04%20AM.jpeg` },
    { title: 'Hand-woven', bnTitle: 'হাতে বোনা', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.02%20AM.jpeg` }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-stone-900 font-bold">
            Categories
          </h2>
          <div className="h-[1px] flex-1 mx-6 bg-stone-100 hidden sm:block"></div>
          <button className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold hover:opacity-70 transition-opacity">
            Discover All
          </button>
        </div>

        {/* Horizontal Slider Container */}
        <div className="flex overflow-x-auto space-x-5 md:space-x-10 pb-4 no-scrollbar snap-x scroll-smooth">
          {collections.map((col, idx) => (
            <div 
              key={idx} 
              onClick={() => onCategoryClick(col.title)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer snap-start"
            >
              <div className="relative w-16 h-16 md:w-24 md:h-24 mb-3">
                {/* Circle Container */}
                <div className="w-full h-full rounded-full overflow-hidden border border-stone-100 group-hover:border-[#C5A059] transition-all duration-500 transform group-hover:scale-105">
                  <img 
                    src={col.img} 
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                {col.title}
              </span>
            </div>
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