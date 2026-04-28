import useInView from '../hooks/useInView'
import { useT } from '../i18n/useT'
import styles from './Location.module.css'

export default function Location() {
  const [ref, inView] = useInView()
  const t = useT()

  return (
    <section
      id="dove-siamo"
      className={[styles.section, inView && styles.visible].filter(Boolean).join(' ')}
      ref={ref}
    >
      <div className={styles.layout}>

        {/* ── Pannello info ─────────────────────────── */}
        <div className={styles.info}>
          <h2 className={styles.title}>{t('location_title')}</h2>

          <div className={styles.addressBlock}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z"/>
              <circle cx="12" cy="10" r="2.5"/>
            </svg>
            <div>
              <p className={styles.street}>{t('location_street')}</p>
              <p className={styles.city}>{t('location_city')}</p>
            </div>
          </div>

          <div className={styles.contactRow}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
            </svg>
            <a href={`tel:${t('location_phone').replace(/\s/g, '')}`} className={styles.contactLink}>{t('location_phone')}</a>
          </div>

          <div className={styles.contactRow}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
            <a href={`mailto:${t('location_email')}`} className={styles.contactLink}>{t('location_email')}</a>
          </div>

          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>{t('location_hours_title')}</h3>
            <ul className={styles.hoursList}>
              {t('location_hours').map(h => (
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
            className={styles.map}
            title="CasaForma showroom Bologna"
            src={import.meta.env.VITE_MAP_EMBED_URL}
            loading="lazy"
          />
          <div className={styles.mapPin}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
            </svg>
            <span>{t('location_pin')}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
