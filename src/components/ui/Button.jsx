import styles from './Button.module.css'

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
  const cls = [styles.btn, styles[variant], styles[size], disabled && styles.disabled, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
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
