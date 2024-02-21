import { ToggleGroupItem } from '../ui/toggle-group'

type LanguageSelectItemExampleProps = {
	value: string
	label: string
	flag: string
	handleLanguageChange: (language: string) => void
}

export function LanguageSelectItemExample({
	value,
	label,
	flag,
	handleLanguageChange,
}: LanguageSelectItemExampleProps) {
	return (
		<ToggleGroupItem
			value={value}
			onClick={() => handleLanguageChange(value)}
			className="gap-2"
			data-cy={`language-select-${value}`}
			data-testid={`language-select-${value}`}
		>
			<img src={flag} alt={`${label} flag`} className="aspect-video h-4" />
			<span>{label}</span>
		</ToggleGroupItem>
	)
}
