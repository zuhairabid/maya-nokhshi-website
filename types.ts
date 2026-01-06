
export type Language = 'EN' | 'BN';
export type Currency = 'USD' | 'BDT';
export type View = 'home' | 'collections' | 'products' | 'product-detail';

export interface Product {
  id: string;
  name: {
    EN: string;
    BN: string;
  };
  description: {
    EN: string;
    BN: string;
  };
  price: number; // Base price in USD
  category: string;
  image: string;
  details?: string[];
}

export interface TranslationStrings {
  marqueeText: string;
  heroTitle: string;
  heroSubtitle: string;
  exploreBtn: string;
  collectionsTitle: string;
  featuredTitle: string;
  storyTitle: string;
  storyText: string;
  about: string;
  contact: string;
  careGuide: string;
  footerTagline: string;
  handcrafted: string;
  sustainable: string;
  artisanSupport: string;
  languageLabel: string;
  currencyLabel: string;
  addToCart: string;
  backToProducts: string;
  allProducts: string;
}
