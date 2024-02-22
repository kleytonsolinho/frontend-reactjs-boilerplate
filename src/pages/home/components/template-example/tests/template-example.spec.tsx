import { TemplateExample } from '@/pages/home/components/template-example'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { beforeAll, describe, expect, it } from 'vitest'

describe('Template Component Example', () => {
	beforeAll(async () => {
		render(
			<BrowserRouter>
				<TemplateExample />
			</BrowserRouter>
		)
	})

	it('should render header with text "BexUp Frontend Boilerplate"', async () => {
		const header = screen.getByRole('heading', { level: 1 })
		expect(header).toHaveTextContent('BexUp Frontend Boilerplate')
	})

	it('should render header with text "Vite + React"', async () => {
		const header = screen.getByRole('heading', { level: 2 })
		expect(header).toHaveTextContent('Vite + React')
	})

	it('should displays React logo with animation', async () => {
		const reactLogo = screen.getByAltText(/react logo/i)
		expect(reactLogo.classList).toContain('animate-spin')
	})
})
