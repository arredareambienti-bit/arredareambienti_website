import { Link } from "react-router-dom";
import { useT } from "../i18n/useT";
import { getNavLinks } from "../config/navigation";
import { openCookieBanner } from "../utils/cookieConsent";
import styles from "./Footer.module.css";

/* ── Icons ─────────────────────────────────────────────────── */

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


function IconAward() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function IconScissors() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </svg>
  );
}


/* ── Footer ─────────────────────────────────────────────────── */

export default function Footer() {
  const t = useT();
  const hours = t("footer_hours");

  const NAV_LINKS = getNavLinks(t);

  // Chiavi stabili (non dipendono dal testo tradotto) → nessun unmount al cambio lingua
  const BADGES = [
    { key: "since", Icon: IconAward,    label: t("footer_badge_since"), desc: t("footer_badge_since_desc") },
    { key: "craft", Icon: IconScissors, label: t("footer_badge_craft"), desc: t("footer_badge_craft_desc") },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>

          {/* ── Brand ── */}
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoMain}>Arredare</span>
              <span className={styles.logoAccent}>Ambienti</span>
            </a>
            <p className={styles.tagline}>{t("footer_tagline")}</p>
          </div>

          {/* ── Orari ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_hours_title")}</h4>
            <ul className={styles.hoursList}>
              {hours.map((h) => (
                <li key={h.days} className={styles.hoursRow}>
                  <span className={styles.hoursDays}>{h.days}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Navigazione ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_nav_title")}</h4>
            <ul className={styles.colList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.colLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Social ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_social_title")}</h4>
            <ul className={styles.colList}>
              <li>
                <a
                  href="https://www.instagram.com/arredare_ambienti?igsh=ZGJiMG5wa294bWls&utm_source=qr"
                  target="_blank" rel="noopener noreferrer"
                  className={styles.socialColLink} aria-label="Instagram"
                >
                  <IconInstagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1CtRqcSno2/?mibextid=wwXIfr"
                  target="_blank" rel="noopener noreferrer"
                  className={styles.socialColLink} aria-label="Facebook"
                >
                  <IconFacebook />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ── Qualità ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_quality_title")}</h4>
            <ul className={styles.badgeList}>
              {BADGES.map(({ key, Icon, label, desc }) => (
                <li key={key} className={styles.badgeItem}>
                  <span className={styles.badgeIcon}><Icon /></span>
                  <div>
                    <span className={styles.badgeLabel}>{label}</span>
                    <span className={styles.badgeDesc}>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Arredare Ambienti S.r.l. — P.IVA
            01256620772 — Gravina in Puglia
          </span>
          <div className={styles.legal}>
            <Link to="/privacy-policy" className={styles.legalLink}>
              {t("footer_privacy")}
            </Link>
            <Link to="/cookie-policy" className={styles.legalLink}>
              {t("footer_cookie")}
            </Link>
            <button type="button" className={styles.legalLink} onClick={openCookieBanner}>
              {t("footer_manage_cookies")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
