import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/en-US.json'
import translationES from './es/es-ES.json'
import translationPT from './pt/pt-BR.json'

export const DEFAULT_LANGUAGE = 'pt'

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: process.env.NODE_ENV === 'development',
		fallbackLng: DEFAULT_LANGUAGE,
		lng: DEFAULT_LANGUAGE,
	})

i18next.addResourceBundle('pt', 'translation', translationPT['translation'])
i18next.addResourceBundle('en', 'translation', translationEN['translation'])
i18next.addResourceBundle('es', 'translation', translationES['translation'])

  export const i18n = i18next