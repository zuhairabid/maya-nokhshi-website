
import { Product, Language, TranslationStrings } from './types';

export const EXCHANGE_RATE = 120; // 1 USD = 120 BDT

const IMG_BASE = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/";
// Fallback high-quality unsplash images for variety
const FALLBACK_IMGS = [
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072",
  "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1074",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170",
  "https://images.unsplash.com/photo-1606744881024-52e8019a114d?q=80&w=1032",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1100"
];

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
      
      // Prices vary by category
      let price = 45;
      if (cat === 'Quilts') price = 300 + (i * 10);
      else if (cat === 'Wall Art') price = 120 + (i * 5);
      else if (cat === 'Table Decor') price = 60 + (i * 3);
      else price = 40 + (i * 2);

      // Mix repository images with unsplash for 20 per category
      const imgIdx = (i - 1) % 8 + 1;
      const useRepoImg = i <= 8;
      const repoImgName = `WhatsApp%20Image%202025-12-31%20at%209.45.0${imgIdx}%20AM.jpeg`;
      
      products.push({
        id,
        name: { 
          EN: `${adj.EN} ${base.EN}`, 
          BN: `${adj.BN} ${base.BN}` 
        },
        description: { 
          EN: `A stunning ${adj.EN.toLowerCase()} piece of ${cat.toLowerCase()} handcrafted by rural artisans in Bengal.`,
          BN: `বাংলার গ্রামীণ কারুশিল্পীদের হাতে তৈরি একটি চমৎকার ${adj.BN} ${base.BN}।`
        },
        price,
        category: cat,
        image: useRepoImg ? `${IMG_BASE}${repoImgName}` : FALLBACK_IMGS[i % FALLBACK_IMGS.length],
        details: ['Hand-stitched', 'Sustainable Materials', 'Certified Authentic']
      });
    }
  });

  return products;
};

export const PRODUCTS: Product[] = generateProducts();

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  EN: {
    marqueeText: "Complementary International Shipping on Orders Above $500 USD — Supporting 100+ Rural Artisans Across Bangladesh — Each Stitch Tells a Story — Heritage Revitalized — ",
    heroTitle: "Artistry Stitched in Time",
    heroSubtitle: "Welcome to Maya Nokshi Ghor. Discover the timeless craftsmanship of Bangladeshi heritage.",
    exploreBtn: "Explore Collection",
    collectionsTitle: "The Collections",
    featuredTitle: "Curated Masterpieces",
    storyTitle: "Our Craftsmanship Legacy",
    storyText: "At Maya Nokshi Ghor, we believe every piece is a canvas. Rooted in the heart of Bengal, our artisans hand-stitch stories of life onto premium fabrics.",
    about: "Our Story",
    contact: "Contact",
    careGuide: "Care Guide",
    footerTagline: "Hand-stitched heritage for the modern connoisseur.",
    handcrafted: "100% Hand-Stitched",
    sustainable: "Ethical & Eco-Friendly",
    artisanSupport: "Empowering Local Artisans",
    languageLabel: "Language",
    currencyLabel: "Currency",
    addToCart: "Add to Bag",
    backToProducts: "Back to Gallery",
    allProducts: "All Products"
  },
  BN: {
    marqueeText: "৫০০ ডলারের বেশি অর্ডারে আন্তর্জাতিক শিপিং সম্পূর্ণ বিনামূল্যে — সারা বাংলাদেশে ১০০+ গ্রামীণ কারুশিল্পীদের সহায়তা — প্রতিটি ফোঁড়ে একটি গল্প — ঐতিহ্যের নবজাগরণ — ",
    heroTitle: "মায়ার ভাঁজে ঐতিহ্যের বুনন",
    heroSubtitle: "মায়া নকশী ঘরে আপনাকে স্বাগতম। বাংলার চিরন্তন কারুশিল্পের জাদুকরী ছোঁয়া আবিষ্কার করুন।",
    exploreBtn: "সংগ্রহ দেখুন",
    collectionsTitle: "আমাদের সম্ভার",
    featuredTitle: "নির্বাচিত শিল্পকর্ম",
    storyTitle: "আমাদের কারুশিল্পের ঐতিহ্য",
    storyText: "মায়া নকশী ঘরে আমরা বিশ্বাস করি প্রতিটি শিল্পকর্ম একটি জীবন্ত ক্যানভাস। বাংলার হৃদয়ে শেকড় গেড়ে আমাদের কারুশিল্পীরা জীবনের গল্প বুনে চলেন সাধারণ কাপড়ে।",
    about: "পরিচিতি",
    contact: "যোগাযোগ",
    careGuide: "যত্ন বিধি",
    footerTagline: "আধুনিক রুচিতে ঐতিহ্যের ছোঁয়া।",
    handcrafted: "১০০% হাতে তৈরি",
    sustainable: "নৈতিক ও পরিবেশবান্ধব",
    artisanSupport: "স্থানীয় শিল্পীদের ক্ষমতায়ন",
    languageLabel: "ভাষা",
    currencyLabel: "মুদ্রা",
    addToCart: "ব্যাগে যোগ করুন",
    backToProducts: "গ্যালারিতে ফিরে যান",
    allProducts: "সকল পণ্য"
  }
};
