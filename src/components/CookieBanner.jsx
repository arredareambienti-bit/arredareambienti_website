import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import styles from './CookieBanner.module.css'

const STORAGE_KEY = 'cookie_consent'

export default function CookieBanner() {
  const t = useT()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
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
