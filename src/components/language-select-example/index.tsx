import BrazilianFlag from '@/assets/svg/flags/br-flag.svg'
import SpanishFlag from '@/assets/svg/flags/es-flag.svg'
import AmericanFlag from '@/assets/svg/flags/us-flag.svg'
import { ToggleGroup } from '@/components/ui/toggle-group'
import { LanguageType, useLanguage } from '@/hooks/use-language'
import { LanguageSelectItemExample } from './language-select-item-example'

type LanguageTypes = {
	value: LanguageType
	label: string
	flag: string
}

const languages: LanguageTypes[] = [
	{
		value: 'pt',
		label: 'Português',
		flag: BrazilianFlag,
	},
	{
		value: 'en',
		label: 'English',
		flag: AmericanFlag,
	},
	{
		value: 'es',
		label: 'Español',
		flag: SpanishFlag,
	},
]

export function LanguageSelectExample() {
	const { currentLanguage, changeLanguage } = useLanguage()

	return (
		<ToggleGroup type="single" defaultValue={currentLanguage}>
			{languages?.map((language) => (
				<LanguageSelectItemExample
					key={language.value}
					value={language.value}
					label={language.label}
					flag={language.flag}
					handleLanguageChange={() => changeLanguage(language.value)}
				/>
			))}
		</ToggleGroup>
	)
}
