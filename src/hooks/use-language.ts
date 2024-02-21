import { useTranslation } from 'react-i18next'

export type LanguageType = 'pt' | 'en' | 'es'

export function useLanguage() {
	const { i18n } = useTranslation()

	const currentLanguage = i18n.language

	const changeLanguage = (language: LanguageType) => {
		i18n.changeLanguage(language)
	}

	return {
		currentLanguage,
		changeLanguage,
	}
}
