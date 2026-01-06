
import React from 'react';
import { TranslationStrings } from '../types';

interface FooterProps {
  t: TranslationStrings;
  onLinkClick: (cat: string) => void;
}

const Footer: React.FC<FooterProps> = ({ t, onLinkClick }) => {
  const LOGO_URL = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/image.png";

  return (
    <footer className="bg-[#0A0F1D] pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="flex flex-col mb-10">
            <img 
              src={LOGO_URL} 
              alt="Maya Nokshi Ghor Logo" 
              className="h-28 w-auto object-contain self-start -ml-4"
            />
          </div>
          <p className="text-stone-400 font-light text-sm max-w-sm leading-relaxed mb-10 italic">
            {t.footerTagline}
          </p>
          <div className="flex space-x-8 text-stone-500">
             <a href="#" className="hover:text-[#C5A059] transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
             <a href="#" className="hover:text-[#C5A059] transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.669-.072-4.948-.2-4.358-2.621-6.78-6.979-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-8">{t.collectionsTitle}</h4>
          <ul className="space-y-5 text-sm text-stone-500 font-light">
            <li onClick={() => onLinkClick('Quilts')} className="hover:text-[#C5A059] transition-colors cursor-pointer">Heritage Quilts</li>
            <li onClick={() => onLinkClick('Cushions')} className="hover:text-[#C5A059] transition-colors cursor-pointer">Artisan Cushions</li>
            <li onClick={() => onLinkClick('Wall Art')} className="hover:text-[#C5A059] transition-colors cursor-pointer">Wall Senses</li>
            <li onClick={() => onLinkClick('Table Decor')} className="hover:text-[#C5A059] transition-colors cursor-pointer">Table Accents</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-8">Navigation</h4>
          <ul className="space-y-5 text-sm text-stone-500 font-light">
            <li className="hover:text-[#C5A059] transition-colors cursor-pointer">{t.about}</li>
            <li className="hover:text-[#C5A059] transition-colors cursor-pointer">{t.contact}</li>
            <li className="hover:text-[#C5A059] transition-colors cursor-pointer">{t.careGuide}</li>
            <li className="hover:text-[#C5A059] transition-colors cursor-pointer">Gift Cards</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-stone-600 font-semibold gap-8">
        <div>&copy; 2024 Maya Nokshi Ghor Studio. All rights reserved.</div>
        <div className="flex space-x-12">
          <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-stone-300 transition-colors">Sustainability</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
