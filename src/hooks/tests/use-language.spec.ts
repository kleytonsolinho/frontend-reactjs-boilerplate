import { act, renderHook } from '@testing-library/react-hooks'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { beforeAll, describe, expect, it } from 'vitest'
import { useLanguage } from '../use-language'

describe('useLanguage Hook', () => {
	beforeAll(async () => {
		await i18next.use(initReactI18next).init({
			lng: 'pt',
			resources: {
				pt: {
					translation: {
						// Suas traduções aqui...
					},
				},
				en: {
					translation: {
						// Suas traduções aqui...
					},
				},
			},
		})
	})

	it('should render correctly hook with language default', async () => {
		const { result, waitFor } = renderHook(() => useLanguage())

		await waitFor(() => {
			expect(result.current.currentLanguage).toBe('pt')
		})
	})

	it('should change language to english', async () => {
		const { result, waitFor } = renderHook(() => useLanguage())

		act(() => {
			result.current.changeLanguage('en')
		})

		await waitFor(() => {
			expect(result.current.currentLanguage).toBe('en')
		})
	})
})
