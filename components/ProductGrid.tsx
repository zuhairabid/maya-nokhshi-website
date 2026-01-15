
import React, { useState, useRef, memo } from 'react';
import { Product, Language, TranslationStrings } from '../types';

interface ProductCardProps {
  product: Product;
  formatPrice: (price: number) => string;
  language: Language;
  onProductClick: (product: Product) => void;
}

const ProductCard = memo(({ product, formatPrice, language, onProductClick }: ProductCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollRef.current.scrollLeft / width);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar touch-pan-x"
        >
          {product.images.map((img, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-full h-full snap-center"
              onClick={() => onProductClick(product)}
            >
              <img 
                src={img} 
                alt={`${product.name.EN} view ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:block absolute inset-4 border border-[#C5A059]/0 group-hover:border-[#C5A059]/30 transition-all duration-500 pointer-events-none"></div>

        <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button className="bg-white/95 backdrop-blur-sm px-6 py-3 text-[9px] uppercase tracking-[0.2em] font-bold text-stone-900 border border-stone-200 pointer-events-auto hover:bg-[#C5A059] hover:text-white transition-colors">
            View Details
          </button>
        </div>

        {product.images.length > 1 && (
          <div className="md:hidden absolute bottom-2 right-2 bg-black/20 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white font-bold uppercase tracking-widest pointer-events-none">
            Swipe
          </div>
        )}
      </div>

      {product.images.length > 1 && (
        <div className="flex justify-center space-x-1.5 mb-3">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                scrollToImage(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'bg-[#C5A059] w-4' 
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className="text-center px-2 flex-grow flex flex-col justify-end" onClick={() => onProductClick(product)}>
        <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-stone-400 mb-1 font-semibold">
          {product.category}
        </p>
        <h3 className="text-stone-800 text-[11px] md:text-sm font-medium mb-1 tracking-tight group-hover:text-[#C5A059] transition-colors line-clamp-1">
          {product.name[language]}
        </h3>
        <p className="text-stone-900 font-serif italic text-sm md:text-lg">
          {formatPrice(product.price)}
        </p>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
});

interface ProductGridProps {
  t: TranslationStrings;
  products: Product[];
  formatPrice: (price: number) => string;
  language: Language;
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, formatPrice, language, onProductClick }) => {
  return (
    <section className="py-6 md:py-10 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-16">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            formatPrice={formatPrice}
            language={language}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(ProductGrid);
