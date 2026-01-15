import React, { useState } from 'react';

interface FilterBarProps {
  onSortChange: (sort: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSortChange }) => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [activeSort, setActiveSort] = useState('Newest');

  const filters = ['Colour', 'Fabric', 'Price', 'Size', 'Pattern'];

  return (
    <div className="w-full bg-transparent py-6 border-b border-stone-100 mb-8">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-stone-900">Filters:</span>
          <button className="p-2 border border-stone-900 rounded-sm hover:bg-stone-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
          {filters.map((filter) => (
            <button key={filter} className="px-5 py-2 border border-stone-900 rounded-sm text-[11px] font-medium hover:bg-stone-50 transition-colors">
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3 group relative">
          <span className="text-[11px] font-bold uppercase tracking-widest text-stone-900">Sort By:</span>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-[11px] font-medium text-stone-600">{activeSort}</span>
            <svg className="w-3 h-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {/* Simple Dropdown Overlay */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-stone-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {['Newest', 'Price: Low to High', 'Price: High to Low'].map((option) => (
              <button 
                key={option}
                onClick={() => { setActiveSort(option); onSortChange(option); }}
                className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {!isMobileExpanded ? (
          <button 
            onClick={() => setIsMobileExpanded(true)}
            className="w-full flex items-center justify-between px-5 py-3 border border-stone-900 rounded-sm"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest">Filters & Sort</span>
            </div>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <div className="animate-in slide-in-from-right duration-500">
            <div className="flex items-center justify-between mb-4">
               <span className="text-[10px] font-bold uppercase tracking-widest">Select Filters</span>
               <button onClick={() => setIsMobileExpanded(false)} className="text-[10px] underline uppercase tracking-widest font-bold">Close</button>
            </div>
            <div className="flex overflow-x-auto space-x-3 no-scrollbar pb-2">
              <button className="flex-shrink-0 p-3 border border-stone-900 rounded-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
              {['Sort By', ...filters].map((f) => (
                <button key={f} className="flex-shrink-0 px-6 py-3 border border-stone-900 rounded-sm text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FilterBar;