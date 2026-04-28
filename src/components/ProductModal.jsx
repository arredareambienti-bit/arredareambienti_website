import { useState, useEffect, useCallback } from 'react'
import { useT } from '../i18n/useT'
import styles from './ProductModal.module.css'

function formatPrice(n) {
  return n.toLocaleString('it-IT')
}

export default function ProductModal({ product, onClose }) {
  const [current, setCurrent] = useState(0)
  const t = useT()
  const total = product.images.length

  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>

      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* ── Chiudi ─────────────────────────────── */}
        <button className={styles.closeBtn} onClick={onClose} aria-label={t('modal_close')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* ── Immagine + frecce ──────────────────── */}
        <div className={styles.imgArea}>
          <img
            key={current}
            src={product.images[current]}
            alt={`${product.name} – ${t('modal_photo')} ${current + 1}`}
            className={styles.img}
          />

          {total > 1 && (
            <>
              <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label={t('modal_prev')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label={t('modal_next')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </>
          )}

          <span className={styles.counter}>{current + 1} / {total}</span>
        </div>

        {/* ── Info prodotto ──────────────────────── */}
        <div className={styles.info}>
          <h2 className={styles.name}>{product.name}</h2>
          <span className={styles.price}>€ {formatPrice(product.price)}</span>

          {total > 1 && (
            <div className={styles.thumbs}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={[styles.thumb, i === current && styles.thumbActive].filter(Boolean).join(' ')}
                  onClick={() => setCurrent(i)}
                  aria-label={`${t('modal_photo')} ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
