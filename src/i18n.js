import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import eu from './locales/eu.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es', // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    eu
  }
})

export default i18n
