import { describe, expect, it } from 'vitest'
import { InMemoryCookieClient } from '../gateways/cookie/in-memory/in-memory-cookie-client'

type SutTypes = {
	sut: InMemoryCookieClient
}

const makeSut = (): SutTypes => {
	const sut = new InMemoryCookieClient()
	return {
		sut,
	}
}

describe('CookieClient Gateway', () => {
	it('should set a cookie', () => {
		const { sut } = makeSut()

		sut.set('any_key', 'any_value')
		expect(sut.get('any_key')).toBe('any_value')
	})

	it('should get a cookie', () => {
		const { sut } = makeSut()

		sut.set('any_key', 'any_value')
		sut.set('any_key2', 'any_value2')

		expect(sut.get('any_key2')).toBe('any_value2')
	})

	it('should destroy a cookie', () => {
		const { sut } = makeSut()

		sut.set('any_key', 'any_value')
		sut.destroy('any_key')

		expect(sut.get('any_key')).toBeUndefined()
	})

	it('should set multiple cookies', () => {
		const { sut } = makeSut()

		for (let i = 0; i < 10; i++) {
			sut.set(`any_key_${i}`, `any_value_${i}`)
		}

		for (let i = 0; i < 10; i++) {
			expect(sut.get(`any_key_${i}`)).toBe(`any_value_${i}`)
		}
	})
})
