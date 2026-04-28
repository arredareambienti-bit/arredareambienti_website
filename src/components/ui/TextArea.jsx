import styles from './TextArea.module.css'

export default function TextArea({
  label,
  id,
  placeholder,
  required,
  rows = 5,
  value,
  onChange,
}) {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={styles.textarea}
      />
    </div>
  )
}
