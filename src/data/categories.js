export const CATEGORIES_DATA = [
  {
    id: 1,
    slug: "sedie",
    name: { it: "Sedie", en: "Chairs" },
    description: {
      it: "Sedie artigianali realizzate con materiali naturali e lavorazioni curate nei dettagli. Comfort, estetica e solidità per ogni ambiente della casa.",
      en: "Handcrafted chairs made with natural materials and carefully detailed workmanship. Comfort, aesthetics and durability for every home environment.",
    },
    heroImage: "/src/assets/chairs/IMG-20260420-WA0061.jpg",
    products: [
      {
        id: 1,
        name: "Sedia legno naturale",
        price: 120,
        images: ["/src/assets/chairs/IMG-20260420-WA0061.jpg"],
      },
      {
        id: 2,
        name: "Sedia minimal scandinava",
        price: 140,
        images: ["/src/assets/chairs/IMG-20260420-WA0062.jpg"],
      },
    ],
  },

  {
    id: 2,
    slug: "mobili",
    name: { it: "Mobili", en: "Furniture" },
    description: {
      it: "Contenitori, librerie, madie e credenze pensate per organizzare e valorizzare ogni spazio. Ogni pezzo unisce funzionalità e bellezza con materiali naturali selezionati a mano.",
      en: "Storage pieces, bookcases, sideboards and cabinets designed to organise and enhance every space. Each piece combines functionality and beauty with hand-selected natural materials.",
    },
    heroImage: "/src/assets/furniture/IMG-20260420-WA0026.jpg",
    products: [
      {
        id: 1,
        name: "Madia in legno massello",
        price: 890,
        images: ["/src/assets/furniture/IMG-20260420-WA0026.jpg"],
      },
      {
        id: 2,
        name: "Libreria modulare",
        price: 690,
        images: ["/src/assets/furniture/IMG-20260420-WA0027.jpg"],
      },
      {
        id: 3,
        name: "Credenza moderna",
        price: 790,
        images: ["/src/assets/furniture/IMG-20260420-WA0044.jpg"],
      },
    ],
  },

  {
    id: 3,
    slug: "tavoli",
    name: { it: "Tavoli", en: "Tables" },
    description: {
      it: "Tavoli in legno massello progettati per unire funzionalità e design. Ogni pezzo è unico, realizzato per durare nel tempo.",
      en: "Solid wood tables designed to combine functionality and design. Each piece is unique and built to last.",
    },
    heroImage: "/src/assets/tables/IMG-20260420-WA0056.jpg",
    products: [
      {
        id: 1,
        name: "Tavolo rovere naturale",
        price: 650,
        images: ["/src/assets/tables/IMG-20260420-WA0056.jpg"],
      },
      {
        id: 2,
        name: "Tavolo moderno minimal",
        price: 720,
        images: ["/src/assets/tables/IMG-20260420-WA0057.jpg"],
      },
    ],
  },

  {
    id: 4,
    slug: "divani",
    name: { it: "Divani", en: "Sofas" },
    description: {
      it: "Divani artigianali pensati per il massimo comfort e stile. Linee moderne o classiche per ogni salotto.",
      en: "Handcrafted sofas designed for maximum comfort and style. Modern or classic lines for any living room.",
    },
    heroImage: "/src/assets/sofa_armchairs/IMG-20260420-WA0049.jpg",
    products: [
      {
        id: 1,
        name: "Divano 3 posti moderno",
        price: 1490,
        images: ["/src/assets/sofa_armchairs/IMG-20260420-WA0049.jpg"],
      },
      {
        id: 2,
        name: "Divano angolare grande",
        price: 1890,
        images: ["/src/assets/sofa_armchairs/IMG-20260420-WA0050.jpg"],
      },
      {
        id: 3,
        name: "Divano relax imbottito",
        price: 1590,
        images: ["/src/assets/sofa_armchairs/IMG-20260420-WA0051.jpg"],
      },
      {
        id: 4,
        name: "Divano minimal elegante",
        price: 1390,
        images: ["/src/assets/sofa_armchairs/IMG-20260420-WA0053.jpg"],
      },
    ],
  },

  {
    id: 5,
    slug: "cucine",
    name: { it: "Cucine", en: "Kitchens" },
    description: {
      it: "Cucine artigianali con design ricercato e funzionalità al top. Soluzioni su misura per ogni ambiente.",
      en: "Handcrafted kitchens with refined design and top functionality. Custom solutions for every space.",
    },
    heroImage: "/src/assets/kitchen/IMG-20260420-WA0007.jpg",
    products: [
      {
        id: 1,
        name: "Cucina moderna bianca",
        price: 4990,
        images: ["/src/assets/kitchen/IMG-20260420-WA0007.jpg"],
      },
      {
        id: 2,
        name: "Cucina classica rovere",
        price: 5490,
        images: ["/src/assets/kitchen/IMG-20260420-WA0012.jpg"],
      },
      {
        id: 3,
        name: "Cucina con penisola",
        price: 2890,
        images: ["/src/assets/kitchen/IMG-20260420-WA0032.jpg"],
      },
      {
        id: 4,
        name: "Cucina lineare minimal",
        price: 3190,
        images: ["/src/assets/kitchen/IMG-20260420-WA0010.jpg"],
      },
    ],
  },

  {
    id: 6,
    slug: "camera-da-letto",
    name: { it: "Camera da Letto", en: "Bedroom" },
    description: {
      it: "Camere da letto progettate per offrire relax e comfort. Ambienti armoniosi e materiali caldi.",
      en: "Bedrooms designed for relaxation and comfort. Harmonious spaces and warm materials.",
    },
    heroImage: "/src/assets/bedroom/IMG-20260420-WA0022.jpg",
    products: [
      {
        id: 1,
        name: "Letto king noce",
        price: 1890,
        images: ["/src/assets/bedroom/IMG-20260420-WA0022.jpg"],
      },
      {
        id: 2,
        name: "Letto queen rovere",
        price: 1490,
        images: ["/src/assets/bedroom/IMG-20260420-WA0024.jpg"],
      },
      {
        id: 3,
        name: "Letto contenitore moderno",
        price: 1690,
        images: ["/src/assets/bedroom/IMG-20260420-WA0025.jpg"],
      },
    ],
  },

  {
    id: 7,
    slug: "soggiorno",
    name: { it: "Soggiorno", en: "Living Room" },
    description: {
      it: "Soggiorni completi e raffinati progettati per unire comfort, estetica e funzionalità.",
      en: "Complete and refined living rooms combining comfort, aesthetics and functionality.",
    },
    heroImage: "/src/assets/living_room/IMG-20260420-WA0028.jpg",
    products: [
      {
        id: 1,
        name: "Soggiorno moderno completo",
        price: 3890,
        images: ["/src/assets/living_room/IMG-20260420-WA0028.jpg"],
      },
      {
        id: 2,
        name: "Soggiorno classico elegante",
        price: 4290,
        images: ["/src/assets/living_room/IMG-20260420-WA0031.jpg"],
      },
      {
        id: 3,
        name: "Parete attrezzata moderna",
        price: 3590,
        images: ["/src/assets/living_room/IMG-20260420-WA0045.jpg"],
      },
      {
        id: 4,
        name: "Mobile TV design",
        price: 1990,
        images: ["/src/assets/living_room/IMG-20260420-WA0046.jpg"],
      },
    ],
  },
];
