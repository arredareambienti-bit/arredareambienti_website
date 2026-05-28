/**
 * Definizione centralizzata dei link di navigazione principali.
 * Usata da Navbar e Footer per evitare duplicazioni.
 *
 * @param {Function} t - funzione di traduzione da useT()
 * @returns {{ label: string, href: string }[]}
 */
export function getNavLinks(t) {
  return [
    { label: t("nav_collections"), href: "/#collezioni" },
    { label: t("nav_about"),       href: "/#chi-siamo"  },
    { label: t("nav_location"),    href: "/#dove-siamo" },
    { label: t("nav_contact"),     href: "/#contatti"   },
  ];
}
