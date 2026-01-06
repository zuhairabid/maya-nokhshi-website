
import React from 'react';
import { TranslationStrings } from '../types';

interface ValuesProps {
  t: TranslationStrings;
}

const Values: React.FC<ValuesProps> = ({ t }) => {
  const values = [
    { title: t.handcrafted, icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0112 3c1.72 0 3.347.433 4.774 1.2a10 10 0 014.501 14.423' },
    { title: t.sustainable, icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    { title: t.artisanSupport, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
  ];

  return (
    <section className="py-20 bg-stone-50/50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-12 text-center">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center max-w-[200px]">
            <svg className="w-10 h-10 text-[#A64B2A] mb-4 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
            </svg>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-600">
              {v.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
