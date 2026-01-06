
import React, { useState, useCallback, useMemo } from 'react';
import { Language, Currency, View, Product } from './types';
import { TRANSLATIONS, PRODUCTS, EXCHANGE_RATE } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Story from './components/Story';
import ProductGrid from './components/ProductGrid';
import Values from './components/Values';
import Footer from './components/Footer';

// Sub-components for pages
const ProductDetailPage: React.FC<{
  product: Product;
  formatPrice: (p: number) => string;
  language: Language;
  t: any;
  onBack: () => void;
}> = ({ product, formatPrice, language, t, onBack }) => (
  <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
    <button onClick={onBack} className="group mb-12 flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900 transition-colors">
       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
       <span>{t.backToProducts}</span>
    </button>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="aspect-[4/5] bg-stone-100 overflow-hidden shadow-2xl">
        <img src={product.image} alt={product.name[language]} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-4">{product.category}</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">{product.name[language]}</h1>
          <p className="text-2xl font-serif italic text-stone-600 mb-8">{formatPrice(product.price)}</p>
          <p className="text-stone-500 font-light leading-relaxed text-lg">{product.description[language]}</p>
        </div>
        <div className="space-y-4 pt-8 border-t border-stone-100">
          <button className="w-full py-5 bg-[#0A0F1D] text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all">
            {t.addToCart}
          </button>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 border border-stone-100 text-center">
                <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">Authenticity</p>
                <p className="text-[10px] font-medium">Certified Artisan Made</p>
             </div>
             <div className="p-4 border border-stone-100 text-center">
                <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">Origin</p>
                <p className="text-[10px] font-medium">Rural Bengal, BD</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductsPage: React.FC<{
  t: any;
  formatPrice: (p: number) => string;
  language: Language;
  onSelect: (p: Product) => void;
  categoryFilter?: string;
}> = ({ t, formatPrice, language, onSelect, categoryFilter }) => {
  const filteredProducts = useMemo(() => 
    categoryFilter ? PRODUCTS.filter(p => p.category === categoryFilter) : PRODUCTS
  , [categoryFilter]);

  return (
    <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">{categoryFilter || t.allProducts}</h1>
        <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto"></div>
      </div>
      <ProductGrid 
        t={t} 
        products={filteredProducts} 
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
    setCategoryFilter(cat);
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
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        currency={currency} 
        setCurrency={setCurrency}
        t={t}
        onHomeClick={navigateToHome}
        onExploreClick={() => { setView('products'); setCategoryFilter(undefined); }}
      />
      
      <main>
        {view === 'home' && (
          <>
            <Hero t={t} onExplore={() => setView('products')} />
            <Collections t={t} onCategoryClick={navigateToCategory} />
            <Story t={t} />
            <ProductGrid 
              t={t} 
              products={PRODUCTS.slice(0, 4)} 
              formatPrice={formatPrice} 
              language={language}
              onProductClick={navigateToProduct}
            />
            <Values t={t} />
          </>
        )}

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
      </main>

      <Footer t={t} onLinkClick={(cat) => navigateToCategory(cat)} />
    </div>
  );
};

export default App;
