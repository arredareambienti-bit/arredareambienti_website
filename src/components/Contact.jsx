import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useT } from '../i18n/useT'
import SectionHeader from './ui/SectionHeader'
import TextField from './ui/TextField'
import TextArea from './ui/TextArea'
import Button from './ui/Button'
import useInView from '../hooks/useInView'
import styles from './Contact.module.css'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const t = useT()

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.nome,
          from_email: form.email,
          phone:      form.telefono,
          message:    form.messaggio,
        },
        PUBLIC_KEY
      )
      setSent(true)
    } catch {
      setError(t('contact_error'))
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contatti"
      className={[styles.section, inView && styles.visible].filter(Boolean).join(' ')}
      ref={ref}
    >
      <div className="container">
        <div className={styles.formWrap}>
          <SectionHeader
            label={t('contact_label')}
            title={t('contact_title')}
            subtitle={t('contact_subtitle')}
          />

          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <h3>{t('contact_ok_title')}</h3>
              <p>{t('contact_ok_body')}</p>
              <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                {t('contact_ok_btn')}
              </Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <TextField
                  id="nome"
                  label={t('contact_name')}
                  placeholder={t('contact_name_ph')}
                  required
                  value={form.nome}
                  onChange={set('nome')}
                />
                <TextField
                  id="email"
                  label={t('contact_email_lbl')}
                  type="email"
                  placeholder={t('contact_email_ph')}
                  required
                  value={form.email}
                  onChange={set('email')}
                />
              </div>
              <TextField
                id="telefono"
                label={t('contact_phone_lbl')}
                type="tel"
                placeholder={t('contact_phone_ph')}
                value={form.telefono}
                onChange={set('telefono')}
              />
              <TextArea
                id="messaggio"
                label={t('contact_message_lbl')}
                placeholder={t('contact_message_ph')}
                required
                rows={5}
                value={form.messaggio}
                onChange={set('messaggio')}
              />
              {error && <p className={styles.error}>{error}</p>}
              <Button type="submit" variant="primary" size="lg" disabled={sending}>
                {sending ? t('contact_sending') : t('contact_send')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
