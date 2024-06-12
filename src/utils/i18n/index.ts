import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBR from './pt-br.json'
import enUS from './en-us.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ptBR',
  resources: {
    ptBR,
    enUS,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
