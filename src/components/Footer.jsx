import { Link } from "react-router-dom";
import { useT } from "../i18n/useT";
import styles from "./Footer.module.css";

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

export default function Footer() {
  const t = useT();
  const cols = t("footer_cols");
  const hours = t("footer_hours");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* ── Brand ─────────────────────────────── */}
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoMain}>Arredare</span>
              <span className={styles.logoAccent}>Ambienti</span>
            </a>
            <p className={styles.tagline}>
              {t("footer_tagline")
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
            </p>

            <div className={styles.social}>
              <a
                href="https://www.instagram.com/arredare_ambienti?igsh=ZGJiMG5wa294bWls&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/1CtRqcSno2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
            </div>
          </div>

          {/* ── Orari ─────────────────────────────── */}
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
            <p className={styles.hoursNote}>{t("footer_hours_note")}</p>
          </div>

          {/* ── Colonne link ──────────────────────── */}
          {cols.map((col) => (
            <div key={col.title} className={styles.col}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colList}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className={styles.colLink}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Arredare Ambienti S.r.l. — P.IVA
            01256620772 — Gravina in Puglia
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>
              {t("footer_privacy")}
            </a>
            <Link to="/cookie-policy" className={styles.legalLink}>
              {t("footer_cookie")}
            </Link>
            <a href="#" className={styles.legalLink}>
              {t("footer_terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
