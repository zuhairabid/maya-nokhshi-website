
import React from 'react';
import { Product, Language, TranslationStrings } from '../types';

interface ProductGridProps {
  t: TranslationStrings;
  products: Product[];
  formatPrice: (price: number) => string;
  language: Language;
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ t, products, formatPrice, language, onProductClick }) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-4">
          {t.featuredTitle}
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mb-2"></div>
        <div className="w-8 h-[1px] bg-[#C5A059]/40 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <div className="aspect-[4/5] bg-stone-100 mb-8 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={product.image} 
                alt={product.name.EN}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              
              {/* Gold border frame on hover */}
              <div className="absolute inset-4 border border-[#C5A059]/0 group-hover:border-[#C5A059]/40 transition-all duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/95 backdrop-blur-sm px-8 py-4 text-[9px] uppercase tracking-[0.2em] font-bold text-stone-900 border border-stone-200">
                  Select Options
                </button>
              </div>
            </div>
            <div className="text-center px-4">
              <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-2 font-semibold">{product.category}</p>
              <h3 className="text-stone-800 text-sm font-medium mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                {product.name[language]}
              </h3>
              <p className="text-stone-900 font-serif italic text-lg">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
