import { describe, expect, it } from 'vitest'
import { routes } from '../routes'

describe('Routes', () => {
	it('should have a HOME route', () => {
		expect(routes).toHaveProperty('HOME')
		expect(routes.HOME).toBe('/')
	})
})
