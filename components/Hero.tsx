import React, { useState, useEffect, useCallback } from 'react';
import { TranslationStrings } from '../types';

interface HeroProps {
  t: TranslationStrings;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onExplore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      url: "https://plus.unsplash.com/premium_photo-1670782711957-66efb3bb1479?q=80&w=1315",
      alt: "Handcrafted textile detail 1"
    },
    {
      url: "https://images.unsplash.com/photo-1767154966937-68e31b7825f1?q=80&w=1074",
      alt: "Handcrafted textile detail 2"
    },
    {
      url: "https://images.unsplash.com/photo-1667745812053-2e5eddef5dd3?q=80&w=1074",
      alt: "Handcrafted textile detail 3"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden bg-stone-100 group/hero">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.alt}
              className={`w-full h-full object-cover brightness-[0.7] transition-transform duration-[10000ms] ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 text-white">
        <div className="max-w-4xl space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif leading-tight drop-shadow-xl tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {t.heroTitle}
          </h1>
          <p className="text-xs md:text-base font-light text-stone-200/90 max-w-lg mx-auto leading-relaxed italic animate-in fade-in slide-in-from-bottom-8 delay-300 duration-1000">
            {t.heroSubtitle}
          </p>
          <div className="pt-2 md:pt-4 animate-in fade-in slide-in-from-bottom-10 delay-500 duration-1000">
            <button 
              onClick={onExplore}
              className="group/btn relative px-8 py-3 md:px-12 md:py-4 bg-white text-[#2C2C2C] text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold hover:text-white transition-all overflow-hidden rounded-sm"
            >
              <span className="relative z-10">{t.exploreBtn}</span>
              <div className="absolute inset-0 bg-[#C5A059] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Manual Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 text-white/50 hover:text-white bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full opacity-0 group-hover/hero:opacity-100 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 text-white/50 hover:text-white bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full opacity-0 group-hover/hero:opacity-100 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-10 bg-[#C5A059]' : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;