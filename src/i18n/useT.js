import { useLang } from '../context/LangContext'
import { translations } from './translations'

export function useT() {
  const { lang } = useLang()
  return key => translations[lang]?.[key] ?? translations.it[key] ?? key
}
