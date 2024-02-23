import { CountExample } from '@/components/count-example'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

const fn = vi.fn()

describe('Count Component Example', () => {
	beforeAll(async () => {
		render(<CountExample count={0} handleClick={fn} />)
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

		expect(fn).toHaveBeenCalledTimes(3)
	})
})
