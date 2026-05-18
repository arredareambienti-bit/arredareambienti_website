import { useState } from "react";
import useInView from "../hooks/useInView";
import { useT } from "../i18n/useT";
import { LOCATIONS } from "../data/locations";
import styles from "./Location.module.css";

export default function Location() {
  const [ref, inView] = useInView();
  const [selectedLocation, setSelectedLocation] = useState("gravina");
  const t = useT();
  const translatedList = Array.isArray(t("location_list")) ? t("location_list") : [];
  const locations = translatedList.map((loc) => ({
    ...LOCATIONS.find((l) => l.id === loc.id),
    ...loc,
  }));
  const currentLocation =
    locations.find((loc) => loc.id === selectedLocation) || locations[0];

  return (
    <section
      id="dove-siamo"
      className={[styles.section, inView && styles.visible]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      <div className={styles.layout}>
        {/* ── Pannello info ─────────────────────────── */}
        <div className={styles.info}>
          <h2 className={styles.title}>{t("location_title")}</h2>

          {/* ── Lista Indirizzi ─────────────────────── */}
          <div className={styles.locationsList}>
            {locations.map((loc) => (
              <div key={loc.id} className={styles.locationCard}>
                <div className={styles.locationHeader}>
                  <div className={styles.locationNameBlock}>
                    <svg
                      className={styles.markerIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" fill="white" />
                    </svg>
                    <div>
                      <p className={styles.locationName}>{loc.name}</p>
                      <p className={styles.locationCity}>{loc.city}</p>
                    </div>
                  </div>
                  <button
                    className={[
                      styles.mapButton,
                      selectedLocation === loc.id && styles.mapButtonActive,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setSelectedLocation(loc.id)}
                    aria-label={`${t("location_map_btn")} ${loc.name}`}
                    title={`${t("location_map_btn")} ${loc.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                      <polyline points="8 2 8 18" />
                      <polyline points="16 6 16 22" />
                    </svg>
                  </button>
                </div>
                <p className={styles.locationStreet}>{loc.street}</p>
              </div>
            ))}
          </div>

          {/* ── Contatti generali ─────────────────────── */}
          <div className={styles.contactRow}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <a
              href={`tel:${t("location_phone").replace(/\s/g, "")}`}
              className={styles.contactLink}
            >
              {t("location_phone")}
            </a>
          </div>

          <div className={styles.contactRow}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            <a
              href={`mailto:${t("location_email")}`}
              className={styles.contactLink}
            >
              {t("location_email")}
            </a>
          </div>

          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>{t("location_hours_title")}</h3>
            <ul className={styles.hoursList}>
              {t("location_hours").map((h) => (
                <li key={h.days} className={styles.hoursRow}>
                  <span className={styles.hoursDays}>{h.days}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Mappa ─────────────────────────────────── */}
        <div className={styles.mapWrap}>
          <iframe
            src={currentLocation.mapEmbedUrl}
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
