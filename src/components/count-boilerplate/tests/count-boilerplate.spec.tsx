import { CountBoilerplate } from '@/components/count-boilerplate'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it } from 'vitest'

describe('Template Boilerplate', () => {
	beforeAll(async () => {
		render(<CountBoilerplate />)
	})

	it('should render initial state', async () => {
		const button = screen.queryByText('count is 0')

		expect(button).not.toBeNull()
		expect(button?.innerHTML).toBe('count is 0')
	})

	it('should increases counter on button click', async () => {
		const user = userEvent.setup()
		const button = screen.queryByText('count is 0')

		expect(button).not.toBeNull()

		await user.click(button as HTMLElement)
		await user.click(button as HTMLElement)
		await user.click(button as HTMLElement)

		expect(button?.innerHTML).toBe('count is 3')
	})
})
