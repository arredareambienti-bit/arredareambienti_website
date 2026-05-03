import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { useT } from "../i18n/useT";
import Button from "./ui/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = useT();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // On non-home pages the navbar always shows in "scrolled" (white) style
  const showScrolled = !isHome || scrolled;

  const NAV_LINKS = [
    { label: t("nav_collections"), href: "/#collezioni" },
    { label: t("nav_about"), href: "/#chi-siamo" },
    { label: t("nav_location"), href: "/#dove-siamo" },
    { label: t("nav_contact"), href: "/#contatti" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[styles.navbar, showScrolled && styles.scrolled]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMain}>Arredare</span>
          <span className={styles.logoAccent}>Ambienti</span>
        </Link>

        <nav
          className={[styles.nav, menuOpen && styles.navOpen]
            .filter(Boolean)
            .join(" ")}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant={showScrolled ? "primary" : "outlineLight"}
            size="sm"
            href="/#contatti"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav_quote")}
          </Button>

          {/* Selettore lingua */}
          <button
            className={styles.langToggle}
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            aria-label="Cambia lingua"
          >
            <span
              className={
                lang === "it" ? styles.langActive : styles.langInactive
              }
            >
              IT
            </span>
            <span className={styles.langSep}>|</span>
            <span
              className={
                lang === "en" ? styles.langActive : styles.langInactive
              }
            >
              EN
            </span>
          </button>
        </nav>

        <button
          className={[styles.menuBtn, menuOpen && styles.menuBtnOpen]
            .filter(Boolean)
            .join(" ")}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </div>
    </header>
  );
}
