import { useT } from '../i18n/useT'
import SectionHeader from './ui/SectionHeader'
import useInView from '../hooks/useInView'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [ref, inView] = useInView()
  const t = useT()
  const reviews = t('test_reviews')

  return (
    <section
      className={[styles.section, inView && styles.visible].filter(Boolean).join(' ')}
      ref={ref}
    >
      <div className="container">
        <SectionHeader
          label={t('test_label')}
          title={t('test_title')}
          subtitle={t('test_subtitle')}
          align="center"
        />

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div
              key={r.id}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.stars}>{'★'.repeat(r.stars)}</div>
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.city}>{r.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
