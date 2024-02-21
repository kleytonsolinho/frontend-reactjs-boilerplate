import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: process.env.NODE_ENV === 'development',
		fallbackLng: 'pt',
		lng: 'pt',
		resources: {
			pt: {
				translation: {
					hello: 'Olá mundo!',
					readDocs:
						'Leia a documentação do boilerplate para mais informações clicando',
				},
			},
			en: {
				translation: {
					hello: 'Hello World!',
					readDocs: 'Read the boilerplate documentation for more information',
				},
			},
			es: {
				translation: {
					hello: '¡Hola, mundo!',
					readDocs:
						'Lea la documentación del boilerplate para obtener más información',
				},
			},
		},
	})
