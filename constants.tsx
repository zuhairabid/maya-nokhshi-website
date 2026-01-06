
import { Product, Language, TranslationStrings } from './types';

export const EXCHANGE_RATE = 120; // 1 USD = 120 BDT

const IMG_BASE = "https://raw.githubusercontent.com/zuhairabid/maya-nakhshi-ghor-public-files/refs/heads/main/";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: { EN: 'Royal Bloom Nokshi Katha', BN: 'রাজকীয় ফুল নকশী কাঁথা' },
    description: { 
      EN: 'A masterpiece of hand-embroidery featuring intricate floral motifs that symbolize growth and prosperity.',
      BN: 'জটিল ফুলের মোটিফ সম্বলিত হাতে বোনা একটি অনবদ্য সৃষ্টি যা সমৃদ্ধির প্রতীক।'
    },
    price: 420,
    category: 'Quilts',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.02%20AM%20%281%29.jpeg`,
    details: ['100% Cotton', 'Hand-stitched', 'Vintage style']
  },
  {
    id: '2',
    name: { EN: 'Emerald Heritage Quilt', BN: 'মরকত হেরিটেজ কাঁথা' },
    description: { 
      EN: 'Deep emerald threads woven into geometric patterns inspired by ancient terracotta art.',
      BN: 'প্রাচীন টেরাকোটা শিল্প দ্বারা অনুপ্রাণিত জ্যামিতিক নকশায় বোনা গভীর পান্না রঙের সুতো।'
    },
    price: 380,
    category: 'Quilts',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.02%20AM.jpeg`
  },
  {
    id: '3',
    name: { EN: 'Sunlit Mandala Runner', BN: 'সূর্যালোক ম্যান্ডালা রানার' },
    description: { EN: 'Brighten your dining experience with the warmth of hand-stitched sun rays.', BN: 'হাতে বোনা সূর্যরশ্মির উষ্ণতায় আপনার ডাইনিং অভিজ্ঞতাকে উজ্জ্বল করুন।' },
    price: 85,
    category: 'Table Decor',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.03%20AM.jpeg`
  },
  {
    id: '4',
    name: { EN: 'Indigo Dreams Cushion', BN: 'নীল স্বপ্নের কুশন' },
    description: { EN: 'Soft indigo hues and fine needlework create a serene addition to any living space.', BN: 'নরম নীল আভা এবং সূক্ষ্ম সুই-সুতার কাজ যেকোনো বসার ঘরে একটি নির্মল পরিবেশ তৈরি করে।' },
    price: 55,
    category: 'Cushions',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.04%20AM%20%281%29.jpeg`
  },
  {
    id: '5',
    name: { EN: 'Golden Harvest Katha', BN: 'সোনালী ফসল কাঁথা' },
    description: { EN: 'Celebrating the rural landscape of Bengal with golden silk embroidery.', BN: 'সোনালী সিল্কের এমব্রয়ডারির মাধ্যমে বাংলার গ্রাম্য ল্যান্ডস্কেপ উদযাপন।' },
    price: 450,
    category: 'Quilts',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.04%20AM.jpeg`
  },
  {
    id: '6',
    name: { EN: 'Azure Lattice Wall Art', BN: 'নীল জাফরি দেয়াল চিত্র' },
    description: { EN: 'A unique wall hanging featuring traditional lattice patterns in deep azure.', BN: 'গভীর নীল রঙে ঐতিহ্যবাহী জাফরি নকশা সম্বলিত একটি অনন্য দেয়াল সজ্জা।' },
    price: 130,
    category: 'Wall Art',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.05%20AM.jpeg`
  },
  {
    id: '7',
    name: { EN: 'Crimson Petal Cushion', BN: 'রক্তিম পাপড়ি কুশন' },
    description: { EN: 'Bold crimson accents meeting delicate hand-stitched borders.', BN: 'সাহসী লাল রঙের ছোঁয়ায় সূক্ষ্ম হাতে সেলাই করা বর্ডার।' },
    price: 60,
    category: 'Cushions',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.06%20AM%20%281%29.jpeg`
  },
  {
    id: '8',
    name: { EN: 'Sienna Soul Table Runner', BN: 'সিয়েনা সোল টেবিল রানার' },
    description: { EN: 'Earthy sienna tones for a sophisticated, natural home aesthetic.', BN: 'একটি পরিশীলিত এবং স্বাভাবিক গৃহসজ্জার জন্য মাটির সিয়েনা টোন।' },
    price: 75,
    category: 'Table Decor',
    image: `${IMG_BASE}WhatsApp%20Image%202025-12-31%20at%209.45.06%20AM.jpeg`
  }
];

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  EN: {
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
