import { PHONE_FISSO, PHONE_MOBILE, EMAIL } from "../data/contacts";

export const translations = {
  it: {
    // Navbar
    nav_collections: "Collezioni",
    nav_products: "Prodotti",
    nav_about: "Chi Siamo",
    nav_contact: "Contatti",
    nav_location: "Dove siamo",
    nav_quote: "Richiedi preventivo",

    // Hero
    hero_logo_alt: "Arredare Ambienti",
    hero_eyebrow: "— Arredamento di qualità dal 1987",
    hero_title: "Arreda il tuo spazio con stile",
    hero_title_em: "stile",
    hero_subtitle:
      "Mobili artigianali e design contemporaneo per trasformare ogni ambiente in un luogo che racconta chi sei.",
    hero_cta1: "Scopri le collezioni",
    hero_cta2: "Richiedi preventivo",
    hero_badge: "clienti soddisfatti",

    // Products
    products_label: "Prodotti in evidenza",
    products_title: "I nostri pezzi più amati",
    products_subtitle:
      "Qualità artigianale e design contemporaneo in ogni pezzo della nostra selezione.",
    products_filters: ["Tutti", "Soggiorno", "Camera da Letto", "Ufficio"],
    products_filter_keys: ["Tutti", "Soggiorno", "Camera da Letto", "Ufficio"],
    products_badge_sale: "Offerta",
    products_badge_new: "Novità",
    products_add: "Aggiungi al preventivo",
    products_cta: "Vedi tutto il catalogo",

    // About
    about_label: "Chi siamo",
    about_title: "Artigianato e design dal cuore dell'Italia",
    about_subtitle:
      "Dal 1987 trasformiamo legni pregiati e materiali di qualità in pezzi unici che abitano le case di migliaia di famiglie italiane.",
    about_body:
      "Arredare Ambienti nasce da una passione per il bello e il durevole. Ogni mobile che produciamo porta con sé ore di lavorazione artigianale, scelta meticolosa dei materiali e attenzione per ogni dettaglio. Non vendiamo solo mobili — ti aiutiamo a costruire il tuo spazio ideale.",
    about_cta: "Scopri la nostra storia",
    about_stats: [
      { value: "35+", label: "anni di esperienza" },
      { value: "10k+", label: "clienti soddisfatti" },
      { value: "500+", label: "prodotti nel catalogo" },
      { value: "50+", label: "artigiani collaboratori" },
    ],

    // Testimonials
    test_label: "Testimonianze",
    test_title: "Cosa dicono i nostri clienti",
    test_subtitle:
      "Migliaia di famiglie si sono affidate a noi. Queste sono alcune delle loro esperienze.",
    test_reviews: [
      {
        id: 1,
        name: "Marco Rossi",
        city: "Milano",
        stars: 5,
        initials: "MR",
        text: "Qualità eccezionale e assistenza impeccabile. Ho arredato l'intero appartamento con Arredare Ambienti e sono rimasto stupito dalla cura nei dettagli. Consiglio a chiunque voglia il meglio.",
      },
      {
        id: 2,
        name: "Giulia Bianchi",
        city: "Roma",
        stars: 5,
        initials: "GB",
        text: "Finalmente un negozio che unisce estetica e funzionalità. I prezzi sono assolutamente giusti per la qualità che ricevi. Il divano Modena è semplicemente perfetto.",
      },
      {
        id: 3,
        name: "Luca Ferrari",
        city: "Torino",
        stars: 5,
        initials: "LF",
        text: "Ho acquistato il tavolo terefa e non potrei essere più soddisfatto. I tempi di consegna e montaggio sono stati rispettati alla perfezione. Tornerò sicuramente.",
      },
    ],

    // Contact
    contact_label: "Contattaci",
    contact_title: "Progettiamo insieme il tuo spazio",
    contact_subtitle:
      "Compila il modulo e ti ricontatteremo entro 24 ore per una consulenza gratuita.",
    contact_name: "Nome e cognome",
    contact_name_ph: "Mario Rossi",
    contact_email_lbl: "Email",
    contact_email_ph: "mario@esempio.it",
    contact_phone_lbl: "Telefono",
    contact_phone_ph: PHONE_FISSO,
    contact_message_lbl: "Il tuo messaggio",
    contact_message_ph: "Descrivi il tuo progetto o cosa stai cercando...",
    contact_send: "Invia messaggio",
    contact_ok_title: "Messaggio inviato!",
    contact_ok_body:
      "Ti risponderemo entro 24 ore. Nel frattempo visita il nostro showroom.",
    contact_ok_btn: "Invia un altro messaggio",
    contact_sending: "Invio in corso...",
    contact_error: "Invio fallito. Riprova o contattaci direttamente per email.",
    contact_visit: "Vieni a trovarci",
    contact_info: [
      {
        icon: "📍",
        label: "Indirizzo",
        value: "Via Federico Meninni 275, Gravina in Puglia (BA)",
      },
      { icon: "📞", label: "Telefono Fisso", value: PHONE_FISSO },
      { icon: "📱", label: "Cellulare", value: PHONE_MOBILE },
      { icon: "✉️", label: "Email", value: EMAIL },
      {
        icon: "🕐",
        label: "Orari",
        value: "Lun–Sab 9:00–19:00 · Dom 10:00–17:00",
      },
    ],

    // Location
    location_label: "Showroom",
    location_title: "Dove siamo",
    location_phone: PHONE_FISSO,
    location_email: EMAIL,
    location_hours_title: "Orari di apertura",
    location_hours: [
      { days: "Lunedì – Venerdì", time: "9:00 – 19:00" },
      { days: "Sabato", time: "9:00 – 19:00" },
      { days: "Domenica", time: "10:00 – 17:00" },
    ],
    location_list: [
      {
        id: "gravina",
        name: "Showroom",
        street: "Via Federico Meninni 275",
        city: "Gravina in Puglia (BA)",
      },
      {
        id: "matera",
        name: "Esposizione",
        street: "Via Gravina 15",
        city: "Matera (MT)",
      },
    ],
    location_pin: "Showroom · Gravina in Puglia e Matera",
    location_map_btn: "Visualizza mappa di",

    // Cookie banner
    cookie_text: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il traffico del sito.",
    cookie_policy: "Cookie Policy",
    cookie_accept: "Accetta",
    cookie_decline: "Rifiuta",

    // Footer
    footer_tagline:
      "Arredamento artigianale di qualità.\nTrasformiamo ogni spazio in un luogo unico dal 1987.",
    footer_hours_title: "Orari di apertura",
    footer_hours: [
      { days: "Lun – Ven", time: "9:00 – 19:00" },
      { days: "Sabato", time: "9:00 – 19:00" },
      { days: "Domenica", time: "10:00 – 17:00" },
    ],
    footer_hours_note: "Via Federico Meninni 275 · Gravina in Puglia",
    footer_cols: [
      {
        title: "Azienda",
        links: [
          "Chi siamo",
          "La nostra storia",
          "Lavora con noi",
          "Sostenibilità",
        ],
      },
      {
        title: "Collezioni",
        links: ["Soggiorno", "Camera da Letto", "Cucina", "Ufficio"],
      },
      {
        title: "Servizi",
        links: [
          "Progettazione gratuita",
          "Consegna e montaggio",
          "Assistenza post-vendita",
          "Finanziamento",
        ],
      },
    ],
    footer_privacy: "Privacy Policy",
    footer_cookie: "Cookie Policy",
    footer_terms: "Termini di servizio",

    // CategoryPage
    cat_home: "Home",
    cat_filters: "Filtri",
    cat_products_count: (n) => `${n} prodotti`,
    cat_visit: "Vieni a trovarci",
    cat_info: [
      {
        icon: "🕐",
        label: "Orari",
        value: "Lun–Sab 9:00–19:00 · Dom 10:00–17:00",
      },
      {
        icon: "📍",
        label: "Indirizzo",
        value: "Via Federico Meninni 275, Gravina in Puglia (BA)",
      },
      { icon: "📞", label: "Telefono", value: PHONE_FISSO },
      { icon: "✉️", label: "Email", value: EMAIL },
    ],
    cat_discover: "Scopri",
    cat_gallery_hint: "Vedi galleria",

    // ProductModal
    modal_close: "Chiudi",
    modal_prev: "Immagine precedente",
    modal_next: "Immagine successiva",
    modal_photo: "foto",
  },

  en: {
    // Navbar
    nav_collections: "Collections",
    nav_products: "Products",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_location: "Location",
    nav_quote: "Request a quote",

    // Hero
    hero_logo_alt: "Arredare Ambienti",
    hero_eyebrow: "— Quality furniture since 1987",
    hero_title: "Furnish your space with style",
    hero_title_em: "style",
    hero_subtitle:
      "Handcrafted furniture and contemporary design to transform every room into a place that tells your story.",
    hero_cta1: "Explore collections",
    hero_cta2: "Get a quote",
    hero_badge: "happy customers",

    // Products
    products_label: "Featured products",
    products_title: "Our most beloved pieces",
    products_subtitle:
      "Artisan quality and contemporary design in every piece of our selection.",
    products_filters: ["All", "Living Room", "Bedroom", "Office"],
    products_filter_keys: ["Tutti", "Soggiorno", "Camera da Letto", "Ufficio"],
    products_badge_sale: "Sale",
    products_badge_new: "New",
    products_add: "Add to quote",
    products_cta: "View full catalog",

    // About
    about_label: "About us",
    about_title: "Craftsmanship and design from the heart of Italy",
    about_subtitle:
      "Since 1987 we have transformed fine woods and quality materials into unique pieces that live in the homes of thousands of Italian families.",
    about_body:
      "Arredare Ambienti was born from a passion for beauty and durability. Every piece of furniture we produce carries hours of artisan work, meticulous material selection, and attention to every detail. We don't just sell furniture — we help you build your ideal space.",
    about_cta: "Our story",
    about_stats: [
      { value: "35+", label: "years of experience" },
      { value: "10k+", label: "satisfied customers" },
      { value: "500+", label: "products in catalog" },
      { value: "50+", label: "partner craftsmen" },
    ],

    // Testimonials
    test_label: "Reviews",
    test_title: "What our customers say",
    test_subtitle:
      "Thousands of families have trusted us. Here are some of their experiences.",
    test_reviews: [
      {
        id: 1,
        name: "Marco Rossi",
        city: "Milan",
        stars: 5,
        initials: "MR",
        text: "Exceptional quality and impeccable service. I furnished my entire apartment with Arredare Ambienti and was amazed by the attention to detail. I recommend it to anyone who wants the best.",
      },
      {
        id: 2,
        name: "Giulia Bianchi",
        city: "Rome",
        stars: 5,
        initials: "GB",
        text: "Finally a store that combines aesthetics and functionality. The prices are absolutely fair for the quality you receive. The Modena sofa is simply perfect.",
      },
      {
        id: 3,
        name: "Luca Ferrari",
        city: "Turin",
        stars: 5,
        initials: "LF",
        text: "I bought the terefa table and could not be happier. Delivery and assembly were handled perfectly on time. I will definitely be back.",
      },
    ],

    // Contact
    contact_label: "Contact us",
    contact_title: "Let's design your space together",
    contact_subtitle:
      "Fill out the form and we will get back to you within 24 hours for a free consultation.",
    contact_name: "Full name",
    contact_name_ph: "John Smith",
    contact_email_lbl: "Email",
    contact_email_ph: "john@example.com",
    contact_phone_lbl: "Phone",
    contact_phone_ph: PHONE_FISSO,
    contact_message_lbl: "Your message",
    contact_message_ph: "Describe your project or what you are looking for...",
    contact_send: "Send message",
    contact_ok_title: "Message sent!",
    contact_ok_body:
      "We will reply within 24 hours. In the meantime, visit our showroom.",
    contact_ok_btn: "Send another message",
    contact_sending: "Sending...",
    contact_error: "Failed to send. Please try again or contact us directly by email.",
    contact_visit: "Visit us",
    contact_info: [
      {
        icon: "📍",
        label: "Address",
        value: "Via Federico Meninni 275, Gravina in Puglia (BA)",
      },
      { icon: "📞", label: "Landline", value: PHONE_FISSO },
      { icon: "📱", label: "Mobile", value: PHONE_MOBILE },
      { icon: "✉️", label: "Email", value: EMAIL },
      {
        icon: "🕐",
        label: "Hours",
        value: "Mon–Sat 9:00–19:00 · Sun 10:00–17:00",
      },
    ],

    // Location
    location_label: "Showroom",
    location_title: "Location",
    location_phone: PHONE_FISSO,
    location_email: EMAIL,
    location_hours_title: "Opening hours",
    location_hours: [
      { days: "Monday – Friday", time: "9:00 – 19:00" },
      { days: "Saturday", time: "9:00 – 19:00" },
      { days: "Sunday", time: "10:00 – 17:00" },
    ],
    location_list: [
      {
        id: "gravina",
        name: "Showroom",
        street: "Via Federico Meninni 275",
        city: "Gravina in Puglia (BA)",
      },
      {
        id: "matera",
        name: "Exhibition",
        street: "Via Gravina 15",
        city: "Matera (MT)",
      },
    ],
    location_pin: "Showroom · Gravina in Puglia & Matera",
    location_map_btn: "View map of",

    // Cookie banner
    cookie_text: "We use cookies to improve your browsing experience and analyze site traffic.",
    cookie_policy: "Cookie Policy",
    cookie_accept: "Accept",
    cookie_decline: "Decline",

    // Footer
    footer_tagline:
      "Quality handcrafted furniture.\nTransforming every space into a unique place since 1987.",
    footer_hours_title: "Opening hours",
    footer_hours: [
      { days: "Mon – Fri", time: "9:00 – 19:00" },
      { days: "Saturday", time: "9:00 – 19:00" },
      { days: "Sunday", time: "10:00 – 17:00" },
    ],
    footer_hours_note: "Via Federico Meninni 275 · Gravina in Puglia",
    footer_cols: [
      {
        title: "Company",
        links: ["About us", "Our story", "Work with us", "Sustainability"],
      },
      {
        title: "Collections",
        links: ["Living Room", "Bedroom", "Kitchen", "Office"],
      },
      {
        title: "Services",
        links: [
          "Free design",
          "Delivery & assembly",
          "After-sales support",
          "Financing",
        ],
      },
    ],
    footer_privacy: "Privacy Policy",
    footer_cookie: "Cookie Policy",
    footer_terms: "Terms of Service",

    // CategoryPage
    cat_home: "Home",
    cat_filters: "Filters",
    cat_products_count: (n) => `${n} products`,
    cat_visit: "Visit us",
    cat_info: [
      {
        icon: "🕐",
        label: "Hours",
        value: "Mon–Sat 9:00–19:00 · Sun 10:00–17:00",
      },
      {
        icon: "📍",
        label: "Address",
        value: "Via Federico Meninni 275, Gravina in Puglia (BA)",
      },
      { icon: "📞", label: "Phone", value: PHONE_FISSO },
      { icon: "✉️", label: "Email", value: EMAIL },
    ],
    cat_discover: "Explore",
    cat_gallery_hint: "View gallery",

    // ProductModal
    modal_close: "Close",
    modal_prev: "Previous image",
    modal_next: "Next image",
    modal_photo: "photo",
  },
};
