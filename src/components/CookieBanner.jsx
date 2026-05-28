import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { EVENT_OPEN, getConsent, setConsent } from '../utils/cookieConsent'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const t = useT()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
    const open = () => setVisible(true)
    window.addEventListener(EVENT_OPEN, open)
    return () => window.removeEventListener(EVENT_OPEN, open)
  }, [])

  const accept  = () => { setConsent('accepted'); setVisible(false) }
  const decline = () => { setConsent('declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div className={styles.banner} role="region" aria-label="Cookie consent">
      <button
        type="button"
        className={styles.close}
        onClick={decline}
        aria-label={t('cookie_close_aria')}
        title={t('cookie_close_aria')}
      >
        ✕
      </button>
      <p className={styles.text}>
        {t('cookie_text')}{' '}
        <Link to="/cookie-policy" className={styles.link}>
          {t('cookie_policy')}
        </Link>
      </p>
      <div className={styles.actions}>
        <button className={styles.btnDecline} onClick={decline}>
          {t('cookie_decline')}
        </button>
        <button className={styles.btnAccept} onClick={accept}>
          {t('cookie_accept')}
        </button>
      </div>
    </div>
  )
}
