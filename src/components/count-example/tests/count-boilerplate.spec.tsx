import { CountExample } from '@/components/count-example'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'

describe('Count Component Example', () => {
	beforeAll(async () => {
		render(<CountExample />)
	})

	it('should render initial state', async () => {
		const button = screen.queryByText('count is 0')

		expect(button).not.toBeNull()
		expect(button?.innerHTML).toBe('count is 0')
	})

	it('should increases counter on button click', async () => {
		const button = screen.queryByText('count is 0')

		expect(button).not.toBeNull()
		expect(button).toBeInTheDocument()

		fireEvent.click(button!)
		fireEvent.click(button!)
		fireEvent.click(button!)

		expect(button?.innerHTML).toBe('count is 3')
	})
})
