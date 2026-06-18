import { Link } from "react-router-dom";
import { useT } from "../i18n/useT";
import { getNavLinks } from "../config/navigation";
import { openCookieBanner } from "../utils/cookieConsent";
import styles from "./Footer.module.css";

/* ── Icons ─────────────────────────────────────────────────── */

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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

/* ── Footer ─────────────────────────────────────────────────── */

export default function Footer() {
  const t = useT();
  const hours = t("footer_hours");

  const NAV_LINKS = getNavLinks(t);

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

          {/* ── Hours ── */}
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

          {/* ── Navigation ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_nav_title")}</h4>
            <ul className={styles.colList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.colLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Placeholder column ── */}
          <div className={styles.col}></div>

          {/* ── Social links ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_social_title")}</h4>

            <ul className={styles.badgeList}>
              <li className={styles.badgeItem}>
                <a
                  href="https://www.instagram.com/arredare_ambienti?igsh=ZGJiMG5wa294bWls&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialColLink}
                  aria-label="Instagram"
                >
                  <span className={styles.badgeIcon}>
                    <IconInstagram />
                  </span>
                  <div>
                    <span className={styles.badgeLabel}>Instagram</span>
                    <span className={styles.badgeDesc}>@arredare_ambienti</span>
                  </div>
                </a>
              </li>

              <li className={styles.badgeItem}>
                <a
                  href="https://www.facebook.com/share/1CtRqcSno2/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialColLink}
                  aria-label="Facebook"
                >
                  <span className={styles.badgeIcon}>
                    <IconFacebook />
                  </span>
                  <div>
                    <span className={styles.badgeLabel}>Facebook</span>
                    <span className={styles.badgeDesc}>Arredare Ambienti</span>
                  </div>
                </a>
              </li>
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
            <button
              type="button"
              className={styles.legalLink}
              onClick={openCookieBanner}
            >
              {t("footer_manage_cookies")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
