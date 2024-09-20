import { LanguageSelectExample } from '@/components/language-select-example'
import { ToggleGroup } from '@/components/ui/toggle-group'
import { cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { LanguageSelectItemExample } from '../language-select-item-example'
import { renderWithProviders } from '@/test/config'

describe('LanguageSelectExample Component', () => {
	afterEach(() => {
		cleanup()
	})

	it('should renders language options correctly', () => {
		const { queryAllByTestId } = renderWithProviders(<LanguageSelectExample />)
		const buttons = queryAllByTestId(/language-select-/i)

		expect(buttons).toHaveLength(3)
	})

	it('should calls changeLanguage when a language is selected', async () => {
		const handleLanguageChange = vi.fn()
		const setSearchParams = vi.fn()

		const { queryByTestId } = renderWithProviders(
			<ToggleGroup type="single" defaultValue="pt">
				<LanguageSelectItemExample
					value="en"
					label="English"
					flag="AmericanFlag"
					handleLanguageChange={() => {
						handleLanguageChange('en')
						setSearchParams({ languageSelected: 'en' })
					}}
				/>
			</ToggleGroup>
		)

		const button = queryByTestId('language-select-en')
		expect(button).toBeInTheDocument()

		fireEvent.click(button!)

		expect(handleLanguageChange).toHaveBeenCalledTimes(1)
		expect(handleLanguageChange).toHaveBeenCalledWith('en')
		expect(setSearchParams).toHaveBeenCalledTimes(1)
		expect(setSearchParams).toHaveBeenCalledWith({ languageSelected: 'en' })
	})
})
