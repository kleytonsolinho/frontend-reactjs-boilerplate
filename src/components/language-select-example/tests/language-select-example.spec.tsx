import { LanguageSelectExample } from '@/components/language-select-example'
import { ToggleGroup } from '@/components/ui/toggle-group'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { LanguageSelectItemExample } from '../language-select-item-example'

describe('LanguageSelectExample Component', () => {
	afterEach(() => {
		cleanup()
	})

	it('should renders language options correctly', () => {
		const { queryAllByTestId } = render(
			<BrowserRouter>
				<LanguageSelectExample />
			</BrowserRouter>
		)
		const buttons = queryAllByTestId(/language-select-/i)

		expect(buttons).toHaveLength(3)
	})

	it('should calls changeLanguage when a language is selected', async () => {
		const handleLanguageChange = vi.fn()
		const { queryByTestId } = render(
			<ToggleGroup type="single" defaultValue="pt">
				<LanguageSelectItemExample
					value="en"
					label="English"
					flag="AmericanFlag"
					handleLanguageChange={() => handleLanguageChange('en')}
				/>
			</ToggleGroup>
		)

		const button = queryByTestId('language-select-en')
		expect(button).toBeInTheDocument()

		fireEvent.click(button!)

		expect(handleLanguageChange).toHaveBeenCalledTimes(1)
		expect(handleLanguageChange).toHaveBeenCalledWith('en')
	})
})
