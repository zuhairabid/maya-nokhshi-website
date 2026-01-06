
import React from 'react';
import { TranslationStrings } from '../types';

interface HeroProps {
  t: TranslationStrings;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onExplore }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 animate-slow-zoom">
        <img 
          src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=90&w=2400" 
          alt="Hand-stitched textile"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl text-white">
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight drop-shadow-2xl tracking-tight">
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-xl font-light mb-12 text-stone-200/90 max-w-2xl mx-auto leading-relaxed italic">
          {t.heroSubtitle}
        </p>
        <button 
          onClick={onExplore}
          className="group relative px-14 py-5 bg-white text-[#2C2C2C] text-xs uppercase tracking-[0.3em] font-bold hover:text-white transition-all overflow-hidden rounded-sm"
        >
          <span className="relative z-10">{t.exploreBtn}</span>
          <div className="absolute inset-0 bg-[#C5A059] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
         <span className="text-[9px] uppercase tracking-[0.4em] text-white">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
