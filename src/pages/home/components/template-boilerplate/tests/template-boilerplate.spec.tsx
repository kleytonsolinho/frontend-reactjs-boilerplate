import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'
import { TemplateBoilerplate } from '..'

describe('Template Boilerplate', () => {
	beforeAll(async () => {
		render(<TemplateBoilerplate />)
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
