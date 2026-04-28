import useInView from '../hooks/useInView'
import styles from './WhereWeAre.module.css'

const HOURS = [
  { days: 'Lunedì – Venerdì', time: '9:00 – 19:00' },
  { days: 'Sabato',           time: '9:00 – 19:00' },
  { days: 'Domenica',         time: '10:00 – 17:00' },
]

export default function WhereWeAre() {
  const [ref, inView] = useInView()

  return (
    <section
      id="dove-siamo"
      className={[styles.section, inView && styles.visible].filter(Boolean).join(' ')}
      ref={ref}
    >
      <div className={styles.layout}>

        {/* ── Pannello info ─────────────────────────── */}
        <div className={styles.info}>
          <span className={styles.label}>Showroom</span>
          <h2 className={styles.title}>Dove siamo</h2>

          <div className={styles.addressBlock}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11Z"/>
              <circle cx="12" cy="10" r="2.5"/>
            </svg>
            <div>
              <p className={styles.street}>Via del Mobile 24</p>
              <p className={styles.city}>40100 Bologna (BO)</p>
            </div>
          </div>

          <div className={styles.contactRow}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
            </svg>
            <a href="tel:+390511234567" className={styles.contactLink}>+39 051 123 4567</a>
          </div>

          <div className={styles.contactRow}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
            <a href="mailto:info@casaforma.it" className={styles.contactLink}>info@casaforma.it</a>
          </div>

          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>Orari di apertura</h3>
            <ul className={styles.hoursList}>
              {HOURS.map(h => (
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
            src="https://www.openstreetmap.org/export/embed.html?bbox=11.3300%2C44.4880%2C11.3620%2C44.5020&layer=mapnik&marker=44.4952%2C11.3426"
            loading="lazy"
          />
          <div className={styles.mapPin}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
            </svg>
            <span>Showroom · Bologna</span>
          </div>
        </div>

      </div>
    </section>
  )
}
