import styles from './TextField.module.css'

export default function TextField({
  label,
  id,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
  error,
}) {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={[styles.input, error && styles.inputError].filter(Boolean).join(' ')}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  )
}
