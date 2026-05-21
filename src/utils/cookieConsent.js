import { useEffect, useState } from 'react'

export const STORAGE_KEY    = 'cookie_consent'
export const EVENT_CHANGED  = 'cookie-consent:changed'
export const EVENT_OPEN     = 'cookie-consent:open'
export const EXPIRY_MS      = 1000 * 60 * 60 * 24 * 180 // 6 mesi (Linee Guida Garante 2021)

function readStored() {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    if (!parsed?.value || !parsed?.ts) return null
    if (Date.now() - parsed.ts > EXPIRY_MS) return null
    return parsed.value
  } catch {
    // formato legacy (stringa nuda) → scaduto, forziamo nuovo consenso
    return null
  }
}

export function getConsent() {
  return readStored()
}

export function setConsent(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() }))
  window.dispatchEvent(new CustomEvent(EVENT_CHANGED, { detail: value }))
}

export function openCookieBanner() {
  window.dispatchEvent(new Event(EVENT_OPEN))
}

export function useConsent() {
  const [consent, setLocalConsent] = useState(() => getConsent())

  useEffect(() => {
    const onChange = e => setLocalConsent(e.detail ?? getConsent())
    window.addEventListener(EVENT_CHANGED, onChange)
    return () => window.removeEventListener(EVENT_CHANGED, onChange)
  }, [])

  return consent
}
