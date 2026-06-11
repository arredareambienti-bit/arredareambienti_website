import { EMAIL, PHONE_FISSO, PHONE_LEO, PHONE_PAOLO } from "../data/contacts";

export const translations = {
  it: {
    // Navbar
    nav_collections: "Collezioni",
    nav_catalogue: "Catalogo",
    nav_about: "Chi Siamo",
    nav_contact: "Contatti",
    nav_location: "Dove siamo",
    nav_quote: "Richiedi preventivo",
    nav_lang_aria: "Cambia lingua",
    nav_menu_open: "Apri menu",
    nav_menu_close: "Chiudi menu",

    // Hero
    hero_logo_alt: "Arredare Ambienti",
    hero_eyebrow: "IL MEGLIO DELL'ARREDAMENTO ARTIGIANALE A GRAVINA IN PUGLIA",
    hero_title: "Design, funzionalità e ",
    hero_title_em: "materiali di pregio",
    hero_subtitle:
      "Trasforma la tua casa nel posto che hai sempre sognato. Vieni a scoprire la nostra collezione!",
    hero_cta1: "Scopri le collezioni",
    hero_cta2: "Richiedi un preventivo",

    // About
    about_label: "Chi siamo",
    about_title:
      '"Arredare è l’arte di disporre le cose belle in modo confortevole"',
    about_subtitle:
      "Siamo un punto di riferimento per l'arredamento a Gravina in Puglia: selezioniamo prodotti di qualità e affianchiamo i nostri clienti in ogni fase della scelta.",
    about_body:
      "In Arredare Ambienti crediamo che ogni ambiente racconti qualcosa di chi lo abita. Per questo non ci limitiamo a vendere mobili: ascoltiamo le esigenze di ogni cliente, proponiamo soluzioni su misura e curiamo ogni dettaglio dalla scelta dei materiali alla composizione finale. Il nostro showroom a Gravina in Puglia è aperto a chi vuole toccare con mano la qualità prima di decidere.",
    about_image_alt:
      "Interno arredato da Arredare Ambienti — showroom a Gravina in Puglia",

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
    contact_sending: "Invio in corso...",
    contact_error:
      "Invio fallito. Riprova o contattaci direttamente per email.",
    contact_email_invalid: "Inserisci un indirizzo email valido.",
    contact_phone_invalid: "Inserisci un numero valido (max 10 cifre).",
    contact_privacy_pre: "Ho letto la ",
    contact_privacy_link: "Privacy Policy",
    contact_privacy_post:
      " e acconsento al trattamento dei miei dati personali per rispondere alla richiesta.",
    contact_team_title: "Parla con noi",
    contact_team: [
      { name: "Paolo", role: "Designer", phone: PHONE_PAOLO },
      { name: "Leo", role: "Arredatore", phone: PHONE_LEO },
    ],

    // Location
    location_title: "Dove siamo",
    location_phone: PHONE_FISSO,
    location_email: EMAIL,
    location_hours_title: "Orari di apertura",
    location_hours: [
      { days: "Lun – Sab", time: "09:00 – 13:00,\n16:30 – 20:30" },
      { days: "Domenica", time: "Chiuso" },
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
    location_map_btn: "Visualizza mappa di",

    // Floating buttons
    wa_message: "Ciao! Vorrei avere maggiori informazioni.",
    wa_aria_label: "Contattaci su WhatsApp",
    to_top_aria: "Torna in cima",

    // Cookie banner
    cookie_text:
      "Questo sito utilizza cookie tecnici necessari al funzionamento. Nessuna profilazione né analisi del traffico.",
    cookie_policy: "Cookie Policy",
    cookie_accept: "Accetta tutto",
    cookie_decline: "Rifiuta tutto",
    cookie_close_aria: "Chiudi senza accettare (equivale a rifiuto)",

    // Footer
    footer_tagline:
      "Arredamento artigianale di qualità.\nTrasformiamo ogni spazio in un luogo da sogno.",
    footer_hours_title: "Orari di apertura",
    footer_hours: [
      { days: "Lun – Sab", time: "09:00 – 13:00\n16:30 – 20:30" },
      { days: "Domenica", time: "Chiuso" },
    ],
    footer_address: "Via Federico Meninni 275 · Gravina in Puglia",
    footer_nav_title: "Esplora",
    footer_social_title: "Seguici",
    footer_privacy: "Privacy Policy",
    footer_cookie: "Cookie Policy",
    footer_manage_cookies: "Gestisci cookie",

    // CategoryPage
    cat_home: "Home",
    cat_info: [
      {
        icon: "pin",
        value: "Via Federico Meninni 275, Gravina in Puglia (BA)",
      },
      { icon: "phone", value: PHONE_FISSO },
      { icon: "mail", value: EMAIL },
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
    nav_catalogue: "Catalogue",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_location: "Location",
    nav_quote: "Request a quote",
    nav_lang_aria: "Change language",
    nav_menu_open: "Open menu",
    nav_menu_close: "Close menu",

    // Hero
    hero_logo_alt: "Arredare Ambienti",
    hero_eyebrow: "THE BEST IN HANDCRAFTED FURNITURE IN GRAVINA IN PUGLIA",
    hero_title: "Design, functionality and ",
    hero_title_em: "premium materials",
    hero_subtitle:
      "Transform your home into the place you've always dreamed of. Come and discover our collection!",
    hero_cta1: "Explore collections",
    hero_cta2: "Get a quote",

    // About
    about_label: "About us",
    about_title:
      '"Furnishing is the art of arranging beautiful things in a comfortable way"',
    about_subtitle:
      "We are a furniture destination in Gravina in Puglia: we select quality products and guide our customers through every step of their choice.",
    about_body:
      "At Arredare Ambienti we believe every room tells something about the people who live in it. That's why we don't just sell furniture: we listen to each customer's needs, offer tailored solutions and take care of every detail — from material selection to the final composition. Our showroom in Gravina in Puglia is open to anyone who wants to see and touch the quality before deciding.",
    about_image_alt:
      "Interior by Arredare Ambienti — showroom in Gravina in Puglia",

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
    contact_sending: "Sending...",
    contact_error:
      "Failed to send. Please try again or contact us directly by email.",
    contact_email_invalid: "Please enter a valid email address.",
    contact_phone_invalid: "Please enter a valid phone number (max 10 digits).",
    contact_privacy_pre: "I have read the ",
    contact_privacy_link: "Privacy Policy",
    contact_privacy_post:
      " and consent to the processing of my personal data to handle this request.",
    contact_team_title: "Talk to us",
    contact_team: [
      { name: "Paolo", role: "Designer", phone: PHONE_PAOLO },
      { name: "Leo", role: "Interior designer", phone: PHONE_LEO },
    ],

    // Location
    location_title: "Location",
    location_phone: PHONE_FISSO,
    location_email: EMAIL,
    location_hours_title: "Opening hours",
    location_hours: [
      { days: "Mon – Sat", time: "09:00 – 13:00,\n16:30 – 20:30" },
      { days: "Sunday", time: "Closed" },
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
        name: "Showroom",
        street: "Via Gravina 15",
        city: "Matera (MT)",
      },
    ],
    location_map_btn: "View map of",

    // Floating buttons
    wa_message: "Hello! I would like more information.",
    wa_aria_label: "Contact us on WhatsApp",
    to_top_aria: "Back to top",

    // Cookie banner
    cookie_text:
      "This site uses technical cookies required for its operation. No profiling or traffic analytics.",
    cookie_policy: "Cookie Policy",
    cookie_accept: "Accept all",
    cookie_decline: "Reject all",
    cookie_close_aria: "Close without accepting (equivalent to reject)",

    // Footer
    footer_tagline:
      "Quality handcrafted furniture.\nTransforming every space into a dream place.",
    footer_hours_title: "Opening hours",
    footer_hours: [
      { days: "Mon – Sat", time: "09:00 – 13:00\n16:30 – 20:30" },
      { days: "Sunday", time: "Closed" },
    ],
    footer_address: "Via Federico Meninni 275 · Gravina in Puglia",
    footer_nav_title: "Explore",
    footer_social_title: "Follow us",
    footer_privacy: "Privacy Policy",
    footer_cookie: "Cookie Policy",
    footer_manage_cookies: "Manage cookies",

    // CategoryPage
    cat_home: "Home",
    cat_info: [
      {
        icon: "pin",
        value: "Via Federico Meninni 275, Gravina in Puglia (BA)",
      },
      { icon: "phone", value: PHONE_FISSO },
      { icon: "mail", value: EMAIL },
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
