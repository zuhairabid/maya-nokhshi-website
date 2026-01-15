import { Product, Language, TranslationStrings } from './types';

export const EXCHANGE_RATE = 120; // 1 USD = 120 BDT

// Helper function to generate dummy product data
const generateProducts = () => {
  const products: Product[] = [];
  const categories = ['Quilts', 'Cushions', 'Wall Art', 'Table Decor'];
  
  const baseNames = {
    'Quilts': { EN: 'Heritage Katha', BN: 'ঐতিহ্যবাহী কাঁথা' },
    'Cushions': { EN: 'Artisan Pillow', BN: 'কারুশিল্প কুশন' },
    'Wall Art': { EN: 'Nokshi Frame', BN: 'নকশী ফ্রেম' },
    'Table Decor': { EN: 'Woven Runner', BN: 'বোনা রানার' }
  };

  const adjectives = [
    { EN: 'Royal', BN: 'রাজকীয়' }, { EN: 'Ancient', BN: 'প্রাচীন' }, 
    { EN: 'Indigo', BN: 'নীল' }, { EN: 'Golden', BN: 'সোনালী' },
    { EN: 'Crimson', BN: 'লাল' }, { EN: 'Emerald', BN: 'পান্না' },
    { EN: 'Midnight', BN: 'নিশীথ' }, { EN: 'Saffron', BN: 'জাফরান' },
    { EN: 'Earthy', BN: 'মাটির' }, { EN: 'Floral', BN: 'ফুলের' },
    { EN: 'Geometric', BN: 'জ্যামিতিক' }, { EN: 'Silk', BN: 'রেশমী' },
    { EN: 'Lush', BN: 'সবুজ' }, { EN: 'Ivory', BN: 'হাতির দাঁত' },
    { EN: 'Mystic', BN: 'রহস্যময়' }, { EN: 'Vintage', BN: 'পুরানো' },
    { EN: 'Azure', BN: 'আসমানী' }, { EN: 'Terra', BN: 'টেরা' },
    { EN: 'Majestic', BN: 'মহিমান্বিত' }, { EN: 'Serene', BN: 'শান্ত' }
  ];

  categories.forEach((cat) => {
    for (let i = 1; i <= 20; i++) {
      const adj = adjectives[i - 1];
      const base = baseNames[cat as keyof typeof baseNames];
      const id = `${cat.toLowerCase().replace(' ', '-')}-${i}`;
      
      let price = 45;
      if (cat === 'Quilts') price = 300 + (i * 10);
      else if (cat === 'Wall Art') price = 120 + (i * 5);
      else if (cat === 'Table Decor') price = 60 + (i * 3);
      else price = 40 + (i * 2);

      const featuredImage = `https://picsum.photos/seed/${id}/418/522`;
      const galleryImages = [
        featuredImage,
        `https://picsum.photos/seed/${id}-2/418/522`
      ];

      products.push({
        id,
        name: {
          EN: `${adj.EN} ${base.EN}`,
          BN: `${adj.BN} ${base.BN}`
        },
        description: {
          EN: `Handcrafted ${cat.toLowerCase()} featuring traditional ${adj.EN.toLowerCase()} patterns from rural Bengal. Made with high-quality sustainable materials.`,
          BN: `গ্রামীণ বাংলার ঐতিহ্যবাহী ${adj.BN.toLowerCase()} নকশায় তৈরি হাতে বোনা ${cat.toLowerCase()}। এটি উচ্চমানের পরিবেশবান্ধব উপাদানে তৈরি।`
        },
        price,
        category: cat,
        image: featuredImage,
        images: galleryImages,
        details: [
          '100% Organic Cotton',
          'Traditional Nokshi Stitched',
          'Artisan Signature Work',
          'Eco-friendly dyes'
        ]
      });
    }
  });
  return products;
};

// Exporting PRODUCTS to be used in App.tsx
export const PRODUCTS = generateProducts();

// Translation data for multi-language support
export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  EN: {
    marqueeText: 'Free Worldwide Shipping on orders over $200 • Traditional Nokshi Art • Sustaining Rural Artisans',
    heroTitle: 'Heritage in Every Stitch',
    heroSubtitle: 'Discover the soul of Bengal through our curated collection of hand-stitched Nokshi Katha and artisanal home decor.',
    exploreBtn: 'Explore Collections',
    collectionsTitle: 'Curated Categories',
    featuredTitle: 'Featured Treasures',
    storyTitle: 'Our Heritage',
    storyText: 'Maya Nokshi Ghor is a tribute to the resilient spirit of rural Bengali women, transforming age-old traditions into modern heirlooms.',
    about: 'Our Story',
    contact: 'Contact Us',
    careGuide: 'Product Care',
    footerTagline: 'Weaving stories of tradition, sustainability, and artisan empowerment into every piece of home decor.',
    handcrafted: 'Artisan Crafted',
    sustainable: 'Eco Conscious',
    artisanSupport: 'Fair Trade',
    languageLabel: 'Language',
    currencyLabel: 'Currency',
    addToCart: 'Add to Collection',
    backToProducts: 'Back to Shop',
    allProducts: 'All Products'
  },
  BN: {
    marqueeText: '$২০০ এর বেশি অর্ডারে বিনামূল্যে বিশ্বব্যাপী শিপিং • ঐতিহ্যবাহী নকশী শিল্প • গ্রামীণ কারুশিল্পীদের সহায়তা',
    heroTitle: 'প্রতিটি সেলাইয়ে ঐতিহ্য',
    heroSubtitle: 'আমাদের নকশী কাঁথা এবং হস্তশিল্পের সংগ্রহের মাধ্যমে বাংলার প্রাণের সন্ধান করুন।',
    exploreBtn: 'সংগ্রহ দেখুন',
    collectionsTitle: 'বিভাগসমূহ',
    featuredTitle: 'নির্বাচিত পণ্য',
    storyTitle: 'আমাদের ঐতিহ্য',
    storyText: 'মায়া নকশী ঘর গ্রামীণ বাঙালি নারীদের সহনশীলতার প্রতি শ্রদ্ধাঞ্জলি, যা পুরানো ঐতিহ্যকে আধুনিক উত্তরাধিকার হিসেবে রূপান্তরিত করে।',
    about: 'আমাদের কথা',
    contact: 'যোগাযোগ করুন',
    careGuide: 'যত্ন নির্দেশিকা',
    footerTagline: 'প্রতিটি গৃহসজ্জার পণ্যে ঐতিহ্য, স্থায়িত্ব এবং কারুশিল্পীদের ক্ষমতায়নের গল্প বোনা।',
    handcrafted: 'হাতে তৈরি',
    sustainable: 'পরিবেশবান্ধব',
    artisanSupport: 'ন্যায্য বাণিজ্য',
    languageLabel: 'ভাষা',
    currencyLabel: 'মুদ্রা',
    addToCart: 'ব্যাগ-এ যুক্ত করুন',
    backToProducts: 'দোকানে ফিরে যান',
    allProducts: 'সব পণ্য'
  }
};
