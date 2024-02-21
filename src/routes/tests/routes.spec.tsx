import { render, screen } from '@testing-library/react'

import { routes } from '@/shared/routes'
import { BrowserRouter } from 'react-router-dom'
import { beforeAll, describe, expect, it } from 'vitest'
import { AppRoutes } from '../routes'

beforeAll(async () => {
	render(
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
})

describe('App Routes', () => {
	it('should render element on HOME route', async () => {
		window.history.pushState({}, 'Home page', routes.HOME)

		const button = screen.queryByText('count is 0')
		expect(button).toBeInTheDocument()
	})
})
