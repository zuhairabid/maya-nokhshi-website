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
    <section className="relative w-full aspect-[16/5] md:aspect-[4.5/1] overflow-hidden bg-stone-100 group/hero">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 text-white">
        <div className="max-w-4xl space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-3xl lg:text-4xl font-serif leading-tight drop-shadow-lg tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {t.heroTitle}
          </h1>
          <div className="pt-1 md:pt-2 animate-in fade-in slide-in-from-bottom-10 delay-500 duration-1000">
            <button 
              onClick={onExplore}
              className="group/btn relative px-5 py-2 md:px-8 md:py-2.5 bg-white text-[#2C2C2C] text-[7px] md:text-[9px] uppercase tracking-[0.25em] font-bold hover:text-white transition-all overflow-hidden rounded-sm"
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
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1 md:p-1.5 text-white/50 hover:text-white bg-black/5 hover:bg-black/15 backdrop-blur-sm rounded-full opacity-0 group-hover/hero:opacity-100 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-3 h-3 md:w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1 md:p-1.5 text-white/50 hover:text-white bg-black/5 hover:bg-black/15 backdrop-blur-sm rounded-full opacity-0 group-hover/hero:opacity-100 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-3 h-3 md:w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;