import { routes } from '@/shared/routes'
import { beforeAll, describe, expect, it } from 'vitest'
import { AppRoutes } from '../routes'
import { renderWithProviders, screen } from '@/test/config'

beforeAll(async () => {
	renderWithProviders(<AppRoutes />)
})

describe('App Routes', () => {
	it('should render element on HOME route', async () => {
		window.history.pushState({}, 'Home page', routes.HOME)

		const button = screen.queryByText('count is 0')
		expect(button).toBeInTheDocument()
	})
})
