
import React from 'react';
import { TranslationStrings } from '../types';

interface StoryProps {
  t: TranslationStrings;
}

const Story: React.FC<StoryProps> = ({ t }) => {
  return (
    <section className="bg-[#EAE3D2]/30 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold">
            {t.storyTitle}
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-[#2C2C2C] leading-snug">
            {t.storyText}
          </p>
          <div className="pt-4">
             <button className="group flex items-center space-x-4 text-sm font-semibold uppercase tracking-widest">
                <span>Read More</span>
                <span className="w-12 h-[1px] bg-black group-hover:w-16 transition-all"></span>
             </button>
          </div>
        </div>
        <div className="flex-1 relative">
           <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1679783837188-a0f2297afe32?fm=jpg&q=60&w=3000" 
               alt="Artisan at work"
               className="w-full h-auto"
             />
           </div>
           <div className="absolute -top-10 -right-10 w-64 h-64 border border-[#A64B2A]/20 -z-0"></div>
           <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-[#A64B2A]/20 -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;
