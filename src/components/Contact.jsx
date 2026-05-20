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

const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
const isValidPhone = v => /^\d{6,10}$/.test(v.replace(/[\s\-+().]/g, ''))

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm]       = useState({ nome: '', email: '', telefono: '', messaggio: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [toast, setToast]     = useState(null) // { msg, type: 'success'|'error' }
  const t = useT()

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const showToast = (msg, type) => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 5000)
  }

  const emailErr = form.email    && !isValidEmail(form.email)    ? t('contact_email_invalid') : ''
  const phoneErr = form.telefono && !isValidPhone(form.telefono) ? t('contact_phone_invalid') : ''

  const canSubmit = form.email.trim() && form.telefono.trim() && form.messaggio.trim()
                 && !emailErr && !phoneErr

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.nome,
          email:   form.email,
          phone:   form.telefono,
          message: form.messaggio,
          title:   "Richiesta preventivo – Arredare Ambienti",
        },
        PUBLIC_KEY
      )
      setSent(true)
    } catch {
      showToast(t('contact_error'), 'error')
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

          <div className={styles.teamRow}>
            <p className={styles.teamTitle}>{t('contact_team_title')}</p>
            <div className={styles.teamCards}>
              {t('contact_team').map(member => (
                <a
                  key={member.name}
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className={styles.teamCard}
                >
                  <span className={styles.teamInitial}>{member.name[0]}</span>
                  <span className={styles.teamInfo}>
                    <span className={styles.teamName}>{member.name}</span>
                    <span className={styles.teamRole}>{member.role}</span>
                  </span>
                  <span className={styles.teamPhone}>{member.phone}</span>
                </a>
              ))}
            </div>
          </div>

          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <h3>{t('contact_ok_title')}</h3>
              <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                {t('contact_ok_btn')}
              </Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <TextField
                  id="nome"
                  label={t('contact_name')}
                  placeholder={t('contact_name_ph')}
                  value={form.nome}
                  onChange={set('nome')}
                />
                <TextField
                  id="email"
                  label={t('contact_email_lbl')}
                  type="email"
                  placeholder={t('contact_email_ph')}
                  value={form.email}
                  onChange={set('email')}
                  error={emailErr}
                />
              </div>
              <TextField
                id="telefono"
                label={t('contact_phone_lbl')}
                type="tel"
                placeholder={t('contact_phone_ph')}
                value={form.telefono}
                onChange={set('telefono')}
                error={phoneErr}
              />
              <TextArea
                id="messaggio"
                label={t('contact_message_lbl')}
                placeholder={t('contact_message_ph')}
                rows={5}
                value={form.messaggio}
                onChange={set('messaggio')}
              />
              <Button type="submit" variant="primary" size="lg" disabled={!canSubmit || sending}>
                {sending ? t('contact_sending') : t('contact_send')}
              </Button>
            </form>
          )}
        </div>
      </div>

      {toast && (
        <div className={[styles.toast, styles[`toast_${toast.type}`]].join(' ')} role="alert">
          <span className={styles.toastMsg}>{toast.msg}</span>
          <button className={styles.toastClose} onClick={() => setToast(null)} aria-label="Chiudi">✕</button>
        </div>
      )}
    </section>
  )
}
