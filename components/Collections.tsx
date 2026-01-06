
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
    { title: 'Cushions', bnTitle: 'গৃহসজ্জা', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.04%20AM%20%281%29.jpeg` },
    { title: 'Wall Art', bnTitle: 'আর্টিজান সংস্করণ', img: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.05%20AM.jpeg` }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 font-semibold mb-3">
          {t.collectionsTitle}
        </h2>
        <div className="w-12 h-[1px] bg-[#A64B2A] mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((col, idx) => (
          <div 
            key={idx} 
            onClick={() => onCategoryClick(col.title)}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer shadow-sm"
          >
            <img 
              src={col.img} 
              alt={col.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-serif mb-2">{col.title}</h3>
              <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                {t.exploreBtn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
