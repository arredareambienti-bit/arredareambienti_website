import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  onClick,
  className = '',
}) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')

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
      className={cls}
    >
      {children}
    </button>
  )
}
