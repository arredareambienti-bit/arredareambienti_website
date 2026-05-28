import { Link } from 'react-router-dom'
import styles from './Button.module.css'

/**
 * Bottone polimorfco:
 *  - href interno (inizia con / o #) → <Link> React Router (SPA, no reload)
 *  - href esterno (http/https)       → <a target="_blank">
 *  - nessun href                     → <button>
 *
 * La prop `disabled` blocca la navigazione anche quando è un link.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  onClick,
  disabled = false,
  className = '',
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#')

    const handleClick = (e) => {
      if (disabled) { e.preventDefault(); return }
      onClick?.(e)
    }

    if (isInternal) {
      return (
        <Link
          to={href}
          className={cls}
          onClick={handleClick}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : undefined}
        >
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className={cls}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
    >
      {children}
    </button>
  )
}
