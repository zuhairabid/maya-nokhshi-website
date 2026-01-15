
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Language, Currency, View, Product } from './types';
import { TRANSLATIONS, PRODUCTS, EXCHANGE_RATE } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Story from './components/Story';
import ProductGrid from './components/ProductGrid';
import Values from './components/Values';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import FilterBar from './components/FilterBar';

const ProductDetailPage: React.FC<{
  product: Product;
  formatPrice: (p: number) => string;
  language: Language;
  t: any;
  onBack: () => void;
}> = ({ product, formatPrice, language, t, onBack }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="pt-8 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="group mb-12 flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900 transition-colors">
         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
         <span>{t.backToProducts}</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Gallery Sidebar / Main Image */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 aspect-[4/5] bg-stone-100 overflow-hidden shadow-2xl rounded-sm">
            <img src={product.images[activeImg]} alt={product.name[language]} className="w-full h-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="flex md:flex-col gap-3">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImg(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 border-2 transition-all ${activeImg === idx ? 'border-[#C5A059]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-4">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">{product.name[language]}</h1>
            <p className="text-2xl font-serif italic text-stone-600 mb-8">{formatPrice(product.price)}</p>
            <p className="text-stone-500 font-light leading-relaxed text-lg">{product.description[language]}</p>
          </div>
          
          <div className="space-y-4 pt-8 border-t border-stone-100">
            <button className="w-full py-5 bg-[#0A0F1D] text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all rounded-sm shadow-lg shadow-black/10 active:scale-[0.98]">
              {t.addToCart}
            </button>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 border border-stone-100 text-center rounded-sm bg-white/50">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">Authenticity</p>
                  <p className="text-[10px] font-medium">Certified Artisan Made</p>
               </div>
               <div className="p-4 border border-stone-100 text-center rounded-sm bg-white/50">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">Origin</p>
                  <p className="text-[10px] font-medium">Rural Bengal, BD</p>
               </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-stone-900">Key Details</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {product.details?.map((detail, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm text-stone-500 font-light">
                  <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC<{
  t: any;
  formatPrice: (p: number) => string;
  language: Language;
  onSelect: (p: Product) => void;
  categoryFilter?: string;
}> = ({ t, formatPrice, language, onSelect, categoryFilter }) => {
  const [sortBy, setSortBy] = useState('Newest');

  const processedProducts = useMemo(() => {
    let list = categoryFilter ? PRODUCTS.filter(p => p.category === categoryFilter) : PRODUCTS;
    
    if (sortBy === 'Price: Low to High') {
      return [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [categoryFilter, sortBy]);

  return (
    <div className="pt-6 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">{categoryFilter || t.allProducts}</h1>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto"></div>
      </div>

      <FilterBar onSortChange={setSortBy} />

      <ProductGrid 
        t={t} 
        products={processedProducts} 
        formatPrice={formatPrice} 
        language={language}
        onProductClick={onSelect}
      />
    </div>
  );
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [view, setView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (latitude >= 20 && latitude <= 26 && longitude >= 88 && longitude <= 93) {
          setLanguage('BN');
          setCurrency('BDT');
        }
      }, (error) => {
        console.log("Geolocation blocked or failed. Defaulting to EN/USD.");
      });
    }
  }, []);

  const t = TRANSLATIONS[language];

  const formatPrice = useCallback((usdPrice: number) => {
    if (currency === 'BDT') {
      const bdtPrice = usdPrice * EXCHANGE_RATE;
      return new Intl.NumberFormat('bn-BD', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0
      }).format(bdtPrice);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(usdPrice);
  }, [currency]);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (cat: string) => {
    if (cat === t.allProducts) {
      setCategoryFilter(undefined);
    } else {
      setCategoryFilter(cat);
    }
    setView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('home');
    setCategoryFilter(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-stone-200 bg-[#FDFCF8]">
      <div className="fixed top-0 left-0 w-full z-50">
        <Marquee text={t.marqueeText} />
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          currency={currency} 
          setCurrency={setCurrency}
          t={t}
          onHomeClick={navigateToHome}
          onExploreClick={() => { setView('products'); setCategoryFilter(undefined); }}
          onCategoryClick={navigateToCategory}
        />
      </div>
      
      <main className="pt-[97px]">
        {view === 'home' && (
          <>
            <Hero t={t} onExplore={() => setView('products')} />
            <Collections 
              t={t} 
              onCategoryClick={navigateToCategory} 
              isHome={true} 
              activeCategory={categoryFilter}
            />
            <ProductGrid 
              t={t} 
              products={PRODUCTS.slice(0, 16)} 
              formatPrice={formatPrice} 
              language={language}
              onProductClick={navigateToProduct}
            />
          </>
        )}

        {view !== 'home' && (
          <>
            <Collections 
              t={t} 
              onCategoryClick={navigateToCategory} 
              isHome={false} 
              activeCategory={categoryFilter}
            />
            {view === 'products' && (
              <ProductsPage 
                t={t} 
                formatPrice={formatPrice} 
                language={language} 
                onSelect={navigateToProduct}
                categoryFilter={categoryFilter}
              />
            )}
            {view === 'product-detail' && selectedProduct && (
              <ProductDetailPage 
                product={selectedProduct} 
                formatPrice={formatPrice} 
                language={language} 
                t={t}
                onBack={() => setView('products')}
              />
            )}
          </>
        )}
      </main>

      <Footer t={t} onLinkClick={(cat) => navigateToCategory(cat)} />
    </div>
  );
};

export default App;
