
import React, { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  onSortChange: (sort: string) => void;
}

const FILTER_OPTIONS: Record<string, string[]> = {
  'Colour': ['Indigo', 'Saffron', 'Crimson', 'Emerald', 'Cream', 'Midnight'],
  'Fabric': ['Silk', 'Hand-loomed Cotton', 'Traditional Katha', 'Linen'],
  'Price': ['Under $50', '$50 - $100', '$100 - $500', 'Over $500'],
  'Size': ['Small', 'Medium', 'Large', 'Extra Large'],
  'Pattern': ['Floral', 'Geometric', 'Traditional Nokshi', 'Minimalist']
};

const FilterBar: React.FC<FilterBarProps> = ({ onSortChange }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('Newest');
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterSelect = (category: string, option: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category] === option ? '' : option
    }));
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className="w-full bg-transparent py-2 border-b border-stone-100 mb-4" ref={containerRef}>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-stone-900 mr-2">Filters:</span>
          
          {/* Main Filter Icon (Reset) */}
          <button 
            onClick={clearFilters}
            className={`p-2 border rounded-sm transition-all duration-300 ${Object.keys(selectedFilters).length > 0 ? 'border-[#C5A059] bg-[#C5A059]/5 text-[#C5A059]' : 'border-stone-900 text-stone-900 hover:bg-stone-50'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>

          {/* Dynamic Filter Buttons */}
          {Object.entries(FILTER_OPTIONS).map(([category, options]) => {
            const selection = selectedFilters[category];
            const isOpen = activeDropdown === category;
            
            return (
              <div key={category} className="relative">
                <button 
                  onClick={() => setActiveDropdown(isOpen ? null : category)}
                  className={`px-5 py-2 border rounded-sm text-[11px] font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selection 
                    ? 'border-stone-900 bg-stone-900 text-white shadow-sm' 
                    : 'border-stone-200 text-stone-600 hover:border-stone-900 hover:text-stone-900'
                  }`}
                >
                  <span>{selection ? `${category}: ${selection}` : category}</span>
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-stone-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 grid grid-cols-1">
                      {options.map((option) => (
                        <button 
                          key={option}
                          onClick={() => handleFilterSelect(category, option)}
                          className={`w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest transition-colors ${
                            selection === option ? 'bg-stone-100 font-bold text-stone-900' : 'hover:bg-stone-50 text-stone-500'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-3 group relative">
          <span className="text-[11px] font-bold uppercase tracking-widest text-stone-900">Sort By:</span>
          <div className="flex items-center space-x-2 cursor-pointer border-b border-stone-200 pb-0.5 group-hover:border-stone-900 transition-colors">
            <span className="text-[11px] font-medium text-stone-600">{activeSort}</span>
            <svg className="w-3 h-3 text-stone-400 group-hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-stone-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
            {['Newest', 'Price: Low to High', 'Price: High to Low'].map((option) => (
              <button 
                key={option}
                onClick={() => { setActiveSort(option); onSortChange(option); }}
                className={`w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest transition-colors ${activeSort === option ? 'bg-stone-50 font-bold' : 'hover:bg-stone-50 text-stone-500'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileDrawerOpen(true)}
          className="w-full flex items-center justify-between px-5 py-4 border border-stone-900 rounded-sm bg-white active:bg-stone-50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Filters & Sort</span>
          </div>
          <div className="flex items-center space-x-2">
            {Object.keys(selectedFilters).filter(k => selectedFilters[k]).length > 0 && (
              <span className="w-5 h-5 bg-[#C5A059] text-black text-[9px] font-bold flex items-center justify-center rounded-full">
                {Object.keys(selectedFilters).filter(k => selectedFilters[k]).length}
              </span>
            )}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* --- MOBILE DRAWER OVERLAY --- */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-[120] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#FDFCF8] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <div className="p-6 border-b border-stone-100 flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-stone-900">Filters & Sort</h3>
              <button onClick={() => setIsMobileDrawerOpen(false)} className="p-2 text-stone-400 hover:text-stone-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
              {/* Mobile Sort Section */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Sort By</span>
                <div className="grid grid-cols-1 gap-2">
                  {['Newest', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                    <button 
                      key={option}
                      onClick={() => { setActiveSort(option); onSortChange(option); }}
                      className={`w-full text-left px-4 py-4 border rounded-sm text-[10px] uppercase tracking-widest transition-all ${
                        activeSort === option ? 'border-stone-900 bg-stone-900 text-white font-bold' : 'border-stone-100 bg-white text-stone-500'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-stone-100" />

              {/* Mobile Filter Categories (Accordion) */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Categories</span>
                <div className="space-y-3">
                  {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
                    <div key={category} className="border border-stone-100 rounded-sm overflow-hidden bg-white">
                      <button 
                        onClick={() => setMobileExpandedCategory(mobileExpandedCategory === category ? null : category)}
                        className="w-full flex items-center justify-between p-4 text-[10px] uppercase tracking-widest font-bold text-stone-700"
                      >
                        <div className="flex items-center space-x-2">
                          <span>{category}</span>
                          {selectedFilters[category] && (
                            <span className="text-[#C5A059] text-[9px]">• {selectedFilters[category]}</span>
                          )}
                        </div>
                        <svg className={`w-4 h-4 transition-transform ${mobileExpandedCategory === category ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {mobileExpandedCategory === category && (
                        <div className="px-4 pb-4 grid grid-cols-1 gap-1 animate-in slide-in-from-top-2 duration-300">
                          {options.map((option) => (
                            <button 
                              key={option}
                              onClick={() => handleFilterSelect(category, option)}
                              className={`w-full text-left p-3 text-[10px] uppercase tracking-widest transition-colors rounded-sm ${
                                selectedFilters[category] === option ? 'bg-stone-50 text-stone-900 font-bold' : 'text-stone-400 hover:bg-stone-50'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Mobile Drawer Footer */}
            <div className="p-6 bg-white border-t border-stone-100 grid grid-cols-2 gap-4">
              <button 
                onClick={clearFilters}
                className="w-full py-4 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-50 transition-colors"
              >
                Clear All
              </button>
              <button 
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-full py-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest font-bold shadow-lg shadow-black/10 active:scale-[0.98] transition-all"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FilterBar;
